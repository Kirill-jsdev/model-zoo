import React from 'react'
import './ModelZooBrowser.css'
import { buildPredictorPalette } from './Utilities/helpers'
import { ModelZooBrowserContextProvider } from './Context/ModelZooBrowserContextProvider'
import ModelZooBrowserWrapper from './ModelZooBrowserWrapper'
import ModelZoo from './ModelZoo/ModelZoo'

const ModelZooBrowser: React.FC<any> = ({model, dataset}) => {

    const variablesWithColors = buildPredictorPalette(dataset.variables)

    return (
    <ModelZooBrowserContextProvider>
        <ModelZooBrowserWrapper model={model} variablesWithColors={variablesWithColors} dataset={dataset}>
            <ModelZoo />
        </ModelZooBrowserWrapper>
    </ModelZooBrowserContextProvider>
  );
}

export default ModelZooBrowser