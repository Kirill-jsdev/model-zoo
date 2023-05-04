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