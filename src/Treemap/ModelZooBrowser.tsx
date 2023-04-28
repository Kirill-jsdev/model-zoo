import React from 'react'
import './ModelZooBrowser.css'
import Treemap from './Treemap'
import TablePrep from './Table/TablePrep'
import { Navigation } from './Navigation/Navigation'
import { buildPredictorPalette } from './helpers'
import {useState} from 'react'

type ViewDataType = 'treemap' | 'table'

const ModelZooBrowser: React.FC<any> = ({model, versions}) => {

  const [viewDataAs, setViewDataAs] = useState<ViewDataType>('treemap')
  const models = model?.model?.normalBehaviorModel?.models
  const variablesWithColors = buildPredictorPalette(variables)

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setViewDataAs(e.target.value as ViewDataType)
  }

  return (
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
    </div>
  );
}

export default ModelZooBrowser

const variables = [ //data from VIRSIONS endpoint
  {
      "minimumValue": 1,
      "name": "cnt",
      "maximumValue": 249,
      "firstTimestamp": "2010-12-31T17:00:00.000Z",
      "lastTimestamp": "2011-01-31T16:00:00.000Z",
      "orderInTable": 2,
      "type": "Numerical",
      "missingObservations": 0,
      "averageValue": 52.24731182795699,
  },
  {
      "minimumValue": 0,
      "name": "windspeed",
      "maximumValue": 5821,
      "firstTimestamp": "2010-12-31T17:00:00.000Z",
      "lastTimestamp": "2011-01-31T16:00:00.000Z",
      "orderInTable": 3,
      "type": "Numerical",
      "missingObservations": 0,
      "averageValue": 1857.9059139784947,
  },
  {
      "minimumValue": 21,
      "name": "hum_p",
      "maximumValue": 100,
      "firstTimestamp": "2010-12-31T17:00:00.000Z",
      "lastTimestamp": "2011-01-31T16:00:00.000Z",
      "orderInTable": 4,
      "type": "Numerical",
      "missingObservations": 0,
      "averageValue": 59.20161290322581,
  },
  {
      "minimumValue": 127,
      "name": "temp_o",
      "maximumValue": 2962,
      "firstTimestamp": "2010-12-31T17:00:00.000Z",
      "lastTimestamp": "2011-01-31T16:00:00.000Z",
      "orderInTable": 5,
      "type": "Numerical",
      "missingObservations": 0,
      "averageValue": 1346.9932795698924,
  },
  {
      "minimumValue": -154832,
      "name": "atemp_o",
      "maximumValue": -16,
      "firstTimestamp": "2010-12-31T17:00:00.000Z",
      "lastTimestamp": "2011-01-31T16:00:00.000Z",
      "orderInTable": 6,
      "type": "Numerical",
      "missingObservations": 0,
      "averageValue": -73195.42876344085,
  },
  {
      "minimumValue": 0,
      "name": "holiday",
      "maximumValue": 1,
      "firstTimestamp": "2010-12-31T17:00:00.000Z",
      "lastTimestamp": "2011-01-31T16:00:00.000Z",
      "orderInTable": 7,
      "type": "Boolean",
      "missingObservations": 0,
      "averageValue": 0.04838709677419355,
  }
]