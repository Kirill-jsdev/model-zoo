import React, {useEffect, useContext} from 'react'
import { ModelZooBrowserContext } from './Context/ModelZooBrowserContextProvider'

interface ModelZooBrowserWrapperProps {
    model?: any
    dataset?: any
    variablesWithColors?: any
}

const ModelZooBrowserWrapper: React.FC<ModelZooBrowserWrapperProps> = ({children, model, variablesWithColors, dataset}) => {

    const {onModelChange, onDatasetChange, onVariablesWithColorsChange, variablesWithColors: ctx} = useContext(ModelZooBrowserContext)

    console.log('VVVvariablesWithColorsCTX', ctx)

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