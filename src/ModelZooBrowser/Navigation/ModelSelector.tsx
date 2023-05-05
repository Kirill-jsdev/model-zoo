import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import styled from 'styled-components'
import { ModelSelectButton } from './Button'
import { useModelOptions, useDetectionModelResult } from '../Hooksnew'

const Container: React.FC<{ dailyCycle: boolean }> = ({ children, dailyCycle }) =>
  dailyCycle ? (
    <DailyModelsContainer>{children}</DailyModelsContainer>
  ) : (
    <NonDailyModelsContainer>{children}</NonDailyModelsContainer>
  )

export const ModelSelector: React.FC = () => {

  const {selectedModelIndex, onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)
  const detectionModelResult = useDetectionModelResult(model, selectedModelIndex)
  const options = useModelOptions()

  if (typeof options === 'undefined') return <></>

  return (
    <Sidebar>
      <Container dailyCycle={detectionModelResult.isDailyCycle}>
        {options.map(({ option, value }) => (
          <ModelSelectButton
            key={`${option}-${value}`}
            text={option}
            onClick={() => onSelectedModelIndexChange(value)}
            isSelected={value === 0}
            isDailyCycle={detectionModelResult.isDailyCycle}
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