import React from 'react'
import './ModelZooBrowser.css'
import { buildPredictorPalette } from './Utilities/helpers'
import { ModelZooBrowserContextProvider } from './Context/ModelZooBrowserContextProvider'
import ModelZooBrowserWrapper from './ModelZooBrowserWrapper'
import ModelZoo from './ModelZoo/ModelZoo'
import { DetectionModel } from './ADModelTypes'
import { DatasetVersion } from './VersionType'
import { ForecastModel } from './FTypes'

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