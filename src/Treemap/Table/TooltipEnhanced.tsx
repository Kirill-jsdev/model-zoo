import React, { useState } from 'react'
import styled from 'styled-components'
import { Tooltip, TooltipProps } from '@material-ui/core'

interface TooltipEnhancedProps extends Partial<TooltipProps> {
  visible: boolean
}

const TooltipEnhanced: React.FC<TooltipEnhancedProps> = ({ children, visible, title, ...props }) => {
  if (!children || !visible || !title) return children ?? null

  return (
    <Tooltip title={title} {...props}>
      {children}
    </Tooltip>
  )
}

interface TooltipEnhancedDivProps {
  TooltipProps: Omit<TooltipProps, 'children'>
}

export const TooltipEnhancedDiv: React.FC<TooltipEnhancedDivProps> = ({ children, TooltipProps, ...props }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const element = event.currentTarget
    if (element.scrollWidth > element.clientWidth) setShowTooltip(true)
  }

  const handleMouseLeave = () => setShowTooltip(false)

  return (
    <TooltipEnhanced visible={showTooltip} {...TooltipProps}>
      <Div {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </Div>
    </TooltipEnhanced>
  )
}

const Div = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
