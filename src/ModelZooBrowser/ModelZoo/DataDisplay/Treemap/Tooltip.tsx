import React from 'react'
import styled from 'styled-components'
import { Tooltip as MUITooltip, TooltipProps } from '@material-ui/core'
import { standardFormatter } from '../../../Utilities/number'

type Position = { x: number; y: number }

export interface TooltipDataProps {
  term: string
  importance: number
  coefficient?: number
  color: string
}

interface TreemapTooltipProps extends TooltipDataProps {
  className?: string
  children: TooltipProps['children']
  TooltipProps?: Omit<TooltipProps, 'children' | 'title'>
}

const TooltipData: React.FC<TooltipDataProps> = ({ term, importance, coefficient, color }) => (
  <div style={{display: 'flex', padding: '0.375rem', fontSize: '0.75rem', justifyContent: 'flex-start', color: '#000', backgroundColor: '#fff'}}>
    <span style={{width: '1rem', height: '1rem', borderRadius: '50%', backgroundColor: color}} />
    <div style={{display: 'flex', marginLeft: '0.375rem', flexDirection: 'column', justifyContent: 'flex-start'}}>
      <span className='tooltip-title'>
        <b>{term}</b>
      </span>
      <span style={{marginLeft: '0.25rem'}}>
        Importance: <b>{standardFormatter(importance)}</b>
      </span>
      {typeof coefficient === 'number' && (
        <span style={{marginLeft: '0.25rem'}}>
          Coefficient: <b>{standardFormatter(coefficient)}</b>
        </span>
      )}
    </div>
  </div>
)

const Tooltip: React.FC<TreemapTooltipProps> = ({ children, className, TooltipProps, ...props }) => (
  <MUITooltip {...TooltipProps} classes={{ popper: className }} title={<TooltipData {...props} />} enterTouchDelay={0}>
    {children}
  </MUITooltip>
)

export const TreemapTooltip = styled(Tooltip)<{ $position: Position }>`
  overflow: hidden;
  border-radius: 0.75rem;
  transform: ${({ $position }) =>
    `translateX(-100%) translate3d(${$position.x}px, ${$position.y + 10}px, 0) !important`};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

  & .MuiTooltip-tooltip {
    margin: 0;
    padding: 0;
  }
`