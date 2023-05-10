import React from 'react'
import { SliderProps } from '@material-ui/core'

interface InequalityProps {
  value?: number | number[]
  $backgroundColor: string
  side: 'left' | 'right'
  min: SliderProps['min']
  max: SliderProps['max']
}

function shouldShowInequality(value: number | number[], side: 'left' | 'right', max = 10, min = -1) {
  if (Array.isArray(value) && side === 'left') return value[0] < min
  if (Array.isArray(value) && side === 'right') return value[1] > max
  if (!Array.isArray(value) && side === 'left') return value < min
  if (!Array.isArray(value) && side === 'right') return value > max
  return false
}

export const Inequality: React.FC<InequalityProps> = ({ value, $backgroundColor, side, max, min }) => {
  if (value === undefined) return <div className='inequality' />
  return (
    <div className='inequality'>
      {shouldShowInequality(value, side, max, min) && (
        <div className='inequality-container'>
          <div className='iq-dot' style={{backgroundColor: $backgroundColor}}/>
          <div className='iq-dot' style={{backgroundColor: $backgroundColor}}/>
        </div>
      )}
    </div>
  )
}
