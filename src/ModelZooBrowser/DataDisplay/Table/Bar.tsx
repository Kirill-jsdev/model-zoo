import React, { useMemo } from 'react'
import styled from 'styled-components'
import { lighten } from '@material-ui/core'

interface BarProps {
  biggestValue: number
  value: number
  colors: string[]
}

interface RectangleProps {
  left: number
  width: number
  $backgroundColor: string
}

export const Bar: React.FC<BarProps> = ({ biggestValue, value, colors }) => {
  const ratio = useMemo(() => (Math.abs(value) / biggestValue) * 100, [biggestValue, value])

  const getRectangleProps = (color: string, index: number) => {
    const numberOfRectangles = colors.length
    const width = ratio / numberOfRectangles
    const leftOffset = index * width
    return { width, left: leftOffset }
  }

  return (
    <Container>
      {colors.map((color, index) => (
        <Rectangle
          key={`model-zoo-table--bar-${value}--${color}-${index}`}
          $backgroundColor={lighten(color, 0.4)}
          {...getRectangleProps(color, index)}
        />
      ))}

      <Text>{Math.round(value * 1000) / 1000}</Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`

const Rectangle = styled.span<RectangleProps>`
  position: absolute;
  height: 100%;
  left: ${({ left }) => `${left}%`};
  z-index: 1;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  width: ${({ width }) => `${width}%`};
`

const Text = styled.span`
  padding-left: 0.25rem;
  z-index: 2;
`
