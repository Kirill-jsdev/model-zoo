import React, { useMemo } from 'react'
import { Term } from '../../../Utilities/helpers'
import { DatasetVariable } from '../../../Utilities/Types'

import { color } from '../../../Utilities/color'
import { Part } from '../../../Utilities/helpers'
import { standardFormatter } from '../../../Utilities/helpers'
import { getPartLabel, isBetaDictionary, getCoefficient, getTermLabel } from '../../../Utilities/helpers'  //original path: src/pure/ModelZoo
import { useResizeListener } from '../../../Utilities/useResizeListener'
import { Bar } from './Bar'
import { TooltipEnhancedDiv } from './TooltipEnhanced'

type VariablesColors = { variablesColors: DatasetVariable[] }

interface ModelZooTableProps extends VariablesColors {
  className?: string
  terms?: Term[] //should be: Term[]
}

const INDEX = 'Index'
const TERMS = 'Term θ'
const COEFFICIENT = 'Coefficient β'
const IMPORTANCE = 'Importance'

export const ModelZooTable: React.FC<ModelZooTableProps> = ({ className, terms = [], variablesColors }) => {
  const [setTableRef, tableDimensions] = useResizeListener()
  const [setIndexColumnRef, indexColumnDimensions] = useResizeListener()
  const biggestCoefficient = useMemo(() => Math.max(...terms.map(getCoefficient).map(Math.abs)), [terms])
  const biggestImportance = useMemo(() => Math.max(...terms?.map((t) => t.importance ?? 0).map(Math.abs)), [terms])
  const hasCoefficient = useMemo(() => terms.some((term) => getCoefficient(term) !== 0), [terms])

  const tableWidth = useMemo(() => {
    if (!tableDimensions || !indexColumnDimensions) return 0
    return tableDimensions.width - indexColumnDimensions.width
  }, [tableDimensions, indexColumnDimensions])

  const getPartColor = (part: Part) =>
    variablesColors.find(({ variable }) => getPartLabel(part, standardFormatter).includes(variable))?.color ??
    color.shades.smoke.l

  const getColors = (term: Term) => term.parts.filter((part) => !isBetaDictionary(part)).map(getPartColor)

  const compare = (a: Term, b: Term) => (b.importance ?? 0) - (a.importance ?? 0)

  return (
    <div className={`table-container ${className}`} ref={setTableRef}>
      <table aria-label="terms table">
        <thead>
          <tr>
            <td className='index-cell'>{INDEX}</td>
            <td className='terms-cell'>{TERMS}</td>
            {hasCoefficient && <td className='coefficient-cell'>{COEFFICIENT}</td>}
            <td className='importance-cell'>{IMPORTANCE}</td>
          </tr>
        </thead>
        <tbody>
          {terms?.sort(compare).map((term, index) => {
            const termLabel = getTermLabel(term)
            const colors = getColors(term)
            const coefficient = getCoefficient(term) ?? 0
            const importance = term.importance ?? 0

            return (
              <tr key={`mzb-table-body-${index}`}>
                <td className='index-cell' ref={setIndexColumnRef}>{index + 1}</td>
                <td className='terms-cell' style={{width: tableWidth}}>
                  <TooltipEnhancedDiv TooltipProps={{ title: termLabel }}>{termLabel}</TooltipEnhancedDiv>
                </td>
                {hasCoefficient && (
                  <td className='coefficient-cell'>
                    <Bar biggestValue={biggestCoefficient} value={coefficient} colors={colors} />
                  </td>
                )}
                <td className='importance-cell'>
                  <Bar biggestValue={biggestImportance} value={importance} colors={colors} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}