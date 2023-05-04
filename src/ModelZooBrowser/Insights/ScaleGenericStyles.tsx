import { SliderProps } from '@material-ui/core'
import styled from 'styled-components'
import { Slider } from '@material-ui/core'
// import { trackRadius } from './Utils'
import { color } from '../Utilities/color'

interface ScaleSliderProps {
  $indexOfZeroMark: number
  $showTrackOnly?: boolean
  $trackColor: string
}

interface PillLabelProps {
  color: string
  $backgroundColor: string
}

export const Container = styled.div`
  margin-left: 0.125rem;
`

export const Header = styled.div`
  display: flex;
  margin-bottom: 0;
  justify-content: space-between;
`

export const VariableName = styled.span`
  color: ${color.black};
  font-size: 0.875rem;
  font-weight: 400;
`

export const PillLabel = styled.span<PillLabelProps>`
  height: 1.1rem;
  display: flex;
  align-items: center;
  padding: 0 0.35rem;
  font-size: 0.65rem;
  border-radius: 5px;
  pointer-events: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  font-weight: 700;

  color: ${({ color }) => color};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`

export const ScaleContainer = styled.div`
  display: flex;
  margin-left: -1rem;
  margin-right: -1.5rem;
  align-items: center;
  justify-content: space-around;
`

export const ScaleSlider = styled(Slider)<ScaleSliderProps>`
  flex: 1;
  margin: 0;
  display: flex;
  align-items: center;
  pointer-events: none;

  & .MuiSlider-thumb {
    visibility: hidden;
  }
  & .MuiSlider-track {
    height: 0.3125rem;
    z-index: 4;
    border-radius: ${(props) => trackRadius(props)};
    background-color: ${({ $trackColor }) => $trackColor};
  }
  & .MuiSlider-rail {
    ${({ $showTrackOnly }) => $showTrackOnly && `visibility: hidden;`}
    height: 2px;
    opacity: 1;
    z-index: 1;
    background-color: ${color.shades.athens.dd};
  }
  & .MuiSlider-markLabel {
    ${({ $showTrackOnly }) => $showTrackOnly && `visibility: hidden;`}
    font-size: 0.625rem;
    line-height: 0;
    color: ${color.shades.athens.ddd};
    font-weight: 700;
  }
  & .MuiSlider-mark {
    ${({ $showTrackOnly }) => $showTrackOnly && `visibility: hidden;`}
    width: 1px;
    height: 0.6rem;
    background-color: ${color.shades.athens.dd};

    ${({ $indexOfZeroMark }) => `
    &[data-index="${$indexOfZeroMark}"] {
      z-index: 3;
      opacity: 1;
      width: 0.25rem;
      height: 0.75rem;
      background-color: ${color.comp.cinnabar};
      margin-left: -0.125rem;
    }
    `}
  }
`



type TrackRadioProps = Pick<SliderProps, 'min' | 'max' | 'value'>

export function trackRadius({ value, min = -10, max = 10 }: TrackRadioProps): string {
  if (!value) return 'unset'
  switch (Array.isArray(value)) {
    case true:
      const left = (value as number[])[0] < min ? '1px' : '3px'
      const right = (value as number[])[1] > max ? '1px' : '3px'
      return `${left} ${right} ${right} ${left}`
    case false:
      return (value as number) > min && value < max ? '1px 3px 3px 1px' : '1px'
    default:
      return 'unset'
  }
}
