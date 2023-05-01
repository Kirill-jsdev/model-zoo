import React, {useEffect, useContext} from 'react'
import { ModelZooBrowserContext } from './Context/ModelZooBrowserContextProvider'

interface ModelZooBrowserWrapperProps {
    model?: any
}

const ModelZooBrowserWrapper: React.FC<ModelZooBrowserWrapperProps> = ({children, model}) => {

    const {onModelChange} = useContext(ModelZooBrowserContext)

    useEffect(() => {
        onModelChange(model)
    }, [model, onModelChange])


    return(
        <>
            {children}
        </>
    )

}

export default ModelZooBrowserWrapper