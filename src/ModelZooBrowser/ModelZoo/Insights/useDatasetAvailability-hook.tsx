import {useState, useEffect, useMemo} from 'react'
import { Variable, VariableWithColors } from '../../Utilities/Types'
import { DatasetVersion } from '../../Utilities/VersionType'

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

export const SCALE_MAX = 10

export const useDataAvailability = (selectedVersion: DatasetVersion, target: VariableWithColors, originalSamplingPeriod: number) => {
    const [scale, setScale] = useState<DataAvailabilityScale>(DataAvailabilityScale.SAMPLE)

    const targetLatest = useMemo(() => (target?.lastTimestamp ? new Date(target.lastTimestamp).getTime() : undefined), [target])

    const availabilities: VariableAvailability[] = useMemo(() => {
      if (!selectedVersion || !target) return []
      return getVariableAvailabilities(selectedVersion.variables)
    }, [selectedVersion, target])

    useEffect(() => {
      if (!targetLatest) return
      const smallestDiff = smallestDifferenceWithTarget(availabilities, targetLatest)

      if (smallestDiff !== Number.POSITIVE_INFINITY) {
        setScale(determineScale(smallestDiff))
        return
      }

      setScale(determineScale(originalSamplingPeriod * SCALE_MAX))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [availabilities, targetLatest])

    const variables: ScaledAvailability[] = useMemo(() => {
      if (!targetLatest) return []
      return availabilities.map((availability) => {
        const difference = availability.latestTimestamp ? (availability.latestTimestamp - targetLatest) : 0
        const relativeValue = difference / originalSamplingPeriod
        const scaleToUse = scale === DataAvailabilityScale.SAMPLE ? originalSamplingPeriod : scale
        const scaledRelativeValue = Number((difference / scaleToUse).toFixed(1))

        return { ...availability, relativeValue, scaledRelativeValue }
      })
    }, [availabilities, scale, targetLatest, originalSamplingPeriod])

    return { scale, variables, setScale }
  }

//TYPES

export type ScaledAvailability = VariableAvailability & {
    relativeValue: number
    scaledRelativeValue: number
}

export type VariableAvailability = {
    name: string
    latestTimestamp?: number
}

export type UseDataAvailability = () => {
    scale: DataAvailabilityScale
    variables: ScaledAvailability[]
    setScale: (scale: DataAvailabilityScale) => void
}

//HELPER FUNCTIONS
function getVariableAvailabilities(variables: Variable[]): VariableAvailability[] {
    return variables.map(({ name, lastTimestamp }) => lastTimestamp ? ({
      name,
      latestTimestamp: new Date(lastTimestamp).getTime()
    }) : ({name}))
}

function smallestDifferenceWithTarget(availabilities: VariableAvailability[], targetLatest: number): number {
    return availabilities.reduce<number>((prev, { latestTimestamp }) => {
      const difference = latestTimestamp ? Math.abs(latestTimestamp - targetLatest) : 0
      const isSmaller = (difference > 0) && (difference < prev)
      return isSmaller ? difference : prev
    }, Number.POSITIVE_INFINITY)
}

function determineScale(smallestDifference: number): DataAvailabilityScale {
    if (smallestDifference > DataAvailabilityScale.WEEK * SCALE_MAX) return DataAvailabilityScale.MONTH
    if (smallestDifference > DataAvailabilityScale.DAY * SCALE_MAX) return DataAvailabilityScale.WEEK
    if (smallestDifference > DataAvailabilityScale.HOUR * SCALE_MAX) return DataAvailabilityScale.DAY
    if (smallestDifference > DataAvailabilityScale.QUARTER_HOUR * SCALE_MAX) return DataAvailabilityScale.HOUR
    if (smallestDifference > DataAvailabilityScale.MINUTES * SCALE_MAX) return DataAvailabilityScale.QUARTER_HOUR
    if (smallestDifference > DataAvailabilityScale.SECONDS * SCALE_MAX) return DataAvailabilityScale.MINUTES
    if (smallestDifference > DataAvailabilityScale.SECONDS) return DataAvailabilityScale.SECONDS
    return DataAvailabilityScale.SAMPLE
}