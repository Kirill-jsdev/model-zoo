import React from 'react'
import styled from 'styled-components'
// import { useModelSelector } from 'src/context/DetectionResults'
// import { ModelSelectButton } from './Button'

// const Container: React.FC<{ dailyCycle: boolean }> = ({ children, dailyCycle }) =>
//   dailyCycle ? (
//     <DailyModelsContainer>{children}</DailyModelsContainer>
//   ) : (
//     <NonDailyModelsContainer>{children}</NonDailyModelsContainer>
//   )

export const ModelSelector: React.FC = () => {
//   const { isDailyCycle, selectModel, selectedModelIndex, options } = useModelSelector()

  return (
    <Sidebar>
      {/* <Container dailyCycle={isDailyCycle}>
        {options.map(({ option, value }) => (
          <StyledModelSelectButton
            key={`${option}-${value}`}
            text={option}
            onClick={() => selectModel(value)}
            isSelected={value === selectedModelIndex}
            isDailyCycle={isDailyCycle}
          />
        ))}
      </Container> */}
    </Sidebar>
  )
}

const Sidebar = styled.aside`
  flex: 1;
  padding: 0.75rem 1.5rem;
  overflow-x: hidden;
  overflow-y: auto;
`

// const DailyModelsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding-left: 0.5rem;

//   & > * {
//     &:nth-child(odd) {
//       margin-right: 0.5rem;
//     }
//   }
// `

// const NonDailyModelsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `

// const StyledModelSelectButton = styled(ModelSelectButton)`
//   margin-bottom: 0.25rem;
// `
