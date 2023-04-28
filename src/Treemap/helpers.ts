import { TreemapNode } from './Types'
const ROOT_LABEL = 'root'
const ROOT_ELEMENT: TreemapNode = { label: ROOT_LABEL, parentLabel: null, importance: null }

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

///Dictionaries Start

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

///Dictionaries end

export type Part = Dictionary | BetaDictionary

export interface Term {
    importance: number | null
    parts: Part[]
  }

  type CaseVariableOffset = {
    name: string
    dataTo: number
  }

type ModelCase = {
dayTime?: string | null
variableOffsets: CaseVariableOffset[]
}

export type ModelVariableOffset = {
    name: string
    dataFrom: number
    dataTo: number
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
export type PartiallyRequired<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>
export type FeatureModel = PartiallyRequired<Model, 'index' | 'terms'>

export function getTreemapFromModels(models: FeatureModel[], index: number, round: boolean): TreemapNode[] {
    const selectedModel = models.find((model) => model.index === index) || models[0]
    return mapTermsToTreemapNodes(selectedModel.terms, round)
  }

export function mapTermsToTreemapNodes(terms: Term[], round: boolean): TreemapNode[] {
    return terms.reduce<TreemapNode[]>(
        (acc, curr) => {
        return [...acc, ...mapTermToTreemapNodes(curr, round)]
        },
        [ROOT_ELEMENT],
    )
}

function getParentLabelFromNodes(nodes: TreemapNode[]): string {
    return nodes.reduce<string>((acc, curr) => `${acc}${acc.length ? ' & ' : ''}${curr.label}`, '')
}

function mapChildrenToParent(children: TreemapNode[], parentLabel: string, importance: number): TreemapNode[] {
    const dividedImportance = () => importance / children.length
    return children.map((child) => ({ ...child, parentLabel, importance: dividedImportance() }))
}

export function mapTermToTreemapNodes(term: Term, round: boolean): TreemapNode[] {
    const nodes = mapPartsToTreemapNodes(term, round)
    if (nodes.length < 2) return nodes

    const parentLabel = getParentLabelFromNodes(nodes)
    const parent = { label: parentLabel, parentLabel: ROOT_LABEL, importance: null }
    return [parent, ...mapChildrenToParent(nodes, parentLabel, term.importance || 0)]
}

export function isBetaDictionary(dictionary: Part): dictionary is BetaDictionary {
    return dictionary.type === 'β'
}

export function getCoefficient({ parts }: Term): number {
    return parts.find(isBetaDictionary)?.value ?? 0
}

//getPartLabel subfunctions
export function isIdentityDictionary(dictionary: Part): dictionary is IdentityDictionary {
    return dictionary.type === 'Identity'
}

export function isTimeOffsetDictionary(dictionary: Part): dictionary is TimeOffsetDictionary {
    return dictionary.type === 'TimeOffsets'
}

export function isWeekdayDictionary(dictionary: Part): dictionary is WeekdayDictionary {
    return dictionary.type === 'DayOfWeek'
}

export function isWeekrestDictionary(dictionary: Part): dictionary is WeekrestDictionary {
    return dictionary.type === 'RestOfWeek'
  }

export function isMonthDictionary(dictionary: Part): dictionary is MonthDictionary {
    return dictionary.type === 'Month'
}

export function isPublicHolidaysDictionary(dictionary: Part): dictionary is PublicHolidaysDictionary {
    return dictionary.type === 'PublicHolidays'
}

export function isPeriodicDecompositionDictionary(dictionary: Part): dictionary is PeriodicDecompositionDictionary {
    return dictionary.type === 'Sin' || dictionary.type === 'Cos'
}

export function isFourierDictionary(dictionary: Part): dictionary is FourierDictionary {
    return dictionary.type === 'Fourier'
}

export function isSimpleMovingAverageDictionary(dictionary: Part): dictionary is SimpleMovingAverageDictionary {
    return dictionary.type === 'SimpleMovingAverage'
}

export function isExponentialMovingAverageDictionary(
    dictionary: Part,
  ): dictionary is ExponentialMovingAverageDictionary {
    return dictionary.type === 'ExponentialMovingAverage'
}

export function isTrendDictionary(dictionary: Part): dictionary is TrendDictionary {
    return dictionary.type === 'Trend'
  }

export function isInterceptDictionary(dictionary: Part): dictionary is InterceptDictionary {
    return dictionary.type === 'Intercept'
}

export function isPiecewiseLinearityDictionary(dictionary: Part): dictionary is PiecewiseLinearityDictionary {
    return dictionary.type === 'PiecewiseLinear'
}
//

//Dates

enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

enum WeekDay {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

export const getMonth = (month: number): string => {
    if (month < 1 || month > 12) throw new Error('Invalid month')
    return Month[month]
  }


export const getWeekDay = (day: number): string => {
    if (day < 1 || day > 7) {
      throw new Error('Invalid weekday')
    }
    return WeekDay[day]
  }
//

export function getPartLabel(part: Part, format: (n: number) => number): string {
    if (isIdentityDictionary(part)) return part.predictor
    if (isTimeOffsetDictionary(part)) return `${part.predictor}(t${format(part.offset)})`
    if (isWeekdayDictionary(part)) return `DoW(t${format(part.offset)}) = ${getWeekDay(part.day)}`
    if (isWeekrestDictionary(part)) return `DoW(t${format(part.offset)}) ≤ ${getWeekDay(part.day)}`
    if (isMonthDictionary(part)) return `Month ≤ ${getMonth(part.month)}`
    if (isPublicHolidaysDictionary(part))
      return `PublicHoliday(t${format(part.offset) > 0 ? '+' : ''}${format(part.offset)})`
    if (isPeriodicDecompositionDictionary(part)) return `${part.type}(${part.period}; ${part.unit})`
    if (isFourierDictionary(part)) return `Fourier(${part.period})`
    if (isSimpleMovingAverageDictionary(part)) return `SMA_${part.predictor}(t${format(part.offset)}; w=${part.window})`
    if (isExponentialMovingAverageDictionary(part))
      return `EMA_${part.predictor}(t${format(part.offset)}; w=${part.window})`
    if (isTrendDictionary(part)) return `Trend`
    if (isInterceptDictionary(part)) return `Intercept`
    if (isPiecewiseLinearityDictionary(part)) {
      if (part.subtype === 1) {
        const knot = part.knot < 0 ? `(${format(part.knot)})` : `${format(part.knot)}`
        return `max(0; ${part.predictor}(t${format(part.offset)}) - ${knot})`
      }
      if (part.subtype === -1) {
        return `max(0; ${format(part.knot)} - ${part.predictor}(t${format(part.offset)}))`
      }
    }
    return ''
  }


///
//pureRound renamed from round - C:\WORK\fff\Tim%20Studio%20Monorepo\packages\webapp\src\pure\Number.ts
export function pureRound(n: number, fractionDigits: number): number {
    const factor = Math.pow(10, fractionDigits)
    return Math.round(n * factor) / factor
}

const FRACTION_DIGITS = 3
const round = (n: number) => pureRound(n, FRACTION_DIGITS)
const noFormatting = (n: number) => n
///

function mapPartsToTreemapNodes(term: Term, shouldRound: boolean): TreemapNode[] {
    const format = shouldRound ? round : noFormatting
    const coefficient = getCoefficient(term)
    return term.parts
      .filter((part) => !isBetaDictionary(part))
      .map<TreemapNode>((part) => ({
        label: getPartLabel(part, format),
        parentLabel: ROOT_LABEL,
        importance: term.importance,
        coefficient,
      }))
}

///The functions related to pallete generation

const colorMap = [
  { color: '#5573F7', textColor: '#EBECF0'},
  { color: '#2941AB', textColor: '#EBECF0'},
  { color: '#5CC8D0', textColor: '#2c2835'},
  { color: '#499988', textColor: '#EBECF0'},
  { color: '#BBF0CA', textColor: '#2c2835'},
  { color: '#57CE5C', textColor: '#EBECF0'},
  { color: '#662860', textColor: '#EBECF0'},
  { color: '#6B6185', textColor: '#EBECF0'},
  { color: '#FFF640', textColor: '#2c2835'},
  { color: '#7A434F', textColor: '#EBECF0'},
]

export function buildPredictorPalette(variables: any[]) { //the type of argument was changed from '[]' to 'any[]'
  const predictorPalette = variables.map((v: any, i: number) => {
    const colorIndex = i < colorMap.length ? i : 0
    v.variable = v.name
    v.color = colorMap[colorIndex].color
    v.textColor = colorMap[colorIndex].textColor

    return v
  })

  return predictorPalette
}



///GUARD FOR Table.tsx

export function roundStandardFormatter(n: number, fractionDigits: number): number {
  const factor = Math.pow(10, fractionDigits)
  return Math.round(n * factor) / factor
}

export function standardFormatter(n: number): number {
  return roundStandardFormatter(n, FRACTION_DIGITS)
}

export function getTermLabel(term: Term): string {
  return term.parts
    .filter((p) => !isBetaDictionary(p))
    .map((p) => getPartLabel(p, standardFormatter))
    .join(' & ')
}





////////////////////////////////////
////////////////////////////////////CODE FOR MODEL ZOO NAVIGATION

export interface VariableProperties {
  name: string
  importance: number
}

export function mapVariablePropertiesToTreemapNodes(variableProperties: VariableProperties[]): TreemapNode[] {
  return variableProperties.reduce<TreemapNode[]>(
    (acc, curr) => {
      return [...acc, { label: curr.name, parentLabel: ROOT_LABEL, importance: curr.importance }]
    },
    [ROOT_ELEMENT],
  )
}

export const getVariablePropertiesSum = (treemapNodes: TreemapNode[]): number =>
  treemapNodes.reduce((acc, curr) => acc + (curr.importance || 0), 0)

export const mapVariablePropertiesToTerms = (properties: VariableProperties[]): Term[] =>
  properties.map(({ importance, name }) => ({ importance, parts: [{ type: 'Identity', predictor: name }] }))
