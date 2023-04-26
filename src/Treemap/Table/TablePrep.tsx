import { ModelZooTable } from './Table'
import { Term } from '../helpers'


const TablePrep = () => {
    return <ModelZooTable terms={selectedModelTerms ?? []} variablesColors={variablesWithColors} />
}

export default TablePrep

const variablesWithColors = [
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

const selectedModelTerms: Term[] = [
    {
        "importance": 20.49137559691252,
        "parts": [
            {
                "type": "TimeOffsets",
                "predictor": "cnt",
                "offset": -1
            },
            {
                "type": "β",
                "value": 1.2335061911550749
            }
        ]
    },
    {
        "importance": 9.497727540394623,
        "parts": [
            {
                "type": "Cos",
                "period": 8,
                "unit": "hours"
            },
            {
                "type": "Cos",
                "period": 12,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": -20.726109418803873
            }
        ]
    },
    {
        "importance": 8.583926127414717,
        "parts": [
            {
                "type": "TimeOffsets",
                "predictor": "cnt",
                "offset": -1
            },
            {
                "type": "ExponentialMovingAverage",
                "predictor": "cnt",
                "window": 4,
                "offset": -1
            },
            {
                "type": "β",
                "value": 0.021745821054344073
            }
        ]
    },
    {
        "importance": 8.195227751473325,
        "parts": [
            {
                "type": "TimeOffsets",
                "predictor": "cnt",
                "offset": -1
            },
            {
                "type": "ExponentialMovingAverage",
                "predictor": "cnt",
                "window": 2,
                "offset": -1
            },
            {
                "type": "β",
                "value": -0.023152457228734057
            }
        ]
    },
    {
        "importance": 6.619396763989043,
        "parts": [
            {
                "type": "Cos",
                "period": 12,
                "unit": "hours"
            },
            {
                "type": "RestOfWeek",
                "day": 5,
                "offset": -5
            },
            {
                "type": "β",
                "value": -18.103922175639443
            }
        ]
    },
    {
        "importance": 5.6409747161909625,
        "parts": [
            {
                "type": "Cos",
                "period": 8,
                "unit": "hours"
            },
            {
                "type": "Sin",
                "period": 3,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": -11.979666477411444
            }
        ]
    },
    {
        "importance": 5.545582423277233,
        "parts": [
            {
                "type": "Cos",
                "period": 8,
                "unit": "hours"
            },
            {
                "type": "RestOfWeek",
                "day": 5,
                "offset": -5
            },
            {
                "type": "β",
                "value": 8.502026020880189
            }
        ]
    },
    {
        "importance": 5.4211045757024205,
        "parts": [
            {
                "type": "Cos",
                "period": 6,
                "unit": "hours"
            },
            {
                "type": "RestOfWeek",
                "day": 5,
                "offset": -5
            },
            {
                "type": "β",
                "value": 4.388603176802615
            }
        ]
    },
    {
        "importance": 5.083907386300636,
        "parts": [
            {
                "type": "Sin",
                "period": 3,
                "unit": "hours"
            },
            {
                "type": "RestOfWeek",
                "day": 5,
                "offset": -5
            },
            {
                "type": "β",
                "value": -7.979259177321925
            }
        ]
    },
    {
        "importance": 4.532151209340016,
        "parts": [
            {
                "type": "Cos",
                "period": 4,
                "unit": "hours"
            },
            {
                "type": "RestOfWeek",
                "day": 5,
                "offset": -5
            },
            {
                "type": "β",
                "value": 8.446791253080226
            }
        ]
    },
    {
        "importance": 3.2579259388247532,
        "parts": [
            {
                "type": "TimeOffsets",
                "predictor": "cnt",
                "offset": -1
            },
            {
                "type": "Cos",
                "period": 24,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": -0.20631873145446308
            }
        ]
    },
    {
        "importance": 2.7657440760998613,
        "parts": [
            {
                "type": "Cos",
                "period": 6,
                "unit": "hours"
            },
            {
                "type": "Sin",
                "period": 24,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": 10.769729973134288
            }
        ]
    },
    {
        "importance": 2.673250470447511,
        "parts": [
            {
                "type": "Cos",
                "period": 12,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": 17.449086884967855
            }
        ]
    },
    {
        "importance": 2.511415967838125,
        "parts": [
            {
                "type": "Cos",
                "period": 24,
                "unit": "hours"
            },
            {
                "type": "Sin",
                "period": 3,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": 4.413053140963686
            }
        ]
    },
    {
        "importance": 2.372839678480726,
        "parts": [
            {
                "type": "TimeOffsets",
                "predictor": "cnt",
                "offset": -1
            },
            {
                "type": "Cos",
                "period": 12,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": -0.40388878653892624
            }
        ]
    },
    {
        "importance": 2.3170614429555547,
        "parts": [
            {
                "type": "Cos",
                "period": 12,
                "unit": "hours"
            },
            {
                "type": "Sin",
                "period": 3,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": 6.1484989512059505
            }
        ]
    },
    {
        "importance": 2.314162699343578,
        "parts": [
            {
                "type": "Sin",
                "period": 24,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": 11.572695626298994
            }
        ]
    },
    {
        "importance": 2.176225635014396,
        "parts": [
            {
                "type": "TimeOffsets",
                "predictor": "cnt",
                "offset": -1
            },
            {
                "type": "Cos",
                "period": 3,
                "unit": "hours"
            },
            {
                "type": "β",
                "value": -0.07831218280917539
            }
        ]
    },
    {
        "importance": 0,
        "parts": [
            {
                "type": "Intercept",
                "value": 1
            },
            {
                "type": "β",
                "value": 0.2855196439068237
            }
        ]
    }
]