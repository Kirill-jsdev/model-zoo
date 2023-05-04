import React, {useEffect, useContext} from 'react'
import { ModelZooBrowserContext } from './Context/ModelZooBrowserContextProvider'

interface ModelZooBrowserWrapperProps {
    model?: any
    dataset?: any
}

const ModelZooBrowserWrapper: React.FC<ModelZooBrowserWrapperProps> = ({children, model, dataset}) => {

    const {onModelChange, onDatasetChange} = useContext(ModelZooBrowserContext)

    console.log(dataset)

    useEffect(() => {
        onModelChange(model)
        onDatasetChange(dataset)
    }, [model, dataset, onModelChange, onDatasetChange])


    return(
        <>
            {children}
        </>
    )

}

export default ModelZooBrowserWrapper