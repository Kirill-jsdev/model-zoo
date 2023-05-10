import React, { useEffect, useMemo } from 'react'
import { color as coreColor } from '../../Utilities/color'
import { Select } from './Select'
import {DataAvailabilityScale} from './useDatasetAvailability-hook'

export type VariableOffsets = {
  variable: string
  usedOffsets?: { from: number; to: number }
  availableOffset?: number
}

interface DetermineScaleProps {
  offsets: VariableOffsets[]
  scale: DataAvailabilityScale
  onChange: (scale: DataAvailabilityScale) => void
  originalSamplingPeriod: number
}

const scaleOptions = [
  { option: `Samples`, value: DataAvailabilityScale.SAMPLE },
  { option: `Seconds`, value: DataAvailabilityScale.SECONDS },
  { option: `Minutes`, value: DataAvailabilityScale.MINUTES },
  { option: `Quarter-hours`, value: DataAvailabilityScale.QUARTER_HOUR },
  { option: `Hours`, value: DataAvailabilityScale.HOUR },
  { option: `Days`, value: DataAvailabilityScale.DAY },
  { option: `7 days`, value: DataAvailabilityScale.WEEK },
  { option: `30 days`, value: DataAvailabilityScale.MONTH },
]

const SCALE_MAX = 10

function determineScale(msDistance: number): DataAvailabilityScale {
  if (msDistance > DataAvailabilityScale.WEEK * SCALE_MAX) return DataAvailabilityScale.MONTH
  if (msDistance > DataAvailabilityScale.DAY * SCALE_MAX) return DataAvailabilityScale.WEEK
  if (msDistance > DataAvailabilityScale.HOUR * SCALE_MAX) return DataAvailabilityScale.DAY
  if (msDistance > DataAvailabilityScale.QUARTER_HOUR * SCALE_MAX) return DataAvailabilityScale.HOUR
  if (msDistance > DataAvailabilityScale.MINUTES * SCALE_MAX) return DataAvailabilityScale.QUARTER_HOUR
  if (msDistance > DataAvailabilityScale.SECONDS * SCALE_MAX) return DataAvailabilityScale.MINUTES
  if (msDistance > DataAvailabilityScale.SECONDS) return DataAvailabilityScale.SECONDS
  return DataAvailabilityScale.SAMPLE
}

export const DetermineScale: React.FC<DetermineScaleProps> = ({ offsets, scale, onChange, originalSamplingPeriod }) => {

  const maxOffset = useMemo(() => {
    return offsets.reduce((acc, { usedOffsets }) => {
      if (!usedOffsets) return acc
      const { from, to } = usedOffsets
      const max = Math.max(Math.abs(from), Math.abs(to))
      return max > acc ? max : acc
    }, 0)
  }, [offsets])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onChange(determineScale(originalSamplingPeriod * maxOffset)), [originalSamplingPeriod, maxOffset])

  const handleScaleChange = (e: React.ChangeEvent<{ value: unknown }>) =>
    onChange(e.target.value as DataAvailabilityScale)

  return (
    <Select
      label="Scale"
      options={scaleOptions}
      value={scale ?? ''}
      onChange={handleScaleChange}
      focusColor={coreColor.shades.smoke.dd}
    />
  )
}