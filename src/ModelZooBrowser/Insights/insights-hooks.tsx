import {useMemo} from 'react'

export type VariableOffsets = {
    variable: string
    usedOffsets?: { from: number; to: number }
}

export type ModelVariableOffset = {
    name: string
    dataFrom: number
    dataTo: number
}

export function useSelectedModelOffsets(variablesWithColors: any, selectedModelIndex: any, model: any): VariableOffsets[] {

    return useMemo(() => {
      const selectedModel = model?.model.normalBehaviorModel.models.find(({ index }: {index: number}) => index === selectedModelIndex)
      if (!selectedModel) return []

      return variablesWithColors.reduce((acc: any, { variable }: {variable: any}) => {
        const offsets = selectedModel.variableOffsets.find(({ name }: {name: any}) => name === variable)
        const variableOffset = {
          variable,
          usedOffsets: offsets ? transformModelVariableOffset(offsets) : undefined,
        }

        return [...acc, variableOffset]
      }, [])
    }, [model, selectedModelIndex, variablesWithColors])
  }

  function transformModelVariableOffset({ dataFrom, dataTo }: ModelVariableOffset): VariableOffsets['usedOffsets'] {
    return { from: dataFrom, to: dataTo }
  }