import React, { useMemo } from 'react'
import styled from 'styled-components'
import { color } from '../Utilities/color'
// import { checkForVariableInTerm } from 'src/pure/ModelZoo'
import { useSelectedDatasetVersion } from 'src/context/Dataset'
import { useDetectionResults } from 'src/context/DetectionResults'
import { GraphPillButton } from 'src/components/atoms/Button/Pill/Graph'


import {getPartLabel} from '../Utilities/helpers'
import {Term} from './Types'

export const UnusedVariables: React.FC = () => {
  const { variablesWithColors } = useSelectedDatasetVersion()
  const { selectedModelTerms = [] } = useDetectionResults()

  const unusedVariables = useMemo(() => {
    return variablesWithColors.filter(({ variable }) => !selectedModelTerms.some(checkForVariableInTerm(variable)))
  }, [variablesWithColors, selectedModelTerms])

  return (
    <>
      <StyledH6>Unused variables</StyledH6>
      <Info>
        {unusedVariables.length > 0
          ? unusedVariables.map(({ variable, color }, index) => (
              <GraphPillButton
                key={`model-zoo-browser--insights-unused-variable-${variable}--${index}`}
                color={color}
                text={variable}
              />
            ))
          : 'All variables were used.'}
      </Info>
    </>
  )
}

const StyledH6 = styled.h6`
  margin: 0 0 1rem 0;
  color: ${color.black};
  font-size: 1rem;
  text-transform: capitalize;
  font-weight: 700;
`

const Info = styled.div`
  padding-left: 0.5rem;
  pointer-events: none;
  font-size: 0.75rem;

  & > * {
    margin-bottom: 0.375rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`


//GUARDS AND HELPERS

function variableOccursInTerm(variable: string, { parts }: Term) {
    return parts.map((p) => getPartLabel(p, noFormatter)).some((part) => part.includes(variable))
  }

export function checkForVariableInTerm(variable: string): (term: Term) => boolean {
    return (term: Term) => Boolean(variableOccursInTerm(variable, term) && term.importance)
  }