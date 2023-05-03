import React, {useContext} from 'react'
import TreemapChartProvider from './TreemapChartProvider'

import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'

import { useDetectionModelResult } from '../Navigation/ModelSelector'

const Treemap: React.FC<any> = ({models, variables}) => {

    const {model, selectedModelIndex} = useContext(ModelZooBrowserContext)
    const { selectedModelTreemapNodes } = useDetectionModelResult(model, selectedModelIndex)

    return <TreemapChartProvider treemap={selectedModelTreemapNodes ?? []} predictorPalette={variables}/>

}

export default Treemap