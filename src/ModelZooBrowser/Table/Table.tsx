import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, lighten } from '@material-ui/core'
import { Term } from '../Utilities/helpers'
import { DatasetVariable } from '../Utilities/Types'

import { color } from '../Utilities/color'
import { Part } from '../Utilities/helpers'
import { standardFormatter } from '../Utilities/helpers'
import { getPartLabel, isBetaDictionary, getCoefficient, getTermLabel } from '../Utilities/helpers'  //original path: src/pure/ModelZoo
import { useResizeListener } from '../Utilities/useResizeListener'
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

const BORDER_COLOR = lighten(color.shades.tertiary.llll, 0.9)

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
    <TableContainer className={className} ref={setTableRef}>
      <StyledTable aria-label="terms table" stickyHeader>
        <TableHead>
          <TableRow>
            <IndexTableCell>{INDEX}</IndexTableCell>
            <StyledTableCell>{TERMS}</StyledTableCell>
            {hasCoefficient && <MinWidthTableCell>{COEFFICIENT}</MinWidthTableCell>}
            <MinWidthTableCell>{IMPORTANCE}</MinWidthTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {terms?.sort(compare).map((term, index) => {
            const termLabel = getTermLabel(term)
            const colors = getColors(term)
            const coefficient = getCoefficient(term) ?? 0
            const importance = term.importance ?? 0

            return (
              <StyledTableRow key={`mzb-table-body-${index}`}>
                <IndexTableCell ref={setIndexColumnRef}>{index + 1}</IndexTableCell>
                <TermTableCell tableWidth={tableWidth}>
                  <TooltipEnhancedDiv TooltipProps={{ title: termLabel }}>{termLabel}</TooltipEnhancedDiv>
                </TermTableCell>
                {hasCoefficient && (
                  <StyledTableCell>
                    <Bar biggestValue={biggestCoefficient} value={coefficient} colors={colors} />
                  </StyledTableCell>
                )}
                <StyledTableCell>
                  <Bar biggestValue={biggestImportance} value={importance} colors={colors} />
                </StyledTableCell>
              </StyledTableRow>
            )
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

const StyledTable = styled(Table)`
  .MuiTableCell-head {
    height: 2.5rem;
    z-index: 5;
    padding-left: 0.5rem;
    color: ${color.white};
    background-color: ${color.shades.tertiary.llll};
  }
  .MuiTableCell-body {
    color: ${color.main.secondary};
  }
`

const StyledTableRow = styled(TableRow)`
  height: 2.1875rem;

  & > * {
    border-right: 1px solid ${BORDER_COLOR};
    border-bottom: 1px solid ${BORDER_COLOR};

    &:first-child {
      border-left: 1px solid ${BORDER_COLOR};
    }
  }
`

const StyledTableCell = styled(TableCell)`
  font-size: 0.875rem;
  padding: 0.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const IndexTableCell = styled(StyledTableCell)`
  width: 3.5rem;
`

const MinWidthTableCell = styled(StyledTableCell)`
  min-width: 6rem;
`

const TermTableCell = styled(MinWidthTableCell)<{ tableWidth: number }>`
  padding-right: 2rem;
  max-width: ${({ tableWidth }) => `calc(${tableWidth}px - 13rem)`};
  font-weight: 700;
`