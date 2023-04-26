import React from 'react';
import './App.css';
import Treemap from './Treemap/Treemap';
import { ModelZooTable } from './Treemap/Table/Table'


function App() {
  return (
    <div className="App">
      <Treemap models={models} variables={variables} />
      <ModelZooTable terms={selectedModelTerms ?? []} variablesColors={variablesWithColors} />
    </div>
  );
}

export default App;

const variables = [
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

const models = [
    {
        "index": 1,
        "terms": [
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
            },
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
            }
        ],
        "dayTime": null,
        "variableOffsets": [
            {
                "name": "cnt",
                "dataFrom": -53,
                "dataTo": -1
            }
        ],
        "RInv": [
            0.02072798017981061,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.002983724443563797,
            2.0027081639884017,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.003809716418837258,
            0.06229166089697775,
            1.7193577726263471,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -0.019876568551646188,
            -0.2572254970705046,
            0.03970425749158114,
            0.00018296439541296846,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.001436237581163834,
            0.0005133657222710959,
            -0.0021574024587229087,
            -0.00019388643076841637,
            0.00022439510521965437,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -0.028059969453808637,
            -0.3495978513941499,
            0.04974359057621941,
            0.0003011158891030435,
            -0.00006197348831342993,
            1.719357772626344,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -0.007234931036532248,
            -0.06653691271461239,
            0.05208265181525068,
            0.00023681695205088753,
            -0.00019049690403749264,
            0.08970749279100018,
            1.719357772626343,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.008799765636647942,
            0.09588969057933723,
            -0.03266325273677017,
            -0.00025236777426413006,
            0.0002025865157088691,
            -0.0918674703701026,
            -0.04297083077966168,
            1.7159383548987484,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.01014001711634198,
            0.12711482801495969,
            0.007972671506410506,
            -0.00013078812044648724,
            0.00006572467147762593,
            -0.092095045124501,
            -0.013767610446353483,
            0.020918508951403885,
            1.9973100167082056,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0.009754158519391869,
            0.15382209112350506,
            0.021304254771231906,
            0.00009418918133236681,
            -0.00020496926465180402,
            -0.08991207101455374,
            0.013191744129764319,
            0.0016968088986308756,
            0.036403862075061424,
            1.7193577716543542,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -0.004434920093503301,
            -0.04759775168028262,
            0.020130001954036858,
            0.00013393969655802786,
            -0.00010800762403613997,
            0.04772882234367753,
            0.024089925468288236,
            -0.022306002164529784,
            -0.01107870451745734,
            0.0009361750572499022,
            1.9973100167082025,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            -0.004025590302898602,
            -0.07861339799000036,
            -0.008852236828646045,
            -0.00039478680297954955,
            0.0004680032657650189,
            -0.13364926919443856,
            0.08143471982908974,
            0.08383667473446621,
            -0.10176835167063587,
            -0.004127634192001204,
            -0.06382156934453471,
            0.018361785242864335,
            0,
            0,
            0,
            0,
            0,
            0,
            0.02399929476338118,
            0.22577114414083754,
            0.14258682940063055,
            -0.0010688168412801196,
            0.0011817617235934715,
            -0.11100471525637781,
            -0.02628200680006715,
            0.06453956179019237,
            0.13179019094961725,
            -0.00008841494487459169,
            -0.028551696475174217,
            -0.0006884794440819903,
            1.4123114585366707,
            0,
            0,
            0,
            0,
            0,
            -0.01567879473574335,
            0.03683798342478112,
            -1.0043732748359802,
            0.00011414012386558878,
            0.00007779377136760475,
            0.26813113265968314,
            0.07975367744463548,
            -0.07359893079208867,
            -0.13738747427165113,
            0.1967388396744238,
            0.1406945093181164,
            0.0017938810701830252,
            -0.3849995823734941,
            0.020576563713175115,
            0,
            0,
            0,
            0,
            -0.00624896648941388,
            -0.20006071787596444,
            -0.8803587001613021,
            0.0001243070059525982,
            -0.0001174636474536874,
            -0.0003850927866429703,
            -0.009823065287477221,
            0.0025841344506593467,
            0.02238640411722199,
            -0.14165523404646713,
            -0.053315204912256435,
            -0.0007484806199534089,
            0.12093696274731768,
            -0.010732709049873551,
            1.4142161275862646,
            0,
            0,
            0,
            0.01841383004193159,
            -0.5973095161621299,
            0.16448208576324308,
            0.0005335368691295315,
            -0.0007384309210301223,
            0.17164878538612804,
            -0.010636136499407551,
            -0.023477143551902273,
            -0.026967440535217935,
            0.07819426358949633,
            0.02784898966125794,
            -0.00008157434785670117,
            0.0638126079991147,
            0.010251635384429657,
            -0.3089772561871666,
            0.023652602239665668,
            0,
            0,
            0.00888546691880855,
            0.08840446213171689,
            0.33611020038702516,
            0.000059263112331256186,
            -0.000184899276408106,
            -0.2612056483868441,
            0.008927093478448271,
            0.026213891206960816,
            -0.8463616701868188,
            -0.16666087061874094,
            -0.1125229545628494,
            -0.00031037954299969117,
            0.4481296184964423,
            -0.023108046085355535,
            0.8153749730996306,
            -0.005270228247283789,
            1.9973100178328385,
            0,
            -0.006150451118108725,
            -0.18390749556638236,
            -0.002194297813285944,
            0.0002124863267095017,
            -0.00020554315367498206,
            0.048754918802609626,
            0.010508479518447229,
            -0.015143234383046227,
            -0.08129545585388345,
            -0.06454830040526291,
            -0.014799452468138219,
            -0.00003408191807555842,
            0.005128037500193089,
            -0.004328452552035755,
            0.2452731500609203,
            0.0016058168950995224,
            0.14565580316562649,
            1.9973100167082016
        ],
        "g": [
            36.662996343718284,
            -14.889350551336003,
            -10.451285697145726,
            -33.69612067982297,
            83.5784239355096,
            6.721393902674717,
            5.0987327199288615,
            -4.986597790506802,
            -4.797492170330156,
            4.739714535419774,
            3.181608201999899,
            -3.1918352696129677,
            4.762259053070717,
            -5.584802264097331,
            7.12515783119881,
            -7.780434002925484,
            5.167622717519635,
            3.0783898842801527
        ],
        "mx": [
            52.29475100942126,
            -0.0013458950201884253,
            -0.0013458950201884253,
            4092.22529884188,
            3595.743778019864,
            -0.001345895020188425,
            -0.0013458950201884253,
            0,
            0,
            -0.0013458950201884253,
            0,
            2.609017552589093,
            -2.9884872802830594e-19,
            -4.454045809787478,
            -0.0013458950201884253,
            -11.936234189558945,
            1.4942436401415297e-19,
            0
        ]
    }
]


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

const selectedModelTerms = [
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
    },
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
    }
]
