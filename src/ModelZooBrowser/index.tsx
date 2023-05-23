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
    model: any
    dataset: any
}

const ModelZooBrowser: React.FC<ModelZooBrowserProps> = ({model, dataset}) => {

    if (!model || !dataset) return <div>Model Zoo Browser did not receive necessary data</div>

    const variablesWithColors = buildPredictorPalette(dataset.variables)

    const modelData = model as ForecastModel | DetectionModel
    const datasetVersion = dataset as DatasetVersion

    return (
    <ModelZooBrowserContextProvider>
        <ModelZooBrowserWrapper model={modelData} variablesWithColors={variablesWithColors} dataset={datasetVersion}>
            <ModelZoo />
        </ModelZooBrowserWrapper>
    </ModelZooBrowserContextProvider>
  );
}

export default ModelZooBrowser