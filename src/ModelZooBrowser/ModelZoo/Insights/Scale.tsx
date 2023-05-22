import React, { useMemo } from 'react'
import { DataAvailabilityScale } from './useDatasetAvailability-hook'
import CustomScale from './CustomScale'
import { Mark } from './Offsets'


export type VariableOffsets = {
  variable: string
  usedOffsets?: { from: number; to: number }
  availableOffset?: number
}

interface ScaleProps {
  scale: DataAvailabilityScale
  scaleRatio: number
  sliderProps: {
    max: number;
    min: number;
    marks: Mark[];
  },
  variable: string
  usedOffsets?: { from: number; to: number }
  availableOffset?: number
  color: string
  textColor: string
}

const ROUND_FACTOR = 100

const SCALE_PREFIX_MAP: Record<DataAvailabilityScale, string> = {
  [DataAvailabilityScale.SAMPLE]: 'S',
  [DataAvailabilityScale.SECONDS]: 's',
  [DataAvailabilityScale.MINUTES]: 'm',
  [DataAvailabilityScale.QUARTER_HOUR]: 'qh',
  [DataAvailabilityScale.HOUR]: 'h',
  [DataAvailabilityScale.DAY]: 'D',
  [DataAvailabilityScale.WEEK]: 'W',
  [DataAvailabilityScale.MONTH]: 'M',
}

function plusPrefix(value: string | number): string {
  return Number(value) < 0 ? `${value}` : `+${value}`
}

function label(usedOffsets: VariableOffsets['usedOffsets']): string {
  if (!usedOffsets) return ''
  const { from, to } = usedOffsets
  return `S${plusPrefix(from)} : S${plusPrefix(to)}`
}

function tooltipLabel(scale: DataAvailabilityScale, value?: number[]): string {
  if (!value) return ''

  const scalePrefix = SCALE_PREFIX_MAP[scale]
  const first = Math.round(value[0] * ROUND_FACTOR) / ROUND_FACTOR
  const second = Math.round(value[1] * ROUND_FACTOR) / ROUND_FACTOR
  if (first === second) return `${scalePrefix}${plusPrefix(first)}`
  return `${scalePrefix}${plusPrefix(first)} : ${scalePrefix}${plusPrefix(second)}`
}

export const Scale: React.FC<ScaleProps> = ({
  usedOffsets,
  scale,
  scaleRatio,
  variable,
  color,
  textColor,
}) => {
  const scaledUnusedOffsets = useMemo(() => {
    if (!usedOffsets) return
    const { from, to } = usedOffsets
    return { from: from * scaleRatio, to: to * scaleRatio }
  }, [scaleRatio, usedOffsets])

  const value = useMemo(() => {
    return scaledUnusedOffsets ? [scaledUnusedOffsets.from, scaledUnusedOffsets.to] : undefined
  }, [scaledUnusedOffsets])

  const tooltipLabelFromValue = useMemo(() => tooltipLabel(scale, value), [scale, value])

  return (
    <>
      <CustomScale
        color={color}
        textColor={textColor}
        label={label(usedOffsets)}
        name={variable}
        tooltipLabel={tooltipLabelFromValue}
        scaledUnusedOffsets={{from: scaledUnusedOffsets?.from, to: scaledUnusedOffsets?.to}}
      />
    </>
  )
}