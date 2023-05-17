import React, {useEffect, useContext} from 'react'
import { ModelZooBrowserContext } from './Context/ModelZooBrowserContextProvider'

interface ModelZooBrowserWrapperProps {
    model?: any
    dataset?: any
    variablesWithColors?: any
}

const ModelZooBrowserWrapper: React.FC<ModelZooBrowserWrapperProps> = ({children, model, variablesWithColors, dataset}) => {

    const {onModelChange, onModelsChange, onVariablePropertiesChange, onDatasetChange, onVariablesWithColorsChange} = useContext(ModelZooBrowserContext)

    useEffect(() => {

        const models =  model?.model?.modelZoo?.models ?? model?.model?.normalBehaviorModel?.models
        const variableProperties = model?.model?.modelZoo?.models ?? model?.model?.normalBehaviorModel?.models

        onModelChange(model)
        onModelsChange(models)
        onVariablePropertiesChange(variableProperties)
        onDatasetChange(dataset)
        onVariablesWithColorsChange(variablesWithColors)

    }, [model, dataset, variablesWithColors, onModelChange, onDatasetChange, onVariablesWithColorsChange, onModelsChange, onVariablePropertiesChange])


    return(
        <>
            {children}
        </>
    )

}

export default ModelZooBrowserWrapper