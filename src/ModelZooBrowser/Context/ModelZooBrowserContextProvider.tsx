/* eslint-disable max-lines */
import React, {useState} from 'react'


interface ModelZooBrowserContextValues {
    model: any,
    onModelChange: (model: any) => void
    selectedModelIndex: number | undefined
    onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => void
}

export const ModelZooBrowserContext = React.createContext<ModelZooBrowserContextValues>({
    model: undefined,
     // eslint-disable-next-line
    onModelChange: (model: any) => {},
    selectedModelIndex: undefined,
     // eslint-disable-next-line
     onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => {}
})

export const ModelZooBrowserContextProvider: React.FC = ({children}) => {

    const [model, setModel] = useState()
    const [selectedModelIndex, setSelectedModelIndex] = useState<number | undefined>()

    const onModelChange = (model: any) => {
        setModel(model)
    }

    const onSelectedModelIndexChange = (selectedModelIndex: number | undefined) => {
        setSelectedModelIndex(selectedModelIndex)
    }


    const ctxValues = {
        model,
        onModelChange,
        selectedModelIndex,
        onSelectedModelIndexChange
    }

    return (
        <ModelZooBrowserContext.Provider value={ctxValues}>
            {children}
        </ModelZooBrowserContext.Provider>
    )
}
