import React, { useState, useMemo, useContext } from 'react'
import styled from 'styled-components'
import { Mark } from '@material-ui/core'
import { color as coreColor } from '../Utilities/color'

import { Scale } from './Scale'
import { DetermineScale } from './DetermineScale'

import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { useSelectedModelOffsets, VariableOffsets, DataAvailabilityScale, useOriginalSamplingPeriod } from './insights-hooks'
import { useDataAvailability } from './useDatasetAvailability-hook'


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

  const { scale: availabilityScale } = useDataAvailability(dataset, targettt, originalSamplingPeriod)
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

  if (!selectedModelIndex || offsets.length < 1) return null
  return (
    <Container>
      <StyledH6>Variable offsets</StyledH6>
      <DetermineScale offsets={enhancedOffsets} scale={scale} onChange={setScale} originalSamplingPeriod={originalSamplingPeriod} />
      <Info>
        {enhancedOffsets.filter(shouldDisplay).map((offset, index) => (
          <Scale
            key={`mzb-insights-offsets-${offset.variable}--${index}`}
            scale={scale}
            scaleRatio={scaleRatio}
            sliderProps={sliderProps}
            {...offset}
          />
        ))}
      </Info>
    </Container>
  )
}

const Container = styled.div`
  padding-right: 0.5rem;
`

const StyledH6 = styled.h6`
  margin: 0;
  color: ${coreColor.black};
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 700;
`

const Info = styled.div`
  padding-left: 0.375rem;
  font-size: 0.75rem;

  & > * {
    margin-left: 0;
    margin-bottom: 1.25rem;
    &:last-child {
      margin-bottom: 2.5rem;
    }
  }
`

const targettt = {
  "minimumValue": 15,
  "name": "Price",
  "maximumValue": 35409,
  "firstTimestamp": "2011-01-01T00:00:00.000Z",
  "lastTimestamp": "2013-02-28T23:00:00.000Z",
  "orderInTable": 2,
  "type": "Numerical",
  "missingObservations": 0,
  "averageValue": 4318.064820675106
}
