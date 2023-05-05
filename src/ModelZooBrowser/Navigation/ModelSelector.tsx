import React from 'react'
import styled from 'styled-components'
import { ModelSelectButton } from './Button'
import { useModelOptions, useMyDetectionModelResult } from '../Hooksnew'

const Container: React.FC<{ dailyCycle: boolean }> = ({ children, dailyCycle }) =>
  dailyCycle ? (
    <DailyModelsContainer>{children}</DailyModelsContainer>
  ) : (
    <NonDailyModelsContainer>{children}</NonDailyModelsContainer>
  )

export const ModelSelector: React.FC = () => {

  const {setSelectedModelIndex, isDailyCycle} = useMyDetectionModelResult()

  const options = useModelOptions()
  if (typeof options === 'undefined') return <></>

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