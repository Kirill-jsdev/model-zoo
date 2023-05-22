/* eslint-disable max-lines */
import React, {useState} from 'react'
import { Term, TooltipDataProps, TreemapNode, VariableWithColors } from '../Utilities/Types'
import { DetectionModel } from '../ADModelTypes'
import { ForecastModel } from '../FTypes'
import { DatasetVersion } from '../VersionType'

interface ModelZooBrowserContextValues {
    model: DetectionModel | ForecastModel | undefined
    onModelChange: (model: DetectionModel | ForecastModel | undefined) => void
    dataset: DatasetVersion | undefined
    onDatasetChange: (dataset: DatasetVersion | undefined) => void
    selectedModelIndex: number | undefined
    onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => void
    selectedModelTreemapNodes: TreemapNode[] | undefined
    onSelectedModelTreemapNodesChange: (selectedModelTreemapNodes: TreemapNode[] | undefined) => void
    selectedModelTerms: Term[] | undefined
    onSelectedModelTermsChange: (selectedModelTerms: Term[] | undefined) => void
    variablesWithColors: VariableWithColors[] | undefined
    onVariablesWithColorsChange: (variablesWithColors: VariableWithColors[] | undefined) => void
    visualizeAs: 'treemap' | 'table'
    onVisualizeAsChange: (visualizeAs: 'treemap' | 'table') => void
    isDrawerOpen: boolean
    onIsDrawerOpenChange: (isDrawerOpen: boolean) => void
    nodeData: TooltipDataProps | undefined
    onNodeDataChange: (nodeData: TooltipDataProps | undefined) => void
}

export const ModelZooBrowserContext = React.createContext<ModelZooBrowserContextValues>({
    model: undefined,
     // eslint-disable-next-line
    onModelChange: (model: DetectionModel | ForecastModel | undefined) => {},
    dataset: undefined,
     // eslint-disable-next-line
    onDatasetChange: (dataset: DatasetVersion | undefined) => {},
    selectedModelIndex: undefined,
     // eslint-disable-next-line
    onSelectedModelIndexChange: (selectedModelIndex: number | undefined) => {},
    selectedModelTreemapNodes: undefined,
     // eslint-disable-next-line
    onSelectedModelTreemapNodesChange: (selectedModelTreemapNodes: TreemapNode[] | undefined) => {},
    selectedModelTerms: undefined,
     // eslint-disable-next-line
    onSelectedModelTermsChange: (selectedModelTerms: Term[] | undefined) => {},
    variablesWithColors: undefined,
     // eslint-disable-next-line
    onVariablesWithColorsChange: (variablesWithColors: VariableWithColors[] | undefined) => {},
    visualizeAs: 'treemap',
     // eslint-disable-next-line
    onVisualizeAsChange: (visualizeAs: 'treemap' | 'table') => {},
    isDrawerOpen: true,
     // eslint-disable-next-line
    onIsDrawerOpenChange: (isDrawerOpen: boolean) => {},
    nodeData: undefined,
     // eslint-disable-next-line
    onNodeDataChange: (nodeData: TooltipDataProps | undefined) => {}
})

export const ModelZooBrowserContextProvider: React.FC = ({children}) => {

    const [model, setModel] = useState<DetectionModel | ForecastModel | undefined>()
    const [dataset, setDataset] = useState<DatasetVersion | undefined>()
    const [variablesWithColors, setVariablesWithColors] = useState<VariableWithColors[] | undefined>()
    const [selectedModelIndex, setSelectedModelIndex] = useState<number | undefined>()
    const [selectedModelTreemapNodes, setSelectedModelTreemapNodes] = useState<TreemapNode[] | undefined>()
    const [selectedModelTerms, setSelectedModelTerms] = useState<Term[] | undefined>()
    const [visualizeAs, setVisualizeAs] = useState<'treemap' | 'table'>('treemap')
    const [isDrawerOpen, setIsDrawerOpen] = useState(true)
    const [nodeData, setNodeData] = useState<TooltipDataProps | undefined>()

    const onModelChange = (model: DetectionModel | ForecastModel | undefined) => {
        setModel(model)
    }

    const onDatasetChange = (dataset: DatasetVersion | undefined) => {
        setDataset(dataset)
    }

    const onSelectedModelIndexChange = (selectedModelIndex: number | undefined) => {
        setSelectedModelIndex(selectedModelIndex)
    }

    const onSelectedModelTreemapNodesChange = (selectedModelTreemapNodes: TreemapNode[] | undefined) => {
        setSelectedModelTreemapNodes(selectedModelTreemapNodes)
    }

    const onSelectedModelTermsChange = (selectedModelTerms: Term[] | undefined) => {
        setSelectedModelTerms(selectedModelTerms)
    }

    const onVariablesWithColorsChange = (variablesWithColors: VariableWithColors[] | undefined) => {
        setVariablesWithColors(variablesWithColors)
    }

    const onVisualizeAsChange = (visualizeAs: 'treemap' | 'table') => {
        setVisualizeAs(visualizeAs)
    }

    const onIsDrawerOpenChange = (isDrawerOpen: boolean) => {
        setIsDrawerOpen(isDrawerOpen)
    }

    const onNodeDataChange = (nodeData: TooltipDataProps | undefined) => {
        setNodeData(nodeData)
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
        onVisualizeAsChange,
        isDrawerOpen,
        onIsDrawerOpenChange,
        nodeData,
        onNodeDataChange
    }

    return (
        <ModelZooBrowserContext.Provider value={ctxValues}>
            {children}
        </ModelZooBrowserContext.Provider>
    )
}
