import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { SliderProps, lighten } from '@material-ui/core'
import { Inequality } from './Inequality'
import { Tooltip } from './Tooltip'
import { Container, Header, VariableName, PillLabel, ScaleContainer, ScaleSlider } from './ScaleGenericStyles'

interface ScaleProps {
  name: string
  label?: string
  tooltipLabel: string
  color: string
  $backgroundColor: string
  secondValue?: number
  sliderProps?: SliderProps
}

const VISIBILITY_HACK = 0.25

function alterValuesForVisibilityHack(value: SliderProps['value']): SliderProps['value'] {
  if (!Array.isArray(value)) return value
  return [value[0] - VISIBILITY_HACK, value[1] + VISIBILITY_HACK]
}

export const Scale: React.FC<ScaleProps> = ({
  name,
  label,
  tooltipLabel,
  color,
  $backgroundColor,
  secondValue,
  sliderProps,
}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const value = useMemo(() => alterValuesForVisibilityHack(sliderProps?.value), [sliderProps?.value])
  const indexOfZeroMark = useMemo(() => {
    if (!Array.isArray(sliderProps?.marks)) return 5
    return sliderProps?.marks.findIndex(({ value }) => value === 0) ?? 5
  }, [sliderProps?.marks])

  const toggleTooltip = (show: boolean) => () => setShowTooltip(show)

  return (
    <div className='scale-generic'>
      <div className='scale-header'>
        <span className='variable-name'>{name.trim()}:</span>
        {label && (
          <PillLabel color={color} $backgroundColor={$backgroundColor}>
            {label}
          </PillLabel>
        )}
      </div>
      <ScaleContainer onMouseEnter={toggleTooltip(true)} onMouseLeave={toggleTooltip(false)}>
        <Inequality
          value={sliderProps?.value}
          min={sliderProps?.min}
          max={sliderProps?.max}
          side="left"
          $backgroundColor={$backgroundColor}
        />
        <Div>
          <StyledScaleSlider
            {...sliderProps}
            value={value}
            valueLabelDisplay={showTooltip ? 'on' : 'off'}
            ValueLabelComponent={(props: any) => (
              <Tooltip {...props} label={tooltipLabel} color={$backgroundColor} sliderValue={value} />
            )}
            $indexOfZeroMark={indexOfZeroMark}
            $trackColor={$backgroundColor}
          />
          {secondValue && (
            <SecondValueScale
              {...sliderProps}
              value={secondValue + VISIBILITY_HACK}
              $indexOfZeroMark={indexOfZeroMark}
              $trackColor={lighten($backgroundColor, 0.6)}
              $showTrackOnly
            />
          )}
        </Div>
        <Inequality
          value={sliderProps?.value}
          min={sliderProps?.min}
          max={sliderProps?.max}
          side="right"
          $backgroundColor={$backgroundColor}
        />
      </ScaleContainer>
    </div>
  )
}

const Div = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
`

const StyledScaleSlider = styled(ScaleSlider)`
  flex: 1;
`

const SecondValueScale = styled(ScaleSlider)`
  flex: 1;
  position: absolute;
  z-index: 1;
  opacity: 0.8;
`
