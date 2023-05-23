import {useMemo, useEffect, useState} from 'react'
import { ModelVariableOffset } from '../../Utilities/helpers';
import { DatasetVersion } from '../../Utilities/VersionType';
import { VariableWithColors } from '../../Utilities/Types';
import { DetectionModel } from '../../ADModelTypes';
import { ForecastModel } from '../../Utilities/FTypes';

export type VariableOffsets = {
    variable: string
    usedOffsets?: { from: number; to: number }
}

// export type ModelVariableOffset = {
//     name: string
//     dataFrom: number
//     dataTo: number
// }

export function useSelectedModelOffsets(variablesWithColors: VariableWithColors[], selectedModelIndex: number, model: DetectionModel | ForecastModel): VariableOffsets[] {

    const ADmodel = model as DetectionModel
    const Fmodel = model as ForecastModel

    return useMemo(() => {
      const models = Fmodel?.model?.modelZoo?.models ?? ADmodel?.model?.normalBehaviorModel?.models ?? []
      const selectedModel = models.find(({ index }: {index: number}) => index === selectedModelIndex)
      if (!selectedModel) return []

      return variablesWithColors.reduce((acc: VariableOffsets[], { variable }) => {
        const offsets = selectedModel.variableOffsets.find(({ name }) => name === variable)
        const variableOffset = {
          variable,
          usedOffsets: offsets ? transformModelVariableOffset(offsets) : undefined,
        }

        return [...acc, variableOffset]
      }, [])
    }, [ADmodel, Fmodel, selectedModelIndex, variablesWithColors])
  }

  function transformModelVariableOffset({ dataFrom, dataTo }: ModelVariableOffset): VariableOffsets['usedOffsets'] {
    return { from: dataFrom, to: dataTo }
  }

export enum DataAvailabilityScale {
    SAMPLE = 1,
    SECONDS = 1000,
    MINUTES = 60_000,
    QUARTER_HOUR = 900_000,
    HOUR = 3_600_000,
    DAY = 86_400_000,
    WEEK = 604_800_000,
    MONTH = 2_592_000_000,
}

//the function for calculating originalSamplingPeriod

export const SECOND_MS = 1000
export const MINUTE_MS = 60 * SECOND_MS
export const HOUR_MS = 60 * MINUTE_MS
export const DAY_MS = 24 * HOUR_MS
export const WEEK_MS = 7 * DAY_MS
export const MONTH_MS = 30 * DAY_MS
export const YEAR_MS = 365 * DAY_MS

const PERIOD_NUMBER_MAP: Record<string, number> = {
    Y: YEAR_MS,
    M: MONTH_MS,
    W: WEEK_MS,
    D: DAY_MS,
}

const TIME_NUMBER_MAP: Record<string, number> = {
    H: HOUR_MS,
    M: MINUTE_MS,
    S: SECOND_MS,
}

function separateParts<T>(duration = '', map: Record<string, T>): [number, T][] {
    return (
      duration
        .match(/\d+[A-Z]/g)
        ?.map<[number, T]>((part) => [Number(part.slice(0, -1)), map[part.slice(-1)]])
        .filter(([value]) => !Number.isNaN(value)) ?? []
    )
}

function parse(duration: string, designatorMap: Record<string, number>) {
    return separateParts(duration, designatorMap).reduce<number>((prev, [value, factor]) => prev + value * factor, 0)
}

export function parseDuration(duration: string): number {
    const [period, time] = duration.slice(1).split('T')
    const parsedPeriodPart = parse(period, PERIOD_NUMBER_MAP)
    const parsedTimePart = parse(time, TIME_NUMBER_MAP)
    return parsedPeriodPart + parsedTimePart
}

export function useOriginalSamplingPeriod(datasetVersion?: DatasetVersion): number | undefined {
    const [samplingPeriod, setSamplingPeriod] = useState<number>()

    useEffect(() => {
        if (!datasetVersion) return setSamplingPeriod(undefined)
        setSamplingPeriod(parseDuration(datasetVersion.estimatedSamplingPeriod))
    }, [datasetVersion])

    return samplingPeriod
}

export type Entity = { id: string }
export type Status = 'Registered' | 'Running' | 'Finished' | 'FinishedWithWarning' | 'Failed' | 'Queued'


