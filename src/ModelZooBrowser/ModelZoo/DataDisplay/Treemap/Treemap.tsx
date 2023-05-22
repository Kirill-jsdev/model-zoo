import React, {useContext} from 'react'
import TreemapChartProvider from './TreemapChartProvider'

import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'

const Treemap: React.FC = () => {
    const {variablesWithColors, selectedModelTreemapNodes } = useContext(ModelZooBrowserContext)

    return <TreemapChartProvider treemap={selectedModelTreemapNodes ?? []} predictorPalette={variablesWithColors}/>
}

export default Treemap