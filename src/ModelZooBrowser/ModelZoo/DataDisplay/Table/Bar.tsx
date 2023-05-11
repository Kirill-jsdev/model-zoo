import React, { useMemo } from 'react'

interface BarProps {
  biggestValue: number
  value: number
  colors: string[]
}

export const Bar: React.FC<BarProps> = ({ biggestValue, value, colors }) => {
  const ratio = useMemo(() => (Math.abs(value) / biggestValue) * 100, [biggestValue, value])

  const getRectangleProps = (color: string, index: number) => {
    const numberOfRectangles = colors.length
    const width = ratio / numberOfRectangles
    const leftOffset = index * width
    return { width, left: leftOffset }
  }

  const bars = colors.map((color, index): JSX.Element => {
    const {width, left} = getRectangleProps(color, index)
    const styles: React.CSSProperties = {
      position: 'absolute',
      height: '100%',
      zIndex: '1',
      backgroundColor: color,
      width: `${width}%`,
      left: `${left}%`
    }
    return <div style={styles}></div>
  })

  return (
    <div className='bar'>
      { bars }
      <span className='bar-caption'>{Math.round(value * 1000) / 1000}</span>
    </div>
  )
}