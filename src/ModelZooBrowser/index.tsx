import React from 'react'
import './ModelZoo/ModelZooBrowser.css'
import { buildPredictorPalette } from './Utilities/helpers'
import { ModelZooBrowserContextProvider } from './Context/ModelZooBrowserContextProvider'
import ModelZooBrowserWrapper from './ModelZoo/ModelZooBrowserWrapper'
import ModelZoo from './ModelZoo/ModelZoo'
import { DatasetVersion } from './Utilities/VersionType'
import { ForecastModel } from './Utilities/FTypes'
import { DetectionModel } from './Utilities/ADModelTypes'

type ModelZooBrowserProps = {
    model: DetectionModel | ForecastModel
    dataset: DatasetVersion
}

const ModelZooBrowser: React.FC<ModelZooBrowserProps> = ({model, dataset}) => {

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