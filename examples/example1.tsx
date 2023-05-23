import React from 'react'
import ModelZooBrowser from './ModelZooBrowser/'  //PATH TO THE ModelZooBrowser component

function App() {

  return (
    <div className="App">
        <ModelZooBrowser model={fakeModel} dataset={fakeVirsions[0]} />
    </div>
  );
}

export default App

//Data from `https://tim-platform-dev.tangent.works/api/v5/forecast-jobs/${jobId}/results/model`   //jobId: '14f25d7c-cca9-40a5-bcd8-fa7b34322824'
const fakeModel = {
    "modelVersion": "5.7",
    "model": {
        "modelZoo": {
            "samplingPeriod": "PT1H",
            "timeZone": "UTC",
            "averageTrainingLength": 18960,
            "models": [
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
                                    "value": -921.0744294367978
                                }
                            ]
                        },
                        {
                            "importance": 29.091702314103546,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 1.289170810182669
                                }
                            ]
                        },
                        {
                            "importance": 8.984477809969347,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00001757227146749831
                                }
                            ]
                        },
                        {
                            "importance": 3.4761641962756067,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.4366239633858831
                                }
                            ]
                        },
                        {
                            "importance": 2.4932476629907785,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00027693721387848
                                }
                            ]
                        },
                        {
                            "importance": 3.6656171579863277,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000006463530505441311
                                }
                            ]
                        },
                        {
                            "importance": 8.285289651851969,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -1
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.00042135936741770477
                                }
                            ]
                        },
                        {
                            "importance": 6.1387092207085185,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -1
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003810373852319805
                                }
                            ]
                        },
                        {
                            "importance": 5.028197063236077,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.5731702039261461
                                }
                            ]
                        },
                        {
                            "importance": 8.54101966484131,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.000030732714677086286
                                }
                            ]
                        },
                        {
                            "importance": 2.2218463689010752,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": -0.04859712606020038
                                }
                            ]
                        },
                        {
                            "importance": 1.5575727147929832,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00002320634489415101
                                }
                            ]
                        },
                        {
                            "importance": 2.0649212104955343,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013861892680387452
                                }
                            ]
                        },
                        {
                            "importance": 1.358524636790665,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.04319284274012223
                                }
                            ]
                        },
                        {
                            "importance": 1.1117898759339535,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.00040793064333949206
                                }
                            ]
                        },
                        {
                            "importance": 9.359640120589566,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00005272614409290358
                                }
                            ]
                        },
                        {
                            "importance": 3.9781672938568255,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00011989089711822882
                                }
                            ]
                        },
                        {
                            "importance": 2.6431130366759112,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001720295298951021
                                }
                            ]
                        }
                    ],
                    "dayTime": "00:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -401,
                            "dataTo": -1
                        }
                    ],
                    "samplesAhead": [
                        1
                    ],
                    "predictionIntervals": [
                        -2988.6669546179883,
                        1176.4649210495543
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006033484945941595,
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
                        -0.0004532202693954754,
                        3.101330956255556e-8,
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
                        -0.00024638559361831873,
                        -8.610178583664056e-9,
                        0.0006415117616605686,
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
                        -0.0004712106709019399,
                        -7.276946348562469e-9,
                        0.000018906544217671933,
                        8.116981800639387e-8,
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
                        0.0009382364663870826,
                        -1.0373657312558086e-8,
                        -0.000023354523577255116,
                        -1.556315534393776e-7,
                        3.3680032181608885e-8,
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
                        0.00034874021173313965,
                        -2.3437951993803663e-9,
                        -0.00004212886763157258,
                        -1.5118853282588588e-7,
                        2.7386674159355267e-8,
                        4.972542987313885e-8,
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
                        -0.0000309780191248233,
                        2.995276079018612e-10,
                        0.000002037846059267052,
                        1.769611151319491e-9,
                        -4.1075874528145185e-10,
                        -4.853443521754065e-8,
                        4.934035559240617e-8,
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
                        -0.0006982663931907358,
                        -1.22036446706445e-8,
                        -0.000052647494130803555,
                        5.104801240625547e-8,
                        -2.19887603360793e-9,
                        1.4985389076078976e-7,
                        -1.4444780886812763e-7,
                        0.0007011370830679944,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0004083739433239507,
                        -2.8791643142401455e-8,
                        0.00001018864944925973,
                        -3.113978236578152e-8,
                        1.6071461304633302e-8,
                        -3.597378922798636e-8,
                        3.216391639347929e-8,
                        -0.00041996029860786547,
                        6.306164836725216e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00037934224128716284,
                        -1.5167217641848456e-8,
                        0.00004556937814431838,
                        3.249951441148911e-8,
                        6.159506362030316e-10,
                        1.3537233808451976e-7,
                        -1.257934935146478e-7,
                        0.00004704508112059389,
                        -4.557199399649049e-9,
                        0.0004655795968257049,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00008898648829132148,
                        1.2023431279899965e-9,
                        -0.0005533250184589345,
                        -1.814445347618775e-8,
                        -6.742964049451193e-9,
                        4.611256082716796e-9,
                        -4.5125716156588826e-9,
                        0.00003063042638408947,
                        -2.974031555062598e-9,
                        -0.0000017456453725214952,
                        3.2155788887999225e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00008417020775303559,
                        -4.298184074856005e-10,
                        0.00020163660679910312,
                        -1.9793896939370856e-8,
                        -5.340683385915605e-9,
                        3.152165666963949e-8,
                        -3.06371555542047e-8,
                        -0.00047205070417258435,
                        -4.333476753449442e-9,
                        0.0000015130475260263313,
                        -1.1903159168300037e-8,
                        3.180619531780362e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00045389078842197493,
                        7.119411874250721e-9,
                        0.00005381992701109779,
                        3.403946283453351e-8,
                        -1.0240518201429101e-8,
                        -5.7614079515228854e-9,
                        2.20901089948113e-9,
                        0.000028156634540598227,
                        -2.993205980098526e-8,
                        0.000015673102402160743,
                        -7.859936527426702e-9,
                        2.221605522862096e-8,
                        0.0008208620250632049,
                        0,
                        0,
                        0,
                        0,
                        0.0005990289525923362,
                        -6.863652338372551e-9,
                        -0.00001583610970919738,
                        -1.1021576916214262e-7,
                        -1.6780110886736734e-8,
                        9.389357182039879e-8,
                        -1.2725703905820916e-7,
                        -0.00101398324227402,
                        3.677807908885615e-9,
                        -0.0000030899185894854298,
                        1.3918594647720838e-9,
                        6.439840985947649e-8,
                        0.000017073536549223292,
                        7.819268525930267e-8,
                        0,
                        0,
                        0,
                        -0.00004304742406728809,
                        6.206312291020907e-9,
                        0.00011966637255444848,
                        4.829051383996694e-8,
                        1.690621086761057e-10,
                        -5.268113520378715e-8,
                        3.220398514442947e-8,
                        -0.00014364836125143322,
                        -2.4064798025743997e-8,
                        0.000005055469632338307,
                        -6.846008907280239e-9,
                        -4.385199099022961e-9,
                        0.000003331688978912063,
                        -5.240575207936271e-8,
                        6.871502336798769e-8,
                        0,
                        0,
                        -0.00021448681382995311,
                        -9.332426262740004e-10,
                        0.000008848486622280375,
                        3.5451530597937215e-8,
                        2.6025345827574196e-9,
                        -2.9071086929970043e-8,
                        2.8024202818318062e-8,
                        0.0002678174070105469,
                        2.121938281794807e-9,
                        -0.000001314427351402906,
                        -7.247148132146592e-10,
                        -1.405450693553038e-8,
                        0.000005888757409225442,
                        -7.955099802261879e-8,
                        -2.2581958876235366e-9,
                        2.6966497140698358e-8,
                        0,
                        0.00001531843987878474,
                        -6.390065115517443e-10,
                        -0.000004102084211191886,
                        -2.5533115589899948e-9,
                        -9.02412835067379e-10,
                        -1.4920448257879398e-9,
                        1.4244044099257359e-9,
                        -0.00001974892557637664,
                        2.78144768564738e-9,
                        0.000002092342448724831,
                        4.819469090683592e-10,
                        -2.96838180558728e-8,
                        -0.0000011976700728157788,
                        -8.600517786920071e-8,
                        -3.387581479150175e-9,
                        3.034636994733883e-8,
                        8.972903397550702e-8
                    ],
                    "g": [
                        993.6560385041917,
                        402.6656656529958,
                        188.6494915965867,
                        -377.50218636867544,
                        401.744377355465,
                        445.03266266930945,
                        -3396.428975600766,
                        410.17347676358736,
                        -619.1306486980025,
                        -98.79456769558671,
                        -536.6908196130693,
                        1074.0011587817173,
                        66.87912309290384,
                        152.0452970388131,
                        -937.0372925572782,
                        -2288.4132616241427,
                        -1917.211433949688
                    ],
                    "mx": [
                        4216.8793839183045,
                        62422355.76596046,
                        3058.0559360730595,
                        22515410.62395145,
                        86812765.37138508,
                        16845344.181506906,
                        17208071.866409715,
                        4209.180723882117,
                        17763648.37653541,
                        2720.5712648451145,
                        50065917.414003044,
                        68482069.54137827,
                        425.9349315068493,
                        19471155.107686453,
                        16127915.977352412,
                        57712262.89383562,
                        23118597.195362665
                    ],
                    "cases": [
                        {
                            "dayTime": "00:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -1
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -1
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -1
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 2,
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
                                    "value": -1434.9314174994556
                                }
                            ]
                        },
                        {
                            "importance": 24.021934000556595,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": -2.249043870520532
                                }
                            ]
                        },
                        {
                            "importance": 9.48986242291628,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00003841583711790678
                                }
                            ]
                        },
                        {
                            "importance": 4.166513473027409,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": -0.00025068632848468993
                                }
                            ]
                        },
                        {
                            "importance": 4.7296582174361115,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": -0.2670711785817576
                                }
                            ]
                        },
                        {
                            "importance": 9.594238683956307,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.17834847299227966
                                }
                            ]
                        },
                        {
                            "importance": 4.489741918347798,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.000004129976929041842
                                }
                            ]
                        },
                        {
                            "importance": 5.503569143044503,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00004268077539009567
                                }
                            ]
                        },
                        {
                            "importance": 5.783410021535744,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0170796774364267
                                }
                            ]
                        },
                        {
                            "importance": 6.981006947334,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00018028584893678532
                                }
                            ]
                        },
                        {
                            "importance": 3.308755760335211,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000008583052270107776
                                }
                            ]
                        },
                        {
                            "importance": 3.6442466928028274,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -2
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": 0.00015967416082989376
                                }
                            ]
                        },
                        {
                            "importance": 1.0754532676006925,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": 0.00012654098208622107
                                }
                            ]
                        },
                        {
                            "importance": 2.3961318937311074,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -2
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": -0.00013787995399135256
                                }
                            ]
                        },
                        {
                            "importance": 3.193467342726186,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -2
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -3
                                },
                                {
                                    "type": "β",
                                    "value": -0.000011808228908033233
                                }
                            ]
                        },
                        {
                            "importance": 2.2102912536239008,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002845610188325212
                                }
                            ]
                        },
                        {
                            "importance": 2.237277945691547,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 12,
                                    "unit": "hours"
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.08621008034325468
                                }
                            ]
                        },
                        {
                            "importance": 2.070415263729358,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": 3.6028371110530024
                                }
                            ]
                        },
                        {
                            "importance": 5.104025751604442,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -2
                                },
                                {
                                    "type": "β",
                                    "value": 0.00017899037435780123
                                }
                            ]
                        }
                    ],
                    "dayTime": "01:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -401,
                            "dataTo": -2
                        }
                    ],
                    "samplesAhead": [
                        2
                    ],
                    "predictionIntervals": [
                        -2748.8899181807224,
                        1136.0755172503698
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006034548915757248,
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
                        -0.00047341266825398463,
                        3.631695612659231e-8,
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
                        -0.00048697386828872887,
                        -7.255449865062735e-9,
                        3.048586277178311e-8,
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
                        -0.0004466691405785253,
                        2.2525684423973372e-9,
                        4.768881254368583e-9,
                        0.00041961911278033155,
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
                        0.0005296562077285472,
                        -2.2037573955319896e-9,
                        -1.3998106602936134e-8,
                        -0.0004576945714198297,
                        0.0004170415832465265,
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
                        -0.000059282042786318724,
                        -1.6333485464514652e-8,
                        -8.60394472713008e-9,
                        0.00005246155593648495,
                        -0.000027688450938556952,
                        3.6717782474408504e-8,
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
                        -0.00038865346180378974,
                        -3.704239836253787e-8,
                        2.5724913537239692e-8,
                        -0.00011267310168579394,
                        0.0001068331670701105,
                        -1.248482617139242e-9,
                        7.014869664558965e-8,
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
                        -0.00013526970091487116,
                        -1.344535256317634e-8,
                        2.378119082474455e-9,
                        0.000005945087882012834,
                        -0.0000032677683297792454,
                        1.1873176845977842e-10,
                        -3.095416983622243e-8,
                        0.0007334684153427289,
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
                        0.00005139319802723964,
                        -3.7188213724743876e-8,
                        -3.998901813278961e-9,
                        0.000038226425372153804,
                        -0.00003403698634275521,
                        5.551813950329012e-10,
                        6.1870086869694475e-9,
                        -0.00003126003711890991,
                        1.0293784769957812e-7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0007021598223510464,
                        5.055621257043633e-8,
                        -4.249259535959258e-8,
                        0.00004838158713258753,
                        -0.0000678253310378303,
                        -2.957146618204127e-9,
                        2.6601439950332343e-8,
                        -0.0001378220040453694,
                        -2.089993614050601e-7,
                        3.9973013935043056e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00045453268412023963,
                        2.6145080611745018e-8,
                        -6.891033107853001e-8,
                        0.00018798491949141056,
                        -0.00014445593691864714,
                        -6.684638108020997e-10,
                        -1.464827245323825e-8,
                        0.00009080898883895084,
                        -6.950840458406009e-8,
                        3.2696721637861634e-8,
                        4.973470757253194e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00046802259535861713,
                        5.8546674986436985e-9,
                        1.1722595297314899e-8,
                        -0.000019643127434569568,
                        0.000008583016190082687,
                        -1.1764879722644222e-9,
                        -3.0846693029568024e-8,
                        -0.00007101472959752787,
                        6.73317683943607e-9,
                        -2.019196343357744e-8,
                        3.59989564867046e-9,
                        3.397091419043204e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0000074262477495506185,
                        1.4122828101487623e-9,
                        1.9765656233136932e-9,
                        -0.00001196398492252339,
                        0.000008509907074174894,
                        1.889172283171841e-10,
                        1.6584981098397175e-9,
                        0.000016226065927993537,
                        -4.1280678072327125e-9,
                        2.512323367384061e-10,
                        -4.981629078837875e-8,
                        -3.3263170397032793e-9,
                        4.934960540339728e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00009136562800733105,
                        2.4645987818602273e-8,
                        -1.2877173693586754e-8,
                        0.000007748581314880424,
                        -0.00000805215692765335,
                        5.710582802697672e-10,
                        2.5868152397346304e-9,
                        0.00006888769971099186,
                        -6.567523470367247e-8,
                        9.188999675435383e-9,
                        -2.9799378603528073e-7,
                        -8.317868995759598e-9,
                        2.5886947257590657e-7,
                        4.868092334331623e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.000002535147440165272,
                        3.7060216010464376e-8,
                        -8.09362193634828e-11,
                        -0.0000010764961008881331,
                        0.0000016030453780273166,
                        1.1196098256149664e-10,
                        -1.029280113573456e-9,
                        0.000007100399846834512,
                        -1.0767454118398946e-7,
                        -4.274091541555869e-10,
                        1.0375606582059746e-9,
                        -3.222301421658336e-8,
                        -1.0337907366928136e-9,
                        -1.613419958466394e-11,
                        9.479258629170614e-8,
                        0,
                        0,
                        0,
                        -0.00036531490482026206,
                        -1.7865083057885172e-7,
                        1.1326827064630127e-9,
                        -0.000009739784745204961,
                        -0.000011457403217682583,
                        -4.052024555870408e-9,
                        1.7147265828275978e-8,
                        -0.0008379054348771301,
                        5.017437957706135e-7,
                        -2.224379808208715e-8,
                        1.3883612303508046e-8,
                        1.499592409368013e-7,
                        -2.7383761336077566e-8,
                        8.014413153499189e-9,
                        -2.8098033606594524e-7,
                        0.0007090996945773066,
                        0,
                        0,
                        -0.0005583774876318677,
                        3.358242541661226e-9,
                        -6.2872611609149336e-9,
                        0.0000021685879582738085,
                        -2.2700438119254212e-7,
                        1.3910829015547194e-10,
                        -1.397966525874901e-9,
                        -0.0000869159445431154,
                        -7.893423671992522e-9,
                        -1.4115852140620909e-9,
                        -3.088711205949251e-8,
                        5.82555458934916e-9,
                        2.8846422783730073e-8,
                        -5.969079937669498e-10,
                        1.1675863662790845e-8,
                        0.00002326983357787676,
                        0.0006126169304069224,
                        0,
                        -0.00047943334426118643,
                        -1.8372945355454586e-9,
                        -3.048366813905978e-8,
                        8.43850226744179e-7,
                        4.749056897490416e-8,
                        -5.2900384345402115e-12,
                        1.5071692535178833e-10,
                        0.000005234795842370489,
                        5.039367262103874e-9,
                        3.993866599585444e-11,
                        1.8451007500493564e-9,
                        1.4650180406247901e-9,
                        -1.4195719564273862e-9,
                        1.1574262503753268e-10,
                        -5.3508318863682434e-9,
                        -0.0000017111846941277383,
                        0.00048815385619484025,
                        2.9647244141045262e-8
                    ],
                    "g": [
                        898.3179267213535,
                        459.29489619826586,
                        -670.3058129226202,
                        -187.9738980575062,
                        605.4176737952245,
                        179.18249794122718,
                        -355.9514550551923,
                        266.3730576653215,
                        -1100.1320033697825,
                        281.29514376262114,
                        218.88492561331608,
                        222.6645559396406,
                        -1871.6506682198956,
                        -261.2522408129197,
                        -2493.524112296738,
                        101.02276072957434,
                        1070.3071183538354,
                        6037.336000144351
                    ],
                    "mx": [
                        4217.050193925866,
                        55199354.20607308,
                        63181991.357707456,
                        3059.094212828341,
                        3606.0794979079496,
                        45002216.34575884,
                        16409363.839859523,
                        3740.627586889891,
                        18619196.164104868,
                        77782532.11943705,
                        16846415.78640389,
                        64952626.09832081,
                        17209014.249188907,
                        15445349.129707113,
                        21915091.53153987,
                        1799.7037714317585,
                        4078.243433460907,
                        65341250.38262794
                    ],
                    "cases": [
                        {
                            "dayTime": "01:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -2
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -2
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -2
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 3,
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
                                    "value": -1054.668204639382
                                }
                            ]
                        },
                        {
                            "importance": 30.18700063645253,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -3
                                },
                                {
                                    "type": "β",
                                    "value": 0.5464580920098523
                                }
                            ]
                        },
                        {
                            "importance": 13.064505572727853,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007797773934241093
                                }
                            ]
                        },
                        {
                            "importance": 6.805634615386567,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.07861727903443125
                                }
                            ]
                        },
                        {
                            "importance": 6.1018757918573465,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -4
                                },
                                {
                                    "type": "β",
                                    "value": -0.08938381397522555
                                }
                            ]
                        },
                        {
                            "importance": 5.763566010529419,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -3
                                },
                                {
                                    "type": "β",
                                    "value": -0.000020786127765155464
                                }
                            ]
                        },
                        {
                            "importance": 5.248660421646145,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.000009270640573212398
                                }
                            ]
                        },
                        {
                            "importance": 10.203907694853957,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -4
                                },
                                {
                                    "type": "β",
                                    "value": 0.000014518616487418181
                                }
                            ]
                        },
                        {
                            "importance": 4.136919772864185,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.10366794692552798
                                }
                            ]
                        },
                        {
                            "importance": 3.12687705808642,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.20260688532297227
                                }
                            ]
                        },
                        {
                            "importance": 3.3852758970855157,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00014774859132003537
                                }
                            ]
                        },
                        {
                            "importance": 6.4072039272596735,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": -0.24226914308289788
                                }
                            ]
                        },
                        {
                            "importance": 2.610212593317327,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.4220882198303917
                                }
                            ]
                        },
                        {
                            "importance": 2.9583600079330394,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00003819752525952194
                                }
                            ]
                        }
                    ],
                    "dayTime": "02:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -3
                        }
                    ],
                    "samplesAhead": [
                        3
                    ],
                    "predictionIntervals": [
                        -2711.0382532438125,
                        1041.9874403064293
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006035547518230414,
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
                        -0.0004835178743645538,
                        4.122152644441033e-8,
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
                        -0.0001943054616964085,
                        -1.340484624265532e-8,
                        0.0007179591655468852,
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
                        -0.0003851610115368058,
                        6.381032492142736e-9,
                        0.00005592918983490916,
                        0.00040075182400753134,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0005123585341613185,
                        -7.762692059609466e-9,
                        0.00003626773141524381,
                        -5.975219059785716e-7,
                        3.23634182712548e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0004548887535343991,
                        -4.0874425371665946e-8,
                        -0.00002815593551955412,
                        -0.0000030291342574418734,
                        2.7168056162950088e-8,
                        7.56700520662303e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00008125787791149078,
                        2.1587611701153224e-8,
                        -0.000056514753521414917,
                        -0.00005635804105964701,
                        -1.1237470908591398e-8,
                        -5.3399628208880637e-8,
                        6.473815112285384e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00006634252517088413,
                        -1.4961042043933595e-8,
                        0.00004989992454169683,
                        -0.000021115066004538596,
                        -6.336691272898365e-9,
                        -3.191941314897353e-8,
                        1.587459018931687e-8,
                        0.0007118120084396282,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00012124007698919814,
                        -1.3447244921541657e-8,
                        -0.00001054768706742338,
                        -0.0003624580140501852,
                        -3.322430410662269e-9,
                        2.3659665468085142e-11,
                        2.3653994910280976e-8,
                        0.00013886917208921326,
                        0.00043701809986916666,
                        0,
                        0,
                        0,
                        0,
                        0.00009648013080992094,
                        -4.287405178291121e-8,
                        0.00001282254650441508,
                        0.00000914356879480024,
                        -6.8616237980648065e-9,
                        6.247405673632891e-9,
                        1.8206317726963598e-9,
                        -0.000005886843353924362,
                        -0.000008895241630927298,
                        1.1710859810821442e-7,
                        0,
                        0,
                        0,
                        -0.00023671283676802713,
                        -5.140132128013588e-8,
                        0.0000095847274309331,
                        -0.00009075384655496106,
                        1.7609802887772175e-8,
                        -1.4693956889106022e-8,
                        8.025696335753334e-9,
                        0.000019946713637748967,
                        -0.0002953629884855523,
                        1.0375319905068429e-7,
                        0.000539701385047685,
                        0,
                        0,
                        -0.000333895019644868,
                        3.327693372483042e-8,
                        -0.00005685976355426025,
                        -0.000034421231818977745,
                        1.514074718651587e-8,
                        -6.182979464800207e-8,
                        1.0444013713305152e-8,
                        -0.00017517967410218257,
                        -0.000058548317514471925,
                        -9.077634301393169e-8,
                        0.00012686609874635246,
                        0.0007249589816147924,
                        0,
                        0.0002641208808565123,
                        2.170997073666291e-8,
                        0.000014494932135417863,
                        -0.000005847608006283943,
                        -1.5223680673353485e-8,
                        -6.65280543832292e-8,
                        4.277060545966117e-9,
                        -0.0000022935690316631636,
                        -0.000020847778006038563,
                        1.0364855276779674e-10,
                        0.000027034407243403177,
                        -0.0004776761141547795,
                        6.490629224175928e-8
                    ],
                    "g": [
                        856.4744762708627,
                        428.54576686628644,
                        190.10975060466953,
                        -147.21582665492937,
                        -540.9621320083777,
                        -286.90397829713436,
                        218.07617357650125,
                        172.90876293672196,
                        133.01593907745615,
                        -698.300236669376,
                        -465.12672071924663,
                        194.45866920807595,
                        -588.5026542148788
                    ],
                    "mx": [
                        4217.27752028751,
                        49860489.37177378,
                        2845.9939163498098,
                        2756.4091254752852,
                        60807373.65047396,
                        15228398.616747273,
                        12422827.741064638,
                        3326.9083377174516,
                        3457.5946768060835,
                        16724507.136117736,
                        2372.9749106908234,
                        4105.3359328402075,
                        18757276.778833233
                    ],
                    "cases": [
                        {
                            "dayTime": "02:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -3
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -3
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -3
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 4,
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
                                    "value": -1136.4608516157045
                                }
                            ]
                        },
                        {
                            "importance": 24.817531602829074,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00004318810581221362
                                }
                            ]
                        },
                        {
                            "importance": 8.934486486501378,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -4
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.000012302591036095674
                                }
                            ]
                        },
                        {
                            "importance": 4.162589380266024,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.22759357279158687
                                }
                            ]
                        },
                        {
                            "importance": 4.575420305793101,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.000019849097746180198
                                }
                            ]
                        },
                        {
                            "importance": 5.872271139603201,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.8237372153752605
                                }
                            ]
                        },
                        {
                            "importance": 6.923032279933147,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": 0.000010541426361756342
                                }
                            ]
                        },
                        {
                            "importance": 8.577824989611853,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.000011273236464065609
                                }
                            ]
                        },
                        {
                            "importance": 5.505531312363416,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.07909183283487203
                                }
                            ]
                        },
                        {
                            "importance": 4.897956562040757,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0002433188987415566
                                }
                            ]
                        },
                        {
                            "importance": 4.2900021233405505,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.2234972643145131
                                }
                            ]
                        },
                        {
                            "importance": 5.517460120928524,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": -0.3150130195198516
                                }
                            ]
                        },
                        {
                            "importance": 2.314792218836491,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -4
                                },
                                {
                                    "type": "β",
                                    "value": 0.00011845268016159092
                                }
                            ]
                        },
                        {
                            "importance": 1.746765036466026,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00015315097054797753
                                }
                            ]
                        },
                        {
                            "importance": 5.613513630170865,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -4
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003008990817538369
                                }
                            ]
                        },
                        {
                            "importance": 2.8601314208448834,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -4
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007750066389029043
                                }
                            ]
                        },
                        {
                            "importance": 1.6856287725369024,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -4
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000103406167035869
                                }
                            ]
                        },
                        {
                            "importance": 1.7050626179337909,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -4
                                },
                                {
                                    "type": "β",
                                    "value": 0.11906838869293913
                                }
                            ]
                        }
                    ],
                    "dayTime": "03:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -4
                        }
                    ],
                    "samplesAhead": [
                        4
                    ],
                    "predictionIntervals": [
                        -2593.6453724147727,
                        1036.3341084171407
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        4.6010508215702535e-8,
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
                        -2.7009950990718576e-8,
                        6.570625304873166e-8,
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
                        -1.978576671693765e-8,
                        -1.4585656122432066e-8,
                        0.0006635770743622193,
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
                        -1.3746545275781511e-8,
                        -6.06174258798506e-9,
                        -0.0004458451170217591,
                        7.871616449162776e-8,
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
                        -2.852876921333041e-8,
                        3.5710317388973266e-10,
                        0.00017501721121592772,
                        -4.1278553354197205e-8,
                        0.0007346368062357604,
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
                        -1.4425299982598113e-8,
                        -1.6699947037199408e-8,
                        0.00012178579607851921,
                        -3.9813648628021834e-8,
                        0.00009473970924226075,
                        6.15146197232603e-8,
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
                        2.1250301314306155e-9,
                        6.546376848729822e-10,
                        0.00025891679645431134,
                        -4.7034064262722174e-8,
                        -0.0005670864623830377,
                        -5.392699720996242e-11,
                        6.657915815390143e-8,
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
                        -6.276517156645293e-10,
                        1.4371775462679716e-9,
                        -0.0004707681022170426,
                        6.53537871683625e-9,
                        0.00017953760438128903,
                        4.0762191367796705e-10,
                        -1.6543244319563773e-8,
                        0.0005345495278849146,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -4.771264093816967e-8,
                        2.0293211038957673e-9,
                        -0.000009598550876882701,
                        5.381688047615842e-9,
                        -0.0000743157610300912,
                        2.2057489274048765e-9,
                        4.015917145462822e-9,
                        0.000007153214719127554,
                        1.321937984072933e-7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3.88306466686679e-8,
                        -4.816519421078136e-9,
                        0.0004061090806379363,
                        8.491901859601435e-9,
                        -0.00006790764477757287,
                        -2.841135045494373e-9,
                        7.53744214210315e-9,
                        -0.0006122641087945431,
                        -1.315533109246179e-7,
                        0.0004462024009143948,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -6.311429252666881e-8,
                        1.6756325180770179e-9,
                        0.00020921701712432847,
                        -3.5695419552871894e-9,
                        -0.00006767629536034138,
                        1.1607651877238035e-9,
                        2.571753281414182e-9,
                        -0.00023622975266510122,
                        1.3318701562921344e-7,
                        -0.00022978028006177966,
                        0.0005728308118759587,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.5831662528405937e-8,
                        -8.455806151116543e-9,
                        0.0000749740413447669,
                        -2.4703273588910037e-8,
                        0.00022968437121609898,
                        -8.274841320844695e-9,
                        -2.5335336214091286e-8,
                        0.000052203936787977887,
                        6.999930947454412e-9,
                        0.00004189634851583459,
                        -0.00010832062362028542,
                        7.562426716238676e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.4812335918056885e-8,
                        1.3141589232997638e-9,
                        0.00003462828646003625,
                        -6.781090946413631e-9,
                        0.00009538842144027271,
                        1.1731495658056783e-9,
                        -2.5704264227674116e-8,
                        0.000010283726224219456,
                        1.971571819060438e-8,
                        0.00004605976033591123,
                        -0.00006342965339337568,
                        -4.102713521015058e-8,
                        8.157221943064574e-8,
                        0,
                        0,
                        0,
                        0,
                        3.028369740224063e-8,
                        6.652242279599654e-10,
                        0.00006182494910753296,
                        -5.360679428113088e-9,
                        -0.00019249190253429788,
                        -1.074737347199668e-10,
                        -4.994429055682304e-8,
                        -0.00005729398828174614,
                        -1.7774598746057598e-7,
                        -0.00003057195902279596,
                        0.00006716597351967671,
                        -1.0547142484231106e-7,
                        1.683639482643592e-7,
                        1.023946662402778e-7,
                        0,
                        0,
                        0,
                        -4.5654920536742016e-8,
                        -6.89658914241813e-11,
                        7.243053711762737e-7,
                        3.4572562258750195e-10,
                        -0.000018873040035774047,
                        -9.57254689859161e-11,
                        -5.030641458334634e-9,
                        -0.000005932979736948353,
                        1.2665535558750407e-7,
                        -0.00000356864493110197,
                        0.000007079648199209573,
                        -6.841455370135649e-9,
                        1.3680569465188455e-8,
                        -9.885154550772364e-8,
                        3.666701400251232e-8,
                        0,
                        0,
                        1.9102915363207786e-8,
                        -3.17643002561252e-8,
                        -0.00003498523226291269,
                        1.0040306971662655e-8,
                        -0.00009063872947246045,
                        -2.517369520141647e-8,
                        -3.3020371473881115e-8,
                        0.00005514674644858072,
                        -1.2376752948919537e-7,
                        -0.000025358988418886347,
                        0.00002173966644815982,
                        -1.0807988686706413e-7,
                        1.5040319339931945e-7,
                        -3.8714778589592383e-10,
                        2.0065413390699635e-8,
                        4.8689280605315675e-8,
                        0,
                        8.364046230568443e-8,
                        3.2971686569566523e-9,
                        -0.000005658556766696595,
                        1.5214389802610943e-9,
                        -0.0002930458708911701,
                        5.0783943764047955e-9,
                        3.314408376649583e-8,
                        0.000029101417386294887,
                        -2.0637980707208813e-7,
                        0.0001072502186040081,
                        -0.00018265856923967407,
                        -4.822049932463303e-8,
                        2.7043287310230838e-8,
                        1.711869135873208e-7,
                        -8.157755327484527e-8,
                        -2.487534944082832e-8,
                        0.0006127052772204494
                    ],
                    "g": [
                        757.3652117694006,
                        314.15744107081855,
                        186.2831333833246,
                        -404.7673748608192,
                        327.8415191878716,
                        220.29106092876063,
                        -783.109932099631,
                        -141.1279939862578,
                        -734.7062748838963,
                        227.3232734460118,
                        -426.01897102778634,
                        381.685695625047,
                        -630.4061087141968,
                        -746.3003870755784,
                        2607.8785345695674,
                        -113.09541380049325,
                        194.33223952810627
                    ],
                    "mx": [
                        46580561.955551475,
                        13193046.3,
                        2939.3787072243344,
                        13063611.532013617,
                        4064.7119968243856,
                        13339230.194296578,
                        18369240.426483225,
                        2126.9338403041825,
                        15513342.548141567,
                        3401.4148288973383,
                        2256.1967085213855,
                        14835459.574601041,
                        14281806.549357535,
                        20606803.0203189,
                        61762446.84074592,
                        15447789.32243346,
                        4078.548751575297
                    ],
                    "cases": [
                        {
                            "dayTime": "03:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -4
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -4
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -4
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 5,
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
                                    "value": -1410.8450359423587
                                }
                            ]
                        },
                        {
                            "importance": 26.707187321671405,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000011783980568655637
                                }
                            ]
                        },
                        {
                            "importance": 7.623737315089453,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -5
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": -8.124946008790256e-7
                                }
                            ]
                        },
                        {
                            "importance": 4.772820786532336,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.07976868190683115
                                }
                            ]
                        },
                        {
                            "importance": 3.6055435057298015,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.01814982567707911
                                }
                            ]
                        },
                        {
                            "importance": 2.865051474177778,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00001164303389379876
                                }
                            ]
                        },
                        {
                            "importance": 3.272899182717712,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": 1.2671690435479495
                                }
                            ]
                        },
                        {
                            "importance": 7.102807347785893,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.000035007730998432784
                                }
                            ]
                        },
                        {
                            "importance": 5.414536810897756,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.17764756117431846
                                }
                            ]
                        },
                        {
                            "importance": 4.142691689617481,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.11576896558591016
                                }
                            ]
                        },
                        {
                            "importance": 5.150144402707581,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": 0.000009741735074262104
                                }
                            ]
                        },
                        {
                            "importance": 2.9906614035623984,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00001050456032269356
                                }
                            ]
                        },
                        {
                            "importance": 3.695579269044189,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005351277849614047
                                }
                            ]
                        },
                        {
                            "importance": 2.7931155996879626,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": -0.00001610377278480621
                                }
                            ]
                        },
                        {
                            "importance": 3.2175817443155426,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": -0.17664429829011588
                                }
                            ]
                        },
                        {
                            "importance": 7.472840031392574,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.13107933722869494
                                }
                            ]
                        },
                        {
                            "importance": 1.9358447229288158,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": 0.000034959319142046607
                                }
                            ]
                        },
                        {
                            "importance": 3.708017484136915,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": -0.30559684715801305
                                }
                            ]
                        },
                        {
                            "importance": 1.0953153555314636,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -5
                                },
                                {
                                    "type": "β",
                                    "value": -0.00014693153774565437
                                }
                            ]
                        },
                        {
                            "importance": 2.433624552472953,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00005338584445136514
                                }
                            ]
                        }
                    ],
                    "dayTime": "04:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -5
                        }
                    ],
                    "samplesAhead": [
                        5
                    ],
                    "predictionIntervals": [
                        -2732.573549246717,
                        1173.8146892100071
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        4.719000360228439e-8,
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
                        0,
                        -2.873955103510098e-8,
                        6.570625304873166e-8,
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
                        -2.3474820206304075e-8,
                        -9.05823627214555e-9,
                        0.0005815935019878182,
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
                        8.403895970007459e-10,
                        -1.5011946474687327e-8,
                        0.000026442804636233722,
                        0.0008341510913049525,
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
                        -1.4307883207541467e-8,
                        -4.9071768964249046e-9,
                        -0.00039035686187120696,
                        -0.000007163900224336267,
                        7.089879953594084e-8,
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
                        -2.948527263060324e-8,
                        -9.57172942215917e-9,
                        0.00008667368554284417,
                        0.00002292675161675364,
                        -2.2901076104716538e-8,
                        0.0007014038484080116,
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
                        -4.593156465644526e-8,
                        3.514633301102561e-9,
                        -0.000005256664767782867,
                        -0.000010259184189422989,
                        8.072416438891365e-9,
                        -0.0000985835426088618,
                        1.3913901460910196e-7,
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
                        5.639465618016644e-9,
                        5.309657242715993e-9,
                        0.0003382953381523307,
                        0.000007025865958609079,
                        -1.882196601144531e-8,
                        -0.00044109877412921116,
                        -1.4521913985876232e-8,
                        0.000674227422996706,
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
                        1.1104159793941983e-8,
                        5.091622217348969e-9,
                        -0.00006269248231708322,
                        0.00002181197301384874,
                        3.0617075483663566e-9,
                        0.0003470068812264209,
                        -6.6823979862526e-8,
                        0.00004079192293989042,
                        0.0007080150790016382,
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
                        6.29286972893101e-8,
                        8.075030737619758e-10,
                        0.000024953815288599364,
                        0.00003645483660365115,
                        -4.016752764735697e-9,
                        -0.0005420939991468428,
                        -2.1952848843772177e-7,
                        0.00007149463729316116,
                        -0.00002997783212855907,
                        1.0258730708202167e-7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.919517093457449e-8,
                        6.532283520618553e-10,
                        -0.00012153938167339939,
                        0.000023624317613386976,
                        2.0001805019610474e-8,
                        0.0011288823172903545,
                        9.22358109115941e-8,
                        0.000033692199747926684,
                        -0.00002586381435132375,
                        -2.373890315035547e-7,
                        5.200158076240756e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -5.0033097077489906e-8,
                        -1.4322844113249252e-8,
                        0.0000641876690465497,
                        -0.000025670067129029582,
                        -1.3502020772437967e-8,
                        0.0005529636711198295,
                        6.033907387220082e-8,
                        -0.000019557497811885368,
                        0.0000025959089069247197,
                        -1.3487549094567557e-7,
                        3.340225636438099e-8,
                        6.816487316420441e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.664275862521548e-8,
                        4.7149262540216756e-11,
                        0.00009677964622322898,
                        -9.72988114979687e-8,
                        -1.6524620367545822e-8,
                        -0.00010609469900990731,
                        8.404980691383165e-8,
                        -0.00003554089967591847,
                        -0.0000013780162087751354,
                        -6.300983805636614e-8,
                        4.6644032215330134e-9,
                        -3.2001063678610855e-8,
                        6.321704254896586e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.4843001721215206e-8,
                        -4.28603372316644e-9,
                        -0.000060321683350852006,
                        0.00041580713337828116,
                        1.2598774278424304e-8,
                        -0.0006466764693944182,
                        1.7643236553176474e-7,
                        -0.00013048568273507318,
                        -0.000019364592819433408,
                        4.138918058182619e-10,
                        -1.940655119517171e-8,
                        -6.255405711371206e-8,
                        5.140650271019084e-8,
                        0.00043404952937479735,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.154400866067193e-8,
                        5.340565352642139e-9,
                        0.0000939205095202688,
                        -0.0000899345844945948,
                        -1.3597377542718152e-8,
                        -0.00008310933636882684,
                        -7.493678692669924e-8,
                        0.00010405742221785113,
                        0.000013683811886397963,
                        4.746943138640006e-8,
                        -1.568652065330008e-8,
                        1.7925973704259096e-9,
                        9.505486097102531e-9,
                        -0.0004177916851898805,
                        0.000441901626323143,
                        0,
                        0,
                        0,
                        0,
                        -4.535466954297618e-9,
                        -7.923616921806452e-9,
                        -0.00012823488532396265,
                        -0.00005368920955717092,
                        2.8079698916610887e-8,
                        -0.00007988322764583853,
                        5.365628520189958e-8,
                        -0.00008584719126455403,
                        -0.00003104730283694419,
                        -4.433938843507357e-8,
                        -9.67846543884809e-9,
                        -3.639882966268786e-8,
                        -5.110204594123796e-10,
                        -0.00011395174214598508,
                        0.00007567240679957221,
                        3.431316527276861e-8,
                        0,
                        0,
                        0,
                        1.4905499672029323e-8,
                        3.2005931428714098e-9,
                        0.00002656253459445729,
                        7.808968200849799e-7,
                        -4.717478490787967e-9,
                        0.00011129336973754473,
                        -1.8880310940197923e-8,
                        -0.0005277305830589179,
                        -0.000037756518445087875,
                        1.3943958289326398e-10,
                        7.824289935328678e-9,
                        -2.3103709058703006e-8,
                        2.9190564555285908e-8,
                        -0.000029105154665229907,
                        0.000009952358728907902,
                        -2.48200229494689e-8,
                        0.0005732388414693519,
                        0,
                        0,
                        -2.0664917974229628e-9,
                        4.295693841116539e-9,
                        -0.00004743775167368938,
                        0.0000010756073357595086,
                        1.041188251829728e-8,
                        0.00021719156201718663,
                        3.7699889320183736e-8,
                        0.000057012912725605886,
                        0.000004833389321588574,
                        -1.424969852102028e-7,
                        8.441000909476556e-9,
                        -2.8839747991684087e-8,
                        2.2793454068985004e-8,
                        -0.000012688287338570792,
                        2.2566218680616158e-7,
                        -1.0637072182490146e-8,
                        -0.00004942108959861867,
                        9.074905535129733e-8,
                        0,
                        1.45697940763543e-10,
                        1.925288826759253e-9,
                        0.0000414736877249539,
                        -0.000002566948791752379,
                        -6.843747780634858e-9,
                        0.00013145268947093518,
                        -3.84845527147259e-8,
                        -0.00000772739356067733,
                        -0.000001370030895373693,
                        -1.0598049366358217e-7,
                        5.619962929073013e-9,
                        3.5178857909193033e-8,
                        -9.00906746974039e-8,
                        -0.000004123439743300038,
                        -5.667005992389871e-7,
                        -5.489237161947856e-9,
                        0.0000032368492438966594,
                        1.1418464660016075e-7,
                        6.801178600118848e-8
                    ],
                    "g": [
                        826.799480740361,
                        309.4612948408312,
                        215.8145828063968,
                        144.606407387803,
                        -318.6236767828905,
                        265.08824130429724,
                        -1155.3452363599479,
                        -166.59676223194043,
                        120.10324750425667,
                        -699.6949953655698,
                        393.7185846128796,
                        357.72869445303536,
                        -793.6109794244253,
                        -147.54726560302478,
                        261.8579240631703,
                        275.7265724289604,
                        -583.1118950037779,
                        -631.4369981856412,
                        -784.9498975138256
                    ],
                    "mx": [
                        45971244.90381192,
                        13193046.3,
                        3171.602661596958,
                        419.73079847908747,
                        13966451.453579856,
                        4209.1995479613515,
                        15195684.656584918,
                        1892.9977343517626,
                        -1453.934262142512,
                        20747032.341206845,
                        70796254.70912547,
                        14981255.0122792,
                        19290568.102666803,
                        2941.175671160731,
                        3435.34144486692,
                        60352565.92352584,
                        2023.052698288978,
                        21425713.743658368,
                        18024548.682606664
                    ],
                    "cases": [
                        {
                            "dayTime": "04:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -5
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -5
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -5
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 6,
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
                                    "value": -705.9449912930013
                                }
                            ]
                        },
                        {
                            "importance": 25.391954096978736,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00008402990909911415
                                }
                            ]
                        },
                        {
                            "importance": 6.062563019568245,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.04083852049593773
                                }
                            ]
                        },
                        {
                            "importance": 5.482329578838476,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.06450039335914294
                                }
                            ]
                        },
                        {
                            "importance": 9.460565707473682,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -6
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.00000410271286212524
                                }
                            ]
                        },
                        {
                            "importance": 6.269621599216004,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.014040026686894636
                                }
                            ]
                        },
                        {
                            "importance": 5.431233086137047,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002524525616409041
                                }
                            ]
                        },
                        {
                            "importance": 4.149469903789562,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 1.086935610323958
                                }
                            ]
                        },
                        {
                            "importance": 7.005316284117816,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00001546658422248083
                                }
                            ]
                        },
                        {
                            "importance": 7.151946011039414,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -6
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 6,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007934624194502323
                                }
                            ]
                        },
                        {
                            "importance": 3.384014220621618,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.000025583387478893855
                                }
                            ]
                        },
                        {
                            "importance": 5.5128917403575315,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.16008950388423868
                                }
                            ]
                        },
                        {
                            "importance": 3.3625665580581785,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -803.1226419899681
                                }
                            ]
                        },
                        {
                            "importance": 3.4571132560309406,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.14218269090669924
                                }
                            ]
                        },
                        {
                            "importance": 3.1857627078103414,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": -0.16027993529287812
                                }
                            ]
                        },
                        {
                            "importance": 2.6367918639047567,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.0002126683425499993
                                }
                            ]
                        },
                        {
                            "importance": 2.0558603660576544,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00016578502886405427
                                }
                            ]
                        }
                    ],
                    "dayTime": "05:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -6
                        }
                    ],
                    "samplesAhead": [
                        6
                    ],
                    "predictionIntervals": [
                        -2877.077676751685,
                        1284.2664356789433
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        4.296178301841801e-8,
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
                        -1.6353895876731082e-9,
                        0.0007804004015298909,
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
                        2.990794009173516e-9,
                        0.000013471431745619994,
                        0.0006671187406201277,
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
                        -2.6328534739749823e-8,
                        -0.00012003489872505412,
                        -0.0002299755926851903,
                        6.168973968698686e-8,
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
                        -1.7437417852042452e-8,
                        0.00012324956912288822,
                        0.00007002803428211941,
                        -2.7870751453788335e-9,
                        0.000437081205314441,
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
                        -4.247260519837777e-8,
                        0.000004339872031010044,
                        -0.000006466899470308505,
                        -1.101337077503137e-9,
                        0.00001304840228852583,
                        1.2993111980924904e-7,
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
                        1.269598531056112e-8,
                        -0.000008275512823408479,
                        -0.00011378276149600855,
                        -2.068915921072111e-8,
                        -0.000037553640132619015,
                        -1.1560229871260106e-7,
                        0.0007014038484080116,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.008507224381878e-8,
                        -0.000014569658882545761,
                        -0.00004685920058112653,
                        4.534947946735541e-9,
                        0.000019213972931474525,
                        7.382069256000158e-8,
                        -0.0006025232236552017,
                        6.911847541328843e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.2790957504106305e-8,
                        -0.00002021037045827578,
                        -0.000019171956173573004,
                        -1.8316985876486066e-8,
                        -0.000008196860559900508,
                        3.1322869120492213e-8,
                        -0.0004854335001330787,
                        4.3950717514938166e-9,
                        5.369104692211995e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.8918724845279044e-8,
                        -0.000043185846886002434,
                        -0.000043954619208458535,
                        -6.172048783038484e-8,
                        0.0000025076812765026353,
                        3.711450656319429e-8,
                        0.0002820200690479625,
                        5.4206846919331616e-11,
                        -1.2635530874404312e-10,
                        7.617921469238726e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.1453311975212946e-8,
                        -0.000017553714234590538,
                        0.0005263245679761573,
                        -3.5102073557182024e-8,
                        0.000005731833810248265,
                        -2.326861436949096e-8,
                        0.0002464546247801156,
                        -6.386936038058149e-9,
                        6.7737726805506845e-9,
                        4.3572523334852154e-8,
                        0.0004701276950529549,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.1636857796103713e-9,
                        0.00018219905522930458,
                        -0.0005079784925411974,
                        1.5811120574416135e-8,
                        -0.00008029314720857766,
                        3.4574244874307905e-8,
                        -0.00015433058642596277,
                        1.51648339007309e-8,
                        -6.407856414449443e-9,
                        -1.760072634752012e-8,
                        -0.00002214789619558848,
                        3.2198686158301113,
                        0,
                        0,
                        0,
                        0,
                        5.2962468555492067e-8,
                        -0.0000012322279934266042,
                        0.00009014535448400168,
                        -1.9126467424536584e-8,
                        -0.00033578621153750623,
                        -1.8640452590378037e-7,
                        0.00015645349694081722,
                        7.848212884828353e-9,
                        5.981954359066292e-10,
                        2.142345533761671e-8,
                        -0.00003448585569844159,
                        -1.1236513611149823,
                        0.0004226854220211403,
                        0,
                        0,
                        0,
                        -5.342303214353062e-8,
                        0.0002290972595831006,
                        0.00008746810741222389,
                        -7.922638139247337e-9,
                        -0.00003935271924956396,
                        6.696575994799516e-8,
                        0.00005220311174121053,
                        3.476281466769029e-9,
                        2.411062431898051e-9,
                        1.214842745763007e-8,
                        0.000027711510356309,
                        -0.9708756325916073,
                        -0.00013428677845215865,
                        0.0005683843498829708,
                        0,
                        0,
                        -2.496902900417234e-8,
                        -0.00002039407019054171,
                        0.00003080247100216911,
                        3.119788714779433e-8,
                        -0.000021474579912680727,
                        2.9309774299735446e-8,
                        0.00016328750204191926,
                        -2.4335516738138122e-8,
                        -3.101778346860186e-8,
                        -3.859897732929587e-8,
                        0.000016647999799888087,
                        -0.20930517206115554,
                        0.000020825235320587213,
                        0.000007188434637319413,
                        7.585783028819519e-8,
                        0,
                        -1.988913864046699e-9,
                        0.000004926293772717964,
                        -0.000014441937097423008,
                        -3.728595356081209e-9,
                        2.7782072590397474e-9,
                        3.373761672152205e-10,
                        0.000042983628408483376,
                        -1.936345683186245e-8,
                        1.501447152029036e-8,
                        4.869310044254634e-9,
                        0.0000013698145332086114,
                        0.008001153901888856,
                        0.0000013050987750877313,
                        0.000002314216014615305,
                        -7.667316769453145e-8,
                        8.239271408618339e-8
                    ],
                    "g": [
                        985.3819066791779,
                        275.70376913126347,
                        -240.66323142739898,
                        409.59712823345745,
                        232.5792564880575,
                        -1046.126577626028,
                        339.50184544794195,
                        -416.98148547281914,
                        -526.3113114846851,
                        596.4019324815386,
                        341.9243206623248,
                        -204.9972676784551,
                        214.58856427419536,
                        -283.5348060329667,
                        769.7530582801103,
                        -2012.1321490956336
                    ],
                    "mx": [
                        48252337.581781276,
                        450.6022813688213,
                        976.4698520298634,
                        16449629.412682557,
                        2513.649429657795,
                        15881765.860513976,
                        4209.1995479613515,
                        17761496.21698755,
                        20501038.67854,
                        12064673.508245515,
                        -969.628177219673,
                        0.17211598604148198,
                        3568.4281368821294,
                        2256.924941852342,
                        14535566.400522366,
                        13755979.304265717
                    ],
                    "cases": [
                        {
                            "dayTime": "05:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -6
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -6
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -6
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 7,
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
                                    "value": -800.2011288498161
                                }
                            ]
                        },
                        {
                            "importance": 27.14534237507436,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006446894049123274
                                }
                            ]
                        },
                        {
                            "importance": 10.306568782215738,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.12026426554912796
                                }
                            ]
                        },
                        {
                            "importance": 9.157581282996247,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.025697364900965317
                                }
                            ]
                        },
                        {
                            "importance": 5.523518481753667,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -8
                                },
                                {
                                    "type": "β",
                                    "value": 0.08015041848141878
                                }
                            ]
                        },
                        {
                            "importance": 9.00436794310729,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -7
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000834897756784967
                                }
                            ]
                        },
                        {
                            "importance": 4.951497007733923,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007856709685436355
                                }
                            ]
                        },
                        {
                            "importance": 5.268330473630776,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00021595324351063872
                                }
                            ]
                        },
                        {
                            "importance": 7.634686760213732,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 1.2635582851286895
                                }
                            ]
                        },
                        {
                            "importance": 8.342841504798342,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007291062865492933
                                }
                            ]
                        },
                        {
                            "importance": 3.8419838023865687,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -928.0594869847378
                                }
                            ]
                        },
                        {
                            "importance": 3.694906520590168,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 15,
                                    "offset": -7
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006982472042855457
                                }
                            ]
                        },
                        {
                            "importance": 2.9083740363999784,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.09122535210083574
                                }
                            ]
                        },
                        {
                            "importance": 2.2200010290992016,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -7
                                },
                                {
                                    "type": "β",
                                    "value": -0.00004508870892154335
                                }
                            ]
                        }
                    ],
                    "dayTime": "06:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -7
                        }
                    ],
                    "samplesAhead": [
                        7
                    ],
                    "predictionIntervals": [
                        -3106.6066161024664,
                        1360.6049589852278
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        3.71769384732055e-8,
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
                        3.7022806475762216e-10,
                        0.000737434931543896,
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
                        -1.588440910122212e-8,
                        0.000020204947486321445,
                        0.0004039000145691705,
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
                        -1.119382815073847e-8,
                        -0.00003275373119285717,
                        0.000002699272287149734,
                        0.00028800852006361074,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.686217076103569e-8,
                        -0.0000615918210880255,
                        -0.00003920584990376799,
                        0.00006316929742356374,
                        4.9334727866798534e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -7.35545693776617e-10,
                        0.000010044122729066504,
                        0.000007391153984643976,
                        -0.0000023072562146238657,
                        -4.8397668045198864e-8,
                        5.438631063978273e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.749252781927584e-8,
                        0.000004512419986839602,
                        0.000007571846735640055,
                        -0.0000020734642933283533,
                        -3.978654807236504e-9,
                        5.507199992464596e-9,
                        1.1218431228107605e-7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.7907342265644004e-8,
                        -0.00007938259981285995,
                        -0.000005182670983326195,
                        0.00006652413955204332,
                        6.320622707862628e-8,
                        -9.231127590275272e-8,
                        -1.4333550868119956e-7,
                        0.00075716804461899,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.1709892724329702e-8,
                        -0.000011417245365120196,
                        -0.000002095816170949398,
                        0.000010535031697226854,
                        2.46136892998368e-8,
                        -3.58674948853826e-8,
                        2.927778181116633e-8,
                        -0.0005853504050631156,
                        6.974714231824279e-8,
                        0,
                        0,
                        0,
                        0,
                        -1.2541934246392358e-8,
                        0.00016048326992333217,
                        0.00003368741372521489,
                        0.0001701177251484002,
                        -3.0011775181292906e-8,
                        2.9717984834991378e-8,
                        7.678565999023861e-8,
                        -0.00022205461891971787,
                        1.3836048217038961e-9,
                        3.3253987663770337,
                        0,
                        0,
                        0,
                        -3.714247488803591e-8,
                        -0.00006998331105180165,
                        0.000007496474068036292,
                        0.00002381716769221946,
                        -7.379253498143241e-8,
                        7.555585120233753e-8,
                        4.472231434916862e-8,
                        0.0003703544437957496,
                        -5.773029664168837e-8,
                        -0.21768330732093635,
                        6.708997125057015e-8,
                        0,
                        0,
                        4.7608822124240664e-8,
                        -0.000002504441829121272,
                        -0.00033524700042691805,
                        0.000025576824581705875,
                        -3.217741712931108e-9,
                        2.242125606276427e-10,
                        -1.763310420704939e-7,
                        0.00027623980807430545,
                        -1.1295594398910423e-8,
                        0.046875698096514186,
                        2.1753639937734805e-8,
                        0.00039677708108879666,
                        0,
                        1.375779592310936e-8,
                        0.000014925308773016983,
                        0.000011072914860491376,
                        0.000016835586087254853,
                        -6.878714885028565e-8,
                        7.205473240378053e-8,
                        -1.830242911344744e-8,
                        -0.00017804355241135908,
                        -3.2844264121156546e-8,
                        0.0823428441645531,
                        -3.0045749137322966e-8,
                        -0.00001350188238344094,
                        6.381029538919476e-8
                    ],
                    "g": [
                        1101.155612912674,
                        372.58636773867465,
                        333.16101258512526,
                        214.3565070665321,
                        357.8778317924408,
                        -995.6670293096716,
                        -1075.8166926183364,
                        425.51027980276666,
                        -796.0974279714651,
                        -221.44283846462736,
                        657.5615621569941,
                        205.8708805408072,
                        -706.6055508211672
                    ],
                    "mx": [
                        52847533.537195325,
                        474.0019011406844,
                        2778.842205323194,
                        -363.0492348896101,
                        20448602.703314256,
                        19123367.201091133,
                        17427503.109351423,
                        3983.3875211821132,
                        17594863.74409906,
                        1.910642430285546e-10,
                        15379317.191711396,
                        3774.6589353612167,
                        18978568.242359716
                    ],
                    "cases": [
                        {
                            "dayTime": "06:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -7
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -7
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -7
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 8,
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
                                    "value": -908.4489414192371
                                }
                            ]
                        },
                        {
                            "importance": 30.281834430331273,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007681705193658259
                                }
                            ]
                        },
                        {
                            "importance": 12.806733045175307,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.11529448480398125
                                }
                            ]
                        },
                        {
                            "importance": 10.152280181924668,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.029437949706368094
                                }
                            ]
                        },
                        {
                            "importance": 5.678758062122053,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -8
                                },
                                {
                                    "type": "β",
                                    "value": -0.27518061076508393
                                }
                            ]
                        },
                        {
                            "importance": 14.472852883137685,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -8
                                },
                                {
                                    "type": "β",
                                    "value": -0.014722643791484887
                                }
                            ]
                        },
                        {
                            "importance": 9.301486076381327,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00023310593327011218
                                }
                            ]
                        },
                        {
                            "importance": 3.087679694324889,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -675.2429677436024
                                }
                            ]
                        },
                        {
                            "importance": 3.201693876659759,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -8
                                },
                                {
                                    "type": "β",
                                    "value": 1.1781916221901836
                                }
                            ]
                        },
                        {
                            "importance": 6.4975587763181535,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -8
                                },
                                {
                                    "type": "β",
                                    "value": -0.00009322321036634083
                                }
                            ]
                        },
                        {
                            "importance": 2.713688463267043,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000056999029298054726
                                }
                            ]
                        },
                        {
                            "importance": 1.80543451035784,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.06769213477460766
                                }
                            ]
                        }
                    ],
                    "dayTime": "07:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -401,
                            "dataTo": -8
                        }
                    ],
                    "samplesAhead": [
                        8
                    ],
                    "predictionIntervals": [
                        -3540.0086275527383,
                        1538.4584239546004
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        3.2801863714516606e-8,
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
                        1.2668364230232022e-9,
                        0.0006876923267297178,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.3875306251566957e-8,
                        -0.00004819711935255704,
                        0.0003755434262249712,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.6781313471742378e-8,
                        0.00008126612373819206,
                        -0.000037823444331939095,
                        0.0007494378321891886,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.5578976824687377e-8,
                        -0.00011761786423767831,
                        -0.00002351195654715472,
                        -0.00028845763619666956,
                        0.0005993081464398902,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.1295031447308686e-8,
                        0.000013651852916414992,
                        0.000004840320093474484,
                        0.00003197901374913048,
                        -0.000019903090534744238,
                        9.749452031988491e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.7436791039950354e-8,
                        0.00011546644210298745,
                        0.00012765939015804527,
                        -0.0003687196315712769,
                        -0.00024569899970130105,
                        1.0257040362834076e-7,
                        3.2198686156609657,
                        0,
                        0,
                        0,
                        0,
                        6.844528966456725e-9,
                        -0.0000328146351729286,
                        -0.000009967856011493286,
                        -0.00000504077098308732,
                        -0.0004008395193909885,
                        -5.571036539545084e-8,
                        -0.23949947294344215,
                        0.0007014038484080116,
                        0,
                        0,
                        0,
                        -2.5338113780722144e-8,
                        -0.000022876706254542945,
                        0.00000372105683571335,
                        -0.0000446105528737098,
                        0.00018240516491034256,
                        6.705296144242342e-8,
                        -0.0007909649654692394,
                        -0.0008227545314701343,
                        6.727535081497541e-8,
                        0,
                        0,
                        -3.6539521984314096e-8,
                        -0.000042983598529486334,
                        -9.266253738860298e-7,
                        -0.00002732751984927823,
                        -0.00003485151139729048,
                        5.1877279862135037e-8,
                        -0.17840135807149218,
                        0.0003983744599300792,
                        -6.451236813354953e-8,
                        7.331317022736468e-8,
                        0,
                        3.240606064014969e-8,
                        0.00001182830701130025,
                        -0.0002590912954777758,
                        -0.0001708949576312593,
                        -0.0001227420629837359,
                        -1.201458804927849e-7,
                        1.215947492089777,
                        0.0002556658055140531,
                        -1.2130505931737157e-8,
                        2.5191525650296816e-8,
                        0.0003713926666892758
                    ],
                    "g": [
                        1171.419754816276,
                        390.8682392615717,
                        318.8949133575632,
                        -214.2715059505625,
                        402.2701525394268,
                        -1626.8464742990134,
                        -207.52295048465498,
                        424.512547304493,
                        -667.3463095282642,
                        714.8439868251628,
                        182.26567416648
                    ],
                    "mx": [
                        59384415.24606603,
                        507.4083650190114,
                        2976.496958174905,
                        -717.8291948711033,
                        4291.581942149839,
                        19715134.8467684,
                        -0.17211598574967235,
                        4209.1995479613515,
                        18518943.44980314,
                        15043259.80346519,
                        4027.193536121673
                    ],
                    "cases": [
                        {
                            "dayTime": "07:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -8
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -8
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -8
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 9,
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
                                    "value": -624.0280164783908
                                }
                            ]
                        },
                        {
                            "importance": 24.92001916151301,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -9
                                },
                                {
                                    "type": "β",
                                    "value": 0.000047574300058148354
                                }
                            ]
                        },
                        {
                            "importance": 11.889438767472187,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 133.92911023553947
                                }
                            ]
                        },
                        {
                            "importance": 9.200932495487962,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -9
                                },
                                {
                                    "type": "β",
                                    "value": 1.0180812311166245
                                }
                            ]
                        },
                        {
                            "importance": 13.770771908858709,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -9
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 15,
                                    "offset": -9
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000430197093338167
                                }
                            ]
                        },
                        {
                            "importance": 5.681474769609496,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.08443333896983546
                                }
                            ]
                        },
                        {
                            "importance": 5.2157013126245735,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.045542991304794216
                                }
                            ]
                        },
                        {
                            "importance": 10.330558399929254,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -9
                                },
                                {
                                    "type": "β",
                                    "value": -0.16115451982735757
                                }
                            ]
                        },
                        {
                            "importance": 3.5750260422348896,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -9
                                },
                                {
                                    "type": "β",
                                    "value": -0.00018200915728688822
                                }
                            ]
                        },
                        {
                            "importance": 7.087726014057785,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -9
                                },
                                {
                                    "type": "β",
                                    "value": 0.000057086887310070297
                                }
                            ]
                        },
                        {
                            "importance": 2.8571133650131517,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.000026705485663599674
                                }
                            ]
                        },
                        {
                            "importance": 1.6631766294223402,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.2301855544864649
                                }
                            ]
                        },
                        {
                            "importance": 3.808061133776633,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.10731399584675663
                                }
                            ]
                        }
                    ],
                    "dayTime": "08:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -9
                        }
                    ],
                    "samplesAhead": [
                        9
                    ],
                    "predictionIntervals": [
                        -3916.2849398100293,
                        1761.901375928405
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        5.9193123262718084e-8,
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
                        1.4059667874468467e-9,
                        2.975943569396338,
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
                        -4.936499103384719e-8,
                        -0.11425040834199685,
                        0.0007014038484080116,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.6439331441099388e-8,
                        -0.04697402718387103,
                        -0.000399906384765112,
                        5.6688093185803735e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -7.045560371934965e-9,
                        0.48319020199348633,
                        0.00011215162256103284,
                        -8.95049763719093e-9,
                        0.0006513499551805767,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.194676608978952e-8,
                        1.4992363424792716,
                        -0.0001581587733436216,
                        1.0516278860986655e-10,
                        -0.000007107964597139171,
                        0.00036064962820989686,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3.752022104884242e-8,
                        -1.8269011023771398,
                        0.0005056565372113059,
                        -4.646563646002326e-8,
                        0.000011733383324671854,
                        -0.00012407336512826236,
                        0.0007671723063373543,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.297655799683265e-8,
                        0.38688362882399524,
                        -0.0004957392170609665,
                        -3.0594758368842455e-8,
                        0.0000982082312576689,
                        0.000007638456766747317,
                        0.00011507605542102085,
                        8.376793774033054e-8,
                        0,
                        0,
                        0,
                        0,
                        -3.61830405806178e-9,
                        0.010302866868073874,
                        -0.0001456830153679654,
                        -1.010410101861831e-9,
                        0.00001989239254226479,
                        -0.00000613034729451269,
                        0.000018577354432629925,
                        -6.027506283093633e-8,
                        2.9770916610734507e-8,
                        0,
                        0,
                        0,
                        2.8131377366496405e-9,
                        0.24267422451255222,
                        -0.0004647702686408251,
                        -1.813537531832296e-8,
                        0.000008839420697693795,
                        0.000028406718592961437,
                        -0.00002094103542626642,
                        7.175879532681832e-8,
                        -2.5420620447885106e-8,
                        6.980095764296658e-8,
                        0,
                        0,
                        3.854735720722817e-9,
                        -0.9933304352116037,
                        -0.0002810406519786658,
                        -2.6045747458133568e-8,
                        0.000016204697761674695,
                        -0.00006931474868163425,
                        -0.0003838560263432327,
                        -1.4059187293377713e-8,
                        2.5132332893572365e-8,
                        3.289306951023682e-8,
                        0.0006932350132411517,
                        0,
                        -9.67046265021052e-9,
                        1.9874763482805138,
                        0.0001982009747524223,
                        2.7183634949194656e-8,
                        -0.000037037037303438155,
                        -0.00015579168193706927,
                        -0.000054507283117633306,
                        -6.17529848343996e-8,
                        -1.0944190759991014e-10,
                        -5.1794626215975425e-9,
                        -0.0003248932962222411,
                        0.0003505915074314146
                    ],
                    "g": [
                        1217.2996330527685,
                        -443.82269535229665,
                        572.7470808629897,
                        -1468.3910854183837,
                        169.0143013671087,
                        190.24004377929631,
                        -272.0863101316428,
                        -418.00476779907484,
                        1846.4620234701772,
                        -271.0100047980482,
                        -188.59063270171464,
                        306.0941111579842
                    ],
                    "mx": [
                        17021155.57409245,
                        -0.3325025517053846,
                        4209.1995479613515,
                        20181423.989165682,
                        539.3190114068441,
                        3126.091254752852,
                        -1525.2223029975685,
                        25606906.572111286,
                        76295491.08002345,
                        17571412.186543833,
                        -1859.6489875961956,
                        4281.198859315589
                    ],
                    "cases": [
                        {
                            "dayTime": "08:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -9
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -9
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -9
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 10,
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
                                    "value": -1372.8606852741696
                                }
                            ]
                        },
                        {
                            "importance": 28.228142555459396,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -10
                                },
                                {
                                    "type": "β",
                                    "value": 1.3269810991657938
                                }
                            ]
                        },
                        {
                            "importance": 12.100495593617085,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.05057440100288229
                                }
                            ]
                        },
                        {
                            "importance": 7.502284575921629,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00009391125189931703
                                }
                            ]
                        },
                        {
                            "importance": 13.770439066616763,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00009121300502344318
                                }
                            ]
                        },
                        {
                            "importance": 11.561508552433445,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.15332049085757293
                                }
                            ]
                        },
                        {
                            "importance": 7.615857497632758,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -10
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 13,
                                    "offset": -10
                                },
                                {
                                    "type": "β",
                                    "value": -0.000036984724396730436
                                }
                            ]
                        },
                        {
                            "importance": 3.6225739526340264,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.23796440013253775
                                }
                            ]
                        },
                        {
                            "importance": 4.827946140793541,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00025991013336657903
                                }
                            ]
                        },
                        {
                            "importance": 4.235082593567506,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007057445925389314
                                }
                            ]
                        },
                        {
                            "importance": 4.04790767052851,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000007450822683267858
                                }
                            ]
                        },
                        {
                            "importance": 2.487761800795333,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.0829837402689778
                                }
                            ]
                        }
                    ],
                    "dayTime": "09:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -401,
                            "dataTo": -10
                        }
                    ],
                    "samplesAhead": [
                        10
                    ],
                    "predictionIntervals": [
                        -4057.0970473311577,
                        1865.351853230775
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007014038484080116,
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
                        -0.0002558201851084146,
                        0.00035443306870839317,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000427725070911119,
                        -0.00010264366481250389,
                        4.6525144582408745e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00015288984666121512,
                        -0.000016323317995118227,
                        -3.5896875484607696e-8,
                        5.387894766208864e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00007879414518563147,
                        -0.00006581926857279846,
                        -1.399113010850491e-9,
                        7.932951185470083e-9,
                        0.0007818048920225053,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006049771264792847,
                        0.000008252144108959373,
                        -1.3121662904399706e-8,
                        8.246665969676393e-9,
                        -0.000031584534706880215,
                        5.598357350057895e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0006887745691841004,
                        -0.0000217890178820017,
                        2.6425028806873917e-8,
                        -1.7858278952032577e-8,
                        0.00004139829591780893,
                        -3.15282376110763e-8,
                        0.0007183870370956033,
                        0,
                        0,
                        0,
                        0,
                        -0.00046859532096762475,
                        -0.00003474309319649319,
                        -5.0120839781768146e-8,
                        5.709968006271424e-8,
                        0.00014826028008334637,
                        4.4277950016610184e-10,
                        0.00023458668732938813,
                        7.990512512253968e-8,
                        0,
                        0,
                        0,
                        -0.00002766166961366365,
                        0.000004636170055049989,
                        -9.858480360862177e-9,
                        7.720602292737957e-9,
                        -0.0000037201059073542416,
                        -8.204470614086355e-10,
                        -8.167311402901401e-8,
                        -7.162971222507528e-8,
                        2.7341349396295407e-8,
                        0,
                        0,
                        0.0002871555749117693,
                        -0.00003806656096711396,
                        3.974353516881253e-8,
                        -3.7038508219104104e-8,
                        0.00011020563439320861,
                        -1.1760076674122196e-8,
                        0.000038033039048912385,
                        -3.33144273248904e-7,
                        8.963020879360762e-8,
                        2.780285837120537e-8,
                        0,
                        0.00012123137489577249,
                        -0.0003364178267014005,
                        1.2197550488969904e-8,
                        2.120316975417827e-8,
                        -0.00004548728466379885,
                        -9.92149577866973e-9,
                        -0.00001799547917182424,
                        -2.0014730553732563e-8,
                        4.208963642166099e-10,
                        -4.828684101987769e-9,
                        0.0003347996706461648
                    ],
                    "g": [
                        1269.0444157645784,
                        459.24783306585323,
                        432.3117796884957,
                        -1273.5022237621204,
                        252.63778269979383,
                        -625.3596967551794,
                        -178.9005623317913,
                        -497.4133942405536,
                        1557.7868820583574,
                        311.0350902835475,
                        247.86087784620224
                    ],
                    "mx": [
                        4209.1995479613515,
                        3200.968060836502,
                        19592838.92128703,
                        19631963.718417164,
                        467.16850535515135,
                        20269613.146566853,
                        -2637.6047246383896,
                        24902567.900327735,
                        73750610.87080029,
                        117940818.93574144,
                        4504.707604562737
                    ],
                    "cases": [
                        {
                            "dayTime": "09:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -10
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -10
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -10
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 11,
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
                                    "value": -782.1800823438462
                                }
                            ]
                        },
                        {
                            "importance": 27.621512330366016,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": 1.2032507335687082
                                }
                            ]
                        },
                        {
                            "importance": 9.886888307169354,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00001872585042350096
                                }
                            ]
                        },
                        {
                            "importance": 12.288638578398192,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -768.5407783836715
                                }
                            ]
                        },
                        {
                            "importance": 5.922186533208724,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": 0.0004106037630232335
                                }
                            ]
                        },
                        {
                            "importance": 9.840153803469558,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 14,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": -0.00010086097099832442
                                }
                            ]
                        },
                        {
                            "importance": 4.785825670161171,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0003957420021634534
                                }
                            ]
                        },
                        {
                            "importance": 4.978414632745325,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.09734298252033069
                                }
                            ]
                        },
                        {
                            "importance": 5.793628071080553,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": 0.00003940922973964584
                                }
                            ]
                        },
                        {
                            "importance": 3.281553480475377,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": 0.00008381669075948593
                                }
                            ]
                        },
                        {
                            "importance": 2.6123186443733237,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": -0.00043280279738158354
                                }
                            ]
                        },
                        {
                            "importance": 9.580199357181039,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0004542440997304124
                                }
                            ]
                        },
                        {
                            "importance": 3.408680591371363,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -11
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -11
                                },
                                {
                                    "type": "β",
                                    "value": -0.00005744410521636701
                                }
                            ]
                        }
                    ],
                    "dayTime": "10:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -11
                        }
                    ],
                    "samplesAhead": [
                        11
                    ],
                    "predictionIntervals": [
                        -4295.630223852413,
                        2011.0280766511369
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007014038484080116,
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
                        -0.0005098878590511293,
                        4.549573682609185e-8,
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
                        -0.000044238610956242844,
                        3.363098003922215e-9,
                        2.516695454108389,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006314137160890515,
                        -3.0272371115019906e-9,
                        -0.01290620431967139,
                        6.666819484483052e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0008777152878736166,
                        -7.251810553564782e-11,
                        0.16981591198390228,
                        2.3823469832935905e-8,
                        7.131080630045695e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00011663753790220128,
                        -1.1166327767223833e-8,
                        0.09253453136375075,
                        -6.717153295771485e-8,
                        7.649467711285377e-9,
                        6.295182990236868e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000667603853165534,
                        -5.00539415318728e-9,
                        0.7304925689781567,
                        -2.7751226531637173e-8,
                        6.572419576621035e-8,
                        3.567734109628604e-8,
                        0.0006168098901112664,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00013380417839548364,
                        2.8284619217725693e-10,
                        0.024844877658324025,
                        -1.070789800836294e-8,
                        -4.9209998298943386e-8,
                        1.0601783777891666e-9,
                        0.000013584935325334845,
                        2.74186093941156e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.0002641293166634012,
                        -4.449971664906664e-9,
                        -0.12223423341613782,
                        2.56481310928625e-9,
                        -1.054267939861837e-7,
                        -5.615366217256474e-8,
                        -0.000052753696859204626,
                        4.935149520757511e-8,
                        5.5502979187759465e-8,
                        0,
                        0,
                        0,
                        -0.0000019730495162740783,
                        -1.6692418387241288e-9,
                        -0.008681899766336367,
                        6.568816642202222e-10,
                        -2.412247718923915e-8,
                        -5.013271870853338e-8,
                        -0.00001039610727595323,
                        7.805088761786947e-9,
                        -9.063881265038771e-9,
                        5.899379706663178e-8,
                        0,
                        0,
                        0.000009121749154370765,
                        -7.53673673981178e-11,
                        0.004704276808841497,
                        -6.79197333264089e-8,
                        7.418505219312259e-9,
                        -5.594727272027464e-8,
                        -1.8280096344070046e-7,
                        -2.417791548405203e-9,
                        3.2524235719424645e-10,
                        5.305529316826111e-8,
                        6.920622861727671e-8,
                        0,
                        -0.000051268493699725766,
                        6.913736482011344e-10,
                        0.0007998253149813043,
                        -1.5676095074223238e-7,
                        -1.7066375516780584e-8,
                        -2.05056697202803e-8,
                        0.0000023408659492581595,
                        8.457072038674577e-9,
                        -5.2645702375212075e-8,
                        7.181126041960741e-8,
                        1.0003645701513219e-7,
                        5.702088290843481e-8
                    ],
                    "g": [
                        1265.8235952670345,
                        490.73703202435746,
                        -317.6377622432923,
                        -564.1405712040994,
                        -536.3958075061543,
                        414.1465464337635,
                        138.62688018048414,
                        1123.2513259861778,
                        336.794756110838,
                        -1516.8199657754774,
                        -5107.418159230428,
                        -1007.4222335106915
                    ],
                    "mx": [
                        4209.1995479613515,
                        21021707.48392315,
                        -0.575911313296998,
                        18691903.842097964,
                        28485310.579147913,
                        18133428.23047694,
                        566.077566539924,
                        81862066.69139294,
                        18412575.380103756,
                        19090819.490124267,
                        17811783.485276077,
                        19165865.74445884
                    ],
                    "cases": [
                        {
                            "dayTime": "10:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -11
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -11
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -11
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 12,
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
                                    "value": -671.774921418807
                                }
                            ]
                        },
                        {
                            "importance": 33.569175403336054,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 27,
                                    "offset": -12
                                },
                                {
                                    "type": "β",
                                    "value": 1.2881933996748751
                                }
                            ]
                        },
                        {
                            "importance": 13.270501116640038,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.0026294678992686534
                                }
                            ]
                        },
                        {
                            "importance": 12.816559594569062,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 27,
                                    "offset": -12
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 12,
                                    "offset": -12
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008599398302001736
                                }
                            ]
                        },
                        {
                            "importance": 16.82203051189494,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -12
                                },
                                {
                                    "type": "β",
                                    "value": 0.000041679294845904655
                                }
                            ]
                        },
                        {
                            "importance": 5.528268526938371,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.000013997568183506365
                                }
                            ]
                        },
                        {
                            "importance": 8.33989406102903,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -537.6517755755309
                                }
                            ]
                        },
                        {
                            "importance": 5.94035826782948,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.10882202019009764
                                }
                            ]
                        },
                        {
                            "importance": 3.7132125177630226,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.20180826647457092
                                }
                            ]
                        }
                    ],
                    "dayTime": "11:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -363,
                            "dataTo": -12
                        }
                    ],
                    "samplesAhead": [
                        12
                    ],
                    "predictionIntervals": [
                        -4422.242962392615,
                        2107.983082608332
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006930936828272518,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0002715396770719017,
                        0.0003209941923257965,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006441732793024984,
                        -0.000007386993876783999,
                        5.467382949430916e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00005374325241436539,
                        1.733208747096038e-7,
                        -5.4063550415902874e-8,
                        5.429972859403596e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.0003625444037651159,
                        -0.00014542542225858424,
                        -3.625881095387901e-9,
                        8.056508196940453e-9,
                        1.50464035830437e-8,
                        0,
                        0,
                        0,
                        0.000029436321020816938,
                        0.0003451950322368,
                        9.308217678028248e-10,
                        -5.50247453156771e-9,
                        -9.362603963528818e-9,
                        2.3949491087502737,
                        0,
                        0,
                        0.00002142277455662095,
                        -0.000054452776689139374,
                        -5.467372253772315e-9,
                        -8.032802025174052e-9,
                        3.966309594344046e-9,
                        0.2712956713592981,
                        0.0006015008776181311,
                        0,
                        -0.000054810125258609697,
                        -0.00006265646707009204,
                        1.1859378408123245e-8,
                        -8.470964678913502e-9,
                        -1.2789499212628525e-8,
                        -0.37341467896001823,
                        -0.00002358042219764964,
                        0.00037494295345605225
                    ],
                    "g": [
                        1306.9841329897831,
                        365.99999941942997,
                        -786.2123807830126,
                        640.4136756763279,
                        227.48529693510918,
                        -326.5184913688482,
                        159.81715409733337,
                        -538.2372561329526
                    ],
                    "mx": [
                        4218.4760567283665,
                        3336.796197718631,
                        20395261.684580214,
                        19236807.762510773,
                        93320042.8095057,
                        -0.6423456041868872,
                        585.5570342205323,
                        4662.313307984791
                    ],
                    "cases": [
                        {
                            "dayTime": "11:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -12
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -12
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -12
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 13,
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
                                    "value": -1759.4338301956568
                                }
                            ]
                        },
                        {
                            "importance": 24.843684131831008,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00005109394483466986
                                }
                            ]
                        },
                        {
                            "importance": 7.858471930516677,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 23,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": 2.2524362777503484
                                }
                            ]
                        },
                        {
                            "importance": 7.269857542304302,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.07883108014396732
                                }
                            ]
                        },
                        {
                            "importance": 4.762051562377283,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 23,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": -0.00033949030559535253
                                }
                            ]
                        },
                        {
                            "importance": 8.195811324664446,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.16147632814250135
                                }
                            ]
                        },
                        {
                            "importance": 4.172974564077614,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00019081222159371593
                                }
                            ]
                        },
                        {
                            "importance": 3.1967483742082456,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00002059839703471616
                                }
                            ]
                        },
                        {
                            "importance": 1.7173176655442823,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": -0.000004076023066263657
                                }
                            ]
                        },
                        {
                            "importance": 4.737295757537609,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": 0.000017490518544500253
                                }
                            ]
                        },
                        {
                            "importance": 2.654464482995516,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00027275166387166294
                                }
                            ]
                        },
                        {
                            "importance": 2.5528808951266058,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005356722084555106
                                }
                            ]
                        },
                        {
                            "importance": 2.889451878235731,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -13
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": -0.000032769200552733374
                                }
                            ]
                        },
                        {
                            "importance": 2.0088249921032086,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.011514395579493835
                                }
                            ]
                        },
                        {
                            "importance": 0.653660655420625,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000013829343525534839
                                }
                            ]
                        },
                        {
                            "importance": 1.423902852877189,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002699737276528821
                                }
                            ]
                        },
                        {
                            "importance": 2.7544607241643786,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 23,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": 0.00025609971176714856
                                }
                            ]
                        },
                        {
                            "importance": 3.9109904453558735,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.7450187246762854
                                }
                            ]
                        },
                        {
                            "importance": 5.0728682522371935,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013180051956503805
                                }
                            ]
                        },
                        {
                            "importance": 4.67992748412067,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 23,
                                    "offset": -13
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006460699416934621
                                }
                            ]
                        },
                        {
                            "importance": 4.644354484301541,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00029539130989811194
                                }
                            ]
                        }
                    ],
                    "dayTime": "12:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -13
                        }
                    ],
                    "samplesAhead": [
                        13
                    ],
                    "predictionIntervals": [
                        -4361.152402796467,
                        2321.1249318402224
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.1658439751546985e-8,
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
                        0,
                        0,
                        -1.7914238959784425e-8,
                        0.0006805562935684008,
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
                        0,
                        -7.115715239322544e-9,
                        -0.00009306705392270497,
                        0.0003056419774120857,
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
                        -9.818196457902749e-9,
                        -0.000369920232103652,
                        0.000007678159259577858,
                        5.38728884203424e-8,
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
                        1.6389900479554947e-8,
                        0.00001404073921659352,
                        -0.00006822234745139063,
                        -3.8050460258742024e-8,
                        0.0006871143230503969,
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
                        -2.2689945626304627e-8,
                        -0.000018967920730075536,
                        -0.000004636773104828487,
                        4.898097834504177e-9,
                        0.00001073444592863182,
                        6.236027492489989e-8,
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
                        -8.300726622555463e-9,
                        0.00017178891479226204,
                        -0.00009364532560009258,
                        -3.394081283927689e-8,
                        0.000015152294262298674,
                        4.756584092711169e-9,
                        3.46051296245637e-8,
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
                        4.9778422333446795e-8,
                        -0.0003274493413796387,
                        0.000009680380221473945,
                        -9.946993404119569e-10,
                        -0.00000970185229704888,
                        -1.3093584398145937e-7,
                        -1.4519348744992727e-8,
                        1.793604144753116e-8,
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
                        -2.9082720039940637e-9,
                        -0.00018606328374700916,
                        -0.0000014900158575496816,
                        -6.8875039091673955e-9,
                        -0.00003506030577233167,
                        9.55341824810315e-9,
                        -4.369649370514861e-10,
                        -1.0822410594384535e-8,
                        3.751320322733635e-8,
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
                        -4.790654095966183e-9,
                        -0.00007208343270737783,
                        0.000004538146760357774,
                        -5.2028443587281526e-8,
                        0.0000036467423005921204,
                        9.624533574936749e-9,
                        1.7433408928532128e-9,
                        6.077294750651402e-10,
                        3.901366630493544e-9,
                        6.010583629550429e-8,
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
                        -6.759921379916662e-9,
                        -0.00007214591404705289,
                        -5.443155756006712e-7,
                        -1.29139354334291e-7,
                        -0.00000868207038708831,
                        2.3297045236055418e-8,
                        5.34884839075261e-9,
                        3.6744547189149713e-9,
                        -2.1313032179511408e-9,
                        7.92351995317682e-8,
                        5.221367407631944e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.3111998749679852e-8,
                        -0.0003185847125566922,
                        -0.000005098321679801304,
                        -3.835875662774837e-8,
                        0.000015503851994099495,
                        -2.0092078977050126e-8,
                        3.8229664648884915e-9,
                        -6.903273250456635e-10,
                        -1.959157809726449e-9,
                        5.475042107915566e-8,
                        -4.864559496932726e-8,
                        4.7599985012732104e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.2880286363271813e-8,
                        0.00025829759439568577,
                        -0.00031257151459825733,
                        -3.359193694760788e-8,
                        -0.00003191315392808742,
                        -6.51734647211132e-8,
                        2.84011662892111e-8,
                        -5.942352634352878e-10,
                        1.0741216101207267e-9,
                        1.4505451493225852e-8,
                        8.531560869394338e-9,
                        -4.770089123583591e-9,
                        0.00031288093933916106,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.0979350099212795e-8,
                        -0.00006512641539997272,
                        0.00002725907421042703,
                        7.771566688118662e-8,
                        0.00003784104101988464,
                        -1.4934059700009398e-7,
                        -3.1807475618379532e-9,
                        -9.456119324487066e-10,
                        -1.3215614052002665e-9,
                        -2.0438749087668798e-8,
                        2.6588065497683314e-8,
                        -3.455081354905467e-8,
                        -0.00004341791055247829,
                        2.3096782637449658e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.055587716890705e-8,
                        -0.00024702441278924526,
                        0.0000020345303709509326,
                        4.4002087513930104e-8,
                        -0.0000043991797315264585,
                        6.840774776837141e-9,
                        -1.4668006944329824e-9,
                        4.0991420606876486e-10,
                        -6.559799538524736e-10,
                        -1.224446883464838e-7,
                        2.4047906739860914e-8,
                        -1.2713830131996601e-8,
                        -0.0000010565379141278794,
                        -4.159406435162795e-9,
                        6.879892255024932e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -6.327992734087875e-10,
                        -0.000044969260478741064,
                        -0.000003863276713726133,
                        -3.4515756150614195e-8,
                        0.0000024654683077646063,
                        7.195464873069642e-9,
                        6.547582406943372e-10,
                        1.3713739112556272e-12,
                        -3.6556393320822384e-10,
                        2.3930188491590206e-8,
                        5.734267849414263e-9,
                        -5.5534975274081034e-9,
                        0.0000025367351341606855,
                        -9.165334225098552e-10,
                        -5.336490658860547e-8,
                        6.480674552086146e-8,
                        0,
                        0,
                        0,
                        0,
                        1.0625774933818455e-8,
                        -0.00030386274755278455,
                        -0.00012589737739072092,
                        1.9117348990281246e-7,
                        0.000005257834325060207,
                        -1.0696057735003584e-8,
                        -3.3383367595545864e-8,
                        6.606716784017073e-10,
                        -3.336369804523295e-10,
                        -1.7978483304643365e-7,
                        -7.392160938258334e-9,
                        -4.5018143756904206e-10,
                        0.00008882000021600575,
                        -4.9499368165596415e-9,
                        1.6104071351544685e-7,
                        -1.4237296926125918e-7,
                        0.00034904621226069095,
                        0,
                        0,
                        0,
                        -1.5383446038875546e-8,
                        0.00010106595546585185,
                        0.00000774857753293415,
                        1.0258073229012209e-8,
                        -0.000003827828149900268,
                        3.6191172034408535e-8,
                        -7.351758409586131e-9,
                        -1.1981631987532113e-9,
                        1.7243470165073495e-9,
                        9.251218814874742e-9,
                        8.803121866828216e-10,
                        -2.0828872087423199e-10,
                        -0.000002855861433518637,
                        -4.833519050243298e-9,
                        1.0483199944813121e-8,
                        -2.721609827201851e-8,
                        -0.00025972005433980426,
                        1.3247143389359786e-8,
                        0,
                        0,
                        -1.2535352887355192e-8,
                        -0.000368124282709453,
                        0.0000044471857248066835,
                        -7.652550698809788e-9,
                        8.127312379633143e-7,
                        2.4325856942344495e-8,
                        9.411471616752357e-10,
                        -4.780901602454007e-10,
                        4.843532947590505e-10,
                        1.4330061526836968e-8,
                        9.514926468014005e-9,
                        -6.399813539405306e-9,
                        -2.854336268730643e-7,
                        -5.987313257879939e-9,
                        4.535498431489239e-9,
                        -1.9195890221984793e-8,
                        0.000056025128467200134,
                        -2.881813233894885e-9,
                        2.5163762605445545e-8,
                        0,
                        1.5194892295814094e-8,
                        -0.000013294770859877624,
                        -0.0000014758631095854662,
                        -4.360614738904586e-9,
                        7.264565111934568e-7,
                        -4.271662879458118e-8,
                        1.0666909831907681e-9,
                        -6.594721650855209e-11,
                        4.921102787590844e-11,
                        1.8916545128503567e-9,
                        -5.411085904214001e-10,
                        6.560505639786357e-10,
                        9.458426742188205e-7,
                        7.67878177751822e-11,
                        -2.7554564207488136e-9,
                        4.052899521716292e-9,
                        0.000013871427264558567,
                        -1.3919179506023433e-8,
                        3.175366228157311e-10,
                        3.788305559114187e-8
                    ],
                    "g": [
                        1416.3522307511823,
                        712.5377742084764,
                        376.5380673882252,
                        -719.448406247568,
                        315.30917576999025,
                        -2779.8886262699043,
                        295.28064328676237,
                        -136.9769252228091,
                        379.4853133512438,
                        838.2582695173079,
                        593.1425954315578,
                        -611.552860702281,
                        208.3849562057887,
                        132.31453435261864,
                        -654.2893769297646,
                        3075.3412181767535,
                        -521.0626111933705,
                        1219.20583244161,
                        -2469.067068764456,
                        -7797.452061052404
                    ],
                    "mx": [
                        88089740.0334789,
                        4233.864480964427,
                        3418.097718631179,
                        20797126.028325938,
                        532.1374081491675,
                        30236730.7293241,
                        23905287.057655547,
                        29837297.884410646,
                        22258746.86397949,
                        19742025.858397715,
                        19919727.49722763,
                        20061195.22300327,
                        4826.472623574145,
                        133396268.54562737,
                        18166006.346723605,
                        19011903.026100542,
                        4754.500760456273,
                        96878492.26159696,
                        84791473.07089788,
                        33335338.60570342
                    ],
                    "cases": [
                        {
                            "dayTime": "12:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -13
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -13
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -13
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 14,
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
                                    "value": -2367.165157028786
                                }
                            ]
                        },
                        {
                            "importance": 27.213945526747708,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 18,
                                    "offset": -14
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000742430503970336
                                }
                            ]
                        },
                        {
                            "importance": 6.235883467319906,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000901965367255329
                                }
                            ]
                        },
                        {
                            "importance": 6.6622381369190045,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.17712030750907723
                                }
                            ]
                        },
                        {
                            "importance": 6.577306561968438,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 18,
                                    "offset": -14
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006287257885028078
                                }
                            ]
                        },
                        {
                            "importance": 3.650772938334342,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.08676746255885956
                                }
                            ]
                        },
                        {
                            "importance": 5.404255458056532,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.8479528574675862
                                }
                            ]
                        },
                        {
                            "importance": 7.747497625350105,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00003347696446126674
                                }
                            ]
                        },
                        {
                            "importance": 7.392897117831078,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -14
                                },
                                {
                                    "type": "β",
                                    "value": 2.241387285552269
                                }
                            ]
                        },
                        {
                            "importance": 8.320180991321457,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.6506059574642507
                                }
                            ]
                        },
                        {
                            "importance": 2.978954586115128,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001882600258028392
                                }
                            ]
                        },
                        {
                            "importance": 2.539039200424607,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -14
                                },
                                {
                                    "type": "β",
                                    "value": 2.4188761733579294
                                }
                            ]
                        },
                        {
                            "importance": 6.561366620913586,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -2.0236309242346837
                                }
                            ]
                        },
                        {
                            "importance": 0.96973433316733,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 9,
                                    "offset": -14
                                },
                                {
                                    "type": "β",
                                    "value": 1.2282767886097015
                                }
                            ]
                        },
                        {
                            "importance": 3.323773241630121,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00001675816626212417
                                }
                            ]
                        },
                        {
                            "importance": 1.6043284446773165,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -14
                                },
                                {
                                    "type": "β",
                                    "value": 0.000017905125121868774
                                }
                            ]
                        },
                        {
                            "importance": 2.81782574922335,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": -0.000006507400869237896
                                }
                            ]
                        }
                    ],
                    "dayTime": "13:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -14
                        }
                    ],
                    "samplesAhead": [
                        14
                    ],
                    "predictionIntervals": [
                        -4374.356636558254,
                        2425.884182215233
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.4024895305393244e-8,
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
                        -2.1226367072944233e-8,
                        1.914493997121862e-8,
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
                        -2.629589577750148e-9,
                        2.537813631344846e-9,
                        0.0006652665084082707,
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
                        -8.798128188710225e-9,
                        -1.0922090073453869e-8,
                        -0.00008180790797098973,
                        4.94081342169196e-8,
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
                        -1.2086098144941275e-8,
                        -2.017803091428913e-9,
                        -0.0001204686831384424,
                        5.251156462540837e-9,
                        0.00027362826872681846,
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
                        -1.7690743368944742e-8,
                        4.98609405152833e-9,
                        -0.00003378621474763245,
                        -2.3779889447234157e-8,
                        0.00003369127382623371,
                        0.0007442416124540331,
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
                        -2.041558357157172e-8,
                        -6.265842681740733e-9,
                        -0.000019659099121209232,
                        3.0369988974377905e-9,
                        -0.0000010763908845627498,
                        0.00029025946817555677,
                        1.1827723985114825e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.774900687648607e-8,
                        1.244398304624823e-8,
                        -0.00005241501774510732,
                        -2.8427506556793567e-8,
                        0.000013605773600140652,
                        0.00006747961739831494,
                        2.569335354773397e-9,
                        0.0006127052772204494,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.1538087516825138e-8,
                        1.6989901355155618e-9,
                        0.00000857469674987575,
                        -4.515480790217863e-9,
                        -0.00000888096105839445,
                        -0.00018525473771714178,
                        -1.3303826882941662e-8,
                        -0.00007984699951816914,
                        0.0003220423289437642,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.1244517218971755e-9,
                        -1.9534426738849656e-8,
                        0.00000910451918491542,
                        2.4212435257702306e-9,
                        -0.0000031563547004533193,
                        0.000009886728721876932,
                        4.826456246305143e-10,
                        0.000012373321594835343,
                        -0.000012662547049118085,
                        5.504044811000733e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.3561621630897927e-9,
                        -1.2221481008273578e-9,
                        -0.000010236336381410688,
                        -2.1748081695398657e-9,
                        -0.000005941677818392663,
                        -0.00006627983983405735,
                        2.1640049787054063e-11,
                        0.0006605172272393864,
                        -0.000008048681707062888,
                        6.590968967619133e-10,
                        0.0006080360446865357,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -4.901654701792944e-10,
                        1.6209667240987282e-9,
                        0.0000017264814569844498,
                        8.76219998941215e-11,
                        -1.3201419144861e-7,
                        0.0007116155043711114,
                        2.936963251381006e-10,
                        -0.0007545270654615773,
                        -0.000005738035099885291,
                        -4.347237752734554e-9,
                        -0.0008220568278842185,
                        0.0007783599253337913,
                        0,
                        0,
                        0,
                        0,
                        -1.2877414779359847e-8,
                        8.727810332596097e-10,
                        0.000007470831580368005,
                        -1.1609189625365168e-8,
                        -0.000008923771751345007,
                        0.000024008172311995958,
                        4.702726634635761e-9,
                        -0.0003001539815068104,
                        -0.00012119080084729605,
                        4.4209669762943815e-9,
                        -0.00008165250219120874,
                        0.000050096946117226254,
                        0.0006171438393923951,
                        0,
                        0,
                        0,
                        -4.957423218663495e-8,
                        2.128791461702612e-8,
                        0.000001708416344591195,
                        2.261655811153251e-8,
                        -0.000004662475824674334,
                        0.00045159490062061117,
                        3.914379252312252e-9,
                        -0.00042621948485279624,
                        -0.0000864427634073737,
                        -8.742281417088799e-8,
                        -0.0002823370378169512,
                        0.0002443385300393218,
                        0.000808264202122381,
                        2.193871254864391e-8,
                        0,
                        0,
                        -5.5458940508555684e-8,
                        2.8952926066070093e-8,
                        -0.000007921534560090895,
                        -1.212793602482871e-8,
                        -0.00006293423580879867,
                        0.0007125794964773752,
                        3.4798020433632637e-9,
                        -0.0004231111191469112,
                        -0.0000642823910009374,
                        -6.656211878309854e-8,
                        -0.00031364058481996704,
                        0.0001316228838722359,
                        0.00032437305858818935,
                        1.4692497635006722e-8,
                        3.252368503054911e-8,
                        0,
                        -2.2847061630726063e-8,
                        2.485644314340713e-8,
                        -0.000001336268745694533,
                        1.1240704173548191e-9,
                        0.000005238664434666634,
                        0.0001952564234543867,
                        -4.5114095892671915e-9,
                        0.0004920215386687068,
                        0.0001220927069873003,
                        -6.277861196272046e-8,
                        0.00014070785124281588,
                        -0.00011856308375051135,
                        -0.00028796143695249463,
                        8.593987165310637e-9,
                        -2.4249135071755725e-8,
                        1.7332893126788096e-8
                    ],
                    "g": [
                        1596.9983808553811,
                        823.4729839602276,
                        363.7543510350632,
                        -810.6840285534254,
                        259.7350703028187,
                        570.8557573731462,
                        458.35572645158913,
                        534.9394649092281,
                        -1500.564758391614,
                        -2662.507620283629,
                        613.518868508899,
                        -2978.0368706031322,
                        717.1650986626871,
                        729.7046318186706,
                        270.6063141366284,
                        -375.43650801034863
                    ],
                    "mx": [
                        85788555.84185258,
                        91433566.70578614,
                        549.9439501729561,
                        21659381.43174748,
                        3639.257034220532,
                        4071.769817833385,
                        99839939.23536122,
                        4078.548751575297,
                        4847.741064638783,
                        31469551.987802465,
                        -3710.35857184284,
                        -3664.700174038797,
                        4332.201919498386,
                        134937430.25057036,
                        23416216.73224073,
                        31049492.203041825
                    ],
                    "cases": [
                        {
                            "dayTime": "13:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -14
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -14
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -14
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 15,
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
                                    "value": -189.48676673057253
                                }
                            ]
                        },
                        {
                            "importance": 29.454443272121072,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 15,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000543424867787944
                                }
                            ]
                        },
                        {
                            "importance": 6.7483275332295465,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.1868447971160104
                                }
                            ]
                        },
                        {
                            "importance": 6.471657787294357,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 15,
                                    "offset": -15
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": -1.2067565482905243e-7
                                }
                            ]
                        },
                        {
                            "importance": 7.676573447736949,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": -0.11902943531165028
                                }
                            ]
                        },
                        {
                            "importance": 3.289055196010835,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 12,
                                    "unit": "hours"
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.027741532276842618
                                }
                            ]
                        },
                        {
                            "importance": 3.4781915348004775,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": 1.8477111825142538
                                }
                            ]
                        },
                        {
                            "importance": 3.6757119566722727,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007882812741010053
                                }
                            ]
                        },
                        {
                            "importance": 3.0419210221718163,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": 1.873065781317318
                                }
                            ]
                        },
                        {
                            "importance": 2.565745278416384,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -1.369152712794287
                                }
                            ]
                        },
                        {
                            "importance": 4.213776689750684,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 15,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000187722802376319
                                }
                            ]
                        },
                        {
                            "importance": 3.1607258369582136,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.45750153010774836
                                }
                            ]
                        },
                        {
                            "importance": 1.900481468677664,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0003077165848732711
                                }
                            ]
                        },
                        {
                            "importance": 0.6861973887886225,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00017727440109077864
                                }
                            ]
                        },
                        {
                            "importance": 14.1660218500978,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -1.0652241431747458
                                }
                            ]
                        },
                        {
                            "importance": 3.45623316878543,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.000027250087328261344
                                }
                            ]
                        },
                        {
                            "importance": 3.684295490468951,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003576793764378828
                                }
                            ]
                        },
                        {
                            "importance": 2.3306410780189375,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -15
                                },
                                {
                                    "type": "β",
                                    "value": 0.8794911436048424
                                }
                            ]
                        }
                    ],
                    "dayTime": "14:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -15
                        }
                    ],
                    "samplesAhead": [
                        15
                    ],
                    "predictionIntervals": [
                        -4620.580848807076,
                        2702.9044880204265
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.3241851495820608e-8,
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
                        -1.1914459274622622e-8,
                        0.0002736278523505203,
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
                        -2.012332426068717e-8,
                        -0.000008109121788317104,
                        4.843484317454172e-8,
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
                        -1.3706099832501558e-8,
                        -0.00004339652898974723,
                        5.015768266606627e-9,
                        0.0004341015956254089,
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
                        -1.0265012916394747e-9,
                        0.00002886833802044181,
                        -1.2458811078186827e-8,
                        -0.00008008849446601343,
                        0.0002766922328791007,
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
                        -3.5100923024416826e-9,
                        0.000019504795730616864,
                        -3.347419317188143e-8,
                        -0.00003458799404937245,
                        -0.00004163840488200301,
                        0.0006127352466840857,
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
                        -2.862456246262373e-8,
                        -0.000002684843112268555,
                        5.0663376789895634e-9,
                        0.000011577893298350448,
                        0.0000349661701498002,
                        0.00015082757089967115,
                        1.6893319555699353e-8,
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
                        -5.839958003912777e-9,
                        -0.00000411999589061066,
                        -2.7404123464780668e-9,
                        0.000010822954379980832,
                        0.0001081368480244111,
                        0.0005712535114057991,
                        1.256213748946898e-9,
                        0.0005790124633406157,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.4739036218306303e-8,
                        -0.000021147889614415448,
                        3.1818246305549574e-9,
                        -0.000031709928387596,
                        -0.00003129330718947743,
                        -0.0005061351324269941,
                        -4.5612370016955544e-10,
                        -0.000744366334394795,
                        0.000749112907133032,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.3645564312834639e-8,
                        -0.00000198442412787447,
                        -4.070070260879258e-8,
                        0.000003681003937354228,
                        0.000009542830155565151,
                        -0.00001769259981056228,
                        -1.2981444090058904e-8,
                        -0.0000723354775029934,
                        0.00011946799397840281,
                        4.452188780268078e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.935109663741093e-9,
                        0.0000032623460794516342,
                        -2.5896711253806302e-9,
                        -0.0000017061091269349521,
                        0.000020026388331261595,
                        -0.0006342281171657203,
                        3.760348850383812e-10,
                        -0.000750391852508458,
                        0.0007852699470090309,
                        8.213511556667533e-10,
                        0.0007354978992873187,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.9557883643450923e-11,
                        -8.532713509208307e-7,
                        3.7809150788982616e-10,
                        -0.000013757654965486628,
                        -0.0000028778423261319226,
                        0.000024127898481115064,
                        -1.7120476123138497e-8,
                        0.000011898724012975062,
                        -0.000018295019240869474,
                        7.485013961739806e-10,
                        -0.000016304708385546916,
                        4.860437307209801e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.400868614781336e-8,
                        -0.00009316951199764555,
                        1.4001289782109938e-8,
                        0.00006740916232316377,
                        0.000017105697502445616,
                        0.000005966192969216754,
                        1.760621207585071e-8,
                        -0.00011492756470352218,
                        0.0001191850349574429,
                        -1.4992494132280796e-8,
                        0.00038101260167976245,
                        -3.3477932247801595e-8,
                        1.1152332594007486e-8,
                        0,
                        0,
                        0,
                        0,
                        1.4263973786825797e-8,
                        -0.000012960187535430666,
                        -5.066179795258445e-9,
                        -0.00000825444812074647,
                        -0.000011267905038598402,
                        -0.00016965148404051106,
                        1.041939508128281e-9,
                        -0.00009728981875481973,
                        0.000020284841715100594,
                        9.911068445436337e-10,
                        -0.00017422179737179325,
                        -3.6771185538420275e-9,
                        -1.2418819675074531e-8,
                        0.00030506130349900205,
                        0,
                        0,
                        0,
                        1.1129554628665085e-8,
                        -0.0000052696373914828335,
                        1.6110199961995575e-8,
                        0.000004911372462847241,
                        -0.0000018974534942549647,
                        -0.000103318973903117,
                        1.5204944082400564e-8,
                        -0.000058656576016402384,
                        0.000041987645008971435,
                        -5.654974757369254e-8,
                        0.00008023632044326952,
                        -3.141483826356159e-8,
                        -1.2449448312600512e-8,
                        0.00011257372372935427,
                        2.4164142849349e-8,
                        0,
                        0,
                        1.9171403298227473e-10,
                        -1.1415262054892877e-7,
                        3.770231989274524e-11,
                        -1.7360099697091396e-7,
                        -8.331956493074253e-7,
                        0.000009818044346329218,
                        1.2597136481144994e-8,
                        0.000012117077456690404,
                        -0.000010589229295807074,
                        -8.563882155152566e-10,
                        -0.000008748393493343957,
                        -3.6111470953217245e-8,
                        -1.1394606244138684e-8,
                        0.000005995824612907412,
                        2.8077352202065874e-10,
                        3.2081391134050935e-8,
                        0,
                        -9.743202492241302e-9,
                        -0.0000012998862440873915,
                        -4.036337309323901e-9,
                        -0.00000794841139681654,
                        -0.000015404996073146823,
                        -0.0002928725165221009,
                        -2.9584274808559847e-9,
                        -0.00007579573924432525,
                        0.000010413293013235857,
                        -5.7166551645699925e-9,
                        -0.0000491372847525653,
                        1.1229164272071129e-8,
                        6.444556053829552e-9,
                        -0.00010847997684892394,
                        -7.714614178215045e-10,
                        -5.8212862273829604e-9,
                        0.0006116243561321051
                    ],
                    "g": [
                        1765.695317192919,
                        490.9122876380611,
                        -795.0209171869169,
                        -465.882578290009,
                        -236.97328129642472,
                        499.9550100281097,
                        539.7440765066709,
                        881.347366578204,
                        -402.4539626357951,
                        -1473.5148751552729,
                        -1280.4361165880578,
                        -2763.016996114486,
                        185.5341939504754,
                        -2413.97581233079,
                        -955.2848131923475,
                        -10888.199962595963,
                        1437.959647595984
                    ],
                    "mx": [
                        86565119.2441413,
                        3640.6413084823125,
                        21075801.69996122,
                        2942.2944142840324,
                        1923.982750799621,
                        4079.24466447384,
                        94577287.42845437,
                        -3364.960274818122,
                        -3303.06178719335,
                        22492299.67214325,
                        4097.196372892065,
                        32589625.72916448,
                        104056161.01065044,
                        5025.090148345378,
                        27535528.768457517,
                        35874491.436667934,
                        4339.862448491204
                    ],
                    "cases": [
                        {
                            "dayTime": "14:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -15
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -15
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -15
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 16,
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
                                    "value": -858.2696620594652
                                }
                            ]
                        },
                        {
                            "importance": 27.76180006884185,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 12,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008489061878691
                                }
                            ]
                        },
                        {
                            "importance": 6.030551111935692,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 12,
                                    "offset": -16
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007306123787964399
                                }
                            ]
                        },
                        {
                            "importance": 7.906672255822538,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.052730517695718404
                                }
                            ]
                        },
                        {
                            "importance": 5.283125550750011,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.14856077960286082
                                }
                            ]
                        },
                        {
                            "importance": 5.4579882656396785,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 12,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.00018608903696252848
                                }
                            ]
                        },
                        {
                            "importance": 2.1013320851640844,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.002444663178974082
                                }
                            ]
                        },
                        {
                            "importance": 2.2414009131776864,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": -0.00003661803563297761
                                }
                            ]
                        },
                        {
                            "importance": 1.9367864943697934,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.09874917597784873
                                }
                            ]
                        },
                        {
                            "importance": 1.918572123476587,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": 0.3831607717346756
                                }
                            ]
                        },
                        {
                            "importance": 3.5868925261061224,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 12,
                                    "offset": -16
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007949121355880867
                                }
                            ]
                        },
                        {
                            "importance": 2.361288365258554,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 12,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.000054539105077852
                                }
                            ]
                        },
                        {
                            "importance": 2.85409137566027,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": -0.6251872476393567
                                }
                            ]
                        },
                        {
                            "importance": 2.023159951095972,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": -0.000013891320629432987
                                }
                            ]
                        },
                        {
                            "importance": 1.5638074154679722,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000844045370717315
                                }
                            ]
                        },
                        {
                            "importance": 1.7444067507227072,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.7697804551409086
                                }
                            ]
                        },
                        {
                            "importance": 1.6723612923590012,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000023226739324927882
                                }
                            ]
                        },
                        {
                            "importance": 0.7025740904285553,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.3431134685953741
                                }
                            ]
                        },
                        {
                            "importance": 1.4608961643439322,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.8614518410268311
                                }
                            ]
                        },
                        {
                            "importance": 0.6820776165532182,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -16
                                },
                                {
                                    "type": "β",
                                    "value": 0.2232659784703328
                                }
                            ]
                        },
                        {
                            "importance": 0.6900049346932119,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": -169.34650796405523
                                }
                            ]
                        },
                        {
                            "importance": 0.8060361675911478,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001365213216502582
                                }
                            ]
                        },
                        {
                            "importance": 16.33996540458632,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.9380024495937213
                                }
                            ]
                        },
                        {
                            "importance": 2.874209075955105,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00028256754270947806
                                }
                            ]
                        }
                    ],
                    "dayTime": "15:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -16
                        }
                    ],
                    "samplesAhead": [
                        16
                    ],
                    "predictionIntervals": [
                        -4794.885959784675,
                        2959.985751400028
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.249395109308249e-8,
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
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.9799206885368123e-8,
                        4.6595625625691114e-8,
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
                        0,
                        0,
                        0,
                        0,
                        1.1194613521753903e-8,
                        -2.6740480736467567e-8,
                        0.0006192614580473902,
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
                        0,
                        0,
                        0,
                        -9.935507338651429e-9,
                        -3.998588633684703e-9,
                        -0.00010183789889319872,
                        0.0002695066502733749,
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
                        0,
                        0,
                        -2.3015109358331074e-8,
                        1.7444054462995471e-9,
                        0.000014712988871075027,
                        -0.000003447405729435272,
                        6.512212807674985e-8,
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
                        0,
                        -2.7979741462275206e-8,
                        1.3509045161898332e-8,
                        -0.000019151084697494532,
                        -0.00001975160221206049,
                        5.266074199338989e-8,
                        0.00029663146358798587,
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
                        1.0388036894818093e-8,
                        -2.779369408998361e-8,
                        0.000007688637991646107,
                        -0.000005622611720255326,
                        -4.529745526659369e-8,
                        -0.000037475511772190506,
                        2.400164298593497e-8,
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
                        6.191362012542858e-8,
                        -1.685031760140985e-8,
                        0.00028941176300892156,
                        -0.00006804029917559878,
                        -1.9993042509359526e-7,
                        0.00002225827698200471,
                        4.660758790860408e-9,
                        0.0004341538228555617,
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
                        1.8186372438866287e-8,
                        1.3495594332687192e-8,
                        0.00005166739629959276,
                        -0.000013901549703388236,
                        -6.949615689888105e-8,
                        -0.00005423717261448141,
                        -5.507470420074671e-9,
                        -0.00029047412500759486,
                        0.00033377860871495275,
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
                        4.411948244669357e-9,
                        -5.180363594847604e-8,
                        -0.000020339033540477246,
                        0.0000070613184721877615,
                        -1.0108942168248602e-8,
                        0.000006759623226272139,
                        2.3596416059596113e-9,
                        -0.00006792162324236888,
                        0.00005312706416761542,
                        4.881688291978011e-8,
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
                        3.538184479157717e-9,
                        -5.26335467934539e-9,
                        0.0000220100616163587,
                        -0.0000075735798897292835,
                        -9.320763446849004e-9,
                        -0.000002810043509909262,
                        -1.948303674319657e-8,
                        -0.0001149937341751823,
                        0.00011823570889206825,
                        -7.52940887442526e-9,
                        2.978429934278895e-8,
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
                        1.6445749370892072e-9,
                        -2.6306968869456852e-8,
                        0.000008141974623313279,
                        -0.000005393814470581988,
                        -2.806932341293845e-9,
                        9.174754173544218e-7,
                        5.254931840416147e-9,
                        -0.000314472351286084,
                        -0.00009040643569664843,
                        2.67427175943734e-8,
                        -6.642357504850012e-9,
                        0.00040808921187960115,
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
                        2.55048397476956e-8,
                        -4.851041992625577e-8,
                        0.00002302466533157192,
                        -0.00000893572433961253,
                        -6.460219664210461e-8,
                        0.000010828309286254058,
                        1.1717682138043122e-8,
                        -0.0001030194084617218,
                        0.000010954201187856111,
                        3.84727176537534e-8,
                        -3.736167794406694e-8,
                        0.00012315116851094915,
                        2.074051968376946e-8,
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
                        -1.0981423211035837e-8,
                        -1.0890808212137326e-7,
                        -0.00003371280523552668,
                        0.000020755816577443386,
                        1.6601595372872955e-8,
                        -0.000007706384691759706,
                        -5.938194687731048e-10,
                        -0.0002686307824692194,
                        -0.0002124159496345144,
                        7.437528477884597e-8,
                        2.712469542814702e-9,
                        0.0004709521501181177,
                        3.0989681609863882e-9,
                        4.7934599260046665e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.3759048927194516e-9,
                        7.480500023628206e-8,
                        -0.000006892021750168233,
                        0.000006620707534356893,
                        -2.003012056784117e-8,
                        -0.0000018684771823641865,
                        1.74871074425466e-8,
                        0.00037704406409042496,
                        0.0002630390999143926,
                        -4.872104506654851e-8,
                        -1.973723366616513e-8,
                        -0.0006309889000935947,
                        1.9168619235558975e-9,
                        -6.723877323022336e-8,
                        0.0007248149471594192,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.0642285981405958e-8,
                        2.088216777793222e-8,
                        -0.000006821618692838741,
                        -4.2304415212528775e-7,
                        7.389346842035686e-10,
                        -0.00000660436285379748,
                        -2.8003994308737225e-9,
                        -0.00009399594920089136,
                        -0.0001991440928975121,
                        -6.432412736076638e-9,
                        3.5642960226077438e-9,
                        0.0003011108274276903,
                        -4.5207303655436677e-10,
                        -2.3834334064091993e-8,
                        0.00018873791278838008,
                        1.5379090255623542e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.7715042072811436e-8,
                        3.206183347688664e-8,
                        -0.0000264790415953512,
                        0.0000011888710996575365,
                        2.9248495291257153e-8,
                        0.000010721640949384384,
                        -1.0798888074719073e-8,
                        -0.00044145631401360566,
                        -0.00012391029184472666,
                        -5.723694525709831e-8,
                        1.4863668841407037e-8,
                        0.0005246520678969302,
                        -9.055076773914745e-10,
                        3.382720572231666e-9,
                        -0.00016947570598464803,
                        8.018056977375465e-9,
                        0.0006127753836172144,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3.6914768815592552e-9,
                        -4.994151543036149e-8,
                        -0.0000063989870408913,
                        5.913994498724642e-7,
                        5.413035919551695e-9,
                        -0.0000010013650130737877,
                        1.9023228750659844e-9,
                        0.0001952976258847762,
                        0.00005171334967059635,
                        3.814624747681828e-8,
                        -2.2572478160777685e-9,
                        -0.0002553825478171895,
                        9.971875373275476e-11,
                        1.514802167283925e-8,
                        -0.00016231219704335991,
                        -5.917292086826642e-9,
                        -0.00044702151159139124,
                        0.0006064549529598039,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.633729416906462e-8,
                        2.16134264162075e-8,
                        -0.00001529033626221323,
                        4.935438764492401e-7,
                        8.663686949885608e-8,
                        -0.0001525884053969121,
                        -5.634952232197813e-11,
                        -0.000005998885803541301,
                        -0.00006331759876221557,
                        -1.800605079604969e-8,
                        -5.409035423795653e-10,
                        0.0000530830197188368,
                        3.4735738707740673e-10,
                        -5.710346917837832e-9,
                        -0.00003034678210529175,
                        4.838900166666269e-9,
                        0.00022134408726552646,
                        0.000355016065648573,
                        0.0005842193480023887,
                        0,
                        0,
                        0,
                        0,
                        2.1490290425252993e-8,
                        -4.4030332946301296e-8,
                        0.0002044534896756748,
                        0.0001490860012098795,
                        -4.28654245861535e-8,
                        0.000006055958006940819,
                        -3.533226352979034e-10,
                        0.00029522553122408515,
                        0.00010816392089323266,
                        9.879400634151343e-9,
                        6.173459559625747e-10,
                        -0.00021584088150788372,
                        1.3012710537138086e-9,
                        3.3760551425247365e-8,
                        -0.00016567567697778045,
                        -9.090095822733262e-9,
                        8.105698890249165e-7,
                        -0.0003701265886335536,
                        -0.00044241255518719363,
                        2.7182939028453967,
                        0,
                        0,
                        0,
                        -1.5149974950112908e-8,
                        -4.655730300396877e-8,
                        0.000019622724542338743,
                        -0.0001592172208937157,
                        -3.31488517962711e-8,
                        -0.00001408898905746396,
                        2.142206913487362e-9,
                        -0.00020615751698410375,
                        -0.00003819683366804641,
                        4.768551818235516e-8,
                        1.6992887576769396e-9,
                        0.0002935324486217553,
                        -6.946791925854664e-10,
                        5.784839587390583e-10,
                        0.00023266609203242554,
                        4.0988383032923945e-9,
                        0.000135202238365462,
                        0.00002221517738322688,
                        0.00016423475108075393,
                        -0.954640391646494,
                        1.1092888590432875e-8,
                        0,
                        0,
                        1.3088780368423934e-8,
                        2.8101774064768705e-8,
                        -0.0000014285049274206733,
                        -0.000019738290066300694,
                        -5.0308421900210005e-9,
                        0.000001494700406801024,
                        4.6168281581233994e-10,
                        -0.00007295238034621937,
                        -0.000017605308131393713,
                        -2.0450325836263984e-8,
                        -2.3236542440266187e-9,
                        0.00008681811126908999,
                        1.6331689668609445e-9,
                        -1.0151601124367534e-8,
                        0.000010179551763680205,
                        3.4428728727880233e-9,
                        0.0002361818990570318,
                        -0.0005782477535345224,
                        -0.000007611252272724798,
                        -0.11434362681595434,
                        -1.1950891114366692e-8,
                        0.00030020585445612695,
                        0,
                        1.4843695501612596e-8,
                        1.4086205488060285e-9,
                        0.0000014377606433461249,
                        -0.0000012293154755422154,
                        -4.220955010954955e-8,
                        1.7627929221436404e-7,
                        -3.382048332464575e-10,
                        0.00001229856788464324,
                        0.000001269836785298808,
                        -1.606173206074101e-9,
                        2.983664784082957e-10,
                        -0.000011747580539791832,
                        1.7986976424391863e-11,
                        -5.682304085131382e-11,
                        -0.000002022279041268521,
                        3.503573925734528e-11,
                        -0.0000022823114355579247,
                        -0.0000032504586520342654,
                        0.0000022228824419352888,
                        -0.007935468023664346,
                        -1.1321118543611702e-8,
                        0.000008124774588443898,
                        3.2112208413457895e-8
                    ],
                    "g": [
                        1878.8660587331801,
                        -873.2388357927645,
                        449.7207897281794,
                        373.43415225296206,
                        -3927.8316788613242,
                        173.46002344789034,
                        -313.44437200521986,
                        -271.8452762539772,
                        399.8673472163483,
                        1555.7545521480074,
                        670.0978889481197,
                        -2288.6437547963615,
                        -317.20428690929975,
                        -632.7694557268413,
                        405.73377000318465,
                        1175.5844413599616,
                        350.59519336604336,
                        -1594.6015691058183,
                        216.17156650007666,
                        -133.177639870341,
                        217.04235022271257,
                        -2886.3843029659774,
                        -8799.380568016522
                    ],
                    "mx": [
                        87674615.85745569,
                        21293986.366104946,
                        587.7380076027188,
                        3695.404490106545,
                        30091487.233307652,
                        1715.2593918831053,
                        28539370.99859164,
                        2943.4140088100157,
                        3555.1001807711177,
                        19929499.630342066,
                        25589756.234701816,
                        3179.780135553941,
                        28543656.610730592,
                        22188108.53771114,
                        4127.535345132743,
                        98376258.89864779,
                        4079.9645100037174,
                        4344.401694852187,
                        -2912.6607931028675,
                        -0.4705874796449306,
                        105493323.9063927,
                        5077.8900304414,
                        36237295.2347793
                    ],
                    "cases": [
                        {
                            "dayTime": "15:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -16
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -16
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -16
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 17,
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
                                    "value": 21.198030064201703
                                }
                            ]
                        },
                        {
                            "importance": 32.22506150635457,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -17
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013901904235267165
                                }
                            ]
                        },
                        {
                            "importance": 7.132909320620752,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.09087377868660342
                                }
                            ]
                        },
                        {
                            "importance": 6.078120023372549,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -17
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -17
                                },
                                {
                                    "type": "β",
                                    "value": -0.000048043168687264644
                                }
                            ]
                        },
                        {
                            "importance": 6.430603790086517,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -17
                                },
                                {
                                    "type": "β",
                                    "value": -0.00036239063675540706
                                }
                            ]
                        },
                        {
                            "importance": 8.188234274962243,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.1432498767924745
                                }
                            ]
                        },
                        {
                            "importance": 5.82738972536928,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -17
                                },
                                {
                                    "type": "β",
                                    "value": 0.000022110593658852664
                                }
                            ]
                        },
                        {
                            "importance": 6.438337591231366,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00019991386493422973
                                }
                            ]
                        },
                        {
                            "importance": 3.775445074997493,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.2786154708105172
                                }
                            ]
                        },
                        {
                            "importance": 11.094203407385589,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00010723502055027109
                                }
                            ]
                        },
                        {
                            "importance": 7.5536744673637735,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -17
                                },
                                {
                                    "type": "β",
                                    "value": 0.00018615823476868958
                                }
                            ]
                        },
                        {
                            "importance": 3.171223417599954,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -17
                                },
                                {
                                    "type": "β",
                                    "value": -0.5318400035533075
                                }
                            ]
                        },
                        {
                            "importance": 2.084797400655916,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": 0.3625508318185253
                                }
                            ]
                        }
                    ],
                    "dayTime": "16:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -17
                        }
                    ],
                    "samplesAhead": [
                        17
                    ],
                    "predictionIntervals": [
                        -4970.516493679082,
                        3001.5311295327306
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.2040575521492234e-8,
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
                        -4.02391583870677e-10,
                        0.0005949215731258662,
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
                        -1.8388532408515083e-8,
                        -0.00009059559193005924,
                        4.7581852055047845e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.2359067127319266e-8,
                        0.000014240212784618704,
                        1.0216360640687908e-9,
                        6.417502372061275e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        7.82290390346378e-9,
                        -0.0001075108022323536,
                        -3.7262412742462765e-9,
                        -5.0757693706652485e-8,
                        0.00027365202206298484,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        4.36276466287077e-9,
                        -0.000046711850089162536,
                        -3.290410016375074e-8,
                        -2.7508375029646925e-8,
                        0.00001539452661763677,
                        4.653956660838954e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.8145031157594197e-8,
                        -0.00002104158514970724,
                        -1.8056693423328658e-9,
                        3.2400621578378576e-8,
                        0.000007786396470852633,
                        -6.510706334070678e-9,
                        4.443035245497606e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.113172546465984e-8,
                        -0.000026639628776523924,
                        -2.6615252642579238e-9,
                        2.8505953886870223e-8,
                        0.000021376332448568257,
                        5.129734618363075e-9,
                        -2.1089820341548954e-8,
                        0.000713515062259111,
                        0,
                        0,
                        0,
                        0,
                        4.665222032566353e-9,
                        -0.000013128049809419739,
                        2.4578641849824804e-8,
                        -7.079641211617232e-8,
                        0.0000042123103629078715,
                        -7.791710839931022e-9,
                        -3.1477759817738046e-8,
                        0.0002486465914824486,
                        4.245639432160393e-8,
                        0,
                        0,
                        0,
                        -1.6732720332484434e-9,
                        0.0000071148065263996685,
                        -1.1742255762620342e-8,
                        -1.618397878034215e-8,
                        -0.000001436736891280497,
                        1.8619267161292123e-9,
                        -3.456281565913609e-8,
                        -0.00014247898243204948,
                        2.2343082541331127e-8,
                        5.79579421393056e-8,
                        0,
                        0,
                        5.1359920486152554e-8,
                        0.0002873172837881941,
                        9.990022655754393e-9,
                        -1.7294687848389023e-7,
                        -0.00008263827993037421,
                        -3.78052401057226e-9,
                        4.105296377519996e-9,
                        0.00003818925287473962,
                        2.2950248120616856e-9,
                        -2.649978768242775e-8,
                        0.0004123193063901612,
                        0,
                        3.331871776793111e-9,
                        0.000017671224006760092,
                        -4.467109100255368e-9,
                        4.220432223829384e-8,
                        -0.000004829215758927998,
                        7.740267227041149e-10,
                        8.568150502170981e-9,
                        -0.00005969660497993249,
                        -4.154975474125502e-8,
                        -5.020781097632425e-9,
                        -0.0003460508243855764,
                        0.00032230196623977064
                    ],
                    "g": [
                        1894.4722191217465,
                        391.89924382902893,
                        -623.877146926252,
                        -3701.229100883672,
                        379.9031365906988,
                        500.1283655135573,
                        -616.5176957571393,
                        439.97058446247087,
                        1986.917820324432,
                        3151.2977248105144,
                        -345.78679436858675,
                        1124.879367160957
                    ],
                    "mx": [
                        88604629.91300827,
                        609.6197142443716,
                        20074870.042484522,
                        30233221.86832093,
                        3718.233726684431,
                        19145739.29390949,
                        22988627.890820354,
                        4158.6108424615595,
                        34612244.442622565,
                        20079483.788171776,
                        3168.9365283571833,
                        3640.185579258085
                    ],
                    "cases": [
                        {
                            "dayTime": "16:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -17
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -17
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -17
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 18,
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
                                    "value": 584.9896954001242
                                }
                            ]
                        },
                        {
                            "importance": 32.333402730700506,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -18
                                },
                                {
                                    "type": "β",
                                    "value": 0.00016162811775663187
                                }
                            ]
                        },
                        {
                            "importance": 11.449331241704872,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -18
                                },
                                {
                                    "type": "β",
                                    "value": -0.00030888521050326934
                                }
                            ]
                        },
                        {
                            "importance": 8.546872641390989,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.008206444913020588
                                }
                            ]
                        },
                        {
                            "importance": 7.718191472997342,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -18
                                },
                                {
                                    "type": "β",
                                    "value": -0.7906014873887782
                                }
                            ]
                        },
                        {
                            "importance": 8.212669380897445,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -18
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006831998064513237
                                }
                            ]
                        },
                        {
                            "importance": 5.440226278890297,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.054645897692826684
                                }
                            ]
                        },
                        {
                            "importance": 6.297734972755645,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": 0.6172192505462362
                                }
                            ]
                        },
                        {
                            "importance": 7.495224993231176,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -18
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -18
                                },
                                {
                                    "type": "β",
                                    "value": 0.00011630740131319627
                                }
                            ]
                        },
                        {
                            "importance": 5.575819321764652,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.12666698658865355
                                }
                            ]
                        },
                        {
                            "importance": 3.5732896791406725,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -18
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -18
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008313200870330751
                                }
                            ]
                        },
                        {
                            "importance": 3.357237286526418,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.12949036416194945
                                }
                            ]
                        }
                    ],
                    "dayTime": "17:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -122,
                            "dataTo": -18
                        }
                    ],
                    "samplesAhead": [
                        18
                    ],
                    "predictionIntervals": [
                        -4942.960602009388,
                        2848.068726846031
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.1784648266745544e-8,
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
                        -2.1687176060980126e-8,
                        6.370311897159314e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.8277110598481562e-8,
                        -9.764126557341551e-8,
                        0.00030988547157142837,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        4.012503226590032e-8,
                        -1.5202789628171478e-7,
                        -0.00009789750832206826,
                        0.00040908836432805736,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.8451465572965336e-8,
                        2.5467324983520736e-8,
                        0.00001756417235041473,
                        0.000004923983186305999,
                        3.73667016275842e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        8.061726201431868e-8,
                        -2.4307457501737216e-7,
                        9.703322217256257e-7,
                        0.00004000176262360966,
                        -1.1056676582275343e-8,
                        0.0002852808388280571,
                        0,
                        0,
                        0,
                        0,
                        0,
                        9.648133632937972e-9,
                        -2.9731839846616114e-8,
                        -0.000007724979911142137,
                        -0.0003486430905781763,
                        -4.981202186287883e-9,
                        0.000013316576126193145,
                        0.0003181744812349144,
                        0,
                        0,
                        0,
                        0,
                        -1.1663833171700245e-8,
                        3.209889998058432e-8,
                        6.355106000074352e-7,
                        -0.00026585699937228374,
                        -3.749520074087973e-8,
                        -0.000008053880652319576,
                        0.00023407114023214607,
                        4.6290526257900914e-8,
                        0,
                        0,
                        0,
                        -2.641886101081434e-8,
                        7.718064371371374e-8,
                        -0.00020015073642146413,
                        -0.0001614650146839473,
                        -1.2397632169788297e-8,
                        -0.000010697515058125032,
                        0.00011586052703645015,
                        -1.2878133649221831e-9,
                        0.0002817789367452243,
                        0,
                        0,
                        -4.238983753272939e-9,
                        6.720179749359322e-9,
                        0.000013759775446317714,
                        2.2574076667859863e-7,
                        -9.038283807725945e-9,
                        0.000005533653955660271,
                        -0.000006092795263058074,
                        -3.055630473652493e-8,
                        -0.000014456980171155866,
                        4.395781235244349e-8,
                        0,
                        -2.0694419269056926e-8,
                        6.936426197733202e-8,
                        -0.0001172210523348115,
                        0.0003003212572459707,
                        -7.100365333531768e-9,
                        -0.000001036136844058061,
                        -0.000010579772505741557,
                        -1.9177255050435408e-8,
                        -0.000031201814469651324,
                        3.872372483711463e-9,
                        0.0005790347056508383
                    ],
                    "g": [
                        1802.2093660130377,
                        -4956.198739481771,
                        354.9496336682191,
                        -421.4755223152724,
                        -588.0166116135264,
                        245.48364646106742,
                        777.39676123084,
                        1354.2992172989293,
                        376.24947016791987,
                        -1910.877462662234,
                        223.63143849279558
                    ],
                    "mx": [
                        89294634.46215133,
                        30234365.051393483,
                        4894.8172124904795,
                        3171.866898256503,
                        23024721.53240321,
                        1644.9730867706041,
                        3682.9254994973144,
                        20219751.060674246,
                        3675.8861386138615,
                        21506320.74864234,
                        628.286237451121
                    ],
                    "cases": [
                        {
                            "dayTime": "17:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -18
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -18
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -18
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 19,
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
                                    "value": -394.68105587014725
                                }
                            ]
                        },
                        {
                            "importance": 31.908510096174535,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": 0.00015909981967675966
                                }
                            ]
                        },
                        {
                            "importance": 12.6369320344468,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": -0.00044029524645588944
                                }
                            ]
                        },
                        {
                            "importance": 7.131820746548301,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0783374765012022
                                }
                            ]
                        },
                        {
                            "importance": 9.028072868835025,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": -0.00001574153161785218
                                }
                            ]
                        },
                        {
                            "importance": 10.168121639190357,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.11375915381797884
                                }
                            ]
                        },
                        {
                            "importance": 6.020569722206693,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007779699081371845
                                }
                            ]
                        },
                        {
                            "importance": 9.755545722353688,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.8177882387082317
                                }
                            ]
                        },
                        {
                            "importance": 4.38441845270559,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.07058780418765534
                                }
                            ]
                        },
                        {
                            "importance": 4.359620846241175,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000059474787320355206
                                }
                            ]
                        },
                        {
                            "importance": 4.606387871297823,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -19
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": 0.00003607866130689121
                                }
                            ]
                        }
                    ],
                    "dayTime": "18:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -19
                        }
                    ],
                    "samplesAhead": [
                        19
                    ],
                    "predictionIntervals": [
                        -5001.4817110823205,
                        2697.6219992582855
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.1857934965324945e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.1754206002748523e-8,
                        6.41763206649221e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        7.214373337221419e-8,
                        -2.2214289421700226e-7,
                        0.00023614857105566807,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -5.5404363691940855e-8,
                        1.2399057239249648e-7,
                        -0.00005101311956768248,
                        3.5800794532517767e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -5.3325832714375514e-8,
                        1.6269403634291482e-7,
                        -0.000010468112091386,
                        -6.235322833496764e-9,
                        0.0005678176328154717,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.790480628263919e-8,
                        2.4962053566166e-8,
                        0.00002452849070788924,
                        -1.6713014271330726e-9,
                        -0.00002723363755424846,
                        4.127946499418251e-8,
                        0,
                        0,
                        0,
                        0,
                        -2.003041962772329e-8,
                        2.2235977958674865e-8,
                        0.00001995516789411372,
                        1.300229710863657e-9,
                        -0.000011203336113976216,
                        -1.5468974840715712e-8,
                        0.0006961317647861692,
                        0,
                        0,
                        0,
                        -1.7596121936328894e-8,
                        6.239721590879678e-9,
                        -0.000002443732180778261,
                        -1.5700942515878383e-9,
                        -0.00011106892961238108,
                        3.201453005475741e-9,
                        0.00016333598691033253,
                        0.00029874576476484173,
                        0,
                        0,
                        6.08368939261821e-9,
                        -7.22805160939481e-8,
                        0.0000011534616661437374,
                        7.51240910864564e-9,
                        -0.000005742219695118618,
                        -2.392124459300845e-8,
                        0.00021995001107047324,
                        0.000014317495975656133,
                        4.400076535930874e-8,
                        0,
                        -1.0206898535780338e-8,
                        -2.2527605345213024e-8,
                        -0.000010503339975171983,
                        -9.484989694020272e-9,
                        -0.00002663736242676583,
                        -3.488555823507019e-8,
                        0.00022898478597045487,
                        -0.0000019685729770389514,
                        2.8052854986199143e-8,
                        4.406956633396382e-8
                    ],
                    "g": [
                        1637.291892303024,
                        -4590.832692089661,
                        297.0846390094157,
                        -385.4812800903015,
                        274.2070966934082,
                        -504.2923536123426,
                        595.9309586841512,
                        201.91020022206777,
                        829.7267145487463,
                        818.6752062292446
                    ],
                    "mx": [
                        89551884.1654551,
                        30041360.768779077,
                        -4.36310473116204,
                        19514478.978285715,
                        642.7911516308942,
                        23946133.027281288,
                        4218.436877235329,
                        3525.458666666667,
                        34846195.55861997,
                        21007814.913905133
                    ],
                    "cases": [
                        {
                            "dayTime": "18:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -19
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -19
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -19
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 20,
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
                                    "value": -973.3231861072791
                                }
                            ]
                        },
                        {
                            "importance": 40.34499040928206,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": -0.013395570377445043
                                }
                            ]
                        },
                        {
                            "importance": 4.4583560098124435,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.11626746029857069
                                }
                            ]
                        },
                        {
                            "importance": 5.695921343297414,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000005013240803839598
                                }
                            ]
                        },
                        {
                            "importance": 13.215418121277786,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003556373905212563
                                }
                            ]
                        },
                        {
                            "importance": 11.088107171541793,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013462447634194082
                                }
                            ]
                        },
                        {
                            "importance": 9.15979967377861,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.781733546185672
                                }
                            ]
                        },
                        {
                            "importance": 5.869404902218048,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 1.2419761586592932
                                }
                            ]
                        },
                        {
                            "importance": 7.4359449170295395,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006266109039257235
                                }
                            ]
                        },
                        {
                            "importance": 2.7320574517623015,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -20
                                },
                                {
                                    "type": "β",
                                    "value": 0.539236915109747
                                }
                            ]
                        }
                    ],
                    "dayTime": "19:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -20
                        }
                    ],
                    "samplesAhead": [
                        20
                    ],
                    "predictionIntervals": [
                        -4691.832990626756,
                        2530.2755698255855
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0005990818086597402,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00007016301290344612,
                        0.0005644522138106395,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0003524556723977246,
                        0.00011575715179846662,
                        2.52470934221826e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00045474747627857043,
                        0.00000653355474985916,
                        -8.57204158686665e-9,
                        6.500716292659928e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0001482962550935751,
                        -0.000004091446123405496,
                        -1.206695267095104e-9,
                        -4.7029701003644636e-8,
                        2.2032525424643974e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.00003778953782003106,
                        0.000019783828585101498,
                        -7.204252203226487e-10,
                        1.3976881925910528e-7,
                        -4.604281637149629e-8,
                        0.000630375566700129,
                        0,
                        0,
                        0,
                        -0.0008843555639427965,
                        0.000008048781952625448,
                        -8.378629231624466e-9,
                        1.599016973910001e-8,
                        1.2321926618587853e-8,
                        -0.00012820929572052953,
                        0.0006921157569662377,
                        0,
                        0,
                        0.0005510087550202412,
                        -0.0000036751304943189634,
                        1.0396134278467429e-8,
                        3.890384792936168e-9,
                        -2.7128896459276515e-8,
                        0.000009801650032447037,
                        -0.0006924773495910964,
                        5.992325632856832e-8,
                        0,
                        -0.00025860447017249534,
                        -0.000009920877674043189,
                        -3.0734186111951467e-9,
                        2.31959879882708e-8,
                        -2.719269021600066e-10,
                        -0.0006396417817271148,
                        0.00014445934248363533,
                        -7.658931044505423e-10,
                        0.0006616954827147734
                    ],
                    "g": [
                        1478.22657743396,
                        212.80099301072633,
                        284.8119671451752,
                        -2399.8842803775588,
                        3936.7280616802736,
                        -277.39536216531246,
                        588.5552717052748,
                        -1035.273169177298,
                        814.9321390217006
                    ],
                    "mx": [
                        4329.298666091034,
                        646.6238153729768,
                        134233583.8327619,
                        29523732.31409779,
                        88730659.31279822,
                        1032.554605286863,
                        4238.884252931278,
                        20082900.960499194,
                        902.2200651956082
                    ],
                    "cases": [
                        {
                            "dayTime": "19:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -20
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -20
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -20
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 21,
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
                                    "value": -1266.2938473248514
                                }
                            ]
                        },
                        {
                            "importance": 28.42138704949504,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.7217336021677249
                                }
                            ]
                        },
                        {
                            "importance": 3.7721821666913784,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.09209904376960304
                                }
                            ]
                        },
                        {
                            "importance": 3.5785766903210745,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.26343936372632554
                                }
                            ]
                        },
                        {
                            "importance": 3.2981600189513705,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001939662090052944
                                }
                            ]
                        },
                        {
                            "importance": 2.3765448919339347,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.7723649683831472
                                }
                            ]
                        },
                        {
                            "importance": 2.060652463193162,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": -0.00012331534744379672
                                }
                            ]
                        },
                        {
                            "importance": 1.8823049083349668,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001347087212237432
                                }
                            ]
                        },
                        {
                            "importance": 10.784439843592772,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0004550223652077665
                                }
                            ]
                        },
                        {
                            "importance": 3.8955272458953445,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.000021275659494263127
                                }
                            ]
                        },
                        {
                            "importance": 1.5120236714671702,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.00002280938574434109
                                }
                            ]
                        },
                        {
                            "importance": 5.982493126777511,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": -0.000010009932048308284
                                }
                            ]
                        },
                        {
                            "importance": 1.5708692065555974,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001872873444169392
                                }
                            ]
                        },
                        {
                            "importance": 1.4048430636929692,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.37695206283971217
                                }
                            ]
                        },
                        {
                            "importance": 0.9844542910563623,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.000010810490844363466
                                }
                            ]
                        },
                        {
                            "importance": 0.9709663352019388,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": -0.17716047833443704
                                }
                            ]
                        },
                        {
                            "importance": 3.790277731294723,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.15310993743015944
                                }
                            ]
                        },
                        {
                            "importance": 1.6132158034678208,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002070122832444464
                                }
                            ]
                        },
                        {
                            "importance": 3.4545051815106933,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.0004854175725230045
                                }
                            ]
                        },
                        {
                            "importance": 10.401259578537207,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001002010521519838
                                }
                            ]
                        },
                        {
                            "importance": 3.9897607351529993,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008291950712915685
                                }
                            ]
                        },
                        {
                            "importance": 1.2305793115186656,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": -0.0007921898945831526
                                }
                            ]
                        },
                        {
                            "importance": 3.0249766853573075,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -21
                                },
                                {
                                    "type": "β",
                                    "value": 0.00024077238325147176
                                }
                            ]
                        }
                    ],
                    "dayTime": "20:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -21
                        }
                    ],
                    "samplesAhead": [
                        21
                    ],
                    "predictionIntervals": [
                        -4381.702736247545,
                        2070.169254166833
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0005990267896312146,
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
                        0,
                        0,
                        0,
                        0,
                        -0.00007642209170513111,
                        0.00057342665397178,
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
                        0,
                        0,
                        0,
                        -0.00017959521614746988,
                        -0.000013133721268266758,
                        0.0006799670150620065,
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
                        0,
                        0,
                        -0.0005355272977268644,
                        -0.0000266198617531188,
                        0.000007492137879053831,
                        3.575181325163601e-8,
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
                        0,
                        -0.0006021807613265761,
                        0.000018545133486284227,
                        -0.00013251195970135284,
                        6.7447314310121466e-9,
                        0.0006907551495098569,
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
                        -0.0005963452440013827,
                        -0.00004289247248786045,
                        0.000011452818407707507,
                        -7.864352898623679e-9,
                        0.00034513542671940503,
                        4.525894826165511e-8,
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
                        -0.0003094863050903041,
                        0.000028657952137801565,
                        0.00005672613443990595,
                        -2.1745584317562857e-8,
                        -0.00009609384506090312,
                        1.559672755235586e-8,
                        1.7973763305734428e-8,
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
                        0.000008652652720721768,
                        0.000005433202540760861,
                        -0.0000018752676775858563,
                        8.621630268592261e-10,
                        0.000003267865403705362,
                        2.1475584816855772e-10,
                        -1.864333917943055e-8,
                        5.321932594792455e-8,
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
                        0.0001816418709947825,
                        0.0000011353904221714617,
                        -0.000009256582337374042,
                        -2.778150495916502e-8,
                        -0.0003193696822269613,
                        3.322406958922333e-9,
                        -1.2544345331822489e-8,
                        2.9007017665584208e-8,
                        4.3609002908198465e-8,
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
                        -0.00044619881754506504,
                        -0.000006737370844275531,
                        0.00006448217848770598,
                        -5.826368706654513e-8,
                        -0.00018301960754250147,
                        8.317755504530154e-9,
                        3.137204051978558e-9,
                        2.8358199065331157e-8,
                        4.0105589902417765e-8,
                        4.371635203190773e-8,
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
                        -0.0004207840950216978,
                        0.00002285620112846748,
                        0.000013525532658616516,
                        2.999259523065554e-8,
                        0.00010643200380019626,
                        1.6112178938580708e-8,
                        7.512609964335098e-9,
                        -3.5783266370565316e-8,
                        -1.250728019574801e-10,
                        -5.306060193169804e-8,
                        2.004673948710664e-8,
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
                        0.0000023069686018835206,
                        -0.0000011461403491417057,
                        0.000004648774202159309,
                        -3.538333658195432e-8,
                        -0.000022624272266474725,
                        -1.7086598213061465e-9,
                        -2.480115893107728e-9,
                        6.7112226230597196e-9,
                        4.772893951457813e-9,
                        -3.403105897825836e-9,
                        4.4904195457804427e-10,
                        3.74592547713647e-8,
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
                        0.00033993187793233433,
                        0.000010826662545909126,
                        -0.000627930665096977,
                        -9.096583681828584e-10,
                        -0.00034618921511311325,
                        -1.9359465434567147e-10,
                        1.879393764328633e-9,
                        -6.024248322235677e-9,
                        6.632786897429689e-9,
                        -6.101476439096006e-10,
                        -1.0512866808490594e-10,
                        -6.41038129289718e-9,
                        0.0006460887718572617,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0008290885401953322,
                        0.000010086926769432741,
                        -0.00028061425166445137,
                        2.6785605386548123e-8,
                        -0.0003452942864139145,
                        -2.7415508775335484e-8,
                        7.895080544288689e-9,
                        -1.2895160467192717e-7,
                        1.520007295000093e-8,
                        8.736203229546064e-9,
                        -1.241252747074637e-8,
                        1.9399924647888627e-9,
                        0.0002889633811237853,
                        2.6859068712425665e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000869148236052258,
                        -0.000043238126755012114,
                        0.00020827845379874449,
                        1.776323818587879e-7,
                        0.00046987658117431726,
                        7.70572949294823e-9,
                        1.796023867531244e-8,
                        -6.698391738427177e-9,
                        -2.3200738397305638e-8,
                        2.2253881576959795e-8,
                        3.886815508145907e-9,
                        -1.9936884744277143e-7,
                        -0.00024465558256951675,
                        -1.3388538916491285e-8,
                        0.00044664994976567564,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00008603508450053111,
                        -0.00010652424394511099,
                        0.00021174280903426526,
                        -1.601591176052301e-7,
                        0.00004431454948293709,
                        -4.028052627245639e-9,
                        -2.7392331117344144e-8,
                        6.410610420441168e-8,
                        1.1971527046733626e-8,
                        -8.590015082079742e-9,
                        -3.6420816007728998e-9,
                        1.6724027162519895e-7,
                        -0.0002334880441307672,
                        8.766391910563589e-10,
                        -0.0003252302407498834,
                        0.0004105587932272088,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00007241960655004333,
                        0.000017022094704789398,
                        -0.00004798397857447743,
                        -1.6461443446047962e-7,
                        -0.00017336911299330578,
                        -2.3776134014670912e-8,
                        -1.136262210002086e-8,
                        3.6879130546272006e-8,
                        2.4899590195566272e-8,
                        2.26766468847949e-9,
                        -1.7568776666919065e-10,
                        1.3301166404046096e-7,
                        0.00009832142420525938,
                        -3.601986162738986e-11,
                        0.00007394737666370773,
                        -0.00005479914749245354,
                        3.288747882192904e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00001190805638486142,
                        0.0000015527192908909085,
                        -1.6737236734135243e-7,
                        -2.666621931420334e-8,
                        -0.00001560780033821242,
                        -1.297694982652643e-8,
                        -7.799805699657335e-10,
                        4.328331747720414e-9,
                        -8.831402188688141e-10,
                        -1.393008056111764e-8,
                        6.48071175896828e-10,
                        3.995875745208956e-8,
                        0.000007774459106810024,
                        -5.03905645874975e-10,
                        -3.443395519902984e-7,
                        -3.2519596283827986e-7,
                        -2.5721958817477963e-8,
                        3.911846269230746e-8,
                        0,
                        0,
                        0,
                        0,
                        0.0000643264534019763,
                        0.0000021788107057561374,
                        0.000003417007150048482,
                        2.7893850294762522e-8,
                        0.000067087362212632,
                        3.236051539831896e-8,
                        2.2397601270757243e-9,
                        -1.8487494881621763e-8,
                        3.093809439594853e-9,
                        -1.1196586999003643e-8,
                        -1.4168424003658237e-9,
                        -2.819904866247005e-8,
                        -0.0000307155350340745,
                        2.4100765139934443e-9,
                        0.000004677138466671028,
                        -0.000005651252795351622,
                        5.326224405527587e-8,
                        -1.1567218013528411e-7,
                        3.875332263373909e-8,
                        0,
                        0,
                        0,
                        -4.4916256594419035e-7,
                        0.000001513533286708926,
                        -0.00006404919930490247,
                        5.1656014439578714e-8,
                        -0.00011653219675609963,
                        1.0273523387899617e-8,
                        3.2964304551191264e-9,
                        -1.839738593349277e-10,
                        -2.397281299824348e-8,
                        7.132782804001471e-9,
                        -8.865977168660083e-10,
                        -3.0180945160017914e-8,
                        0.000061030922906383156,
                        -1.0162059221711059e-9,
                        6.952945551502426e-7,
                        5.400022545175867e-7,
                        -9.680354034732026e-10,
                        -5.695270515040565e-8,
                        4.262081135735753e-9,
                        4.819913528038317e-8,
                        0,
                        0,
                        -0.00029989481090864393,
                        0.0000010737588268409787,
                        0.00005952416612043055,
                        -2.7814662898842236e-8,
                        0.00003501288699790343,
                        1.6339325798848842e-9,
                        1.0997057189141947e-8,
                        -4.490702440176168e-8,
                        1.0256519252720331e-8,
                        1.3871294092913422e-9,
                        -2.0806176742174142e-9,
                        1.494573275487616e-8,
                        -0.00006655583759723222,
                        -6.055847007974268e-9,
                        -0.000009880233349288008,
                        0.000009877048491196522,
                        1.215909189991801e-8,
                        -1.1789098017663853e-8,
                        4.682038591379706e-9,
                        -9.678479549181916e-9,
                        6.714618480005272e-8,
                        0,
                        -5.305048718521896e-7,
                        -5.825688221404032e-8,
                        -0.0000033150579986907233,
                        -5.630950874661038e-9,
                        -0.000004992913841198979,
                        -4.459121069313884e-10,
                        -1.9387790042710565e-8,
                        5.6730929653769636e-8,
                        1.232380187388358e-9,
                        -3.2795974339015575e-10,
                        -4.442660560473056e-11,
                        5.162403680821366e-9,
                        0.000003924643039921852,
                        -4.9920464067594347e-11,
                        -8.564795042253671e-7,
                        0.0000011974225394198815,
                        8.138207553472438e-10,
                        -5.422261738340212e-10,
                        4.905762669150199e-11,
                        -4.0739739892286506e-10,
                        -6.556025433787049e-8,
                        2.2662579944695003e-8
                    ],
                    "g": [
                        1386.9950943990211,
                        259.8808388509874,
                        -250.22122151681572,
                        -494.9383809796871,
                        438.56413531021803,
                        269.01304491366835,
                        486.09116626430455,
                        -4302.864910596412,
                        -1156.1367972426217,
                        291.18763083932174,
                        -683.9066239856784,
                        -2990.936856030555,
                        -728.7994396011389,
                        218.09893218864678,
                        -102.31794911931797,
                        307.5740590130386,
                        -321.15330725977276,
                        2783.3093344944705,
                        -2216.1433684119397,
                        -1916.634300587046,
                        -1424.695996374565,
                        10624.226537271776
                    ],
                    "mx": [
                        4293.711670194712,
                        637.3076864391279,
                        1914.0742501738569,
                        23390191.865585152,
                        4248.011648766058,
                        16558845.57142857,
                        96641342.65024316,
                        32050302.61587826,
                        23064416.51103464,
                        18402611.13770022,
                        77260032.57028571,
                        22503345.99821762,
                        1985.6326410077122,
                        128293073.19695239,
                        2510.918476190476,
                        3089.924491652302,
                        22865683.37280117,
                        20464479.519933447,
                        18455011.814476192,
                        19754490.12644867,
                        28583310.912572525,
                        86173841.21076426
                    ],
                    "cases": [
                        {
                            "dayTime": "20:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -21
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -21
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -21
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 22,
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
                                    "value": -1686.1033626089857
                                }
                            ]
                        },
                        {
                            "importance": 25.340076074804095,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004551830032722958
                                }
                            ]
                        },
                        {
                            "importance": 7.699255690259426,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": -0.00038869388107009006
                                }
                            ]
                        },
                        {
                            "importance": 6.6744602386017355,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 7.934172819415923
                                }
                            ]
                        },
                        {
                            "importance": 11.481492608051894,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.4520164972875411
                                }
                            ]
                        },
                        {
                            "importance": 8.135277157709211,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007598393310092847
                                }
                            ]
                        },
                        {
                            "importance": 5.764834782307279,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.07808180020040469
                                }
                            ]
                        },
                        {
                            "importance": 1.5576528209331566,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.2246207881458052
                                }
                            ]
                        },
                        {
                            "importance": 3.2938044090813,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00001505748241486973
                                }
                            ]
                        },
                        {
                            "importance": 2.0883883252910134,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.0003260496198514974
                                }
                            ]
                        },
                        {
                            "importance": 2.270661490339109,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002220245851116467
                                }
                            ]
                        },
                        {
                            "importance": 10.843642777688945,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00015409543379524555
                                }
                            ]
                        },
                        {
                            "importance": 6.1192860860555145,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": -0.00010068916564855128
                                }
                            ]
                        },
                        {
                            "importance": 5.27385611995784,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -22
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -22
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004287383632123805
                                }
                            ]
                        },
                        {
                            "importance": 3.4573114189194634,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -6.085427840396468
                                }
                            ]
                        }
                    ],
                    "dayTime": "21:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -22
                        }
                    ],
                    "samplesAhead": [
                        22
                    ],
                    "predictionIntervals": [
                        -4203.051001105531,
                        1847.0109751772266
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.3678419160568462e-8,
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
                        -2.357382129983601e-8,
                        7.014334852608252e-8,
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
                        -1.767237321991834e-8,
                        -7.938166072959355e-9,
                        0.0007012043548376694,
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
                        6.640114638794828e-8,
                        -1.3815654536234931e-7,
                        -0.0009418192065546816,
                        0.0006743220734356035,
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
                        -1.658198774045679e-8,
                        4.510922021791416e-8,
                        -0.0006047666185260992,
                        -0.00004621192198495147,
                        5.939590800233553e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.3174498626157125e-8,
                        9.382154476077128e-8,
                        0.00009132520823921927,
                        -0.000024903380889975652,
                        -8.398140006954323e-9,
                        0.0005911953938725688,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.7373078847258153e-8,
                        2.5752201779615116e-8,
                        0.0002225837175325147,
                        -0.0007244299911356188,
                        9.962854034191271e-10,
                        -0.000009376796367644812,
                        0.0006663809286257809,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3.70732478224853e-8,
                        -2.0925343465926876e-7,
                        0.00020774792223034736,
                        -0.0008786600618801774,
                        1.6801682599400716e-8,
                        0.00004369346165633792,
                        0.0009397206460510391,
                        2.779230647014199e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.9174703819836228e-8,
                        -1.999909790282791e-8,
                        0.00040290571308218976,
                        -0.00022707344832946557,
                        -1.6476012945223348e-8,
                        -0.00003637675973008529,
                        0.00023483890759692575,
                        1.5285180439484972e-8,
                        4.301502252255101e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3.6199296115472955e-11,
                        -7.459524911081566e-9,
                        0.00014300676014552226,
                        -0.000040270974931225485,
                        -9.595480227040043e-9,
                        0.0000066379290978635674,
                        0.00002876612474350155,
                        8.442381809471349e-10,
                        -4.058497465500659e-8,
                        3.8976407905577587e-8,
                        0,
                        0,
                        0,
                        0,
                        -7.799189343701222e-9,
                        -5.363630370912066e-8,
                        0.00008032311111641552,
                        0.000022189273758807263,
                        -1.1292516486625305e-8,
                        -0.000011120567940505684,
                        -0.00000412174148963765,
                        1.0135430498547303e-9,
                        6.389075496805569e-8,
                        -5.024696440652896e-8,
                        5.97355200768315e-8,
                        0,
                        0,
                        0,
                        -1.1143747053948403e-8,
                        5.238356816863964e-9,
                        0.00019456622346779702,
                        -0.00024346174460210599,
                        5.128624588260221e-9,
                        -0.000012086433290027854,
                        0.00020245834682930804,
                        5.258842350797545e-9,
                        -1.412390496784225e-7,
                        9.818707498031408e-8,
                        -1.007465658520296e-8,
                        4.8654176651249093e-8,
                        0,
                        0,
                        -1.2426573979402843e-8,
                        -2.5098760628889675e-8,
                        0.0002678975149778435,
                        0.0001006118799653525,
                        -3.489115968098221e-8,
                        -0.000012293310422796132,
                        -0.00010635719500495378,
                        5.97162021584331e-9,
                        8.251393435202928e-8,
                        -3.802759295661898e-8,
                        1.3261898583922917e-8,
                        -5.988259808821943e-8,
                        5.175565808912851e-8,
                        0,
                        2.0274558203194467e-9,
                        6.864255050291378e-9,
                        -0.0007157045494024927,
                        -0.000021624031575504914,
                        -6.865693788201301e-10,
                        7.97141144644581e-7,
                        0.000015593285527846085,
                        -6.719344422283952e-10,
                        -3.6873223875937516e-9,
                        2.4944365274667283e-9,
                        -7.212513637796326e-9,
                        2.210131104439192e-9,
                        -1.2999058433471485e-9,
                        0.0006923069953316583
                    ],
                    "g": [
                        1196.6278770067186,
                        -3677.477501359783,
                        554.5137186744829,
                        -535.1376621098863,
                        -805.7920059986104,
                        172.44412061197946,
                        553.3792170226637,
                        232.32787927318267,
                        209.8440430161136,
                        -634.5670314228655,
                        1227.8522396988478,
                        -922.3529791458162,
                        607.6161033380855,
                        -8790.071285472377
                    ],
                    "mx": [
                        81700220.39093116,
                        27168131.810446747,
                        4211.469417926403,
                        2800.928568860692,
                        20145320.678047724,
                        618.8954100070375,
                        2823.5091629256412,
                        119729310.98666666,
                        18890557.505137097,
                        20054726.184111156,
                        29652344.404218495,
                        15464255.989714285,
                        17338892.22805437,
                        4246.432200802792
                    ],
                    "cases": [
                        {
                            "dayTime": "21:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -22
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -22
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -22
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 23,
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
                                    "value": -1276.3086811333178
                                }
                            ]
                        },
                        {
                            "importance": 28.8365306064222,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.000017202470380400973
                                }
                            ]
                        },
                        {
                            "importance": 10.179068261408569,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 17.84440684690769
                                }
                            ]
                        },
                        {
                            "importance": 13.74726091155109,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.2780585824808098
                                }
                            ]
                        },
                        {
                            "importance": 7.835867483383314,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00005558598632364597
                                }
                            ]
                        },
                        {
                            "importance": 7.384911702340573,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003782687592478372
                                }
                            ]
                        },
                        {
                            "importance": 5.145986446332095,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.06721199321589358
                                }
                            ]
                        },
                        {
                            "importance": 1.2667034121253786,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.00000989217889819868
                                }
                            ]
                        },
                        {
                            "importance": 2.015144155449713,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": 0.00021535720411425998
                                }
                            ]
                        },
                        {
                            "importance": 7.222150219075327,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -23
                                },
                                {
                                    "type": "β",
                                    "value": -0.00018903164490635674
                                }
                            ]
                        },
                        {
                            "importance": 10.678551871339026,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0002483606693582722
                                }
                            ]
                        },
                        {
                            "importance": 5.687824930572712,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -16.033061141522364
                                }
                            ]
                        }
                    ],
                    "dayTime": "22:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -23
                        }
                    ],
                    "samplesAhead": [
                        23
                    ],
                    "predictionIntervals": [
                        -3825.190090180805,
                        1655.8796202831218
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.513634890830585e-8,
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
                        -2.0665375607507965e-8,
                        0.0007013375013323207,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.6347108834815177e-8,
                        -0.0009401729004693034,
                        0.0007070694323886407,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.1124161066941175e-9,
                        -0.0006201464716724819,
                        -0.00003155392058270939,
                        5.986561647604468e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.588151914487654e-8,
                        0.000010460205429287716,
                        -0.00005266100319645559,
                        4.217780380212286e-9,
                        7.42899299188765e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.167800849261567e-8,
                        0.00026304945234025196,
                        -0.00009368455029707397,
                        -1.1935180005975682e-8,
                        7.818409446833825e-8,
                        0.0006386724949362661,
                        0,
                        0,
                        0,
                        0,
                        0,
                        8.855554709977842e-8,
                        -0.00041046418378332626,
                        0.00040807392717456657,
                        1.1036074583831988e-8,
                        -3.115963676347048e-7,
                        0.00005459062470871795,
                        2.8171015919369627e-8,
                        0,
                        0,
                        0,
                        0,
                        -3.214540828672093e-8,
                        0.0003092367183892298,
                        -0.0000325156087348063,
                        -1.373030188064538e-8,
                        -3.045520284477668e-9,
                        -0.00005037115235669955,
                        1.3150161721199551e-8,
                        4.97180352193278e-8,
                        0,
                        0,
                        0,
                        3.34319529981511e-10,
                        0.00009866038415835093,
                        -0.000020641341591231048,
                        -4.0212982721854605e-9,
                        -1.4872801292315874e-8,
                        -4.094112771684461e-7,
                        2.0285078395709625e-9,
                        -4.507868009851903e-8,
                        4.810894113449751e-8,
                        0,
                        0,
                        -1.031856521705455e-8,
                        0.00008558107055898292,
                        0.000017064540801138315,
                        -1.5524520831018076e-8,
                        -5.1251909481893755e-8,
                        -0.000008713990373690337,
                        4.622785286117722e-10,
                        7.502345938325229e-8,
                        -5.932314707325559e-8,
                        6.72879566642671e-8,
                        0,
                        1.0269248928552803e-9,
                        -0.0007136972988851883,
                        3.892267408217651e-7,
                        -3.4030471410183593e-10,
                        7.3218498966341734e-9,
                        5.470966479175725e-7,
                        -3.1963356918764576e-10,
                        9.898833454729359e-11,
                        -1.8422374660837613e-10,
                        -6.937407919407129e-9,
                        0.0006959020509860254
                    ],
                    "g": [
                        1063.6116528803796,
                        574.7780356819407,
                        -708.7841893886451,
                        -686.5116311503594,
                        -1961.131581241278,
                        147.0112393978858,
                        137.68158894471736,
                        220.5115861457398,
                        -2395.1264676381943,
                        1315.658851903598,
                        -23039.2497317763
                    ],
                    "mx": [
                        75349501.0153178,
                        4211.501091857616,
                        3419.1426684638222,
                        20016857.178673387,
                        25155073.29289374,
                        569.1420751914148,
                        109300425.27875096,
                        16865343.452120896,
                        17283542.366680957,
                        26863146.72913496,
                        4234.170955620223
                    ],
                    "cases": [
                        {
                            "dayTime": "22:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -23
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -23
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -23
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 24,
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
                                    "value": -1149.4718492470215
                                }
                            ]
                        },
                        {
                            "importance": 30.32240876847364,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000722150036578274
                                }
                            ]
                        },
                        {
                            "importance": 13.325248566373027,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": 2.0307004730108913
                                }
                            ]
                        },
                        {
                            "importance": 17.174992990591917,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -24
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.00005986519572953502
                                }
                            ]
                        },
                        {
                            "importance": 14.676848735358863,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001693287012853093
                                }
                            ]
                        },
                        {
                            "importance": 8.01297090021077,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 1,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.1075225847372119
                                }
                            ]
                        },
                        {
                            "importance": 6.184319757828938,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -24
                                },
                                {
                                    "type": "β",
                                    "value": -1.0465900928986718
                                }
                            ]
                        },
                        {
                            "importance": 2.6442384621481563,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.14807324239119152
                                }
                            ]
                        },
                        {
                            "importance": 1.667875433943847,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -19
                                },
                                {
                                    "type": "β",
                                    "value": -0.1945324009389268
                                }
                            ]
                        },
                        {
                            "importance": 5.99109638507083,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -24
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.12875894552717324
                                }
                            ]
                        }
                    ],
                    "dayTime": "23:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -24,
                            "dataTo": -24
                        },
                        {
                            "name": "Price",
                            "dataFrom": -414,
                            "dataTo": -24
                        }
                    ],
                    "samplesAhead": [
                        24
                    ],
                    "predictionIntervals": [
                        -3418.3702546821505,
                        1462.1461506187209
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.625840493123435e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.1387578983832114e-8,
                        0.0007014703455104125,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.3668747560262932e-9,
                        -0.0006421219592728268,
                        6.081953635227846e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.6002240839124777e-8,
                        -0.000057428328549825834,
                        4.728052201887082e-9,
                        7.661090976456858e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.7119709245993876e-8,
                        0.00016578334246786862,
                        -1.3933794533232737e-8,
                        4.012180218125684e-8,
                        0.0006445570974939237,
                        0,
                        0,
                        0,
                        0,
                        3.531734282569345e-8,
                        -0.0007527016571591272,
                        -9.304653095680612e-9,
                        -7.637018430719236e-8,
                        -0.000008835186327921052,
                        0.0007337814579703833,
                        0,
                        0,
                        0,
                        -2.8687315664845337e-9,
                        0.0017207530068771555,
                        4.420621427201593e-9,
                        7.602643027004865e-9,
                        -0.000012167509110902923,
                        -0.002054819410129392,
                        0.0003595590455036351,
                        0,
                        0,
                        -4.073231250406255e-8,
                        0.0006319213864980081,
                        -4.102864897924581e-9,
                        7.250220728291773e-8,
                        -0.00007357761232181981,
                        -0.0006236917967461749,
                        0.00006379723728330254,
                        0.0004282195522161524,
                        0,
                        6.528585901967714e-8,
                        -0.00033787978638580985,
                        1.208859259350132e-8,
                        -1.6562666851336866e-7,
                        0.00002755284353278396,
                        0.0002986881097034727,
                        0.000010454403346194403,
                        -0.00046230901811656445,
                        0.00037008393484908345
                    ],
                    "g": [
                        958.7614424558072,
                        520.8294864578172,
                        -974.804874024001,
                        -1969.7943994705724,
                        144.3569280426959,
                        -470.800371735449,
                        415.661049991184,
                        -78.66681475192216,
                        347.91822449596424
                    ],
                    "mx": [
                        71131542.56634626,
                        4211.5412513201745,
                        19788487.802265063,
                        23884805.027582437,
                        566.3959241281386,
                        3794.1008355155827,
                        1179.3005333621181,
                        2925.456956992551,
                        4056.053292729349
                    ],
                    "cases": [
                        {
                            "dayTime": "23:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -24
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -24
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -24
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 25,
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
                                    "value": -500.58479933708895
                                }
                            ]
                        },
                        {
                            "importance": 25.420342217882048,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": 1.069717546649005
                                }
                            ]
                        },
                        {
                            "importance": 11.73577039691184,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": -0.5788852868978284
                                }
                            ]
                        },
                        {
                            "importance": 6.355959550575791,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": -0.0007438550649976437
                                }
                            ]
                        },
                        {
                            "importance": 10.869109951894382,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -25
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001261262482944029
                                }
                            ]
                        },
                        {
                            "importance": 6.342930131868724,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": 0.4061733127556808
                                }
                            ]
                        },
                        {
                            "importance": 4.306571299242488,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": 0.0007575342573335304
                                }
                            ]
                        },
                        {
                            "importance": 4.167012388083492,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -26
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.00002472805891768468
                                }
                            ]
                        },
                        {
                            "importance": 6.513652195311613,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -25
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000756410954674823
                                }
                            ]
                        },
                        {
                            "importance": 4.935551106674814,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00003421567607362804
                                }
                            ]
                        },
                        {
                            "importance": 3.1747199746304022,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -25
                                },
                                {
                                    "type": "β",
                                    "value": -0.000018776800957358517
                                }
                            ]
                        },
                        {
                            "importance": 2.7243934209635325,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -25
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": -0.000036712834292886976
                                }
                            ]
                        },
                        {
                            "importance": 4.634315335313258,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -25
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": -0.00002328754583684877
                                }
                            ]
                        },
                        {
                            "importance": 2.7026872810320883,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": 0.043143455757259475
                                }
                            ]
                        },
                        {
                            "importance": 2.6814800253174482,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -25
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -0.000020703397826143367
                                }
                            ]
                        },
                        {
                            "importance": 3.435504724298064,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -26
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": 0.000012387473985541398
                                }
                            ]
                        }
                    ],
                    "dayTime": "00:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -25
                        }
                    ],
                    "samplesAhead": [
                        25
                    ],
                    "predictionIntervals": [
                        -3006.8199330993357,
                        1273.8181959321714
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007009371429726025,
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
                        0.00002379391129237473,
                        0.0006322620317718893,
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
                        -0.0006668652959359762,
                        0.00005049362980433354,
                        6.180676042079839e-8,
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
                        0.00029518772994573036,
                        0.00007700282353583907,
                        -7.08071387830727e-8,
                        4.969043113305523e-8,
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
                        0.000005290034646826115,
                        -0.0006088299385326322,
                        -1.8103236091697526e-9,
                        4.3968528024882766e-9,
                        0.0006366389982455663,
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
                        -0.00000658306663852367,
                        7.347155062869275e-7,
                        -6.122187504256866e-8,
                        -3.2561968101005674e-11,
                        -5.814784940705584e-7,
                        6.20851924602358e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0002681550296870105,
                        -0.00012164749126442829,
                        -4.655738203339659e-7,
                        -1.490453722678738e-8,
                        0.00016062042720379262,
                        4.1456674693586144e-7,
                        6.143066912226862e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00002069308918908194,
                        -0.00011642913224353949,
                        -5.187014677696873e-7,
                        -2.5950203266463624e-8,
                        0.00012043375362366523,
                        4.960719307103163e-7,
                        -7.853659091319577e-9,
                        4.4510889983791256e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0000431856858320858,
                        -0.0001252790700631901,
                        -1.25980535073324e-7,
                        -6.704980688673376e-9,
                        0.00013346961251315054,
                        2.384676015679797e-8,
                        1.4966619927371708e-10,
                        4.1191692773393217e-8,
                        6.196912066987642e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000004973154859373087,
                        0.00016538962546628448,
                        -0.00000141069297425523,
                        -6.629459262444095e-8,
                        -0.00013561862089232245,
                        0.000001356498934072875,
                        1.8467137952234802e-9,
                        5.077391114566708e-8,
                        1.2922157364799318e-8,
                        6.34441289645665e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000029002961180330025,
                        -0.00006436723256574002,
                        4.883198812789383e-7,
                        -4.4922374442919196e-8,
                        0.00005760282052638963,
                        -4.558535748145761e-7,
                        -2.2327305511748835e-8,
                        -4.156083993871929e-9,
                        -1.2787307009878926e-8,
                        2.4431898147699137e-9,
                        4.863675969206622e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.00007460395002750044,
                        0.000007954975862017134,
                        2.807608024305654e-7,
                        -5.960525321020616e-8,
                        -0.00004140095134031039,
                        -2.6754999129803553e-7,
                        -3.555143351571836e-8,
                        1.788367374340729e-8,
                        1.3355299527160558e-9,
                        -1.9815216665378647e-8,
                        2.6235779801134217e-8,
                        7.138977733357787e-8,
                        0,
                        0,
                        0,
                        0.00024339820386350892,
                        0.00009791544077410809,
                        0.0000018481804313615677,
                        2.3934942789047127e-8,
                        -0.00014742445621819986,
                        -0.0000018138354199781875,
                        -1.146671543755816e-8,
                        -2.8954406453844514e-8,
                        -2.6384647692741718e-8,
                        -3.610431038945443e-8,
                        4.703807233449878e-10,
                        -5.184214377384873e-9,
                        0.0005292526750009105,
                        0,
                        0,
                        0.00011026037519891185,
                        -0.00008277911651367402,
                        4.768687095676346e-7,
                        -6.490616729411743e-8,
                        0.00008049125313911684,
                        -4.63274022135873e-7,
                        -1.1033685955253973e-8,
                        -1.2110165785619416e-8,
                        -7.89211050698294e-9,
                        -9.29207694155339e-9,
                        2.6351022502372216e-8,
                        1.3744846479176895e-8,
                        -0.0000017155008273528028,
                        4.52431497902431e-8,
                        0,
                        0.000011950185223430293,
                        0.00004547331631145366,
                        4.1441835064388805e-7,
                        6.775580342887516e-8,
                        -0.000021804327221453594,
                        -3.894217419934199e-7,
                        -2.334257729770243e-8,
                        -4.559195831673728e-8,
                        -1.1779633896174696e-8,
                        -4.437377380155262e-9,
                        -2.746605018905704e-8,
                        1.3679581206731557e-8,
                        -0.000004835032575847889,
                        -3.48617718341954e-8,
                        3.8739556319368564e-8
                    ],
                    "g": [
                        889.2669742833299,
                        -315.92385937127136,
                        -656.159508695663,
                        359.5929717695498,
                        781.3407319278704,
                        21881.799136566897,
                        159.7908108441066,
                        -436.917411065578,
                        -458.84843567932245,
                        -352.62238318932856,
                        -276.8418566900986,
                        -340.7279463610168,
                        83.7542967461118,
                        -211.21198698109475,
                        319.76292870829934
                    ],
                    "mx": [
                        4211.4522887078365,
                        -12.525417866916499,
                        19952273.791789267,
                        16863243.62795444,
                        -138.54976357940862,
                        19936295.921248447,
                        12586265.54822722,
                        20298792.81072171,
                        19513437.65753826,
                        14977496.05753066,
                        15460583.419367136,
                        11467986.575295463,
                        1082.3940802824984,
                        16554171.072054898,
                        18450323.804041173
                    ],
                    "cases": [
                        {
                            "dayTime": "00:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -25
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -25
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -25
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 26,
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
                                    "value": -318.5051039611849
                                }
                            ]
                        },
                        {
                            "importance": 26.837755350578067,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": 1.1914247120113346
                                }
                            ]
                        },
                        {
                            "importance": 11.484503722843318,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": -0.7311108124927755
                                }
                            ]
                        },
                        {
                            "importance": 7.596043525401989,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": 0.5135680572281364
                                }
                            ]
                        },
                        {
                            "importance": 5.339661409417023,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": -0.0013432354566981267
                                }
                            ]
                        },
                        {
                            "importance": 7.14490172980707,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": 0.0013302060287165845
                                }
                            ]
                        },
                        {
                            "importance": 6.1761779698897925,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -26
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000539775401020086
                                }
                            ]
                        },
                        {
                            "importance": 7.094834338947832,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -26
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": -0.000028094423008610706
                                }
                            ]
                        },
                        {
                            "importance": 6.733474625149848,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.000041545798845136785
                                }
                            ]
                        },
                        {
                            "importance": 5.81737047896564,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.05754996315235546
                                }
                            ]
                        },
                        {
                            "importance": 4.682001045975503,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -26
                                },
                                {
                                    "type": "β",
                                    "value": -0.2099877457030713
                                }
                            ]
                        },
                        {
                            "importance": 1.1663764513103445,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.00001104072044811621
                                }
                            ]
                        },
                        {
                            "importance": 0.779225176888443,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": -0.028737108954433876
                                }
                            ]
                        },
                        {
                            "importance": 0.7228085131480821,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": 0.000032361000896292234
                                }
                            ]
                        },
                        {
                            "importance": 8.42486566167705,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -26
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -0.00003384984102975799
                                }
                            ]
                        }
                    ],
                    "dayTime": "01:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -26
                        }
                    ],
                    "samplesAhead": [
                        26
                    ],
                    "predictionIntervals": [
                        -2806.4149624737925,
                        1225.1434347982984
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007010707623588519,
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
                        -0.00013185897921629377,
                        0.0006423323095425242,
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
                        0.000018960364103912854,
                        -0.000631679505875659,
                        0.0006888173882901389,
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
                        -0.0006732464370637174,
                        0.00026996040489877485,
                        -0.00019089110731867077,
                        6.598293839488504e-8,
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
                        -0.000004222405749650273,
                        0.000002325955783022289,
                        -0.000002156998441876081,
                        -6.561820786100531e-8,
                        6.625742091588445e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0004600767724161224,
                        0.00008086582992617216,
                        -0.0000831416511172006,
                        3.0968078404762267e-7,
                        -4.064105343681072e-7,
                        4.96997225936809e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00010452552784321604,
                        0.000024645848130072197,
                        -0.000017753577121882098,
                        -0.0000011232398102591054,
                        0.000001110212573828685,
                        -2.9324490870658995e-8,
                        4.420315637207498e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00009300977922888258,
                        -0.00032105351161879043,
                        0.00032040584634820664,
                        -4.88242553883366e-7,
                        3.90390154613933e-7,
                        9.809674433553688e-9,
                        2.9611449819029615e-8,
                        6.340166343085088e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00030225718341933913,
                        0.00021513759209538694,
                        -0.000259936362033627,
                        0.000001159022270719139,
                        -0.0000011605789287715561,
                        -1.4671807622073696e-8,
                        -5.213438603325452e-9,
                        -2.113432747883636e-8,
                        0.0006322811260664198,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00056021873151207,
                        0.00040371983369656374,
                        -0.00022028604286736887,
                        3.573332046755401e-7,
                        -3.821163640367527e-7,
                        4.229195577337919e-9,
                        -1.2561642371331573e-8,
                        2.6902757656196052e-8,
                        0.000013217416465046611,
                        0.0006009078149169945,
                        0,
                        0,
                        0,
                        0,
                        -0.0003899543872742857,
                        0.000010948553945564136,
                        0.00004964140764661313,
                        -0.0000011918813014587287,
                        0.000001128607251863278,
                        1.8369020742997467e-9,
                        4.046103267292572e-9,
                        1.1421468690665822e-8,
                        -0.00003368373063626052,
                        0.00032177665846108575,
                        8.362375758339741e-8,
                        0,
                        0,
                        0,
                        -0.0001104336283776461,
                        -0.00008251013418025855,
                        0.00007737601254364597,
                        5.306627853141472e-7,
                        -5.156465231871182e-7,
                        1.5381984912746665e-9,
                        -6.2357784038455156e-9,
                        2.170716831538927e-8,
                        0.00004757370608997255,
                        -0.00005507979003769115,
                        -6.427279111519029e-8,
                        0.0005686384473333374,
                        0,
                        0,
                        0.00011443770891903846,
                        -0.00009003039771303692,
                        0.0001322422527308674,
                        6.450174471312391e-7,
                        -7.784019964032538e-7,
                        2.525530829535658e-8,
                        -6.324862966423087e-9,
                        2.8751400888119997e-8,
                        -0.0000160664593149906,
                        0.00013998433642828847,
                        6.751055671559887e-9,
                        -0.0000017777463057079579,
                        6.026283566571145e-8,
                        0,
                        0.00005797368024083094,
                        -0.00003296470736119993,
                        0.0000104401879109151,
                        1.9060042903443863e-7,
                        -1.4652197470370227e-7,
                        -5.421596806645555e-8,
                        3.6760210098725497e-9,
                        -3.039357970036461e-9,
                        -0.000003413167447211917,
                        -0.00004260590766369195,
                        -6.531625140419129e-10,
                        0.0000032112985994157367,
                        -3.9720002263826816e-8,
                        4.864580356405909e-8
                    ],
                    "g": [
                        819.1477241773298,
                        -268.57184296575787,
                        858.7948002712711,
                        -378.25659887373655,
                        27401.648933977853,
                        233.6307443995524,
                        -372.59515827868546,
                        -489.88080598263645,
                        107.00569146507895,
                        -466.6116052387241,
                        84.63383580977245,
                        -46.36205595190052,
                        78.35867679957188,
                        -695.8429823280219
                    ],
                    "mx": [
                        4211.460763278467,
                        1004.3523725113716,
                        850.7655573798787,
                        18584747.42305657,
                        18575570.64466872,
                        16864310.4533461,
                        20188160.449971903,
                        19161490.876512747,
                        848.2736280487804,
                        3895.2563993374847,
                        12917857.087382058,
                        2039.2137957317073,
                        17548244.657194592,
                        15461817.422637194
                    ],
                    "cases": [
                        {
                            "dayTime": "01:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -26
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -26
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -26
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 27,
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
                                    "value": -280.6048234861614
                                }
                            ]
                        },
                        {
                            "importance": 28.10301339796141,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": 1.7759245565596062
                                }
                            ]
                        },
                        {
                            "importance": 8.536875312963653,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.03622960107473875
                                }
                            ]
                        },
                        {
                            "importance": 11.411318236747217,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -0.0010016842974787622
                                }
                            ]
                        },
                        {
                            "importance": 10.116681695143233,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.09257930594004429
                                }
                            ]
                        },
                        {
                            "importance": 3.386401682427397,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": 0.0009597492414836866
                                }
                            ]
                        },
                        {
                            "importance": 4.819741172244905,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -28
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -45
                                },
                                {
                                    "type": "β",
                                    "value": 0.000005148622052584083
                                }
                            ]
                        },
                        {
                            "importance": 2.2678353100023037,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.4422449653312815
                                }
                            ]
                        },
                        {
                            "importance": 1.5205344101348532,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -0.09870870104123404
                                }
                            ]
                        },
                        {
                            "importance": 1.700063396499982,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.08369821503475273
                                }
                            ]
                        },
                        {
                            "importance": 1.471626568322078,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -0.000004591954361976259
                                }
                            ]
                        },
                        {
                            "importance": 2.4188398314407475,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -3.7582468861471936
                                }
                            ]
                        },
                        {
                            "importance": 21.595579493950925,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": 3.4650865622759133
                                }
                            ]
                        },
                        {
                            "importance": 2.6514894921613186,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -27
                                },
                                {
                                    "type": "β",
                                    "value": -0.249845484926369
                                }
                            ]
                        }
                    ],
                    "dayTime": "02:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -27
                        }
                    ],
                    "samplesAhead": [
                        27
                    ],
                    "predictionIntervals": [
                        -2678.880125786027,
                        1197.8824040687207
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007012043548376694,
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
                        -0.00005164518119291215,
                        0.0002266807266935176,
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
                        -0.0006637112898669286,
                        0.0000023413979892403727,
                        6.534003385549359e-8,
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
                        0.00006402297525382551,
                        0.000004172530658775402,
                        -1.3903048600805025e-8,
                        0.0006592165644827892,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000003807873360069797,
                        -1.2348873343009417e-7,
                        -6.499825324488665e-8,
                        -2.4151624365905933e-7,
                        6.556679892333104e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000338874793265571,
                        -0.000007727157936789883,
                        -0.0000022499846117703475,
                        -0.00004485798985762997,
                        0.000002246111725768761,
                        6.147267152342141e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00027023748965069797,
                        0.0000044042882627768125,
                        0.000001164362337947872,
                        -0.000029320514194604664,
                        -0.0000012111824578886946,
                        7.070648563021213e-9,
                        0.000724995257363817,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00014149002763608266,
                        0.0002103461531433969,
                        -3.7624268835511835e-7,
                        0.000011223110576820326,
                        3.793089459954882e-7,
                        8.131321890347917e-11,
                        0.00002379046333591589,
                        0.0002930370758924474,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00024467776971144226,
                        0.00005843290969173556,
                        -0.0000017879332021708497,
                        -0.00003145540383351424,
                        0.0000018049987482160573,
                        -3.329676816755401e-9,
                        -0.000355423997604608,
                        -0.00009925813554636728,
                        0.0007399633714342686,
                        0,
                        0,
                        0,
                        0,
                        -0.0007431554122806883,
                        -0.00006477863105244966,
                        -3.57044225710854e-8,
                        -0.00007460462766374167,
                        5.053419715740654e-8,
                        4.6953907398669205e-9,
                        0.00020407430242273315,
                        -0.0001429933449763323,
                        -0.00004777796394293346,
                        8.751340767768138e-8,
                        0,
                        0,
                        0,
                        -0.000521956846285622,
                        -0.000042899557879007845,
                        1.3423813957315378e-7,
                        -0.000018583882277029495,
                        -1.3377499885089368e-7,
                        -2.8749274831397614e-9,
                        0.00029265315381350786,
                        0.00021323865115663844,
                        -0.000020613208753521783,
                        -7.550142790168701e-9,
                        0.0007033574375174263,
                        0,
                        0,
                        0.0001451058947969399,
                        0.000008409778425774054,
                        9.051672776503853e-8,
                        -2.5608192997191284e-8,
                        -8.944499464160321e-8,
                        -1.337370866953976e-9,
                        -0.00008028579725473923,
                        -0.000014912245817750756,
                        -0.00001762360423334426,
                        -3.885985429840361e-9,
                        -0.0007891060686140904,
                        0.0007393506626643601,
                        0,
                        -0.0006138497240722225,
                        0.00001677635668855329,
                        7.188400065080216e-8,
                        -0.000004291349294640532,
                        -7.473054073773148e-8,
                        1.1338760969287032e-9,
                        0.0003861012853360927,
                        -0.0002541477521922685,
                        -0.00007030867394431311,
                        -3.21838274578149e-9,
                        0.0007802750867986773,
                        -0.0011578267093513394,
                        0.0005749443421769694
                    ],
                    "g": [
                        747.8083140101622,
                        -214.3568708419906,
                        -671.4324325158983,
                        173.60244959197163,
                        15737.293694962631,
                        133.11686056686978,
                        275.54831340447345,
                        -150.19108072114318,
                        162.04442920326855,
                        77.80393188418407,
                        -366.67025274922247,
                        4006.1451568243833,
                        -434.55595019920366
                    ],
                    "mx": [
                        4211.469417926403,
                        6616.80355190144,
                        19156133.50774585,
                        821.0255238095239,
                        19153849.455520675,
                        13354912.95542857,
                        4108.028399640693,
                        300.37146649949005,
                        2754.1715495043727,
                        17657432.298285715,
                        1863.5272067594592,
                        1781.8304480005147,
                        3468.867568132687
                    ],
                    "cases": [
                        {
                            "dayTime": "02:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -27
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -27
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -27
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 28,
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
                                    "value": -855.433487953781
                                }
                            ]
                        },
                        {
                            "importance": 31.04970610547737,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -28
                                },
                                {
                                    "type": "β",
                                    "value": 1.9638356684592888
                                }
                            ]
                        },
                        {
                            "importance": 11.80714090026672,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -28
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000706948080097286
                                }
                            ]
                        },
                        {
                            "importance": 8.431279774718123,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.10131564419932387
                                }
                            ]
                        },
                        {
                            "importance": 7.656337357202735,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -28
                                },
                                {
                                    "type": "β",
                                    "value": -0.002363464038567266
                                }
                            ]
                        },
                        {
                            "importance": 16.18029791262178,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005795837235142487
                                }
                            ]
                        },
                        {
                            "importance": 10.38822889943822,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.9497031712986806
                                }
                            ]
                        },
                        {
                            "importance": 3.3822790988215763,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -28
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -45
                                },
                                {
                                    "type": "β",
                                    "value": 0.000009147062224488192
                                }
                            ]
                        },
                        {
                            "importance": 3.6147849074821803,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -28
                                },
                                {
                                    "type": "β",
                                    "value": 0.0770616927060884
                                }
                            ]
                        },
                        {
                            "importance": 4.754007845396918,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -28
                                },
                                {
                                    "type": "β",
                                    "value": -0.0954005033465313
                                }
                            ]
                        },
                        {
                            "importance": 2.735937198574374,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -28
                                },
                                {
                                    "type": "β",
                                    "value": 0.0022366980018998345
                                }
                            ]
                        }
                    ],
                    "dayTime": "03:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -28
                        }
                    ],
                    "samplesAhead": [
                        28
                    ],
                    "predictionIntervals": [
                        -2632.4487625470265,
                        1139.1413792001508
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007012043548376694,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006639470153973699,
                        6.587836854647922e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00008335265325155703,
                        -1.5478577554845216e-8,
                        0.0006696165637606695,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006912493870689697,
                        3.1572238054576127e-9,
                        0.000008577708581513454,
                        1.0196148946478112e-7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00011071502082097632,
                        -3.427006291133955e-8,
                        -0.000014481707798615324,
                        -6.456608186158333e-8,
                        3.8805325907914886e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0004657999315468664,
                        4.728210681314306e-9,
                        -0.000016836415075158576,
                        6.953764364598643e-8,
                        -4.1092808001868423e-8,
                        0.0007346724823572708,
                        0,
                        0,
                        0,
                        0,
                        -0.0012636603179314945,
                        -3.5104542763231215e-8,
                        -0.00007848692463017819,
                        1.0164671597742467e-7,
                        -2.8827963718485612e-8,
                        0.0011195280259571117,
                        6.566407304994647e-8,
                        0,
                        0,
                        0,
                        0.0002111281493841839,
                        -9.78181903994717e-11,
                        -0.000006897956933493554,
                        1.0628990550424145e-9,
                        -2.1802762061112604e-8,
                        0.00024487879444883253,
                        4.906896497801736e-9,
                        0.0003571619669126864,
                        0,
                        0,
                        -0.00038794618196305293,
                        -4.04444509152355e-9,
                        -0.000010709646706319818,
                        -6.112865629790597e-8,
                        4.167298288741097e-8,
                        -0.00031480726545121495,
                        -9.242721314786313e-9,
                        -0.0002421986642471248,
                        0.0005670364277015478,
                        0,
                        0.000009095846787787652,
                        3.6114687399625285e-10,
                        2.2531123402468874e-8,
                        -1.0170463683154909e-7,
                        -1.7105156539273324e-10,
                        -0.000013289310750021665,
                        -1.34857788260152e-11,
                        1.582570007263417e-8,
                        7.593316049902377e-7,
                        1.0232954265523446e-7
                    ],
                    "g": [
                        690.0609753513411,
                        -653.1607301999674,
                        151.0816677118622,
                        -371.0505521716688,
                        683.3480496565138,
                        -1176.4351140487297,
                        109.94624364159503,
                        80.85427638233679,
                        -197.51432397946408,
                        21857.79339829211
                    ],
                    "mx": [
                        4211.469417926403,
                        18972827.85052935,
                        810.1874285714285,
                        20633297.516799815,
                        59615673.990226954,
                        4067.3667892068133,
                        13208897.957714286,
                        -1418.9367094322397,
                        2790.026311617989,
                        20617421.599040233
                    ],
                    "cases": [
                        {
                            "dayTime": "03:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -28
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -28
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -28
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 29,
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
                                    "value": -840.0150393506715
                                }
                            ]
                        },
                        {
                            "importance": 28.712325198252415,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -29
                                },
                                {
                                    "type": "β",
                                    "value": 1.1137660550762027
                                }
                            ]
                        },
                        {
                            "importance": 6.8909433057857665,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -29
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007538341129855256
                                }
                            ]
                        },
                        {
                            "importance": 8.612496083388613,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.12244204759512944
                                }
                            ]
                        },
                        {
                            "importance": 10.051530326924759,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.1093245157863023
                                }
                            ]
                        },
                        {
                            "importance": 14.94719968071265,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -533.6405504584599
                                }
                            ]
                        },
                        {
                            "importance": 8.26525979377952,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -29
                                },
                                {
                                    "type": "β",
                                    "value": 0.0843763835797839
                                }
                            ]
                        },
                        {
                            "importance": 9.219859886376973,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -29
                                },
                                {
                                    "type": "β",
                                    "value": -0.0007191238441541991
                                }
                            ]
                        },
                        {
                            "importance": 6.0496362605261105,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -29
                                },
                                {
                                    "type": "β",
                                    "value": 0.0002415909586878997
                                }
                            ]
                        },
                        {
                            "importance": 3.647572525924946,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.0006016526718419274
                                }
                            ]
                        },
                        {
                            "importance": 3.6031769383282404,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001940496402060895
                                }
                            ]
                        }
                    ],
                    "dayTime": "04:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -29
                        }
                    ],
                    "samplesAhead": [
                        29
                    ],
                    "predictionIntervals": [
                        -2774.700784921373,
                        1246.4620142590022
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007012043548376694,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006639796155419398,
                        6.644996370536096e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0000727516877538243,
                        -1.4711943526991562e-8,
                        0.0006234928511555391,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00011340235853451666,
                        -1.3799634816621522e-8,
                        0.00005643436167362933,
                        0.0004889231268181794,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000029697149758491358,
                        8.424661320900881e-9,
                        0.00009721519134750916,
                        -0.00015519070513911649,
                        2.9758896783860846,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00028572472417992865,
                        -1.7765634728120057e-9,
                        -0.000004673571527775357,
                        -0.000032476060864318006,
                        0.19554308999084924,
                        0.0005134105762476724,
                        0,
                        0,
                        0,
                        0,
                        -0.0007300713597354242,
                        4.308639226329681e-9,
                        0.00003382582442765951,
                        0.000014816385858101032,
                        0.1260498079595604,
                        -0.00003282883702805941,
                        1.0215821738131601e-7,
                        0,
                        0,
                        0,
                        -0.0001976049806962017,
                        -7.172797422297381e-9,
                        0.000018774820888172138,
                        -0.000016531089427882517,
                        0.1238451505719113,
                        -0.000013506023066269185,
                        -6.360805267679984e-8,
                        3.645431410889917e-8,
                        0,
                        0,
                        0.00016826478360880705,
                        -2.873016334285255e-8,
                        -0.000009241264536819667,
                        0.00001210494018363247,
                        0.04967410796475225,
                        -0.00001143696860455601,
                        -1.20620597284991e-7,
                        1.3382717058936469e-8,
                        1.1022821704094678e-7,
                        0,
                        0.000006702604941010448,
                        -2.33802592045727e-10,
                        4.816842537686821e-7,
                        9.388033093717414e-7,
                        -0.0015887744895282344,
                        -1.9228527258769e-8,
                        1.0517101024944004e-7,
                        -3.741583865606809e-8,
                        -1.1101075512270891e-7,
                        3.920064885602871e-8
                    ],
                    "g": [
                        685.4471385973944,
                        -637.2113233947766,
                        212.80197162343046,
                        220.66464777204038,
                        -236.17109715547622,
                        176.92441117769368,
                        -529.9427536325027,
                        1372.8748765646703,
                        472.939063542186,
                        -4950.163986284283
                    ],
                    "mx": [
                        4211.469417926403,
                        18796333.987012606,
                        863.976380952381,
                        2270.559238095238,
                        0.3331358901427875,
                        -2037.3360621464058,
                        20774099.002521142,
                        62586382.565609634,
                        19816096.280430377,
                        59806388.07435814
                    ],
                    "cases": [
                        {
                            "dayTime": "04:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -29
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -29
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -29
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 30,
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
                                    "value": -963.2956240599697
                                }
                            ]
                        },
                        {
                            "importance": 20.337175339280382,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -30
                                },
                                {
                                    "type": "β",
                                    "value": -0.14476143209284129
                                }
                            ]
                        },
                        {
                            "importance": 14.601744847575947,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -30
                                },
                                {
                                    "type": "β",
                                    "value": 0.03721694150386535
                                }
                            ]
                        },
                        {
                            "importance": 8.629032514946923,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.13921174645913173
                                }
                            ]
                        },
                        {
                            "importance": 8.563196348046088,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.11979352976464215
                                }
                            ]
                        },
                        {
                            "importance": 6.289144772051629,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -1.242949698206071
                                }
                            ]
                        },
                        {
                            "importance": 12.247218932168286,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013022847586176644
                                }
                            ]
                        },
                        {
                            "importance": 10.6460166681743,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007707737463434868
                                }
                            ]
                        },
                        {
                            "importance": 7.24836543493901,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006323121892026925
                                }
                            ]
                        },
                        {
                            "importance": 4.643434451902483,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 460.587483939914
                                }
                            ]
                        },
                        {
                            "importance": 1.003836375479344,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.04228640573469098
                                }
                            ]
                        },
                        {
                            "importance": 0.602168525600152,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -30
                                },
                                {
                                    "type": "β",
                                    "value": 2.559221250905779
                                }
                            ]
                        },
                        {
                            "importance": 3.7920227626019534,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -30
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002999282873425002
                                }
                            ]
                        },
                        {
                            "importance": 1.3966430272335018,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -30
                                },
                                {
                                    "type": "β",
                                    "value": -0.15331650539123598
                                }
                            ]
                        }
                    ],
                    "dayTime": "05:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -30
                        }
                    ],
                    "samplesAhead": [
                        30
                    ],
                    "predictionIntervals": [
                        -2846.705060521242,
                        1409.6891089673754
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006620621052014056,
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
                        0.00006964394215832233,
                        0.0003578770433313266,
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
                        -0.0000702451265988738,
                        -0.000021472917319780937,
                        0.0005754630906663126,
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
                        -0.00025586659333345343,
                        -0.000006211639743705112,
                        -0.000021768133227630312,
                        0.0005720754489088041,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0004888203233601253,
                        0.00004022559572489651,
                        -0.00004764518972072097,
                        -0.00004601070384276525,
                        0.0007517022529297308,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00009292831402648006,
                        -0.00006114136158822107,
                        0.000053568897195156215,
                        0.0000313995541128364,
                        -0.0006630476788579766,
                        1.0806130254128533e-7,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.000035772536460825824,
                        -0.0000014494084606048243,
                        0.000010280605727153592,
                        -0.000024397616230582005,
                        -0.0007466692745856915,
                        7.594663608457273e-10,
                        6.909020930410596e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00003581227007249563,
                        -0.00003250673024630846,
                        0.000026333627436245694,
                        -6.632018258210563e-7,
                        -0.0001939153042385543,
                        -6.205996750097041e-8,
                        -1.0290005985416374e-8,
                        3.80617673850795e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00004238192142989642,
                        -0.0002834981027900473,
                        -0.00007946807211055245,
                        0.00014460438456677358,
                        -0.0001053768048738579,
                        6.875540841324997e-9,
                        -7.348855768338408e-9,
                        3.340464236196296e-10,
                        1.8325269752732698,
                        0,
                        0,
                        0,
                        0,
                        -0.00009346755483241716,
                        -0.000013373771007966988,
                        0.000012632798449289032,
                        -0.00046427476829585205,
                        0.00018808661170382316,
                        4.3666347740016644e-8,
                        -4.753694712122795e-9,
                        -1.8034331463312164e-8,
                        -0.07484907497405911,
                        0.00044917305994554015,
                        0,
                        0,
                        0,
                        -0.000300057912311718,
                        0.000017672157628213758,
                        0.000014220589299931806,
                        -0.000011601860214827005,
                        -0.00044366821773428344,
                        -8.095118244965479e-9,
                        1.2794519045792991e-9,
                        2.3691369576015187e-9,
                        -0.006063034154049617,
                        0.000005473056059374581,
                        0.0007012043548376694,
                        0,
                        0,
                        3.0786162240953467e-7,
                        -0.0000017356881293720387,
                        -0.000002379338934796846,
                        0.0000010458586525074479,
                        0.0005836334145056893,
                        -1.0565623791358522e-7,
                        1.0500585460403244e-9,
                        2.841397389523236e-10,
                        0.0027154459369282766,
                        0.000002406073724070581,
                        -0.0005667780977475459,
                        9.913193735828669e-8,
                        0,
                        0.0010113051510964618,
                        0.0002354122596694464,
                        -0.000029591872255835464,
                        -0.00006602433894974023,
                        0.0015690557013057934,
                        -7.021665434023629e-8,
                        -3.0207672001849816e-9,
                        4.8103567304441435e-9,
                        -0.03224232737032182,
                        0.00004534536370515866,
                        -0.00253977132202232,
                        6.694841125980684e-8,
                        0.0005964433918959043
                    ],
                    "g": [
                        748.989671176788,
                        456.1540512973459,
                        282.8090329913013,
                        270.6061162684541,
                        320.34588317195056,
                        -778.5246663546512,
                        -794.3142044014986,
                        1748.8096073448266,
                        257.73487983375134,
                        130.33144192364966,
                        413.5004802955827,
                        -2851.947855088088,
                        -257.05122644395715
                    ],
                    "mx": [
                        3898.9971121649287,
                        -1460.4686476537624,
                        930.7676190476191,
                        2223.4820656293036,
                        4003.410839304741,
                        20344431.64656567,
                        17782285.116311133,
                        61593369.94721874,
                        -0.24387239731236462,
                        2457.031619047619,
                        4211.469417926403,
                        21474153.489570465,
                        1120.0977042303198
                    ],
                    "cases": [
                        {
                            "dayTime": "05:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -30
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -30
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -30
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 31,
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
                                    "value": -810.3516416351108
                                }
                            ]
                        },
                        {
                            "importance": 17.442141756121686,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": 0.0002574379202136168
                                }
                            ]
                        },
                        {
                            "importance": 11.455463903067606,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 328.3202272512945
                                }
                            ]
                        },
                        {
                            "importance": 11.888580750881323,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.07773650454002957
                                }
                            ]
                        },
                        {
                            "importance": 9.182454939666341,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": -0.0007884425292569993
                                }
                            ]
                        },
                        {
                            "importance": 10.972796607473969,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.11314315466280081
                                }
                            ]
                        },
                        {
                            "importance": 10.369902497926326,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": -0.0017618571939023216
                                }
                            ]
                        },
                        {
                            "importance": 11.766817647731461,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": 1.1280366235996713
                                }
                            ]
                        },
                        {
                            "importance": 9.64362434198862,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": -0.2642895109023069
                                }
                            ]
                        },
                        {
                            "importance": 1.6595278729329528,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.08633940560275064
                                }
                            ]
                        },
                        {
                            "importance": 1.2062466942129202,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.000652180483637085
                                }
                            ]
                        },
                        {
                            "importance": 1.9612499440818547,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00020839443109986098
                                }
                            ]
                        },
                        {
                            "importance": 1.0912941840914487,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": 0.0016843170004317498
                                }
                            ]
                        },
                        {
                            "importance": 1.3598988598234918,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -31
                                },
                                {
                                    "type": "β",
                                    "value": 0.000016429870876581263
                                }
                            ]
                        }
                    ],
                    "dayTime": "06:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -31
                        }
                    ],
                    "samplesAhead": [
                        31
                    ],
                    "predictionIntervals": [
                        -3171.643999851709,
                        1622.065655831674
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        3.313831457310601e-8,
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
                        -4.221434822134788e-9,
                        1.5272342467494777,
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
                        -9.924435889155414e-9,
                        -0.16981512169103252,
                        0.00041534776199129807,
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
                        -3.3079417144370465e-8,
                        -0.006229563817778831,
                        0.000017331237681173903,
                        9.37774879961552e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.971196068266323e-10,
                        -0.28667990659680315,
                        -0.00004500909988230922,
                        3.489138124659576e-9,
                        0.0005326587333728427,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -5.977745828112959e-8,
                        0.25417374420700606,
                        -0.000012411884836310017,
                        8.510735577300663e-8,
                        -0.00007934877614168757,
                        6.722372057675123e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.3874327205396524e-8,
                        0.20099654932476974,
                        -0.000007541674047955053,
                        6.966817110607952e-9,
                        -0.000046925501787648144,
                        -2.296674465845749e-8,
                        0.0007012043548376694,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        7.337830857424174e-8,
                        0.7799025670463159,
                        0.000012440870055056833,
                        -6.957791923768288e-8,
                        0.00007246421051472939,
                        -1.5829372769562045e-8,
                        -0.0008890447588565884,
                        0.0006365652289922331,
                        0,
                        0,
                        0,
                        0,
                        0,
                        2.977098222059414e-9,
                        -0.002240826713105773,
                        -0.0003262311428449581,
                        -1.4790730828776114e-9,
                        -0.00002343884799341704,
                        -1.579523430124806e-8,
                        0.00002401508397411146,
                        -0.00000641231291494912,
                        0.0005483362249275252,
                        0,
                        0,
                        0,
                        0,
                        1.4958137348636704e-8,
                        -0.012907479626456383,
                        0.000013779795425750561,
                        -1.1081652662124761e-7,
                        0.000007178688103465195,
                        -2.762207038292635e-8,
                        0.0000987387351634685,
                        0.00004906075043675139,
                        -0.000008360130580118243,
                        1.0301318962418474e-7,
                        0,
                        0,
                        0,
                        -3.412036377111627e-8,
                        -0.001701843942339934,
                        6.39555912945438e-7,
                        9.885358168030156e-8,
                        -1.545368398668039e-7,
                        1.2945991725334036e-10,
                        0.000004491860806537709,
                        -8.325563329208186e-7,
                        -3.2882089439988546e-8,
                        -1.0587031110213471e-7,
                        3.622908378802797e-8,
                        0,
                        0,
                        3.699356585240845e-9,
                        0.0005720591963689882,
                        -4.749408575032884e-7,
                        -9.639499491253347e-9,
                        -4.5801764099966735e-8,
                        -6.664376374370468e-8,
                        -0.000008009546067995063,
                        4.272106844885455e-7,
                        8.203137072438896e-7,
                        1.0170977233531961e-8,
                        -3.8377192629667865e-9,
                        6.738337626612766e-8,
                        0,
                        -1.834713819962951e-7,
                        -0.014946830180497315,
                        0.00004953072772943915,
                        4.508988806063215e-7,
                        -0.000036986827827410125,
                        -0.0000020345864514907015,
                        -0.0000831222725637986,
                        -0.00001369171662860946,
                        -0.00010584722179068484,
                        -3.8864194801778054e-7,
                        1.638933397567786e-7,
                        0.0000019956331161793358,
                        6.886244941332051e-8
                    ],
                    "g": [
                        809.2829260765084,
                        491.91866315794914,
                        443.05391254844966,
                        -1866.184290524822,
                        300.46079844572324,
                        -685.5480792396472,
                        1232.6680644334344,
                        -456.9006907058973,
                        182.36904363650575,
                        391.9127017167639,
                        -4932.160041718476,
                        17929.93418720119,
                        238.58969607611905
                    ],
                    "mx": [
                        68295319.02690874,
                        -4.2294210461910727e-20,
                        2696.577523809524,
                        22630514.679213595,
                        994.6346666666667,
                        18564135.767114457,
                        4211.469417926403,
                        139.8334733831499,
                        2293.9517404926087,
                        21340319.486683834,
                        64515834.219621375,
                        18580132.208432663,
                        14524158.581008466
                    ],
                    "cases": [
                        {
                            "dayTime": "06:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -31
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -31
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -31
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 32,
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
                                    "value": -1130.9972216400088
                                }
                            ]
                        },
                        {
                            "importance": 18.92959947893381,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -32
                                },
                                {
                                    "type": "β",
                                    "value": 1.3716628084612175
                                }
                            ]
                        },
                        {
                            "importance": 18.617716200289674,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -263.50688981050257
                                }
                            ]
                        },
                        {
                            "importance": 6.755038441170863,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -32
                                },
                                {
                                    "type": "β",
                                    "value": -0.00023638461317286173
                                }
                            ]
                        },
                        {
                            "importance": 18.638863271722045,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -32
                                },
                                {
                                    "type": "β",
                                    "value": -0.417453829323838
                                }
                            ]
                        },
                        {
                            "importance": 13.870273820898637,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.07324699335983434
                                }
                            ]
                        },
                        {
                            "importance": 12.145437762302173,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -32
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007539785001459172
                                }
                            ]
                        },
                        {
                            "importance": 3.37310831971905,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -32
                                },
                                {
                                    "type": "β",
                                    "value": 0.000059462561412313
                                }
                            ]
                        },
                        {
                            "importance": 3.1580186181760563,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -32
                                },
                                {
                                    "type": "β",
                                    "value": 0.07718935368443658
                                }
                            ]
                        },
                        {
                            "importance": 2.4029308373051803,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004533227688314927
                                }
                            ]
                        },
                        {
                            "importance": 2.1090132494825142,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.09744750347314296
                                }
                            ]
                        }
                    ],
                    "dayTime": "07:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -425,
                            "dataTo": -32
                        }
                    ],
                    "samplesAhead": [
                        32
                    ],
                    "predictionIntervals": [
                        -3565.1733619842016,
                        1781.3754057494698
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007012043548376694,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000030426313677336408,
                        3.2177469771201315,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006450632672023904,
                        0.4461666651942529,
                        8.832655719190845e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0004047454803948315,
                        -1.9578828339736944,
                        7.359219851537118e-8,
                        0.000688670453076559,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0005935147998683335,
                        1.8822730946840447,
                        4.2517644121357074e-8,
                        -0.00015291233449715152,
                        0.0003850213272946372,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0007078252310946886,
                        0.036083087467422136,
                        7.3805816516236255e-9,
                        0.000008200198279093717,
                        -0.000013083800608787956,
                        6.724495919185672e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.00013375778580732755,
                        -0.07793538606635894,
                        -6.108432674326698e-8,
                        0.00005138509204410751,
                        -0.00000531914655155948,
                        -7.309196677962944e-9,
                        3.1327048499041354e-8,
                        0,
                        0,
                        0,
                        -0.001416527656602127,
                        0.6377620847175711,
                        -1.1266070546652347e-7,
                        0.00025326483228198043,
                        0.000006804461675209747,
                        -2.838477464603999e-8,
                        1.1590824569947586e-7,
                        0.000488439488661966,
                        0,
                        0,
                        0.00009382872323226445,
                        0.09512930600999328,
                        -1.0361510894421252e-7,
                        0.00003725988134157431,
                        0.000009876962112648653,
                        -2.6905423381644794e-8,
                        1.3923987712471098e-8,
                        0.000014005646027515844,
                        9.743382014008623e-8,
                        0,
                        -0.00007981766176820683,
                        0.8417774135426779,
                        2.8497503375440063e-8,
                        -0.00008316123594478065,
                        -0.00026718421469335414,
                        -8.628291713603139e-9,
                        -3.2092032557512725e-9,
                        -0.000014590510474054096,
                        -1.3051480909691878e-8,
                        0.0005173214183496945
                    ],
                    "g": [
                        904.4046863977535,
                        -627.9254324544955,
                        -698.6736497555935,
                        -675.9711851928819,
                        297.33103956392057,
                        -713.1186727130214,
                        1145.915494702193,
                        149.5949136181818,
                        490.4947367846606,
                        188.3693580366534
                    ],
                    "mx": [
                        4211.469417926403,
                        -0.17244382572252887,
                        24088801.832662757,
                        -849.9601780021884,
                        2891.2510476190478,
                        18539444.5773636,
                        72301269.96721436,
                        1164.2384961562975,
                        22682299.96446335,
                        2420.780158655447
                    ],
                    "cases": [
                        {
                            "dayTime": "07:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -32
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -32
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -32
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 33,
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
                                    "value": -1073.9349595552703
                                }
                            ]
                        },
                        {
                            "importance": 20.60613144321697,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 1.2313735726360788
                                }
                            ]
                        },
                        {
                            "importance": 12.307686934028887,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.06820552428905088
                                }
                            ]
                        },
                        {
                            "importance": 13.2955374001187,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -33
                                },
                                {
                                    "type": "β",
                                    "value": -0.5837368042005877
                                }
                            ]
                        },
                        {
                            "importance": 16.315405725099215,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.000025287945271496342
                                }
                            ]
                        },
                        {
                            "importance": 15.90098011971638,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00025689482467869005
                                }
                            ]
                        },
                        {
                            "importance": 8.245507769678149,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -33
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005194938589708747
                                }
                            ]
                        },
                        {
                            "importance": 2.967018259002469,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.13694524677099307
                                }
                            ]
                        },
                        {
                            "importance": 2.149603968233343,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 10,
                                    "offset": -33
                                },
                                {
                                    "type": "β",
                                    "value": -0.00017352166667668466
                                }
                            ]
                        },
                        {
                            "importance": 4.799261738448846,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -33
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001794226694625909
                                }
                            ]
                        },
                        {
                            "importance": 3.4128666424570566,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 4,
                                    "offset": -33
                                },
                                {
                                    "type": "β",
                                    "value": 0.2845625890414538
                                }
                            ]
                        }
                    ],
                    "dayTime": "08:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -33
                        }
                    ],
                    "samplesAhead": [
                        33
                    ],
                    "predictionIntervals": [
                        -3998.414983326725,
                        2025.9947129099692
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007606097191486738,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00026035766522111844,
                        0.0003679835701028641,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0002825880918726651,
                        0.000037549980519350164,
                        0.0006799670150620065,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006393557396805377,
                        0.000027323605134886813,
                        0.0001623586450420668,
                        9.273019885771738e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0007218068132833359,
                        -0.000012180612447349141,
                        -0.000010244499640610778,
                        -6.680779656190053e-11,
                        6.977364590651967e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00007807725551809912,
                        -0.000010799351794122144,
                        0.000028828396226481945,
                        -7.750285644801788e-8,
                        -2.3784977210500676e-10,
                        2.9761453804426025e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.0000879158471763317,
                        -0.0002826290649646987,
                        0.00008750943633382178,
                        6.155551002378276e-9,
                        -1.6513368007567156e-8,
                        6.883647802712356e-9,
                        0.0004842817187300491,
                        0,
                        0,
                        0,
                        0.00017237344227372258,
                        0.000012843460810214284,
                        -0.00004059380976660502,
                        1.543347252609851e-8,
                        1.1231300768352688e-8,
                        -4.4667384954747694e-8,
                        -0.00001882016784468694,
                        7.587075595269324e-8,
                        0,
                        0,
                        -0.000024199868565538675,
                        -0.0000035321176550970884,
                        0.000003950477163834135,
                        3.187090338874052e-8,
                        -6.605357453773893e-8,
                        -2.2113197507459148e-9,
                        0.000004297120493682377,
                        -2.4747062615737756e-8,
                        6.700449281589208e-8,
                        0,
                        -0.000780302157245464,
                        -4.0150430822112234e-7,
                        -0.00034472985748746493,
                        1.1342014964336818e-7,
                        2.7266442321892173e-8,
                        8.491055734078972e-9,
                        -0.000003632547090019192,
                        -1.0680823386865006e-7,
                        -3.0259962877328234e-8,
                        0.0005767381320402174
                    ],
                    "g": [
                        978.7011488027764,
                        540.1015531311732,
                        -475.7099302982933,
                        -1116.8649742410676,
                        -966.174413659272,
                        795.6610794305863,
                        235.6239575843631,
                        -646.3790207415516,
                        2900.5955675514588,
                        493.39999079792165
                    ],
                    "mx": [
                        3984.9249916861945,
                        3038.1497142857143,
                        -1914.0742501738569,
                        24145193.544453885,
                        17592333.86333708,
                        76347073.3387727,
                        2570.2236120338516,
                        26342781.42602395,
                        18563008.54488578,
                        3520.054968689822
                    ],
                    "cases": [
                        {
                            "dayTime": "08:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -33
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -33
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -33
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 34,
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
                                    "value": -276.0870238091111
                                }
                            ]
                        },
                        {
                            "importance": 26.787149996072866,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -34
                                },
                                {
                                    "type": "β",
                                    "value": 1.362443722997455
                                }
                            ]
                        },
                        {
                            "importance": 14.804218987074002,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.03126057798986747
                                }
                            ]
                        },
                        {
                            "importance": 8.091395060920467,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.10709510285880286
                                }
                            ]
                        },
                        {
                            "importance": 10.950887112677647,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -34
                                },
                                {
                                    "type": "β",
                                    "value": -0.00009542011669530337
                                }
                            ]
                        },
                        {
                            "importance": 15.04160088328526,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -34
                                },
                                {
                                    "type": "β",
                                    "value": -0.00033181283865161345
                                }
                            ]
                        },
                        {
                            "importance": 10.514897091638915,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -34
                                },
                                {
                                    "type": "β",
                                    "value": 0.00010539070391657898
                                }
                            ]
                        },
                        {
                            "importance": 5.232101035025266,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 345.8544847361755
                                }
                            ]
                        },
                        {
                            "importance": 3.0298964293774855,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007389545618367032
                                }
                            ]
                        },
                        {
                            "importance": 3.450678060223638,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -34
                                },
                                {
                                    "type": "β",
                                    "value": 0.13069052708325768
                                }
                            ]
                        },
                        {
                            "importance": 2.0971753437044462,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.058208609460944985
                                }
                            ]
                        }
                    ],
                    "dayTime": "09:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -425,
                            "dataTo": -34
                        }
                    ],
                    "samplesAhead": [
                        34
                    ],
                    "predictionIntervals": [
                        -4075.444841326058,
                        2079.768975261249
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007012043548376694,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00026250362972349674,
                        0.0004566513096043118,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00018382558644579124,
                        0.0000825841752700072,
                        0.0002236609123957085,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006519301326800619,
                        -0.000027861594745024805,
                        0.000006702735186163365,
                        6.668622644276512e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0007783551477053205,
                        0.00003894510378205171,
                        0.000013510526009305357,
                        9.944168112938849e-9,
                        8.005591238400244e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00010605370802036293,
                        -0.00000407334177996351,
                        1.1781521193954056e-7,
                        -5.179063757434474e-9,
                        -6.267326093477805e-8,
                        2.8440282520750657e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.0002393494457999724,
                        -0.00011849739737428316,
                        -0.00016689923698288598,
                        -4.413360556366437e-9,
                        -4.389050701491599e-8,
                        3.429576538369592e-8,
                        1.8325269752732698,
                        0,
                        0,
                        0,
                        0.00010379406416086228,
                        -0.0000037110105825102075,
                        0.00000632507199663076,
                        -2.194854404091182e-8,
                        -9.530699066799417e-8,
                        1.0423421850709628e-8,
                        0.030033869986288524,
                        8.888775370244887e-8,
                        0,
                        0,
                        -0.00035669590259614493,
                        -0.00038716792248714294,
                        0.000006309263983980076,
                        5.6095653920920804e-9,
                        -7.101518769522669e-8,
                        2.084688539275979e-8,
                        -0.3695807977727494,
                        4.603155594980679e-8,
                        0.00042948220086458757,
                        0,
                        -0.0007808686395848146,
                        0.00014965363079603823,
                        0.00007736210179326573,
                        -3.7826941400761785e-9,
                        1.5766282063695707e-8,
                        2.4126561031368678e-8,
                        -0.14194925928595747,
                        5.778656261466527e-9,
                        -0.00023422077646677818,
                        0.0004506891184605359
                    ],
                    "g": [
                        1112.9679064320578,
                        504.3868546617938,
                        -282.60306166678794,
                        -899.9077635992337,
                        -773.7860530347023,
                        2772.5935747678986,
                        264.00399642368023,
                        628.8781229084535,
                        374.7331938275608,
                        129.15468130176734
                    ],
                    "mx": [
                        4211.469417926403,
                        2726.1989794511423,
                        12004.487548863603,
                        18626612.5091184,
                        26953223.165565155,
                        79649854.36852318,
                        0.24387239731236465,
                        25468140.69471891,
                        2987.3262725955115,
                        1186.4
                    ],
                    "cases": [
                        {
                            "dayTime": "09:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -34
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -34
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -34
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 35,
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
                                    "value": -1150.9370189564688
                                }
                            ]
                        },
                        {
                            "importance": 34.85011933466576,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 1.3669684101504092
                                }
                            ]
                        },
                        {
                            "importance": 18.341028694389106,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.12432181149281771
                                }
                            ]
                        },
                        {
                            "importance": 20.012360742539588,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008622925287349451
                                }
                            ]
                        },
                        {
                            "importance": 15.489300322370953,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -35
                                },
                                {
                                    "type": "β",
                                    "value": -0.3398164147813388
                                }
                            ]
                        },
                        {
                            "importance": 5.935779394622177,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00019753708801876365
                                }
                            ]
                        },
                        {
                            "importance": 5.371411511412431,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006950496876966036
                                }
                            ]
                        }
                    ],
                    "dayTime": "10:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -35
                        }
                    ],
                    "samplesAhead": [
                        35
                    ],
                    "predictionIntervals": [
                        -4353.139054481964,
                        2289.638329511301
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007571057635092079,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00023711797151076014,
                        0.0003501989631062471,
                        0,
                        0,
                        0,
                        0,
                        -0.0007229652466079316,
                        -8.161007012746418e-7,
                        6.91782689128702e-8,
                        0,
                        0,
                        0,
                        0.0006607112440223089,
                        0.00002818857861726217,
                        -1.1684606732036883e-8,
                        0.000751821313027142,
                        0,
                        0,
                        -0.0006960651778383277,
                        0.000016228963995256315,
                        5.3905579727505016e-9,
                        0.00009167550226759563,
                        8.599428352571693e-8,
                        0,
                        -0.00010017457072579988,
                        -0.0000029456415941332316,
                        -4.749212090713877e-9,
                        0.000013541091527885351,
                        -6.849604334387593e-8,
                        3.038624200151873e-8
                    ],
                    "g": [
                        1110.249408893043,
                        428.6736209236377,
                        -1125.9370135355116,
                        -435.2499856689898,
                        -475.1526687867131,
                        2287.3828480068855
                    ],
                    "mx": [
                        4012.332775524952,
                        3217.1946666666668,
                        17832633.841167707,
                        -3226.0543392181644,
                        26475345.970546473,
                        77789352.56206267
                    ],
                    "cases": [
                        {
                            "dayTime": "10:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -35
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -35
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -35
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 36,
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
                                    "value": -1100.2572257595984
                                }
                            ]
                        },
                        {
                            "importance": 44.53286523698001,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 1.4729542926101615
                                }
                            ]
                        },
                        {
                            "importance": 24.459137549169554,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.1292553360574123
                                }
                            ]
                        },
                        {
                            "importance": 23.454740439348402,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008568777635217898
                                }
                            ]
                        },
                        {
                            "importance": 7.553256774502036,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -36
                                },
                                {
                                    "type": "β",
                                    "value": -0.24147124016427374
                                }
                            ]
                        }
                    ],
                    "dayTime": "11:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -36
                        }
                    ],
                    "samplesAhead": [
                        36
                    ],
                    "predictionIntervals": [
                        -4457.185528116723,
                        2364.00797711948
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007547248905014544,
                        0,
                        0,
                        0,
                        -0.0002417613813985381,
                        0.00033836621787250643,
                        0,
                        0,
                        -0.0007211602541955233,
                        -0.0000015431654526958182,
                        6.911683547797359e-8,
                        0,
                        0.0006641097195815983,
                        0.000024807048236369344,
                        -8.738180145090042e-9,
                        0.0007063524685006879
                    ],
                    "g": [
                        1155.060755063453,
                        401.21011840301765,
                        -1282.9722329045767,
                        -341.8565814271499
                    ],
                    "mx": [
                        4031.140093057945,
                        3253.3756190476192,
                        17998065.186318055,
                        -3639.986489641962
                    ],
                    "cases": [
                        {
                            "dayTime": "11:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -36
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -36
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -36
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 37,
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
                                    "value": -1253.77181404572
                                }
                            ]
                        },
                        {
                            "importance": 29.286468189764598,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -37
                                },
                                {
                                    "type": "β",
                                    "value": 1.2331078441625967
                                }
                            ]
                        },
                        {
                            "importance": 13.078518777629064,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.17343369990527718
                                }
                            ]
                        },
                        {
                            "importance": 18.307474968354434,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -37
                                },
                                {
                                    "type": "β",
                                    "value": -0.00010891399425707173
                                }
                            ]
                        },
                        {
                            "importance": 13.813994722877561,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00009975320953847109
                                }
                            ]
                        },
                        {
                            "importance": 10.929655101865322,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00021174920414329575
                                }
                            ]
                        },
                        {
                            "importance": 5.173008609260528,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.025760668081592622
                                }
                            ]
                        },
                        {
                            "importance": 3.1535616548244874,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -45
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -44
                                },
                                {
                                    "type": "β",
                                    "value": -0.000004674802922955284
                                }
                            ]
                        },
                        {
                            "importance": 6.257317975423991,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -45
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -37
                                },
                                {
                                    "type": "β",
                                    "value": 0.000010253826446737041
                                }
                            ]
                        }
                    ],
                    "dayTime": "12:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -37
                        }
                    ],
                    "samplesAhead": [
                        37
                    ],
                    "predictionIntervals": [
                        -4488.61700786328,
                        2527.1484334718953
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0007012043548376694,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0002656274273374685,
                        0.00041079473835029434,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006596766572713199,
                        -0.00001292881215086117,
                        6.594789982179859e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0006184488440849847,
                        0.000007446718882421923,
                        -4.48148845989601e-9,
                        2.856234426895401e-8,
                        0,
                        0,
                        0,
                        0,
                        0.000015921685773200022,
                        0.000008662857845234451,
                        4.911550624686923e-9,
                        -3.1173424030469846e-8,
                        8.141568946841164e-8,
                        0,
                        0,
                        0,
                        -0.000585250975696418,
                        0.00003530694596975396,
                        1.4689669046264508e-8,
                        9.470857165604814e-9,
                        2.2506482285373964e-8,
                        0.0001429221543100268,
                        0,
                        0,
                        -0.0007877606641643778,
                        0.000027370853557694164,
                        9.71836172744443e-9,
                        6.172837357573695e-8,
                        -1.446560854647677e-7,
                        0.000009385058638660114,
                        1.644731878843265e-8,
                        0,
                        -0.0003540449708989186,
                        0.000001856638920617318,
                        8.979930902789842e-11,
                        1.4231019444362525e-9,
                        7.376479709612375e-9,
                        -0.000004838951529647409,
                        -8.031194401023418e-9,
                        3.825638472566153e-8
                    ],
                    "g": [
                        1232.6826635325226,
                        449.7543725038292,
                        -1329.941638067039,
                        750.079153238839,
                        -2853.058002000666,
                        -161.09806293489837,
                        -153.3507504550929,
                        268.0291543560049
                    ],
                    "mx": [
                        4211.469417926403,
                        3069.7014401195643,
                        18905273.235747073,
                        80788141.24086183,
                        27703953.904454917,
                        -43.5149896280703,
                        31443637.76495238,
                        19820545.645714287
                    ],
                    "cases": [
                        {
                            "dayTime": "12:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -37
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -37
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -37
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 38,
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
                                    "value": -874.614654355456
                                }
                            ]
                        },
                        {
                            "importance": 44.41321523116587,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004170936268848012
                                }
                            ]
                        },
                        {
                            "importance": 27.742192928752885,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.18637904268222172
                                }
                            ]
                        },
                        {
                            "importance": 11.269243635416382,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00010233990251557699
                                }
                            ]
                        },
                        {
                            "importance": 10.344313493307904,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.8281973928232529
                                }
                            ]
                        },
                        {
                            "importance": 6.231034711356955,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 6,
                                    "offset": -38
                                },
                                {
                                    "type": "β",
                                    "value": 0.1284064587015164
                                }
                            ]
                        }
                    ],
                    "dayTime": "13:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -38
                        }
                    ],
                    "samplesAhead": [
                        38
                    ],
                    "predictionIntervals": [
                        -4446.950944449182,
                        2572.4565919426213
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.769058823751234e-8,
                        0,
                        0,
                        0,
                        0,
                        -9.910694018736248e-9,
                        0.0003966502523091794,
                        0,
                        0,
                        0,
                        -2.380395792027109e-8,
                        -0.00003014966705061236,
                        6.819874995104472e-8,
                        0,
                        0,
                        -1.0383562445189352e-8,
                        -0.000006605011848980208,
                        -4.2308711887876686e-8,
                        0.0007441418608449007,
                        0,
                        2.4096169059228386e-8,
                        -0.00012864788663444093,
                        5.547386446381431e-9,
                        -0.0006729374170310487,
                        0.0004905236580693416
                    ],
                    "g": [
                        1384.054971434653,
                        525.2234217084917,
                        -684.5982834541392,
                        1349.6822687007227,
                        261.7742418518875
                    ],
                    "mx": [
                        81659180.41201565,
                        3148.7152457939924,
                        18404105.91327469,
                        4074.1274461520816,
                        1164.530102703728
                    ],
                    "cases": [
                        {
                            "dayTime": "13:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -38
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -38
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -38
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 39,
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
                                    "value": -938.0873835243783
                                }
                            ]
                        },
                        {
                            "importance": 34.74344528795827,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004934858048988581
                                }
                            ]
                        },
                        {
                            "importance": 18.96944866937892,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.21136246991090757
                                }
                            ]
                        },
                        {
                            "importance": 13.988400650148208,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00010688270237427546
                                }
                            ]
                        },
                        {
                            "importance": 13.43835344039809,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -39
                                },
                                {
                                    "type": "β",
                                    "value": 0.5589529876267909
                                }
                            ]
                        },
                        {
                            "importance": 7.474386456514004,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -39
                                },
                                {
                                    "type": "β",
                                    "value": -0.21093366225012483
                                }
                            ]
                        },
                        {
                            "importance": 7.914819356063495,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": -0.4052491635985042
                                }
                            ]
                        },
                        {
                            "importance": 3.471146139539015,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.6088571260318232
                                }
                            ]
                        }
                    ],
                    "dayTime": "14:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -39
                        }
                    ],
                    "samplesAhead": [
                        39
                    ],
                    "predictionIntervals": [
                        -4700.217283074794,
                        2843.0622767985806
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.6816709117052506e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -9.932121384542742e-9,
                        0.000383319712753744,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.3153344616899677e-8,
                        -0.00002366006443537244,
                        6.714686912179001e-8,
                        0,
                        0,
                        0,
                        0,
                        1.5231261444849415e-8,
                        -0.00012744001055462408,
                        -3.38939751485321e-8,
                        0.0004968326371336627,
                        0,
                        0,
                        0,
                        6.246662340840351e-9,
                        0.00001657647883926162,
                        1.2322970377081604e-8,
                        0.000020634609432897545,
                        0.0007392303335036885,
                        0,
                        0,
                        -1.8713832267269596e-9,
                        -0.000023171721405751294,
                        4.150124653521116e-9,
                        -0.0004643741977022048,
                        0.000008335659679967779,
                        0.00047968762652081083,
                        0,
                        -1.032354378767643e-8,
                        0.0000010059415050766263,
                        -4.0692094241632e-8,
                        -0.00003752728667864172,
                        0.0000151891543289673,
                        0.000013389332749748482,
                        0.0007354142709016655
                    ],
                    "g": [
                        1485.235935709272,
                        590.0198383769686,
                        -786.6105111277707,
                        388.492675437069,
                        -292.5666855766856,
                        -867.9280191205788,
                        827.9104038670952
                    ],
                    "mx": [
                        82525998.2451035,
                        3214.254705337708,
                        18659931.347795334,
                        1134.4665002007844,
                        -1781.633528579418,
                        1169.5060625313777,
                        4099.611806337251
                    ],
                    "cases": [
                        {
                            "dayTime": "14:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -39
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -39
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -39
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 40,
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
                                    "value": -1069.7139533025838
                                }
                            ]
                        },
                        {
                            "importance": 35.339812118957525,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00010367039455865763
                                }
                            ]
                        },
                        {
                            "importance": 19.050516598446123,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.17326812005971148
                                }
                            ]
                        },
                        {
                            "importance": 14.88334571239929,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00011604977390129323
                                }
                            ]
                        },
                        {
                            "importance": 15.610510463185138,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -44
                                },
                                {
                                    "type": "β",
                                    "value": 0.1093990372100029
                                }
                            ]
                        },
                        {
                            "importance": 8.359721738401293,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -40
                                },
                                {
                                    "type": "β",
                                    "value": -0.22892058572780385
                                }
                            ]
                        },
                        {
                            "importance": 4.044341929896427,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.6800759890337241
                                }
                            ]
                        },
                        {
                            "importance": 2.711751438714214,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00015653841704960336
                                }
                            ]
                        }
                    ],
                    "dayTime": "15:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -40
                        }
                    ],
                    "samplesAhead": [
                        40
                    ],
                    "predictionIntervals": [
                        -4842.51627300239,
                        3077.5041809275817
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.5946210404359576e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -9.984776452857766e-9,
                        0.00036862370849602405,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.263651610252649e-8,
                        -0.000018246408589474735,
                        6.573440615259583e-8,
                        0,
                        0,
                        0,
                        0,
                        1.4371202538886297e-8,
                        -0.00011514650847529431,
                        -3.2651072031845145e-8,
                        0.000397136298033643,
                        0,
                        0,
                        0,
                        8.419893290154077e-9,
                        0.000015401995241996966,
                        1.9882896517728623e-8,
                        0.00002727325620018334,
                        0.0007655157488881337,
                        0,
                        0,
                        -9.537833486912829e-9,
                        9.316449228588317e-7,
                        -3.977040549888652e-8,
                        -0.00001553723766741354,
                        0.00003021885848496982,
                        0.0007247583721339585,
                        0,
                        -2.660559471386611e-8,
                        0.000004286376575240716,
                        3.0026019698604073e-9,
                        0.000014370394805344765,
                        -0.000009497059852477023,
                        -0.00001843740205733002,
                        7.47694311307707e-8
                    ],
                    "g": [
                        1575.704554483135,
                        594.7757233413384,
                        -821.4958451345389,
                        410.5745270226758,
                        -359.95357818384167,
                        885.0883116575191,
                        -2093.6151938326216
                    ],
                    "mx": [
                        83756931.08234528,
                        3302.103150795818,
                        18970339.65249198,
                        1306.0057186427755,
                        -2592.3419433545446,
                        4130.0372853675335,
                        28757275.97086398
                    ],
                    "cases": [
                        {
                            "dayTime": "15:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -40
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -40
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -40
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 41,
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
                                    "value": -630.4360176853779
                                }
                            ]
                        },
                        {
                            "importance": 31.57612043017366,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013589462346661333
                                }
                            ]
                        },
                        {
                            "importance": 14.711646849027515,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.16298977936315379
                                }
                            ]
                        },
                        {
                            "importance": 10.479683595563506,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -44
                                },
                                {
                                    "type": "β",
                                    "value": 0.26388984658125964
                                }
                            ]
                        },
                        {
                            "importance": 17.12317004929703,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006902025686724839
                                }
                            ]
                        },
                        {
                            "importance": 7.946034394812114,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -41
                                },
                                {
                                    "type": "β",
                                    "value": -0.5194314736874068
                                }
                            ]
                        },
                        {
                            "importance": 6.2127217560621135,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 11,
                                    "offset": -41
                                },
                                {
                                    "type": "β",
                                    "value": -0.000023573947344309776
                                }
                            ]
                        },
                        {
                            "importance": 4.441552556967965,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.18793841179251447
                                }
                            ]
                        },
                        {
                            "importance": 4.71952113064612,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00023126023106845046
                                }
                            ]
                        },
                        {
                            "importance": 2.78954923744998,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": -0.16118713813912966
                                }
                            ]
                        }
                    ],
                    "dayTime": "16:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -41
                        }
                    ],
                    "samplesAhead": [
                        41
                    ],
                    "predictionIntervals": [
                        -4955.527618209028,
                        3206.242613098816
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.5297367386657957e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -9.962571543404693e-9,
                        0.00035875621464783917,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        3.4987106817259665e-9,
                        -0.00011891778987667828,
                        0.000422890709305526,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.2689276437327525e-8,
                        -0.000003296296064607834,
                        -0.00004611633675515185,
                        6.398280306359515e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        9.848447317351885e-9,
                        0.000009407847307102378,
                        0.000048818185550259184,
                        2.405408707607644e-8,
                        0.0007514790134537996,
                        0,
                        0,
                        0,
                        0,
                        -7.520823760228188e-9,
                        3.3771573923352494e-8,
                        0.0000015104471053960532,
                        -2.4780721517596813e-8,
                        0.0001732587972542614,
                        3.656671625263719e-8,
                        0,
                        0,
                        0,
                        9.372651509328854e-9,
                        0.000012867899340211362,
                        0.00002952098993747219,
                        -3.92712357749015e-9,
                        0.0004503558968896751,
                        2.4500850595539962e-8,
                        0.0005286925188906782,
                        0,
                        0,
                        -2.5805879209903404e-8,
                        0.000005532707198557287,
                        0.000014133356111479113,
                        2.271447761974662e-9,
                        -0.00000383612834729881,
                        -1.066635530538902e-10,
                        0.000017347715134766856,
                        7.338886340360751e-8,
                        0,
                        -3.101158021226587e-8,
                        -0.00004060723767844388,
                        -0.00033666643206821514,
                        3.699475795305325e-9,
                        -0.00005065793087073689,
                        -2.275997821932735e-9,
                        -0.00001337541369406624,
                        8.469062725213011e-8,
                        0.0004544496925114228
                    ],
                    "g": [
                        1558.047854638054,
                        600.7654355883973,
                        397.4659299231326,
                        -998.115281270853,
                        -451.45460303442457,
                        -490.84474285872216,
                        -274.4838757921602,
                        -2741.854903751838,
                        -354.6864279924188
                    ],
                    "mx": [
                        84978666.3448135,
                        3371.8800062388573,
                        1236.285659801678,
                        19294911.82708365,
                        -3226.734746486238,
                        24266882.55439587,
                        -2217.4911026070276,
                        29007201.15958128,
                        1222.4178588155507
                    ],
                    "cases": [
                        {
                            "dayTime": "16:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -41
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -41
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -41
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 42,
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
                                    "value": -1282.4703095949571
                                }
                            ]
                        },
                        {
                            "importance": 30.199641020985002,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00015037009981770923
                                }
                            ]
                        },
                        {
                            "importance": 15.346015537412292,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -42
                                },
                                {
                                    "type": "β",
                                    "value": 0.505670089053187
                                }
                            ]
                        },
                        {
                            "importance": 11.478286277529243,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.12128345968571731
                                }
                            ]
                        },
                        {
                            "importance": 14.501336333462255,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00012255156461330572
                                }
                            ]
                        },
                        {
                            "importance": 9.371251715605759,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.9801450548024586
                                }
                            ]
                        },
                        {
                            "importance": 7.8826697235016825,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00030764707212952076
                                }
                            ]
                        },
                        {
                            "importance": 7.014687158020987,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": -0.32747192657250873
                                }
                            ]
                        },
                        {
                            "importance": 4.206112233482781,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 8,
                                    "offset": -42
                                },
                                {
                                    "type": "β",
                                    "value": 0.07741416014536118
                                }
                            ]
                        }
                    ],
                    "dayTime": "17:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -42
                        }
                    ],
                    "samplesAhead": [
                        42
                    ],
                    "predictionIntervals": [
                        -4997.455265864202,
                        2987.3304338135094
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.501217919397899e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.0650639271668927e-10,
                        0.000496638773638343,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -7.083838930710825e-9,
                        -0.00015313302169992212,
                        0.00029997624640688586,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -2.2440106421530802e-8,
                        -0.00004849616628309705,
                        -0.000011155807189296734,
                        6.227179767738983e-8,
                        0,
                        0,
                        0,
                        0,
                        -1.0748416355789977e-8,
                        -0.00002250376815295828,
                        0.0000017930734439230073,
                        -3.5284507661297e-8,
                        0.0007035530670324229,
                        0,
                        0,
                        0,
                        -2.567643070363749e-8,
                        0.00001665619249516855,
                        0.000004468360174714951,
                        3.2237440979717762e-9,
                        -0.00001461489698581215,
                        7.291958426965919e-8,
                        0,
                        0,
                        -1.4188927052141497e-8,
                        -0.0004686747353022249,
                        6.184557912174821e-7,
                        2.8176313949815014e-9,
                        0.00006281286043239244,
                        2.9024442546317968e-8,
                        0.0004453267379313965,
                        0,
                        9.597350855253057e-8,
                        -0.0002774089198154462,
                        -0.00003506312432536279,
                        -1.023975423510331e-8,
                        0.00000980645741339807,
                        -2.8132443075342655e-7,
                        0.0001859814823626509,
                        0.0003422340188789585
                    ],
                    "g": [
                        1460.810414820555,
                        567.8018791734096,
                        433.9383023736521,
                        -943.0597350323159,
                        1401.4175955317507,
                        -3016.003505381295,
                        -829.8207917471965,
                        226.20241085016465
                    ],
                    "mx": [
                        85994749.04016945,
                        1135.765012028561,
                        3559.3895459748187,
                        19618405.994476974,
                        4192.6358922711615,
                        29127989.17686189,
                        1247.6093414255051,
                        1573.9556122259737
                    ],
                    "cases": [
                        {
                            "dayTime": "17:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -42
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -42
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -42
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 43,
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
                                    "value": -628.7721398251924
                                }
                            ]
                        },
                        {
                            "importance": 25.72280756632602,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": 0.2397136873212661
                                }
                            ]
                        },
                        {
                            "importance": 8.52359139406566,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": 0.13660053879072617
                                }
                            ]
                        },
                        {
                            "importance": 6.145209607990679,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -43
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": -0.000050794188955521994
                                }
                            ]
                        },
                        {
                            "importance": 5.819722786240235,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": 0.4756080169942852
                                }
                            ]
                        },
                        {
                            "importance": 8.696228888229857,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.020950455895049857
                                }
                            ]
                        },
                        {
                            "importance": 6.6788429209525155,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -43
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004768001908437546
                                }
                            ]
                        },
                        {
                            "importance": 4.460075709126745,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00012937399912183822
                                }
                            ]
                        },
                        {
                            "importance": 7.270308992749869,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002766699948429561
                                }
                            ]
                        },
                        {
                            "importance": 4.679777162527146,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.041966794796866526
                                }
                            ]
                        },
                        {
                            "importance": 5.873287249191356,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": 1.7563724596349202
                                }
                            ]
                        },
                        {
                            "importance": 4.039130296849613,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": -0.33269584448634093
                                }
                            ]
                        },
                        {
                            "importance": 4.185957024490365,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00009515819378065367
                                }
                            ]
                        },
                        {
                            "importance": 5.184130546367226,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 7,
                                    "offset": -43
                                },
                                {
                                    "type": "β",
                                    "value": -1.8249919766733633
                                }
                            ]
                        },
                        {
                            "importance": 2.720929854892726,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.8244848674045645
                                }
                            ]
                        }
                    ],
                    "dayTime": "18:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -43
                        }
                    ],
                    "samplesAhead": [
                        43
                    ],
                    "predictionIntervals": [
                        -5035.475894399826,
                        2963.4083146834478
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006059721111277592,
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
                        -0.00025195301270031646,
                        0.0004297486157151604,
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
                        -0.0005538534361731735,
                        -0.000006170856460175874,
                        4.4038675105020916e-8,
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
                        0.00025148340772808935,
                        -0.00019281130483171153,
                        -1.7270535139957193e-8,
                        0.000496574150272267,
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
                        0.0005596769644081179,
                        0.0000177619304271219,
                        -1.9122229389235943e-8,
                        -0.0001266826160274772,
                        0.00034612225138537717,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00009577109423898104,
                        -0.000013268616690296836,
                        -4.9528380901671854e-8,
                        -0.000007419724261289479,
                        -0.000007261516017557568,
                        4.4261664908552303e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000518089147178232,
                        0.000005303697993520084,
                        -3.5159332864789535e-8,
                        -0.000014091297321400838,
                        0.00009874364664098032,
                        4.222447710431343e-8,
                        2.5069573316506177e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000015411533781332823,
                        0.000007331805128890193,
                        3.883070556212837e-9,
                        0.00001541969843770428,
                        0.0000023308344487140448,
                        -3.2066898028611302e-9,
                        -2.4817355115371228e-8,
                        7.332358243647699e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0002571238254387767,
                        0.00001188629470590981,
                        -8.289332285734683e-8,
                        0.000023496531728385962,
                        -0.0000564892599979603,
                        8.622040481226665e-8,
                        -9.64566912755567e-8,
                        2.546683104215996e-7,
                        0.0005154263683599555,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00006303160801074588,
                        0.000013921238605686554,
                        -1.3936217776455657e-8,
                        -0.000019359442019906048,
                        0.000040178447294332995,
                        1.2849102311390531e-8,
                        -9.300720841725871e-10,
                        4.4969263543453e-9,
                        -0.0004821713430500511,
                        0.000636240880663779,
                        0,
                        0,
                        0,
                        0,
                        0.00009224869307206986,
                        -0.000004712092508368363,
                        -2.0708020528314377e-8,
                        -0.00048251520926119337,
                        -0.000002437241823952858,
                        1.8865695725059833e-8,
                        -4.738433913081559e-9,
                        5.713726886771456e-9,
                        0.000056422421549303354,
                        -0.00007842114643341466,
                        0.000437307464529574,
                        0,
                        0,
                        0,
                        0.00013064625879759712,
                        -0.00001313820885661959,
                        -4.188389133395299e-8,
                        -0.000026390282050570704,
                        -0.00010862588855410895,
                        2.6894277267139975e-8,
                        -4.3323161718986744e-8,
                        5.2239140416512696e-8,
                        -0.00002954555520356728,
                        0.000036394836303106645,
                        0.00003231188176767213,
                        6.082220478069739e-8,
                        0,
                        0,
                        0.000024663243699233967,
                        5.594013063743663e-7,
                        -2.1431955378084623e-10,
                        6.475740110388822e-7,
                        -0.000010875817567541265,
                        -1.7918081378187146e-9,
                        -1.920187527569808e-9,
                        -1.6600876882675451e-9,
                        -0.00018140570617441535,
                        -0.0004214905301079751,
                        0.0000018436093640937842,
                        3.725134830312082e-9,
                        0.0006050794719225369,
                        0,
                        -0.00033540873542345974,
                        0.000009997370568314221,
                        4.213948381853076e-8,
                        0.000008218209776496772,
                        -0.00003997232123636911,
                        -2.4455152503710544e-8,
                        -1.0486434069823961e-8,
                        -6.211943301079492e-10,
                        0.0000041237107909441414,
                        -0.00013950592654078924,
                        -0.00001601160621734197,
                        -3.082851942875001e-8,
                        0.00010304798678103868,
                        0.0006962300288394541
                    ],
                    "g": [
                        1335.7745851646835,
                        485.96135049914005,
                        -844.911550804729,
                        332.56793075876845,
                        -414.966311348019,
                        1767.8843601256694,
                        638.0816365136501,
                        -2471.389534139973,
                        -236.0823018623201,
                        852.6289364066483,
                        -647.169497037431,
                        -767.2185519392507,
                        -3217.796776455928,
                        1184.2133106193342
                    ],
                    "mx": [
                        4347.804720781289,
                        2993.0272769325256,
                        21030006.939447604,
                        1136.198510124755,
                        -18679.853094347247,
                        19923511.311131187,
                        86733618.9431763,
                        29110628.710186783,
                        2.6554495800096634,
                        -139.93405032723317,
                        1274.0745760499358,
                        19907341.995378397,
                        -65.10934722068062,
                        4221.370568819295
                    ],
                    "cases": [
                        {
                            "dayTime": "18:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -43
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -43
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -43
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 44,
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
                                    "value": -1045.8326316976136
                                }
                            ]
                        },
                        {
                            "importance": 30.613671477413025,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -44
                                },
                                {
                                    "type": "β",
                                    "value": 0.14773393364113835
                                }
                            ]
                        },
                        {
                            "importance": 8.461766038960713,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 5,
                                    "offset": -44
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 3,
                                    "offset": -44
                                },
                                {
                                    "type": "β",
                                    "value": 6.135224986944961e-7
                                }
                            ]
                        },
                        {
                            "importance": 8.52247236074453,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -44
                                },
                                {
                                    "type": "β",
                                    "value": 0.5825450703806506
                                }
                            ]
                        },
                        {
                            "importance": 8.073373640562965,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001303703889853686
                                }
                            ]
                        },
                        {
                            "importance": 9.935079167049231,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00031994545956347736
                                }
                            ]
                        },
                        {
                            "importance": 14.947759782257302,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.2243353610154948
                                }
                            ]
                        },
                        {
                            "importance": 4.184707785812773,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00010022316495907451
                                }
                            ]
                        },
                        {
                            "importance": 7.796860970377198,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 1.2079303147215883
                                }
                            ]
                        },
                        {
                            "importance": 5.263158418497809,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": -0.4086375686060834
                                }
                            ]
                        },
                        {
                            "importance": 2.20115035832446,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "β",
                                    "value": 0.05872841484569001
                                }
                            ]
                        }
                    ],
                    "dayTime": "19:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -44
                        }
                    ],
                    "samplesAhead": [
                        44
                    ],
                    "predictionIntervals": [
                        -4822.187921665063,
                        2659.2954757858793
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006030254617792849,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0005566725631133973,
                        4.308692751912859e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000030909857461324774,
                        -6.301442935909631e-9,
                        0.000496574150272267,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0005666100520334306,
                        3.633733318098393e-9,
                        0.00006297961162329015,
                        2.5391430506246913e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0000023045984945284488,
                        6.136731723921724e-10,
                        0.00001416623316435693,
                        -2.5471106745057212e-8,
                        7.442644740111703e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00048457045960390493,
                        -9.391272854733893e-9,
                        0.0000013295602577289115,
                        -8.084537579482834e-8,
                        1.8670569935705718e-7,
                        0.0005366767391462328,
                        0,
                        0,
                        0,
                        0,
                        0.00009924750075862584,
                        -1.6100195097578872e-8,
                        -0.000015113268467077705,
                        -4.0598340940177984e-8,
                        6.267933361280971e-8,
                        -0.000040406428199583144,
                        5.989957803494956e-8,
                        0,
                        0,
                        0,
                        -0.00024979588070251274,
                        1.4970904471919997e-8,
                        -0.000011886700515163537,
                        -7.007327786104264e-9,
                        -2.632309312144784e-9,
                        -0.000026848180034614063,
                        -3.5789114072447086e-8,
                        0.0006922035491422277,
                        0,
                        0,
                        0.00014712431435583398,
                        -4.974196378990149e-9,
                        -0.00048682553943782354,
                        -4.124121191998649e-9,
                        3.1305907533638084e-9,
                        -0.000008672259903944127,
                        6.038727996266517e-9,
                        -0.00008290644928511388,
                        0.00043483322779855446,
                        0,
                        -0.0003441469168657035,
                        1.5158104456191735e-8,
                        0.00017317768049333513,
                        -3.9658311839035586e-8,
                        9.297867470281846e-8,
                        -0.000017479303982642612,
                        -2.1010698107865674e-8,
                        0.0003675045025053889,
                        -0.00028563300195839664,
                        0.00035789314131406936
                    ],
                    "g": [
                        1244.2310872223225,
                        -946.3561917282791,
                        334.8628421371821,
                        542.5155458055103,
                        -2920.98656331986,
                        -393.3788654225179,
                        -600.7023012871736,
                        1558.2834556023224,
                        -831.9664782961728,
                        164.0948318541619
                    ],
                    "mx": [
                        4221.7056479180965,
                        21028794.015024338,
                        1136.198510124755,
                        86631812.68514451,
                        28851609.90295383,
                        1147.9720855204703,
                        20107251.401635986,
                        4241.815817645865,
                        1285.2167657126793,
                        3469.9940487823883
                    ],
                    "cases": [
                        {
                            "dayTime": "19:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -44
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -44
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -44
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 45,
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
                                    "value": -950.8848992476069
                                }
                            ]
                        },
                        {
                            "importance": 37.77573901408506,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -45
                                },
                                {
                                    "type": "β",
                                    "value": -0.41233094464561626
                                }
                            ]
                        },
                        {
                            "importance": 13.412191228813242,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.11469886819040769
                                }
                            ]
                        },
                        {
                            "importance": 8.801478205136544,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -45
                                },
                                {
                                    "type": "β",
                                    "value": 1.0905066308211606
                                }
                            ]
                        },
                        {
                            "importance": 20.81750385012524,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00008413572896471519
                                }
                            ]
                        },
                        {
                            "importance": 3.1633694134665,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "Price",
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.03879063291007494
                                }
                            ]
                        },
                        {
                            "importance": 1.7484126891374172,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -45
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002676253107844881
                                }
                            ]
                        },
                        {
                            "importance": 14.28130559923601,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -45
                                },
                                {
                                    "type": "β",
                                    "value": 0.00009979668724481846
                                }
                            ]
                        }
                    ],
                    "dayTime": "20:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -45
                        }
                    ],
                    "samplesAhead": [
                        45
                    ],
                    "predictionIntervals": [
                        -4597.60650853332,
                        2148.458788843779
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006970003703124495,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00009068037189779224,
                        0.0004741900600764959,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0005717000776378019,
                        -0.000007753690733719112,
                        0.0007012600825025111,
                        0,
                        0,
                        0,
                        0,
                        -0.000036318930713772124,
                        0.000002994997508456452,
                        -0.0007006366633140818,
                        5.9330207327319675e-8,
                        0,
                        0,
                        0,
                        0.00015876444802106563,
                        -0.0001413386498650812,
                        -0.00010023948392372535,
                        2.6187645035981306e-9,
                        0.0003641857883562477,
                        0,
                        0,
                        0.00011083357053264812,
                        0.00004015952329873732,
                        -0.0005664370814662992,
                        -1.2326953037069922e-9,
                        0.000007763023977955972,
                        7.755691635157048e-8,
                        0,
                        0.000030699433215305384,
                        -9.046837275082657e-7,
                        -0.00005607845518055262,
                        -3.4822422659122014e-9,
                        -0.0000041212829886073094,
                        -6.418438721895542e-8,
                        2.6438853384672617e-8
                    ],
                    "g": [
                        -1181.4535834135581,
                        337.6103391415068,
                        406.03093879939496,
                        -1210.2366663683274,
                        156.19682963960327,
                        -326.90169501523746,
                        3774.622363263058
                    ],
                    "mx": [
                        -3411.525390485752,
                        1105.8022900763358,
                        4214.299277065274,
                        20193706.114221506,
                        3012.754961832061,
                        27963636.74623165,
                        84206560.40992068
                    ],
                    "cases": [
                        {
                            "dayTime": "20:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -45
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -45
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -45
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 46,
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
                                    "value": -814.7682876628705
                                }
                            ]
                        },
                        {
                            "importance": 27.914877149643996,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.1884975058118675
                                }
                            ]
                        },
                        {
                            "importance": 17.075485132358956,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 1.8054121879199123
                                }
                            ]
                        },
                        {
                            "importance": 17.222627316698148,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007273568970043961
                                }
                            ]
                        },
                        {
                            "importance": 19.11033031314222,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -48
                                },
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "β",
                                    "value": 0.09646801527651262
                                }
                            ]
                        },
                        {
                            "importance": 3.824900006372925,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": -0.4786714219653813
                                }
                            ]
                        },
                        {
                            "importance": 2.8621568335736427,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 5,
                                    "offset": -6
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -246.75417750042163
                                }
                            ]
                        },
                        {
                            "importance": 2.6600447012369695,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": -0.00017625994904099795
                                }
                            ]
                        },
                        {
                            "importance": 9.329578546973138,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -46
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006539287142538929
                                }
                            ]
                        }
                    ],
                    "dayTime": "21:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -46
                        }
                    ],
                    "samplesAhead": [
                        46
                    ],
                    "predictionIntervals": [
                        -4176.357052877014,
                        1926.6236534688412
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        0.0006689334564244367,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0004382592319719967,
                        0.0007012600825025111,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000015301819530383756,
                        -0.0006808755194110221,
                        5.9371526490593646e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0000230419103272176,
                        -0.00002090200510033615,
                        -5.1620335894174575e-9,
                        0.0004554797402888062,
                        0,
                        0,
                        0,
                        0,
                        -0.0006591087342174354,
                        -0.000877229735512838,
                        -1.0699803897950738e-9,
                        -4.731996458350814e-7,
                        0.0006893700810459047,
                        0,
                        0,
                        0,
                        -0.0013199974680458597,
                        -0.0013627807021748498,
                        -9.772527025433022e-10,
                        0.00005289111095260102,
                        0.0007247620113194314,
                        1.8311293466809766,
                        0,
                        0,
                        0.00014011636991625117,
                        -0.0005423890799107055,
                        -5.717828621614429e-10,
                        0.00003174221891272837,
                        -0.00002918930804983694,
                        -0.009365024903598295,
                        7.986792179691204e-8,
                        0,
                        0.00007336471992879549,
                        -0.000028361526234604905,
                        -3.555843766404534e-9,
                        2.2018026565178586e-7,
                        -0.000027848166889289994,
                        0.007915045956546954,
                        -6.433602111893792e-8,
                        2.7402673066542636e-8
                    ],
                    "g": [
                        -1058.8942506373314,
                        560.3085783449991,
                        -1074.0641275067178,
                        247.01561567183364,
                        -455.9617918047269,
                        -146.525798543039,
                        -284.60118452957835,
                        2386.3683395628614
                    ],
                    "mx": [
                        -2789.6110300348405,
                        4214.299277065274,
                        20169548.570363175,
                        1239.3095294600878,
                        2770.151830047636,
                        -0.24433780265074703,
                        27032925.110264663,
                        81128823.79244775
                    ],
                    "cases": [
                        {
                            "dayTime": "21:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -46
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -46
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -46
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 47,
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
                                    "value": -791.2445545425398
                                }
                            ]
                        },
                        {
                            "importance": 31.646612066602597,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.00003324890965942139
                                }
                            ]
                        },
                        {
                            "importance": 11.153385397882424,
                            "parts": [
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": -0.0073954273444204015
                                }
                            ]
                        },
                        {
                            "importance": 13.957164067972316,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 15.59651904524133
                                }
                            ]
                        },
                        {
                            "importance": 24.03891716882612,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -47
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007156724285741232
                                }
                            ]
                        },
                        {
                            "importance": 6.614503469235239,
                            "parts": [
                                {
                                    "type": "RestOfWeek",
                                    "day": 2,
                                    "offset": 0
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": 0.07736349408507845
                                }
                            ]
                        },
                        {
                            "importance": 4.47571864443172,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": -0.4706159898344128
                                }
                            ]
                        },
                        {
                            "importance": 2.339069733315496,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -47
                                },
                                {
                                    "type": "β",
                                    "value": -0.0022771181146041966
                                }
                            ]
                        },
                        {
                            "importance": 1.3815063182133365,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.002171291070099362
                                }
                            ]
                        },
                        {
                            "importance": 4.393123133520774,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -13.75994791280215
                                }
                            ]
                        }
                    ],
                    "dayTime": "22:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -47
                        }
                    ],
                    "samplesAhead": [
                        47
                    ],
                    "predictionIntervals": [
                        -3860.8895894064403,
                        1798.86431949073
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.8486976015353823e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.7488431201084857e-8,
                        0.0006462754351690608,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -3.007540165708446e-8,
                        -0.00012147521596240798,
                        0.0007013935241557944,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.318529830591199e-9,
                        -0.0000055711252310820526,
                        -0.0006440567918033943,
                        6.078266187402356e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1.636465130005729e-8,
                        0.00011016184207066215,
                        -0.00032583068653796845,
                        -8.720433171520508e-9,
                        0.0004983113450619952,
                        0,
                        0,
                        0,
                        0,
                        -2.1677076906626398e-10,
                        -0.0004038276358366545,
                        -0.0007630337821307792,
                        5.375842701006879e-13,
                        5.962656513036566e-7,
                        0.0007170466195758136,
                        0,
                        0,
                        0,
                        -3.382856408340433e-8,
                        -0.000039048337133524185,
                        0.00008218867326346514,
                        4.791478719719887e-9,
                        -3.2770469102050055e-7,
                        -0.000027812858302975433,
                        8.220618834797673e-8,
                        0,
                        0,
                        2.2504807207980438e-10,
                        -0.000001886249986467079,
                        0.000007286621403813457,
                        -3.2374623681088926e-10,
                        0.0000019141300498961885,
                        -0.000005175348706723429,
                        -8.299694527243283e-8,
                        8.161330234310531e-8,
                        0,
                        1.0513616754170908e-10,
                        -0.000001160279552417407,
                        -0.000703756594199697,
                        -7.254409672147648e-12,
                        4.444263572822101e-7,
                        0.0000015843023358505108,
                        9.935214844131438e-8,
                        -9.880414432610842e-8,
                        0.0006959664420802584
                    ],
                    "g": [
                        946.4277767774922,
                        -368.59073145577696,
                        915.9947935833629,
                        -1054.6796675767143,
                        162.6628865477168,
                        -636.4558741661858,
                        -1110.6142205504675,
                        2669.11130106563,
                        -19770.99337099268
                    ],
                    "mx": [
                        77233017.55120257,
                        -1976.8347704633716,
                        4214.329931733044,
                        19812439.763657037,
                        1137.8350465549286,
                        3398.107848157227,
                        25854487.838956386,
                        25996097.954730935,
                        4237.03930158008
                    ],
                    "cases": [
                        {
                            "dayTime": "22:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -47
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -47
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -47
                                }
                            ]
                        }
                    ]
                },
                {
                    "index": 48,
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
                                    "value": -1023.8330431456707
                                }
                            ]
                        },
                        {
                            "importance": 44.13874466051741,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 0.00003428419278758182
                                }
                            ]
                        },
                        {
                            "importance": 8.805744255566719,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000884735350388511
                                }
                            ]
                        },
                        {
                            "importance": 10.224972184099016,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 29,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006904389282334352
                                }
                            ]
                        },
                        {
                            "importance": 25.600267056042497,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -48
                                },
                                {
                                    "type": "β",
                                    "value": 1.2713154731643628
                                }
                            ]
                        },
                        {
                            "importance": 11.23027184377435,
                            "parts": [
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -48
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.05022067319614027
                                }
                            ]
                        }
                    ],
                    "dayTime": "23:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -48,
                            "dataTo": -48
                        },
                        {
                            "name": "Price",
                            "dataFrom": -438,
                            "dataTo": -48
                        }
                    ],
                    "samplesAhead": [
                        48
                    ],
                    "predictionIntervals": [
                        -3452.4300754293567,
                        1592.4472801246598
                    ],
                    "lastTargetTimestamp": "2013-02-28T23:00:00.000Z",
                    "RInv": [
                        2.9946453183567516e-8,
                        0,
                        0,
                        0,
                        0,
                        -2.9752911878438904e-8,
                        8.52700678843711e-8,
                        0,
                        0,
                        0,
                        -6.440474065017875e-8,
                        1.0730833565810149e-7,
                        6.079420126006442e-8,
                        0,
                        0,
                        -1.2415834322556109e-8,
                        2.095846975804493e-9,
                        -3.6848087363894014e-8,
                        0.0007015266711139053,
                        0,
                        1.6963717850066633e-7,
                        -3.018191675998347e-7,
                        -2.7234283940284358e-8,
                        -0.0010804332873238826,
                        0.00015894350461568367
                    ],
                    "g": [
                        883.3255946668069,
                        -1592.2913294285568,
                        -473.7883380324243,
                        1325.5886119090073,
                        -315.9655584389623
                    ],
                    "mx": [
                        72848139.99527486,
                        24517004.107182104,
                        19811991.26984939,
                        4214.3690888910405,
                        -4634.8748526820655
                    ],
                    "cases": [
                        {
                            "dayTime": "23:00:00.000",
                            "variableOffsets": [
                                {
                                    "name": "Price",
                                    "dataTo": -48
                                },
                                {
                                    "name": "P_Forecast Total Load",
                                    "dataTo": -48
                                },
                                {
                                    "name": "P_Forecast Zonal Load",
                                    "dataTo": -48
                                }
                            ]
                        }
                    ]
                }
            ],
            "difficulty": 64.69510912679306,
            "targetName": "Price",
            "holidayName": "",
            "groupKeys": [],
            "upperBoundary": 70803,
            "lowerBoundary": 0,
            "dailyCycle": true,
            "confidenceLevel": 90,
            "variableProperties": [
                {
                    "type": "Numerical",
                    "name": "Price",
                    "min": 15,
                    "max": 35409,
                    "dataFrom": -438,
                    "importance": 1646.949515371969,
                    "aggregation": "Mean"
                },
                {
                    "type": "Numerical",
                    "name": "P_Forecast Total Load",
                    "min": 11544,
                    "max": 33222,
                    "dataFrom": -48,
                    "importance": 296.7744131380584,
                    "aggregation": "Mean"
                },
                {
                    "type": "Numerical",
                    "name": "P_Forecast Zonal Load",
                    "min": 3395,
                    "max": 11266,
                    "dataFrom": -48,
                    "importance": 156.92749545036477,
                    "aggregation": "Mean"
                }
            ],
            "inSampleRows": [
                {
                    "from": "2011-01-01T00:00:00.000Z",
                    "to": "2012-06-10T15:00:00.000Z"
                }
            ],
            "outOfSampleRows": [
                {
                    "from": "2012-06-10T16:00:00.000Z",
                    "to": "2013-02-28T23:00:00.000Z"
                }
            ]
        }
    },
    "signature": "2d3c5f06b40c9117a9a2b2e7591f8a61d0091116c34783dc668570bcdfc8ffe84881f94353285d5a5791f04dbb1d1fa13bba24be75079c387be09a3c1b1d3d7b6d9f329bf87254930c4818340d098a71345737f3794c6db26352544845e56035b5d4b774b613fb3e5616a0776eab071a82b7ed37099d2274afce31d35bcb529ce1644d416df97dc382ae53399b0d9f503440fa8ac6cac0d0e156064cd88bb1085190786a588a00f8c7c3e832532ca8b5861432fb61177cc4a3e3738c9b1c72beec9d96b935ed76bcf1306a6348d3d9161eeb1dc757aaa499d96146be38ea9f5f6e6e00a083db55ade37fb9f78715ef19f2f80a110b98211ada18653ad6cda71f"
}

