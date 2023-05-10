import React from 'react'
import styled from 'styled-components'
import { SliderProps } from '@material-ui/core'

interface InequalityProps {
  value?: number | number[]
  $backgroundColor: string
  side: 'left' | 'right'
  min: SliderProps['min']
  max: SliderProps['max']
}

function shouldShowInequality(value: number | number[], side: 'left' | 'right', max = 10, min = -1) {
  if (Array.isArray(value) && side === 'left') return value[0] < min
  if (Array.isArray(value) && side === 'right') return value[1] > max
  if (!Array.isArray(value) && side === 'left') return value < min
  if (!Array.isArray(value) && side === 'right') return value > max
  return false
}

export const Inequality: React.FC<InequalityProps> = ({ value, $backgroundColor, side, max, min }) => {
  if (value === undefined) return <Container />
  return (
    <Container>
      {shouldShowInequality(value, side, max, min) && (
        <InequalityContainer $backgroundColor={$backgroundColor}>
          <div />
          <div />
        </InequalityContainer>
      )}
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  width: 1.5rem;
`

const InequalityContainer = styled.div<{ $backgroundColor: string }>`
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  > div {
    width: 30%;
    height: 0.3125rem;
    border-radius: 2px;
    background-color: ${({ $backgroundColor }) => $backgroundColor};
  }
`
