import { Term } from "./Types"
import { ModelVariableOffset } from "./helpers"

//AD
export type DetectionModel = {
    modelVersion: string
    model: {
      settings?: {
        data?: DetectionModelDataSettings
        domainSpecifics?: DetectionModelDomainSpecificSetting[]
        normalBehavior?: DetectionModelNormalBehaviorSettings
        anomalousBehavior?: DetectionModelAnomalousBehaviorSettings
      }
      normalBehaviorModel: {
        samplingPeriod: string
        models: NormalBehaviorModelModel[]
        variableProperties: NormalBehaviorModelVariableProperty[]
      }
      anomalousBehaviorModel?: {
        submodels: AnomalousBehaviorSubModel[]
      }
    }
    signature: string
  }

  type DetectionModelDataSettings = {
    rows?: Range[]
    columns?: string[]
    KPIColumn?: string
    holidayColumn?: string
    labelColumn?: string
    imputation?: Imputation
    timeScale?: TimeScale
  }

  export type Imputation = {
    type?: 'None' | 'Linear' | 'LOCF'
    maxGapLength?: number
  }

  export type TimeScale = {
    baseUnit: TimeScaleBaseUnit
    value: number
  }

  export enum TimeScaleBaseUnit {
    DAY = 'Day',
    HOUR = 'Hour',
    MINUTE = 'Minute',
    SECOND = 'Second',
  }

  type DetectionModelDomainSpecificSetting = {
    perspective: string
    sensitivity?: number | null
    minSensitivity?: number | null
    maxSensitivity?: number | null
  }

  type DetectionModelNormalBehaviorSettings = {
    useNormalBehaviorModel?: boolean
    normalization?: boolean
    maxModelComplexity?: string | number
    features?: number
    dailyCycle?: boolean
    useKPIOffsets?: boolean
    allowOffsets?: boolean
    offsetLimit?: { type: string; value: string | number }
  }

  type DetectionModelAnomalousBehaviorSettings = {
    maxModelComplexity?: number
    detectionPeriods?: {
      seconds?: number[]
      minutes?: number[]
      hours?: number[]
      DoW?: number[]
    }
  }

  export type NormalBehaviorModelModel = Pick<Model, 'index' | 'terms'> & {
    dayTime?: string | null
    variableOffsets: ModelVariableOffsets[]
  }

  export interface Model {
    index: number
    terms: Term[]
    dayTime?: string | null
    variableOffsets: ModelVariableOffset[]
    samplesAhead: number[]
    modelQuality: number
    predictionIntervals: number[]
    lastTargetTimestamp: string
    RInv: number[]
    g: number[]
    mx: number[]
    cases: ModelCase[]
  }

  type ModelCase = {
    dayTime?: string | null
    variableOffsets: CaseVariableOffset[]
  }

  type CaseVariableOffset = {
    name: string
    dataTo: number
  }

  type ModelVariableOffsets = {
    name: string
    dataFrom: number
    dataTo: number
  }

  type NormalBehaviorModelVariableProperty = {
    name: string
    dataFrom?: number
    dataTo?: number
    importance: number
  }

  type AnomalousBehaviorSubModel = {
    perspective: string
    probabilityDistribution?: { n: number; d: number; w: number[] }
    detectedSensitivity?: number
    threshold?: number
    translation?: number
    cut?: number
  }