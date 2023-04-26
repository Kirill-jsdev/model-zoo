import React from 'react'
import TreemapChartProvider from './TreemapChartProvider'
import { getTreemapFromModels } from './helpers'

const Treemap: React.FC<any> = ({models, variables}) => {

    const selectedModelTreemapNodes = getTreemapFromModels(models, 0, true)

    return <TreemapChartProvider treemap={selectedModelTreemapNodes} predictorPalette={variables}/>

}

export default Treemap