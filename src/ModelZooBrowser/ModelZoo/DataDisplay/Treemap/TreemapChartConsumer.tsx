import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import { Group } from '@visx/group'
import { Treemap, treemapSquarify } from '@visx/hierarchy'
import { TreemapNode, Direction } from '../../../Utilities/Types'
import { useResizeListener } from '../../../Utilities/useResizeListener'
import { Node } from './Node'
import { Hierarchy, Data, MergedRef } from '../../../Utilities/Types'
import NodeWrapper from './NodeWrapper'

export interface TooltipDataProps {
  term: string
  importance: number
  coefficient?: number
  color: string
}

interface TreemapChartProps {
  className?: string
  root: Hierarchy
  margin: Direction
  tooltipData: TooltipDataProps
  hoveringLabel: string | null
  nodesToHighlight?: string[]
  isLeaf: (height: number) => boolean
  getColor: (label: string) => string
  hoverHandler: (event: React.PointerEvent<SVGRectElement>, node: TreemapNode, depth: number) => void
  leaveHandler: () => void
  onNodeClick?: (node: string) => void
}

export const TreemapChartConsumer = forwardRef<MergedRef, TreemapChartProps>(
  (
    {
      className,
      root,
      margin,
      tooltipData,
      hoveringLabel,
      nodesToHighlight = [],
      isLeaf,
      getColor,
      hoverHandler,
      leaveHandler,
      onNodeClick,
    },
    ref,
  ) => {
    const [setDimensionsRef, dimensions] = useResizeListener()
    const svgRef = useRef<SVGSVGElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      getSvgRef: () => svgRef.current,
      getTooltipRef: () => tooltipRef.current,
    }))

    return (
      <div className={`treemap-container ${className}`} ref={setDimensionsRef}>
        <NodeWrapper {...tooltipData}>
          <svg className='treemap-svg' ref={svgRef}>
            <Treemap<Data>
              top={margin.top}
              root={root}
              size={[dimensions?.width ?? 0, dimensions?.height ?? 0]}
              tile={treemapSquarify}
              round
            >
              {(treemap) => (
                <Group>
                  {treemap
                    .descendants()
                    .reverse()
                    .map((node) => (
                      <Group
                        key={`Group-${node.data.data.parentLabel}-${node.data.data.label}`}
                        top={node.y0 + margin.top}
                        left={node.x0 + margin.left}
                      >
                        {isLeaf(node.height) ? (
                            <Node
                              depth={node.depth}
                              width={node.x1 - node.x0}
                              height={node.y1 - node.y0}
                              data={node.data.data}
                              color={getColor(node.data.data.label)}
                              hoveringLabel={hoveringLabel}
                              hoverHandler={hoverHandler}
                              leaveHandler={leaveHandler}
                              nodesToHighlight={nodesToHighlight}
                              onNodeClick={onNodeClick}
                            />
                        ) : (
                          <rect
                            width={node.x1 - node.x0}
                            height={node.y1 - node.y0}
                            stroke={'#fff'}
                            strokeWidth={2}
                            fill="transparent"
                          />
                        )}
                      </Group>
                    ))}
                </Group>
              )}
            </Treemap>
          </svg>
        </NodeWrapper>
      </div>
    )
  },
)
TreemapChartConsumer.displayName = 'TreemapChartConsumer'