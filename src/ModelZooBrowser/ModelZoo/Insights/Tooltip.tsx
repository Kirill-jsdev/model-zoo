//THIS COMPONENT WILL BE REMOVED
import React from 'react'
import styled from 'styled-components'
import { Tooltip as MUITooltip, ValueLabelProps, SliderProps } from '@material-ui/core'
import { color } from '../../Utilities/color'

interface Color {
  color: string
}

export interface TooltipData extends Color {
  label: string
}

interface BasicTooltipProps extends Omit<ValueLabelProps, 'color'>, TooltipData {
  sliderValue: SliderProps['value']
  className?: string
}

function shouldDisplay(value: number, originalSliderValue: SliderProps['value']): boolean {
  if (!Array.isArray(originalSliderValue)) return true
  if (value === -10 || value === 10) return false
  return value > originalSliderValue[0]
}

const ConfiguredTooltip: React.FC<BasicTooltipProps> = ({ className, sliderValue, label, ...props }) => {
  if (!shouldDisplay(props.value, sliderValue)) return null
  return <MUITooltip classes={{ popper: className }} enterTouchDelay={0} placement="top" title={label} {...props} />
}

export const Tooltip = styled(ConfiguredTooltip)<Color>`
  & .MuiTooltip-tooltipPlacementTop {
    margin: 0.25rem;
  }
  & .MuiTooltip-tooltip {
    display: flex;
    font-size: 0.75rem;
    line-height: 0.9375rem;
    padding: 0.375rem 0.625rem 0.4375rem 0.4375rem;
    color: ${color.black};
    background-color: ${color.white};
    border-radius: 0.875rem;
    font-weight: 700;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

    &::before {
      content: ' ';
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-right: 0.4375rem;
      border-radius: 0.5rem;
      background-color: ${(props) => props.color};
    }
  }
`
