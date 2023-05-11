import { useContext, useMemo } from 'react'
import { ModelOption } from "./Types"
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { getTreemapFromModels, getVariablePropertiesSum, mapVariablePropertiesToTerms, mapVariablePropertiesToTreemapNodes } from './helpers'

export const useModelOptions = () => {

    const {model} = useContext(ModelZooBrowserContext)
    const models = model?.model?.normalBehaviorModel?.models

    const options = useMemo<ModelOption[]>(() => {
        if(typeof models === 'undefined') return
        return models.map(({ index, dayTime }: {index: any, dayTime: any}) => ({
        value: index,
        option: dayTime ? dayTime : `Index ${index}`,
        }))
    }, [models])

    return options
}

export function useDetectionModelResult(model: any, selectedModelIndex: number | undefined) {

    const { onSelectedModelTermsChange, onSelectedModelTreemapNodesChange } = useContext(ModelZooBrowserContext)

    const models = useMemo(() => model?.model?.normalBehaviorModel?.models ?? [], [model])
    const isDailyCycle = useMemo(() => models.some(({ dayTime }: { dayTime: any }) => typeof dayTime === 'string'), [models])

    const variableImportancesModel = useMemo(() => {
        if (!model?.model?.normalBehaviorModel?.variableProperties) return []
        return mapVariablePropertiesToTreemapNodes(model?.model?.normalBehaviorModel?.variableProperties ?? [])
    }, [model])

    const variablesImportancesSum = useMemo(() => {
        return getVariablePropertiesSum(variableImportancesModel)
    }, [variableImportancesModel])

    const isUnRelatedModel = useMemo(() => {
        if (!model?.model?.normalBehaviorModel?.models) return
        if (!model.model?.normalBehaviorModel?.variableProperties) return
        return variablesImportancesSum === 0
    }, [model, variablesImportancesSum])

    const selectedModelTreemapNodes = useMemo(() => {
        if (models.length === 0) return
        if (selectedModelIndex) return getTreemapFromModels(models, selectedModelIndex, true)
        if (isUnRelatedModel) return getTreemapFromModels(models, 0, true)
        return variableImportancesModel
    }, [models, isUnRelatedModel, selectedModelIndex, variableImportancesModel])

    const selectedModelTerms = useMemo(() => {
        if (models.length === 0) return
        if (selectedModelIndex) return models.find(({ index }: { index: any }) => index === selectedModelIndex)?.terms
        if (isUnRelatedModel) return models[0]?.terms
        return mapVariablePropertiesToTerms(model?.model?.normalBehaviorModel?.variableProperties ?? [])
    }, [models, isUnRelatedModel, selectedModelIndex, model?.model?.normalBehaviorModel?.variableProperties])

    onSelectedModelTermsChange(selectedModelTerms)
    onSelectedModelTreemapNodesChange(selectedModelTreemapNodes)

    return {
        models,
        isDailyCycle,
        variableImportancesModel,
        selectedModelTreemapNodes,
        selectedModelTerms,
        isUnRelatedModel,
    }
}

//useTarget

export const useTarget = () => {
    const {model, variablesWithColors} = useContext(ModelZooBrowserContext)
    const targetColumn = model?.model?.settings?.data?.KPIColumn
    const target = targetColumn ? variablesWithColors.find((v: any) => v.name === targetColumn) : undefined
    return target
}