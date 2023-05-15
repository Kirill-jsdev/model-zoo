import { Entity, Status } from "./ModelZoo/Insights/insights-hooks"
import { Variable } from "./Utilities/Types"

export type DatasetVersion = {
    id: string
    dataset: Entity
    estimatedSamplingPeriod: string
    size: number
    numberOfObservations: number
    firstTimestamp: number
    lastTimestamp: number
    variables: Variable[]
    createdAt: number
    status: Status
    name?: string
  }