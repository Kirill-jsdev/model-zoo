import React from 'react'
import Treemap from './Treemap'
import { getTreemapFromModels, buildPredictorPalette } from './helpers'

const ModelZoo: React.FC<any> = ({models, variables}) => {

    const selectedModelTreemapNodes = getTreemapFromModels(models, 0, true)
    const predictorPalette = buildPredictorPalette(variables)

    return <Treemap treemap={selectedModelTreemapNodes} predictorPalette={predictorPalette}/>
}

export default ModelZoo