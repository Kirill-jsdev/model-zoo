/* eslint-disable max-lines */
import React, {useState} from 'react'


interface ModelZooBrowserContextValues {
    model: any,
    onModelChange: (model: any) => void
}

export const ModelZooBrowserContext = React.createContext<ModelZooBrowserContextValues>({
    model: undefined,
     // eslint-disable-next-line
    onModelChange: (model: any) => {}
})

export const ExperimentApproachContextProvider: React.FC = ({children}) => {

    const [model, setModel] = useState()

    const onModelChange = (model: any) => {
        setModel(model)
    }


    const ctxValues = {
        model,
        onModelChange
    }

    return (
        <ModelZooBrowserContext.Provider value={ctxValues}>
            {children}
        </ModelZooBrowserContext.Provider>
    )
}
