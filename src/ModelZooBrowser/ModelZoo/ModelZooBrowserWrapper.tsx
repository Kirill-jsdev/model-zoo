import React, {useEffect, useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ForecastModel } from '../Utilities/FTypes'
import { DatasetVersion } from '../Utilities/VersionType'
import { VariableWithColors } from '../Utilities/Types'
import { DetectionModel } from '../Utilities/ADModelTypes'
import { useDetectionModelResult } from '../Utilities/Hooks'

interface ModelZooBrowserWrapperProps {
    model?: DetectionModel | ForecastModel
    dataset?: DatasetVersion
    variablesWithColors?: VariableWithColors[]
}

const ModelZooBrowserWrapper: React.FC<ModelZooBrowserWrapperProps> = ({children, model, variablesWithColors, dataset}) => {

    const {onModelChange, onDatasetChange, onVariablesWithColorsChange} = useContext(ModelZooBrowserContext)
    const detectionModelResult = useDetectionModelResult()
    const { onSelectedModelTermsChange, onSelectedModelTreemapNodesChange } = useContext(ModelZooBrowserContext)

    useEffect(() => {
        onModelChange(model)
        onDatasetChange(dataset)
        onVariablesWithColorsChange(variablesWithColors)
        onSelectedModelTermsChange(detectionModelResult.selectedModelTerms)
        onSelectedModelTreemapNodesChange(detectionModelResult.selectedModelTreemapNodes)
    }, [model, dataset, variablesWithColors, onModelChange, onDatasetChange, onVariablesWithColorsChange, onSelectedModelTermsChange, onSelectedModelTreemapNodesChange, detectionModelResult.selectedModelTerms, detectionModelResult.selectedModelTreemapNodes])

    return(
        <>
            {children}
        </>
    )

}

export default ModelZooBrowserWrapper