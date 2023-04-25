import React from 'react'
import Treemap from './Treemap'
import { getTreemapFromModels } from './helpers'

const ModelZoo: React.FC<any> = ({models}) => {

    const selectedModelTreemapNodes = getTreemapFromModels(models, 0, true)

    return <Treemap treemap={selectedModelTreemapNodes} predictorPalette={data.predictorPalette}/>
}

export default ModelZoo

const data = {
    predictorPalette: [
    {
        "variable": "cnt",
        "minimumValue": 1,
        "name": "cnt",
        "maximumValue": 249,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 2,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 52.24731182795699,
        "color": "#5573F7",
        "textColor": "#EBECF0"
    },
    {
        "variable": "windspeed",
        "minimumValue": 0,
        "name": "windspeed",
        "maximumValue": 5821,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 3,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 1857.9059139784947,
        "color": "#2941AB",
        "textColor": "#EBECF0"
    },
    {
        "variable": "hum_p",
        "minimumValue": 21,
        "name": "hum_p",
        "maximumValue": 100,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 4,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 59.20161290322581,
        "color": "#5CC8D0",
        "textColor": "#2c2835"
    },
    {
        "variable": "temp_o",
        "minimumValue": 127,
        "name": "temp_o",
        "maximumValue": 2962,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 5,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": 1346.9932795698924,
        "color": "#499988",
        "textColor": "#EBECF0"
    },
    {
        "variable": "atemp_o",
        "minimumValue": -154832,
        "name": "atemp_o",
        "maximumValue": -16,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 6,
        "type": "Numerical",
        "missingObservations": 0,
        "averageValue": -73195.42876344085,
        "color": "#BBF0CA",
        "textColor": "#2c2835"
    },
    {
        "variable": "holiday",
        "minimumValue": 0,
        "name": "holiday",
        "maximumValue": 1,
        "firstTimestamp": "2010-12-31T17:00:00.000Z",
        "lastTimestamp": "2011-01-31T16:00:00.000Z",
        "orderInTable": 7,
        "type": "Boolean",
        "missingObservations": 0,
        "averageValue": 0.04838709677419355,
        "color": "#57CE5C",
        "textColor": "#EBECF0"
    }
  ]
}