import React, { useState, useEffect, useRef, useContext } from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
import { TreemapNode, DatasetVariable, Direction, VariableWithColors } from '../../../Utilities/Types'
import { TreemapChartConsumer } from './TreemapChartConsumer'
import { treemapToHierarchy, hierarchyToRoot, isLeaf, getTooltipData } from '../../../Utilities/Util'
import { Hierarchy, MergedRef } from '../../../Utilities/Types'

export interface TreemapChartProps {
  className?: string
  margin?: Direction
  treemap: TreemapNode[]
  // predictorPalette: DatasetVariable[]
  nodesToHighlight?: string[]
  onNodeClick?: (node: string) => void
  predictorPalette: VariableWithColors[] | undefined
}

const TreemapChartProvider: React.FC<TreemapChartProps> = ({
  className,
  margin = { top: 0, right: 0, bottom: 0, left: 0 },
  treemap,
  predictorPalette,
  nodesToHighlight = [],
  onNodeClick,
}) => {
  const mergedRef = useRef<MergedRef>(null)
  const [root, setRoot] = useState<Hierarchy>()
  const [hoveringLabel, setHoveringLabel] = useState<string | null>(null)

  const { onNodeDataChange } = useContext(ModelZooBrowserContext)

  useEffect(() => {
    try {
      const hierarchy = treemapToHierarchy(treemap)
      setRoot(hierarchyToRoot(hierarchy))
    }
    finally {
        console.log('Treemap component')
    }
  }, [treemap])

  const getColor = (part: string) => {
  // eslint-disable-next-line
   return predictorPalette!.find(({ variable }) => part.includes(variable))?.color ?? '#958CAB'
  }

  const handlePointerMove = (event: React.PointerEvent<SVGRectElement>, node: TreemapNode, depth: number) => {
    const tooltipData = getTooltipData(node, depth, predictorPalette as DatasetVariable[])

    onNodeDataChange(tooltipData)
    setHoveringLabel(tooltipData.term)
  }

  const handlePointerLeave = () => {
    onNodeDataChange(undefined)
    setHoveringLabel(null)
  }

  if (!root) return null

  return (
    <TreemapChartConsumer
      className={className}
      ref={mergedRef}
      root={root}
      margin={margin}
      hoveringLabel={hoveringLabel}
      nodesToHighlight={nodesToHighlight}
      isLeaf={isLeaf}
      getColor={getColor}
      hoverHandler={handlePointerMove}
      leaveHandler={handlePointerLeave}
      onNodeClick={onNodeClick}
    />
  )
}

export default TreemapChartProvider
