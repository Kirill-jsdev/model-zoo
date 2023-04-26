import React from 'react'
import TreemapChartProvider from './TreemapChartProvider'
import { getTreemapFromModels, buildPredictorPalette } from './helpers'

const Treemap: React.FC<any> = ({models, variables}) => {

    const selectedModelTreemapNodes = getTreemapFromModels(models, 0, true)
    const predictorPalette = buildPredictorPalette(variables)

    return <div style={{width: 372, height: 488}}>
        <TreemapChartProvider treemap={selectedModelTreemapNodes} predictorPalette={predictorPalette}/>
    </div>
}

export default Treemap