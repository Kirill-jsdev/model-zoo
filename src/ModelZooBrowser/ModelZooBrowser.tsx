import React from 'react'
import './ModelZooBrowser.css'
import { Navigation } from './Navigation/Navigation'
import { buildPredictorPalette } from './Utilities/helpers'

import { ModelZooBrowserContextProvider } from './Context/ModelZooBrowserContextProvider'
import ModelZooBrowserWrapper from './ModelZooBrowserWrapper'
import { Insights } from './Insights/Insights'
import DataDisplay from './DataDisplay/DataDisplay'
import DataInfo from './DataDisplay/DataInfo/DataInfo'

const ModelZooBrowser: React.FC<any> = ({model, dataset}) => {

    const variablesWithColors = buildPredictorPalette(dataset.variables)

    return (
    <ModelZooBrowserContextProvider>
        <ModelZooBrowserWrapper model={model} variablesWithColors={variablesWithColors} dataset={dataset}>
            <div className="model-zoo-browser">
                <div className='navigation'>
                    <Navigation />
                </div>
                <div className="data-visualization">
                    <DataInfo />
                    <DataDisplay />
                </div>
                <div className='insights'>
                    <Insights />
                </div>
            </div>
        </ModelZooBrowserWrapper>
    </ModelZooBrowserContextProvider>
  );
}

export default ModelZooBrowser