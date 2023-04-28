import React from 'react'
// import { faClock, faWaveSine } from '@fortawesome/pro-solid-svg-icons'
import { color } from '../color'
import { PillButton, PillButtonProps } from './Pill/Pill'

type Selected = { isSelected?: boolean }

interface ModelSelectButtonProps extends Omit<PillButtonProps, 'icon' | 'color' | 'textColor'>, Selected {
  isDailyCycle?: boolean
}

export const ModelSelectButton: React.FC<ModelSelectButtonProps> = ({
  isDailyCycle = false,
  isSelected = false,
  text,
  ...props
}) => (
  <PillButton
    // icon={isDailyCycle ? faClock : faWaveSine}
    text={isDailyCycle ? text.split(/:|\./).slice(0, 3).join(':') : text}
    color={isSelected ? color.main.tertiary : color.shades.smoke.l}
    textColor={isSelected ? color.shades.smoke.ll : color.main.tertiary}
    {...props}
  />
)
