import React, { useState, useMemo, useContext } from 'react'
import { color as coreColor } from '../../Utilities/color'
import { Scale } from './Scale'
import { DetermineScale } from './DetermineScale'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { useSelectedModelOffsets, VariableOffsets, DataAvailabilityScale, useOriginalSamplingPeriod } from './insights-hooks'
import { useDataAvailability } from './useDatasetAvailability-hook'
import { useTarget } from '../../Utilities/Hooks'
import { DetectionModel } from '../../ADModelTypes'
import { ForecastModel } from '../../FTypes'
import { TimePeriod, convertTimePeriodFromISO8601 } from '../DataDisplay/DataInfo/DataInfo'

export interface Mark {
  value: number;
  label?: React.ReactNode;
}

const MARK_STEP = 2
const MARK_MAX = 10
const AXIS_OFFSET = -8

function createMarks(max: number, step: number, axisOffset = 0): Mark[] {
  return Array.from(Array(11).keys())
    .map((_, index) => index * step - max + axisOffset)
    .map((value) => ({ value, label: `${value > 1 ? '+' : ''}${value}` }))
}

function getSliderConfiguration(hasGreaterThanOne: boolean) {
  const marks = createMarks(MARK_MAX, MARK_STEP, hasGreaterThanOne ? 0 : AXIS_OFFSET)
  const max = marks[marks.length - 1].value
  const min = marks[0].value
  return { max, min, marks }
}

function usedOffsetsExceedsOne({ usedOffsets }: VariableOffsets): boolean {
  if (!usedOffsets) return false
  const { from, to } = usedOffsets
  return from > 1 || to > 1
}

export const Offsets: React.FC = () => {

  const { selectedModelIndex, model, variablesWithColors, dataset } = useContext(ModelZooBrowserContext)

  const detectionModel = model as DetectionModel
  const forecastModel = model as ForecastModel
  const timePeriodISO8601 = forecastModel?.model?.modelZoo?.samplingPeriod ?? detectionModel?.model?.normalBehaviorModel?.samplingPeriod

  // eslint-disable-next-line
  const offsets = useSelectedModelOffsets(variablesWithColors!, selectedModelIndex!, model!)
  let originalSamplingPeriod = useOriginalSamplingPeriod(dataset)
  if (!originalSamplingPeriod) originalSamplingPeriod = 0

  const target = useTarget()
  const { scale: availabilityScale } = useDataAvailability(dataset, target, originalSamplingPeriod)
  const [scale, setScale] = useState<DataAvailabilityScale>(availabilityScale)
  const exceedsOne = useMemo(() => offsets.some(usedOffsetsExceedsOne), [offsets])
  const sliderProps = useMemo(() => getSliderConfiguration(exceedsOne), [exceedsOne])

  const scaleRatio = useMemo(() => {
    //@ts-ignore
    if (scale === '1') {
      const {value, timeUnit} = convertTimePeriodFromISO8601(timePeriodISO8601) as TimePeriod
      return originalSamplingPeriod! / (value * SCALE_IN_SECONDS[timeUnit.toLocaleUpperCase()])
    }

    return originalSamplingPeriod! / scale
  } , [scale, originalSamplingPeriod, timePeriodISO8601])

  const enhancedOffsets = useMemo(() => {
    return offsets.map((offset) => {
     // eslint-disable-next-line
      const datasetVariable = variablesWithColors!.find(({ variable }: { variable: any }) => variable === offset.variable)
      if (!datasetVariable) return { ...offset, color: coreColor.main.smoke, textColor: coreColor.black }
      return { ...offset, ...datasetVariable }
    })
  }, [variablesWithColors, offsets])

  const shouldDisplay = ({ usedOffsets }: VariableOffsets) => Boolean(usedOffsets)

  if (!selectedModelIndex || offsets.length < 1) return null
  return (
    <div className='mzb-offsets-section'>
      <h6 className='insights-subheader'>Variable offsets</h6>
      <DetermineScale offsets={enhancedOffsets} scale={scale} onChange={setScale} originalSamplingPeriod={originalSamplingPeriod} />
      <div>
        {enhancedOffsets.filter(shouldDisplay).map((offset, index) => (
          <Scale
            key={`mzb-insights-offsets-${offset.variable}--${index}`}
            scale={scale}
            scaleRatio={scaleRatio}
            sliderProps={sliderProps}
            {...offset}
          />
        ))}
      </div>
    </div>
  )
}

const SCALE_IN_SECONDS: Record<string, number> = {
  'SAMPLE': 1,
  'SECOND': 1000,
  'MINUTE': 60_000,
  'QUARTER_HOUR': 900_000,
  'HOUR': 3_600_000,
  'DAY': 86_400_000,
  'WEEK': 604_800_000,
  'MONTH': 2_592_000_000,
}