//Data from  `https://tim-platform-dev.tangent.works/api/v5/datasets/${datasetId}/versions`    //datasetId: 'b5a4cd8c-b7df-431b-869c-5f0f914774b6'
const fakeVirsions = [
    {
      "firstTimestamp": "2011-01-01T00:00:00.000Z",
      "timeZoneName": "UTC",
      "createdAt": "2023-01-30T13:52:01.440Z",
      "estimatedSamplingPeriod": "PT1H",
      "variables": [
        {
          "minimumValue": 15,
          "name": "Price",
          "maximumValue": 35409,
          "firstTimestamp": "2011-01-01T00:00:00.000Z",
          "lastTimestamp": "2013-02-28T23:00:00.000Z",
          "orderInTable": 2,
          "type": "Numerical",
          "missingObservations": 0,
          "averageValue": 4318.064820675106
        },
        {
          "minimumValue": 11544,
          "name": "P_Forecast Total Load",
          "maximumValue": 33222,
          "firstTimestamp": "2011-01-01T00:00:00.000Z",
          "lastTimestamp": "2013-02-28T23:00:00.000Z",
          "orderInTable": 3,
          "type": "Numerical",
          "missingObservations": 0,
          "averageValue": 18171.899419831225
        },
        {
          "minimumValue": 3395,
          "name": "P_Forecast Zonal Load",
          "maximumValue": 11266,
          "firstTimestamp": "2011-01-01T00:00:00.000Z",
          "lastTimestamp": "2013-02-28T23:00:00.000Z",
          "orderInTable": 4,
          "type": "Numerical",
          "missingObservations": 0,
          "averageValue": 6093.320358649789
        }
      ],
      "status": "Finished",
      "numberOfVariables": 3,
      "id": "dc15e7a6-793a-49d6-b612-d463d997a9b8",
      "size": 606720,
      "lastTimestamp": "2013-02-28T23:00:00.000Z",
      "dataset": {
        "id": "b5a4cd8c-b7df-431b-869c-5f0f914774b6"
      },
      "numberOfObservations": 18960
    }
  ]
