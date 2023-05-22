import { useContext, useMemo } from 'react'
import { ModelOption } from "./Types"
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { getTreemapFromModels, getVariablePropertiesSum, mapVariablePropertiesToTerms, mapVariablePropertiesToTreemapNodes } from './helpers'
import { DetectionModel } from '../ADModelTypes'
import { ForecastModel } from '../FTypes'

export const useModelOptions = () => {

    const {model} = useContext(ModelZooBrowserContext)

    const detectionModel = model as DetectionModel
    const forecastModel = model as ForecastModel

    const models = forecastModel?.model?.modelZoo?.models ?? detectionModel?.model?.normalBehaviorModel?.models

    const options = useMemo<ModelOption[]>(() => {
        if (typeof models === 'undefined') return [];

        return models.map(({ index, dayTime }) => ({
          value: index,
          option: dayTime ? dayTime : `Index ${index}`,
        }));
      }, [models]);

    return options
}

export function useDetectionModelResult() {

    const { onSelectedModelTermsChange, onSelectedModelTreemapNodesChange, model, selectedModelIndex } = useContext(ModelZooBrowserContext)

    const detectionModel = model as DetectionModel
    const forecastModel = model as ForecastModel

    const variableProperties = detectionModel?.model?.normalBehaviorModel?.variableProperties ?? forecastModel?.model?.modelZoo?.variableProperties

    const models = useMemo(() => forecastModel?.model?.modelZoo?.models ?? detectionModel?.model?.normalBehaviorModel?.models ?? [], [detectionModel?.model?.normalBehaviorModel?.models, forecastModel?.model?.modelZoo?.models])
    const isDailyCycle = useMemo(() => models.some(({ dayTime }) => typeof dayTime === 'string'), [models])

    const variableImportancesModel = useMemo(() => {
        if (!variableProperties) return []
        return mapVariablePropertiesToTreemapNodes(variableProperties ?? [])
    }, [variableProperties])

    const variablesImportancesSum = useMemo(() => {
        return getVariablePropertiesSum(variableImportancesModel)
    }, [variableImportancesModel])

    const isUnRelatedModel = useMemo(() => {
        if (!models) return //Might be better to check the length of an array
        if (!variableProperties) return
        return variablesImportancesSum === 0
    }, [models, variableProperties, variablesImportancesSum])

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
        return mapVariablePropertiesToTerms(variableProperties ?? [])
    }, [models, isUnRelatedModel, selectedModelIndex, variableProperties])

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
    const detectionModel = model as DetectionModel
    const targetColumn = detectionModel?.model?.settings?.data?.KPIColumn
     // eslint-disable-next-line
    const target = targetColumn ? variablesWithColors!.find((v: any) => v.name === targetColumn) : undefined
    return target
}
