export interface DatasetVariable {
    variable: string
    color: string
    textColor: string
}

type DictionaryType =
  | 'Identity'
  | 'TimeOffsets'
  | 'DayOfWeek'
  | 'RestOfWeek'
  | 'Month'
  | 'PublicHolidays'
  | 'Cos'
  | 'Sin'
  | 'Fourier'
  | 'PiecewiseLinear'
  | 'SimpleMovingAverage'
  | 'ExponentialMovingAverage'
  | 'Trend'
  | 'Intercept'
  | 'β'
type DictionaryBase = { type: DictionaryType }

export interface BetaDictionary extends DictionaryBase {
    type: 'β'
    value: number
}

export type Dictionary =
  | IdentityDictionary
  | TimeOffsetDictionary
  | WeekdayDictionary
  | WeekrestDictionary
  | MonthDictionary
  | PublicHolidaysDictionary
  | PeriodicDecompositionDictionary
  | FourierDictionary
  | PiecewiseLinearityDictionary
  | SimpleMovingAverageDictionary
  | ExponentialMovingAverageDictionary
  | TrendDictionary
  | InterceptDictionary


export interface IdentityDictionary extends DictionaryBase {
    type: 'Identity'
    predictor: string
}

export interface TimeOffsetDictionary extends DictionaryBase {
    type: 'TimeOffsets'
    predictor: string
    offset: number
}

export interface WeekdayDictionary extends DictionaryBase {
    type: 'DayOfWeek'
    day: number
    offset: number
}

export interface WeekrestDictionary extends DictionaryBase {
    type: 'RestOfWeek'
    day: number
    offset: number
}

export interface MonthDictionary extends DictionaryBase {
    type: 'Month'
    month: number
}

export interface PublicHolidaysDictionary extends DictionaryBase {
    type: 'PublicHolidays'
    predictor: string
    offset: number
}

export interface PeriodicDecompositionDictionary extends DictionaryBase {
    type: 'Sin' | 'Cos'
    period: number
    unit: string
}

export interface FourierDictionary extends DictionaryBase {
    type: 'Fourier'
    period: number
    cosOrders: number[]
    cosβ: number[]
    sinOrder: number[]
    sinβ: number[]
}

export interface PiecewiseLinearityDictionary extends DictionaryBase {
    type: 'PiecewiseLinear'
    predictor: string
    knot: number
    subtype: number
    offset: number
}

export interface SimpleMovingAverageDictionary extends DictionaryBase {
    type: 'SimpleMovingAverage'
    predictor: string
    window: number
    offset: number
}

export interface ExponentialMovingAverageDictionary extends DictionaryBase {
    type: 'ExponentialMovingAverage'
    predictor: string
    window: number
    offset: number
}

export interface TrendDictionary extends DictionaryBase {
    type: 'Trend'
}

export interface InterceptDictionary extends DictionaryBase {
    type: 'Intercept'
    value: number
}


export type Part = Dictionary | BetaDictionary

export interface Term {
    importance: number | null
    parts: Part[]
}