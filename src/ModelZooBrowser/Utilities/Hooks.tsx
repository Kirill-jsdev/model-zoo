import { useContext, useMemo } from 'react'
import { ModelOption, VariableWithColors } from "./Types"
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { getTreemapFromModels, getVariablePropertiesSum, mapVariablePropertiesToTerms, mapVariablePropertiesToTreemapNodes } from './helpers'
import { ForecastModel } from './FTypes'
import { DetectionModel } from './ADModelTypes'

export const useModelOptions = () => {

    const {model} = useContext(ModelZooBrowserContext)

    const detectionModel = model as DetectionModel
    const forecastModel = model as ForecastModel

    const models = forecastModel?.model?.modelZoo?.models ?? detectionModel?.model?.normalBehaviorModel?.models

    const options = useMemo<ModelOption[]>(() => {
        if (typeof models === 'undefined') return [];

        return models.map(({ index, dayTime }) => ({
          value: index,
          option: dayTime ? dayTime : `Index ${index}`,
        }));
      }, [models]);

    return options
}

export function useDetectionModelResult() {

    const { onSelectedModelTermsChange, onSelectedModelTreemapNodesChange, model, selectedModelIndex } = useContext(ModelZooBrowserContext)

    const detectionModel = model as DetectionModel
    const forecastModel = model as ForecastModel

    const variableProperties = detectionModel?.model?.normalBehaviorModel?.variableProperties ?? forecastModel?.model?.modelZoo?.variableProperties

    const models = useMemo(() => forecastModel?.model?.modelZoo?.models ?? detectionModel?.model?.normalBehaviorModel?.models ?? [], [detectionModel?.model?.normalBehaviorModel?.models, forecastModel?.model?.modelZoo?.models])
    const isDailyCycle = useMemo(() => models.some(({ dayTime }) => typeof dayTime === 'string'), [models])

    const variableImportancesModel = useMemo(() => {
        if (!variableProperties) return []
        return mapVariablePropertiesToTreemapNodes(variableProperties ?? [])
    }, [variableProperties])

    const variablesImportancesSum = useMemo(() => {
        return getVariablePropertiesSum(variableImportancesModel)
    }, [variableImportancesModel])

    const isUnRelatedModel = useMemo(() => {
        if (!models) return //Might be better to check the length of an array
        if (!variableProperties) return
        return variablesImportancesSum === 0
    }, [models, variableProperties, variablesImportancesSum])

    const selectedModelTreemapNodes = useMemo(() => {
        if (models.length === 0) return
        if (selectedModelIndex) return getTreemapFromModels(models, selectedModelIndex, true)
        if (isUnRelatedModel) return getTreemapFromModels(models, 0, true)
        return variableImportancesModel
    }, [models, isUnRelatedModel, selectedModelIndex, variableImportancesModel])

    const selectedModelTerms = useMemo(() => {
        if (models.length === 0) return
        if (selectedModelIndex) return models.find(({ index }) => index === selectedModelIndex)?.terms
        if (isUnRelatedModel) return models[0]?.terms
        return mapVariablePropertiesToTerms(variableProperties ?? [])
    }, [models, isUnRelatedModel, selectedModelIndex, variableProperties])

    onSelectedModelTermsChange(selectedModelTerms)
    onSelectedModelTreemapNodesChange(selectedModelTreemapNodes)

    return {
        models,
        isDailyCycle,
        variableImportancesModel,
        selectedModelTreemapNodes,
        selectedModelTerms,
        isUnRelatedModel,
    }
}

//useTarget

export const useTarget = () => {
    const {model, variablesWithColors} = useContext(ModelZooBrowserContext)
    const detectionModel = model as DetectionModel
    const targetColumn = detectionModel?.model?.settings?.data?.KPIColumn
     // eslint-disable-next-line
    const target = targetColumn ? variablesWithColors!.find((v: VariableWithColors) => v.name === targetColumn) : undefined
    return target
}

export interface TimePeriod {
    value: number
    timeUnit: string
    labelValue: string
    timePeriodISO8601: string
    multiplier: number
}

export const useConvertTimePeriodFromISO8601 = (model: DetectionModel | ForecastModel | undefined): TimePeriod | null => {

    if (!model) return null

    const detectionModel = model as DetectionModel
    const forecastModel = model as ForecastModel
    const timePeriodISO8601 = forecastModel?.model?.modelZoo?.samplingPeriod ?? detectionModel?.model?.normalBehaviorModel?.samplingPeriod

    const regex = /P(?:(\d+)D)?T?(\d+)?(\w+)/
    const matches = timePeriodISO8601.match(regex)

    if (matches) {
        let value = 0
        let timeUnit = ''
        if (matches[1]) {
            value += parseInt(matches[1])
            timeUnit = 'day';
        }
        if (matches[2]) {
            value += parseInt(matches[2])
            timeUnit = matches[3]
        }
        const timeUnitMapping: { [key: string]: string } = {
            H: 'hour',
            M: 'minute',
            S: 'second',
            D: 'day',
        }

        const multipliers: { [key: string]: number } = {
            H: 1,
            M: 60,
            S: 3600,
        }

        const labelValue = `${value} ${timeUnitMapping[timeUnit]}${value > 1 ? 's' : ''}`

        return {
            value,
            timeUnit: timeUnitMapping[timeUnit],
            labelValue,
            timePeriodISO8601,
            multiplier: multipliers[timeUnit] || 1
        }
    }

    return null // Invalid time period format
}


