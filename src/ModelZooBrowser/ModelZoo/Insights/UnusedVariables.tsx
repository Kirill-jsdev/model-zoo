import React, { useMemo, useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import styled from 'styled-components'
import { color } from '../../Utilities/color'
import {getPartLabel} from '../../Utilities/helpers'
import {Term} from './Types'

export const UnusedVariables: React.FC = () => {

  const { selectedModelTerms, variablesWithColors } = useContext(ModelZooBrowserContext)

  const unusedVariables = useMemo(() => {
    if (variablesWithColors && selectedModelTerms)
      return variablesWithColors.filter(({ variable }: {variable: any}) => !selectedModelTerms.some(checkForVariableInTerm(variable)))
    else
      return []
  }, [variablesWithColors, selectedModelTerms])

  return (
    <>
      <StyledH6>Unused variables</StyledH6>
      <Info>
        {unusedVariables.length > 0
          ? unusedVariables.map(({ variable, color }: {variable: any, color: any}, index: any) => (
              <div key={`${color}-unused-${variable}`} style={{color: color}}>{variable}</div>
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

export function noFormatter(n: number): number {
  return n
}

function variableOccursInTerm(variable: string, { parts }: Term) {
    return parts.map((p) => getPartLabel(p, noFormatter)).some((part) => part.includes(variable))
  }

export function checkForVariableInTerm(variable: string): (term: Term) => boolean {
    return (term: Term) => Boolean(variableOccursInTerm(variable, term) && term.importance)
  }