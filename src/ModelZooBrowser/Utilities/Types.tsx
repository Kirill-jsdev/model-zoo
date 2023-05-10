// import { HierarchyNode } from 'd3-hierarchy'

export interface TreemapNode {
    label: string
    parentLabel: string | null
    importance: number | null
    coefficient?: number
    meta?: { [key: string]: string | null | number }
}

export interface DatasetVariable {
    variable: string
    color: string
    textColor: string
    minimumValue: number
    name: string
    maximumValue: number
    firstTimestamp: string
    lastTimestamp: string
    orderInTable: number
    type: string
    missingObservations: number
    averageValue: number
}

export type Direction = { top: number; right: number; bottom: number; left: number }
export type ElementSize = { width: number; height: number }
export type Position = { x: number; y: number }

export type Data = HierarchyNode<TreemapNode>
export type Hierarchy = HierarchyNode<Data>

export type SvgRef = SVGSVGElement | null | undefined
export type TooltipRef = HTMLDivElement | null | undefined
export interface MergedRef {
  getSvgRef: () => SvgRef
  getTooltipRef: () => TooltipRef
}

export interface TooltipDataProps {
    term: string
    importance: number
    coefficient?: number
    color: string
}

export type Variable = {
    name: string
    type?: 'Numerical' | 'Boolean'
    firstTimestamp?: string
    lastTimestamp?: string
    minimumValue?: number
    maximumValue?: number
    averageValue?: number
    missingObservations?: number | null
}

export type VariableWithColors = Variable & { variable: string; color: string; textColor: string }

export type ModelOption = {
    value: number
    option: string
}

//Insights types

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

// TYPES FROM THE LIBRARY d3-hierarchy

export interface HierarchyLink<Datum> {
    /**
     * The source of the link.
     */
    source: HierarchyNode<Datum>;

    /**
     * The target of the link.
     */
    target: HierarchyNode<Datum>;
}

export interface HierarchyNode<Datum> {
    /**
     * The associated data, as specified to the constructor.
     */
    data: Datum;

    /**
     * Zero for the root node, and increasing by one for each descendant generation.
     */
    readonly depth: number;

    /**
     * Zero for leaf nodes, and the greatest distance from any descendant leaf for internal nodes.
     */
    readonly height: number;

    /**
     * The parent node, or null for the root node.
     */
    parent: this | null;

    /**
     * An array of child nodes, if any; undefined for leaf nodes.
     */
    children?: this[] | undefined;

    /**
     * Aggregated numeric value as calculated by `sum(value)` or `count()`, if previously invoked.
     */
    readonly value?: number | undefined;

    /**
     * Optional node id string set by `StratifyOperator`, if hierarchical data was created from tabular data using stratify().
     */
    readonly id?: string | undefined;

    /**
     * Returns the array of ancestors nodes, starting with this node, then followed by each parent up to the root.
     */
    ancestors(): this[];

    /**
     * Returns the array of descendant nodes, starting with this node, then followed by each child in topological order.
     */
    descendants(): this[];

    /**
     * Returns the array of leaf nodes in traversal order; leaves are nodes with no children.
     */
    leaves(): this[];

    /**
     * Returns the shortest path through the hierarchy from this node to the specified target node.
     * The path starts at this node, ascends to the least common ancestor of this node and the target node, and then descends to the target node.
     *
     * @param target The target node.
     */
    path(target: this): this[];

    /**
     * Returns an array of links for this node, where each link is an object that defines source and target properties.
     * The source of each link is the parent node, and the target is a child node.
     */
    links(): Array<HierarchyLink<Datum>>;

    /**
     * Evaluates the specified value function for this node and each descendant in post-order traversal, and returns this node.
     * The `node.value` property of each node is set to the numeric value returned by the specified function plus the combined value of all descendants.
     *
     * @param value The value function is passed the node’s data, and must return a non-negative number.
     */
    sum(value: (d: Datum) => number): this;

    /**
     * Computes the number of leaves under this node and assigns it to `node.value`, and similarly for every descendant of node.
     * If this node is a leaf, its count is one. Returns this node.
     */
    count(): this;

    /**
     * Sorts the children of this node, if any, and each of this node’s descendants’ children,
     * in pre-order traversal using the specified compare function, and returns this node.
     *
     * @param compare The compare function is passed two nodes a and b to compare.
     * If a should be before b, the function must return a value less than zero;
     * if b should be before a, the function must return a value greater than zero;
     * otherwise, the relative order of a and b are not specified. See `array.sort` for more.
     */
    sort(compare: (a: this, b: this) => number): this;

    /**
     * Invokes the specified function for node and each descendant in breadth-first order,
     * such that a given node is only visited if all nodes of lesser depth have already been visited,
     * as well as all preceding nodes of the same depth.
     *
     * @param func The specified function is passed the current node.
     */
    each(func: (node: this) => void): this;

    /**
     * Invokes the specified function for node and each descendant in post-order traversal,
     * such that a given node is only visited after all of its descendants have already been visited.
     *
     * @param func The specified function is passed the current node.
     */
    eachAfter(func: (node: this) => void): this;

    /**
     * Invokes the specified function for node and each descendant in pre-order traversal,
     * such that a given node is only visited after all of its ancestors have already been visited.
     *
     * @param func The specified function is passed the current node.
     */
    eachBefore(func: (node: this) => void): this;

    /**
     * Return a deep copy of the subtree starting at this node. The returned deep copy shares the same data, however.
     * The returned node is the root of a new tree; the returned node’s parent is always null and its depth is always zero.
     */
    copy(): this;
}