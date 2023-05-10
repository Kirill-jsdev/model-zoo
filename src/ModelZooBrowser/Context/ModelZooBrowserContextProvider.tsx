/* eslint-disable max-lines */
import React, {useState} from 'react'

interface ModelZooBrowserContextValues {
    model: any,
    onModelChange: (model: any) => void
    dataset: any,
    onDatasetChange: (dataset: any) => void
    selectedModelIndex: number | undefined
    onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => void
    selectedModelTreemapNodes: any
    onSelectedModelTreemapNodesChange: (selectedModelTreemapNodes: any) => void
    selectedModelTerms: any
    onSelectedModelTermsChange: (selectedModelTerms: any) => void
    variablesWithColors: any
    onVariablesWithColorsChange: (variablesWithColors: any) => void
    visualizeAs: 'treemap' | 'table'
    onVisualizeAsChange: (visualizeAs: 'treemap' | 'table') => void
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
    selectedModelTreemapNodes: undefined,
    onSelectedModelTreemapNodesChange: (selectedModelTreemapNodes: any) => {},
    selectedModelTerms: undefined,
    onSelectedModelTermsChange: (selectedModelTerms: any) => {},
    variablesWithColors: undefined,
    onVariablesWithColorsChange: (variablesWithColors: any) => {},
    visualizeAs: 'treemap',
    onVisualizeAsChange: (visualizeAs: 'treemap' | 'table') => {}
})

export const ModelZooBrowserContextProvider: React.FC = ({children}) => {

    const [model, setModel] = useState()
    const [dataset, setDataset] = useState()
    const [variablesWithColors, setVariablesWithColors] = useState()
    const [selectedModelIndex, setSelectedModelIndex] = useState<number | undefined>()
    const [selectedModelTreemapNodes, setSelectedModelTreemapNodes] = useState()
    const [selectedModelTerms, setSelectedModelTerms] = useState()
    const [visualizeAs, setVisualizeAs] = useState<'treemap' | 'table'>('treemap')

    const onModelChange = (model: any) => {
        setModel(model)
    }

    const onDatasetChange = (dataset: any) => {
        setDataset(dataset)
    }

    const onSelectedModelIndexChange = (selectedModelIndex: number | undefined) => {
        setSelectedModelIndex(selectedModelIndex)
    }

    const onSelectedModelTreemapNodesChange = (selectedModelTreemapNodes: any) => {
        setSelectedModelTreemapNodes(selectedModelTreemapNodes)
    }

    const onSelectedModelTermsChange = (selectedModelTerms: any) => {
        setSelectedModelTerms(selectedModelTerms)
    }

    const onVariablesWithColorsChange = (variablesWithColors: any) => {
        setVariablesWithColors(variablesWithColors)
    }

    const onVisualizeAsChange = (visualizeAs: 'treemap' | 'table') => {
        setVisualizeAs(visualizeAs)
    }

    const ctxValues = {
        model,
        onModelChange,
        dataset,
        onDatasetChange,
        selectedModelIndex,
        onSelectedModelIndexChange,
        selectedModelTreemapNodes,
        onSelectedModelTreemapNodesChange,
        selectedModelTerms,
        onSelectedModelTermsChange,
        variablesWithColors,
        onVariablesWithColorsChange,
        visualizeAs,
        onVisualizeAsChange
    }

    return (
        <ModelZooBrowserContext.Provider value={ctxValues}>
            {children}
        </ModelZooBrowserContext.Provider>
    )
}
