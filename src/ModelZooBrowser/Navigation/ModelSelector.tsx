import React, {useMemo, useState, useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import styled from 'styled-components'
import { ModelSelectButton } from './Button'

import { mapVariablePropertiesToTreemapNodes, getVariablePropertiesSum, getTreemapFromModels, mapVariablePropertiesToTerms } from '../Utilities/helpers'

//These imports will be deleted later
// import { useModelSelector } from 'src/context/DetectionResults'
// import { fakeModels as models, wholeModel } from '../../API/fake-data'
// import { fakeModelTwoo } from '../../API/fake-data-two'
// const fakeModelsTwoo = fakeModelTwoo?.model?.normalBehaviorModel?.models

const Container: React.FC<{ dailyCycle: boolean }> = ({ children, dailyCycle }) =>
  dailyCycle ? (
    <DailyModelsContainer>{children}</DailyModelsContainer>
  ) : (
    <NonDailyModelsContainer>{children}</NonDailyModelsContainer>
  )

export const ModelSelector: React.FC = () => {
  //   const { isDailyCycle, selectModel, selectedModelIndex, options } = useModelSelector()

  //My code goes here

  const {selectedModelIndex, setSelectedModelIndex, isDailyCycle} = useMyDetectionModelResult()

  const options = useModelOptions()
  if (typeof options === 'undefined') return <></>

  console.log('HERE selectedModelIndex', selectedModelIndex)
  console.log('HERE setSelectedModelIndex', setSelectedModelIndex)
  console.log('HERE isDailyCycle', isDailyCycle)
  console.log('options calculated', options)

  return (
    <Sidebar>
      <Container dailyCycle={isDailyCycle}>
        {options.map(({ option, value }) => (
          <ModelSelectButton
            key={`${option}-${value}`}
            text={option}
            onClick={() => setSelectedModelIndex(value)}
            isSelected={value === 0}
            isDailyCycle={isDailyCycle}
          />
        ))}
      </Container>
    </Sidebar>
  )
}

const Sidebar = styled.aside`
  flex: 1;
  padding: 0.75rem 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`

const DailyModelsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0.5rem;

  & > * {
    &:nth-child(odd) {
      margin-right: 0.5rem;
    }
  }
`

const NonDailyModelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`


////Fake data with functions for ModelSelector

// export function useModelSelector(): UseModelSelector {
//   const { models, ...forecastingResults } = useDetectionResults()

//   console.log('MODELS THAT I NEED RIGHT NOW', models)

//   const options = useMemo<ModelOption[]>(() => {
//     return models.map(({ index, dayTime }) => ({
//       value: index,
//       option: dayTime ? dayTime : `Index ${index}`,
//     }))
//   }, [models])

//   return { options, ...forecastingResults }
// }

//Custom function extracted from the function above

type ModelOption = {
  value: number
  option: string
}

const useModelOptions = () => {

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

///Extract other options: selectModel, selectedModelIndex, isDylyCycle

// const modelResult = useMemo(() => {
//   console.log('SELECTED JOB MODEL I NEED', selectedJobModel)
//   if (parentJobModel.data) return parentJobModel
//   if (selectedJobModel.data) return selectedJobModel
//   return { data: undefined, isLoading: false, isError: false }
// }, [parentJobModel, selectedJobModel])

// const detectionModelResult = useDetectionModelResult(modelResult.data, selectedModelIndex)

export function useDetectionModelResult(
  model: any,
  selectedModelIndex: number | undefined,
): any {
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

  return {
    models,
    isDailyCycle,
    variableImportancesModel,
    selectedModelTreemapNodes,
    selectedModelTerms,
    isUnRelatedModel,
  }
}


export const useMyDetectionModelResult = () => {

  const {model, onSelectedModelIndexChange} = useContext(ModelZooBrowserContext)

  const [selectedModelIndex, setSelectedModelIndex] = useState(1)

  onSelectedModelIndexChange(selectedModelIndex)

  const detectionModelResult = useDetectionModelResult(model, selectedModelIndex)
  const isDailyCycle = detectionModelResult.isDailyCycle

  return {selectedModelIndex, setSelectedModelIndex, isDailyCycle, detectionModelResult}
}



