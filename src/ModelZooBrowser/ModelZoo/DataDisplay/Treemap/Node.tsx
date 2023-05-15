import React from 'react'
import { Group } from '@visx/group'
import { TreemapNode } from '../../../Utilities/Types'
import { COLOR_TO_TEXT_COLOR_MAP } from '../../../Utilities/color'
import { lightenColor } from '../../../Utilities/helpers'

type NodeColors = {
  background: string
  text: string
}

interface NodeProps {
  depth: number
  width: number
  height: number
  data: TreemapNode
  color: string
  hoveringLabel: string | null
  nodesToHighlight?: string[]
  hoverHandler: (e: React.PointerEvent<SVGRectElement>, node: TreemapNode, depth: number) => void
  leaveHandler: () => void
  onNodeClick?: (node: string) => void
}

const shouldEmphasize = (data: TreemapNode, depth: number, label: string | null): boolean => {
  if (!label) return false
  switch (depth) {
    case 1:
      return data.label.toLowerCase() === label.toLowerCase()
    case 2:
      if (!data.parentLabel) return false
      return data.parentLabel.toLowerCase() === label.toLowerCase()
    case 0:
    default:
      return false
  }
}

function getHoverColors(nodeColor: string, data: TreemapNode, depth: number, hoveringLabel: string): NodeColors {
  const emphasize = shouldEmphasize(data, depth, hoveringLabel)

  const hoverColor = emphasize ? nodeColor : lightenColor(nodeColor, 20)
  const nodeTextColor = COLOR_TO_TEXT_COLOR_MAP[nodeColor] ?? '#EBECF0'
  const textColor = emphasize ? nodeTextColor : lightenColor(nodeTextColor, 20)

  return { background: hoverColor, text: textColor }
}

function getColors(nodeColor: string, data: TreemapNode, depth: number, nodesToHighlight: string[]): NodeColors {
  const nodeTextColor = COLOR_TO_TEXT_COLOR_MAP[nodeColor] ?? '#EBECF0'
  const lightTextColor = lightenColor(nodeTextColor, 20)

  if (nodesToHighlight.length === 0) return { background: nodeColor, text: lightTextColor }

  const emphasize = nodesToHighlight.some((n) => shouldEmphasize(data, depth, n))
  const background = emphasize ? nodeColor : lightenColor(nodeColor, 20)
  const text = emphasize ? nodeTextColor : lightTextColor

  return { background, text }
}

export const Node: React.FC<NodeProps> = ({
  depth,
  width,
  height,
  data,
  color: nodeColor,
  hoveringLabel,
  hoverHandler,
  leaveHandler,
  nodesToHighlight = [],
  onNodeClick,
}) => {
  const isHovering = Boolean(hoveringLabel)
  const { background: bgColor, text: txtColor } = isHovering
    ? getHoverColors(nodeColor, data, depth, hoveringLabel ?? '')
    : getColors(nodeColor, data, depth, nodesToHighlight)

  const handleNodeClick = () => {
    if (!onNodeClick) return
    switch (depth) {
      case 1:
        onNodeClick(data.label)
        break
      case 2:
        if (!data.parentLabel) return
        onNodeClick(data.parentLabel)
        break
      case 0:
      default:
        break
    }
  }

  return (
    <Group>
      <rect className='rect'
        width={width}
        height={height}
        stroke={'#fff'}
        strokeWidth={depth === 1 ? 2 : 0}
        fill={bgColor}
        onPointerEnter={(e) => hoverHandler(e, data, depth)}
        onPointerLeave={leaveHandler}
        onClick={handleNodeClick}
      />
      <foreignObject width={width} height={height} dominantBaseline="middle" textAnchor="middle">
        <div className='text-container'>
          <p className='text-info' style={{color: txtColor}}>{data.label}</p>
        </div>
      </foreignObject>
    </Group>
  )
}