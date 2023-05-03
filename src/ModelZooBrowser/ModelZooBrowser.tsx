import React, {useState } from 'react'
import './ModelZooBrowser.css'
import Treemap from './Treemap/Treemap'
import TablePrep from './Table/TablePrep'
import { Navigation } from './Navigation/Navigation'
import { buildPredictorPalette } from './Utilities/helpers'

import { ModelZooBrowserContextProvider } from './Context/ModelZooBrowserContextProvider'
import ModelZooBrowserWrapper from './ModelZooBrowserWrapper'
import { Insights } from './Insights/Insights'

type ViewDataType = 'treemap' | 'table'

const ModelZooBrowser: React.FC<any> = ({model, variables}) => {

    const [viewDataAs, setViewDataAs] = useState<ViewDataType>('treemap')
    const models = model?.model?.normalBehaviorModel?.models
    const variablesWithColors = buildPredictorPalette(variables)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDataAs(e.target.value as ViewDataType)
    }

    return (
    <ModelZooBrowserContextProvider>
        <ModelZooBrowserWrapper model={model}>
            <div className="model-zoo-browser">
                <div className='model-zoo-browser-navigation'>
                    <Navigation />
                </div>
                <div className="model-zoo-browser-data-visualization">
                    <select onChange={handleSelectChange} defaultValue='treemap' >
                        <option value="treemap">Treemap</option>
                        <option value="table">Table</option>
                    </select>
                    {viewDataAs === 'treemap' && models && <Treemap models={models} variables={variablesWithColors} />}
                    {viewDataAs === 'table' && <TablePrep terms={models[0].terms} variablesColors={variablesWithColors} />}
                </div>
                <div className='model-zoo-browser-insights'>
                    <Insights open={true} close={() => alert('hi')} variablesWithColors={variablesWithColors} />
                </div>
            </div>
        </ModelZooBrowserWrapper>
    </ModelZooBrowserContextProvider>
  );
}

export default ModelZooBrowser