import React, {useEffect, useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ForecastModel } from '../Utilities/FTypes'
import { DatasetVersion } from '../Utilities/VersionType'
import { VariableWithColors } from '../Utilities/Types'
import { DetectionModel } from '../Utilities/ADModelTypes'

interface ModelZooBrowserWrapperProps {
    model?: DetectionModel | ForecastModel
    dataset?: DatasetVersion
    variablesWithColors?: VariableWithColors[]
}

const ModelZooBrowserWrapper: React.FC<ModelZooBrowserWrapperProps> = ({children, model, variablesWithColors, dataset}) => {

    const {onModelChange, onDatasetChange, onVariablesWithColorsChange} = useContext(ModelZooBrowserContext)

    useEffect(() => {
        onModelChange(model)
        onDatasetChange(dataset)
        onVariablesWithColorsChange(variablesWithColors)
    }, [model, dataset, variablesWithColors, onModelChange, onDatasetChange, onVariablesWithColorsChange])

    return(
        <>
            {children}
        </>
    )

}

export default ModelZooBrowserWrapper