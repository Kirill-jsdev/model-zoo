import React, { useState, useMemo, useContext } from 'react'
import { color as coreColor } from '../../Utilities/color'
import { Scale } from './Scale'
import { DetermineScale } from './DetermineScale'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { useSelectedModelOffsets, VariableOffsets, DataAvailabilityScale, useOriginalSamplingPeriod } from './insights-hooks'
import { useDataAvailability } from './useDatasetAvailability-hook'
import { useTarget } from '../../Utilities/Hooks'

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
  const offsets = useSelectedModelOffsets(variablesWithColors, selectedModelIndex, model)
  let originalSamplingPeriod = useOriginalSamplingPeriod(dataset)
  if (!originalSamplingPeriod) originalSamplingPeriod = 0

  const target = useTarget()
  const { scale: availabilityScale } = useDataAvailability(dataset, target, originalSamplingPeriod)
  const [scale, setScale] = useState<DataAvailabilityScale>(availabilityScale)
  const exceedsOne = useMemo(() => offsets.some(usedOffsetsExceedsOne), [offsets])
  const sliderProps = useMemo(() => getSliderConfiguration(exceedsOne), [exceedsOne])
  const scaleRatio = useMemo(() => originalSamplingPeriod! / scale, [scale, originalSamplingPeriod])

  const enhancedOffsets = useMemo(() => {
    return offsets.map((offset) => {
      const datasetVariable = variablesWithColors.find(({ variable }: { variable: any }) => variable === offset.variable)
      if (!datasetVariable) return { ...offset, color: coreColor.main.smoke, textColor: coreColor.black }
      return { ...offset, ...datasetVariable }
    })
  }, [variablesWithColors, offsets])

  const shouldDisplay = ({ usedOffsets }: VariableOffsets) => Boolean(usedOffsets)

  console.log('enhancedOffsetsenhancedOffsets', enhancedOffsets)

  if (!selectedModelIndex || offsets.length < 1) return null
  return (
    <div>
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