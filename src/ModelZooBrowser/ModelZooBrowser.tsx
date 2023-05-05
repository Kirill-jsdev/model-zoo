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

const ModelZooBrowser: React.FC<any> = ({model, dataset}) => {

    const [viewDataAs, setViewDataAs] = useState<ViewDataType>('treemap')
    const models = model?.model?.normalBehaviorModel?.models
    const variablesWithColors = buildPredictorPalette(dataset.variables)

    console.log('MODELS_MODELS', models)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDataAs(e.target.value as ViewDataType)
    }

    return (
    <ModelZooBrowserContextProvider>
        <ModelZooBrowserWrapper model={model} variablesWithColors={variablesWithColors} dataset={dataset}>
            <div className="model-zoo-browser">
                <div className='navigation'>
                    <Navigation />
                </div>
                <div className="data-visualization">
                    <select onChange={handleSelectChange} defaultValue='treemap' >
                        <option value="treemap">Treemap</option>
                        <option value="table">Table</option>
                    </select>
                    {viewDataAs === 'treemap' && models && <Treemap />}
                    {viewDataAs === 'table' && <TablePrep />}
                </div>
                <div className='insights'>
                    <Insights />
                </div>
            </div>
        </ModelZooBrowserWrapper>
    </ModelZooBrowserContextProvider>
  );
}

export default ModelZooBrowser