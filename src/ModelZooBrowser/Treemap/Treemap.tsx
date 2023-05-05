import React, {useContext} from 'react'
import TreemapChartProvider from './TreemapChartProvider'

import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'

import { useDetectionModelResult } from '../Hooksnew'

const Treemap: React.FC<any> = () => {

    const {model, selectedModelIndex, variablesWithColors} = useContext(ModelZooBrowserContext)
    const { selectedModelTreemapNodes } = useDetectionModelResult(model, selectedModelIndex)

    return <TreemapChartProvider treemap={selectedModelTreemapNodes ?? []} predictorPalette={variablesWithColors}/>

}

export default Treemap