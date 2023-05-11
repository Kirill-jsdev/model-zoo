import React, { useMemo, useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import {getPartLabel} from '../../Utilities/helpers'
import {Term} from '../../Utilities/Types'
import { WaveIcon } from '../../assets/DownloadIcon'
// import 

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
      <h6 className='insights-subheader'>Unused variables</h6>
      <div className='unusedvars-container'>
        {unusedVariables.length > 0
          ? unusedVariables.map(({ variable, color }: {variable: any, color: any}, index: any) => (
              <div key={`${color}-unused-${variable}`} className='unused-var'>
                <WaveIcon />
                {variable}
                <div className='dot' style={{backgroundColor: color}}></div>
              </div>
            ))
          : 'All variables were used.'}
      </div>
    </>
  )
}

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