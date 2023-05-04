/* eslint-disable max-lines */
import React, {useState} from 'react'


interface ModelZooBrowserContextValues {
    model: any,
    onModelChange: (model: any) => void
    dataset: any,
    onDatasetChange: (dataset: any) => void
    selectedModelIndex: number | undefined
    onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => void
    selectedModelTerms: any
    onSelectedModelTermsChange: (selectedModelTerms: any) => void
}

export const ModelZooBrowserContext = React.createContext<ModelZooBrowserContextValues>({
    model: undefined,
     // eslint-disable-next-line
    onModelChange: (model: any) => {},
    dataset: undefined,
    onDatasetChange: (dataset: any) => {},
    selectedModelIndex: undefined,
     // eslint-disable-next-line
    onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => {},
    selectedModelTerms: undefined,
    onSelectedModelTermsChange: (selectedModelTerms: any) => {}
})

export const ModelZooBrowserContextProvider: React.FC = ({children}) => {

    const [model, setModel] = useState()
    const [dataset, setDataset] = useState()
    const [selectedModelIndex, setSelectedModelIndex] = useState<number | undefined>()
    const [selectedModelTerms, setSelectedModelTerms] = useState()

    const onModelChange = (model: any) => {
        setModel(model)
    }

    const onDatasetChange = (dataset: any) => {
        setDataset(dataset)
    }

    const onSelectedModelIndexChange = (selectedModelIndex: number | undefined) => {
        setSelectedModelIndex(selectedModelIndex)
    }

    const onSelectedModelTermsChange = (selectedModelTerms: any) => {
        setSelectedModelTerms(selectedModelTerms)
    }


    const ctxValues = {
        model,
        onModelChange,
        dataset,
        onDatasetChange,
        selectedModelIndex,
        onSelectedModelIndexChange,
        selectedModelTerms,
        onSelectedModelTermsChange
    }

    return (
        <ModelZooBrowserContext.Provider value={ctxValues}>
            {children}
        </ModelZooBrowserContext.Provider>
    )
}
