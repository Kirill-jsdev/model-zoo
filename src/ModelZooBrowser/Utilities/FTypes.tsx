import { Model } from "./ADModelTypes"

export interface ForecastModel {
    modelVersion: string
    model: { modelZoo: ModelZoo }
    signature: string
}

export interface ModelZoo {
    samplingPeriod: string
    averageTrainingLength: number
    models: Model[]
    difficulty: number
    targetName: string
    holidayName: string
    upperBoundary: number
    lowerBoundary: number
    dailyCycle: boolean
    confidenceLevel: number
    variableProperties: VariableProperties[] | null
    inSampleRows: Range[]
    outOfSampleRows: Range[]
    timeZone: string
}

export interface VariableProperties {
    name: string
    min?: number
    max?: number
    dataFrom?: number
    importance: number
  }