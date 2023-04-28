export const fakeModelTwoo = {
    "modelVersion": "5.6",
    "approach": "kpi-driven",
    "model": {
        "settings": {
            "data": {
                "rows": [
                    {
                        "to": "2013-02-28T23:00:00.000Z",
                        "from": "2011-01-01T00:00:00.000Z"
                    }
                ],
                "columns": [
                    "Price",
                    "P_Forecast Total Load",
                    "P_Forecast Zonal Load"
                ],
                "KPIColumn": "Price",
                "holidayColumn": "",
                "labelColumn": "",
                "imputation": {
                    "type": "1",
                    "maxGapLength": 0
                },
                "timeScale": {
                    "baseUnit": "Second",
                    "value": 3600
                },
                "aggregation": "Mean",
                "updates": [
                    {
                        "predictorName": "Price",
                        "update": {
                            "when": {
                                "seconds": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52,
                                    53,
                                    54,
                                    55,
                                    56,
                                    57,
                                    58,
                                    59
                                ],
                                "minutes": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52,
                                    53,
                                    54,
                                    55,
                                    56,
                                    57,
                                    58,
                                    59
                                ],
                                "hours": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23
                                ],
                                "DoW": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            },
                            "until": {
                                "increment": "PT1H",
                                "offset": -1
                            }
                        }
                    },
                    {
                        "predictorName": "P_Forecast Total Load",
                        "update": {
                            "when": {
                                "seconds": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52,
                                    53,
                                    54,
                                    55,
                                    56,
                                    57,
                                    58,
                                    59
                                ],
                                "minutes": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52,
                                    53,
                                    54,
                                    55,
                                    56,
                                    57,
                                    58,
                                    59
                                ],
                                "hours": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23
                                ],
                                "DoW": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            },
                            "until": {
                                "increment": "PT1H",
                                "offset": 0
                            }
                        }
                    },
                    {
                        "predictorName": "P_Forecast Zonal Load",
                        "update": {
                            "when": {
                                "seconds": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52,
                                    53,
                                    54,
                                    55,
                                    56,
                                    57,
                                    58,
                                    59
                                ],
                                "minutes": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23,
                                    24,
                                    25,
                                    26,
                                    27,
                                    28,
                                    29,
                                    30,
                                    31,
                                    32,
                                    33,
                                    34,
                                    35,
                                    36,
                                    37,
                                    38,
                                    39,
                                    40,
                                    41,
                                    42,
                                    43,
                                    44,
                                    45,
                                    46,
                                    47,
                                    48,
                                    49,
                                    50,
                                    51,
                                    52,
                                    53,
                                    54,
                                    55,
                                    56,
                                    57,
                                    58,
                                    59
                                ],
                                "hours": [
                                    0,
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7,
                                    8,
                                    9,
                                    10,
                                    11,
                                    12,
                                    13,
                                    14,
                                    15,
                                    16,
                                    17,
                                    18,
                                    19,
                                    20,
                                    21,
                                    22,
                                    23
                                ],
                                "DoW": [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6,
                                    7
                                ]
                            },
                            "until": {
                                "increment": "PT1H",
                                "offset": 0
                            }
                        }
                    }
                ]
            },
            "domainSpecifics": [
                {
                    "perspective": "Residual",
                    "sensitivity": null,
                    "minSensitivity": 0,
                    "maxSensitivity": 5
                },
                {
                    "perspective": "Imbalance",
                    "sensitivity": null,
                    "minSensitivity": 0,
                    "maxSensitivity": 5
                }
            ],
            "normalBehavior": {
                "useNormalBehaviorModel": true,
                "normalization": true,
                "maxModelComplexity": "auto",
                "features": 1,
                "dailyCycle": "auto",
                "useKPIOffsets": "auto",
                "allowOffsets": true,
                "offsetLimit": {
                    "type": "Explicit",
                    "value": "auto"
                }
            },
            "anomalousBehavior": {
                "maxModelComplexity": 30,
                "detectionPeriods": {
                    "seconds": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59
                    ],
                    "minutes": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25,
                        26,
                        27,
                        28,
                        29,
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59
                    ],
                    "hours": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23
                    ],
                    "DoW": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7
                    ]
                }
            }
        },
        "normalBehaviorModel": {
            "samplingPeriod": "PT1H",
            "timeZone": "UTC",
            "models": [
                {
                    "index": 1,
                    "terms": [
                        {
                            "importance": 39.412049998405536,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 8.841988442420751
                                }
                            ]
                        },
                        {
                            "importance": 4.612096806940305,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006487847371824331
                                }
                            ]
                        },
                        {
                            "importance": 13.23156353015561,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00020748018586853946
                                }
                            ]
                        },
                        {
                            "importance": 27.140224894989313,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000164925105687156
                                }
                            ]
                        },
                        {
                            "importance": 6.6270485439661355,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.134657684022994
                                }
                            ]
                        },
                        {
                            "importance": 1.6305614506992367,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007595439284789875
                                }
                            ]
                        },
                        {
                            "importance": 2.9875643187817738,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 308.13530310494525
                                }
                            ]
                        },
                        {
                            "importance": 0.3873279583867326,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -9.522954674007908
                                }
                            ]
                        },
                        {
                            "importance": 3.9715624976753414,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 1.284115566360111
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
                                    "value": 289.9022529896906
                                }
                            ]
                        }
                    ],
                    "dayTime": "00:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.00047902111774150697,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00040183235450422396,
                        8.154997228225249e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00028048358833842793,
                        -3.415148068635552e-8,
                        6.703057564127035e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00010529903998377838,
                        3.155248949146312e-9,
                        -5.5202828540741796e-8,
                        2.200584525924522e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0010776581201187372,
                        -4.2045815062609217e-8,
                        -1.98948141833981e-7,
                        1.3061851080616367e-7,
                        0.0005879682891642902,
                        0,
                        0,
                        0,
                        0,
                        0.0000021610707897872605,
                        -1.06597527301211e-9,
                        1.0782732123752895e-8,
                        -2.5519778368975302e-8,
                        -0.000012610813670978052,
                        2.3423231465968943e-8,
                        0,
                        0,
                        0,
                        -0.0005564840011457107,
                        -1.0092257762309103e-8,
                        -6.088829843097578e-8,
                        -2.7107371927729857e-7,
                        -0.00006794399742211124,
                        3.3833196117565786e-7,
                        2.4792335706330397,
                        0,
                        0,
                        -0.0005026573378558497,
                        -1.076981966701467e-9,
                        -2.3183153309241944e-9,
                        -8.093518707167561e-9,
                        -0.0000063590021555723765,
                        1.0990316388914664e-8,
                        -0.2830307660924476,
                        0.0005107027855453734,
                        0,
                        0.002860821138533579,
                        -6.641513603382765e-11,
                        -1.3984724460820292e-9,
                        1.6943247368676296e-9,
                        7.858122554594862e-7,
                        -1.1426421405915097e-9,
                        -0.03339954940650966,
                        -0.003307659542064715,
                        0.00045942654644655573
                    ],
                    "g": [
                        1431.7657644344445,
                        251.22422444794134,
                        -824.6729396194163,
                        3676.370200371629,
                        -180.08139403772074,
                        2192.5950094993805,
                        99.81666545105212,
                        -544.179536827745,
                        2795.039982543738
                    ],
                    "mx": [
                        4319.363072027382,
                        24576505.77178142,
                        25532209.36842477,
                        76512393.08018158,
                        -14.282161246122094,
                        71962554.79137959,
                        0.4730716812003535,
                        4028.313636148686,
                        2080.205062677952
                    ]
                },
                {
                    "index": 2,
                    "terms": [
                        {
                            "importance": 46.55647960313857,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.48047669247374264
                                }
                            ]
                        },
                        {
                            "importance": 4.032324620030431,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005679836471559307
                                }
                            ]
                        },
                        {
                            "importance": 14.442566942597635,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001795064685595853
                                }
                            ]
                        },
                        {
                            "importance": 22.003902410081153,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000736464975849008
                                }
                            ]
                        },
                        {
                            "importance": 4.759064716028315,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.18816090253999582
                                }
                            ]
                        },
                        {
                            "importance": 8.205661708123884,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00013455556713451165
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
                                    "value": 583.6935352531514
                                }
                            ]
                        }
                    ],
                    "dayTime": "01:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005178423554103666,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00043043506175384787,
                        8.669252040044462e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.0003059796184597431,
                        -3.598413572892905e-8,
                        7.700025578203376e-8,
                        0,
                        0,
                        0,
                        -0.00014018517075698022,
                        2.64304041063653e-9,
                        -5.906774967632997e-8,
                        2.5473604793148582e-8,
                        0,
                        0,
                        -0.0011888837589064916,
                        -9.218681443794253e-8,
                        -5.742769459794085e-8,
                        1.0271864589752842e-7,
                        0.0005971350761943274,
                        0,
                        -0.000012282553707957913,
                        -2.4865907123446883e-10,
                        8.385071590391384e-9,
                        -2.7671528718762473e-8,
                        -0.00002164847266340608,
                        2.7119008655199604e-8
                    ],
                    "g": [
                        1322.3625398319164,
                        168.25308233280947,
                        -637.3488675144539,
                        3043.964455512792,
                        -135.22623611184133,
                        4961.669832599612
                    ],
                    "mx": [
                        4026.4181122482323,
                        23137335.754183065,
                        22470711.567119986,
                        67043101.38877358,
                        1045.0337148953845,
                        63500661.57518233
                    ]
                },
                {
                    "index": 3,
                    "terms": [
                        {
                            "importance": 46.867293707830974,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.7326874165940195
                                }
                            ]
                        },
                        {
                            "importance": 4.16008234792995,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002247167846917712
                                }
                            ]
                        },
                        {
                            "importance": 34.35689708360448,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004387422254280182
                                }
                            ]
                        },
                        {
                            "importance": 3.479118590934317,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004584391192728082
                                }
                            ]
                        },
                        {
                            "importance": 1.719475538103791,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.454320941067141
                                }
                            ]
                        },
                        {
                            "importance": 3.080749460607735,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.24982922346646058
                                }
                            ]
                        },
                        {
                            "importance": 6.336383270988752,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00003140877575741898
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
                                    "value": 765.373847557496
                                }
                            ]
                        }
                    ],
                    "dayTime": "02:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005606012639072119,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.0005256852062840812,
                        8.904923145008492e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.00024221343361175479,
                        -5.1663141543876884e-8,
                        3.088096377587807e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.000024926893640673042,
                        -2.4929011016496848e-8,
                        -2.0970400107360182e-8,
                        2.9469646701018127e-8,
                        0,
                        0,
                        0,
                        -0.0005201200237971928,
                        6.03599145409325e-8,
                        1.9161751453029985e-7,
                        -2.030259208461167e-7,
                        0.0005606110310152554,
                        0,
                        0,
                        -0.0010593069185809698,
                        -8.995247837975007e-8,
                        -1.5575685054382082e-7,
                        1.8247235185025556e-7,
                        0.0009333142225791389,
                        0.0006080446825344519,
                        0,
                        0.0008512354875194029,
                        -7.567756282949366e-8,
                        3.427889471431807e-8,
                        -4.973555661562096e-8,
                        -0.0005073498634450233,
                        -0.00042334879440600407,
                        9.163189134980747e-8
                    ],
                    "g": [
                        1280.409017347814,
                        -227.67610999723937,
                        2670.908312108767,
                        1729.7366241143498,
                        -213.48252267573363,
                        -172.21997182706676,
                        342.7712262045868
                    ],
                    "mx": [
                        3754.08247518098,
                        19819649.435125407,
                        56949722.84801286,
                        59172028.12554007,
                        3097.8599786854184,
                        2016.417095569223,
                        22002375.611558
                    ]
                },
                {
                    "index": 4,
                    "terms": [
                        {
                            "importance": 48.063999841684264,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.5104441873550044
                                }
                            ]
                        },
                        {
                            "importance": 30.442340107717964,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.1809750275236247
                                }
                            ]
                        },
                        {
                            "importance": 5.468410496455467,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001508106038896964
                                }
                            ]
                        },
                        {
                            "importance": 14.284506638408503,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006854399477758534
                                }
                            ]
                        },
                        {
                            "importance": 1.7407429157338024,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 179.3965209595678
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
                                    "value": 708.8052136792635
                                }
                            ]
                        }
                    ],
                    "dayTime": "03:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": -1
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -27,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005999367709385252,
                        0,
                        0,
                        0,
                        0,
                        -0.0004898224496152294,
                        0.0006082115001360803,
                        0,
                        0,
                        0,
                        -0.000497750366237702,
                        -0.00008356151911961223,
                        1.011449190072897e-7,
                        0,
                        0,
                        -0.00031235540318775814,
                        0.000054636113264576405,
                        -5.711057169800545e-8,
                        3.3983249759733785e-8,
                        0,
                        0.0007328220331302836,
                        -0.0006367751491055303,
                        2.1289585532318244e-8,
                        -2.5182732575231667e-8,
                        2.2938669204055544
                    ],
                    "g": [
                        1190.984155032979,
                        -448.2154161499564,
                        -335.8958364987833,
                        2074.9475703168605,
                        78.20703082803539
                    ],
                    "mx": [
                        3520.697332403321,
                        2402.3115020675546,
                        17766872.679619253,
                        52493877.45247288,
                        -0.10000000000000402
                    ]
                },
                {
                    "index": 5,
                    "terms": [
                        {
                            "importance": 46.03608254221159,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00009015394532449132
                                }
                            ]
                        },
                        {
                            "importance": 46.600682968209135,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002077354015394182
                                }
                            ]
                        },
                        {
                            "importance": 4.2909017693303,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.18520931906461519
                                }
                            ]
                        },
                        {
                            "importance": 1.8552166561976275,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.08627794006397206
                                }
                            ]
                        },
                        {
                            "importance": 1.217116064051349,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.25408198206867993
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
                                    "value": 608.0581359953021
                                }
                            ]
                        }
                    ],
                    "dayTime": "04:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": -1
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        3.624133877203114e-8,
                        0,
                        0,
                        0,
                        0,
                        -3.539271757350539e-8,
                        1.1323812206652084e-7,
                        0,
                        0,
                        0,
                        -6.248175156502381e-8,
                        1.2000529880650458e-7,
                        0.0006242283105879758,
                        0,
                        0,
                        -1.5442653468341897e-8,
                        5.568283543183638e-8,
                        0.0002698576122081211,
                        0.0006071937691178081,
                        0,
                        -4.636825117956589e-8,
                        3.070990083617332e-8,
                        0.00006279949392758974,
                        0.00005337594447159256,
                        0.0006413564354565236
                    ],
                    "g": [
                        1237.2290301003538,
                        -2217.737539538675,
                        210.47334633057932,
                        107.26780270425891,
                        396.16345610974025
                    ],
                    "mx": [
                        50216229.918850854,
                        16431523.372811846,
                        3442.4244405013606,
                        -1582.5648286969692,
                        3337.7761962857626
                    ]
                },
                {
                    "index": 6,
                    "terms": [
                        {
                            "importance": 46.08846296935668,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00011258800877079571
                                }
                            ]
                        },
                        {
                            "importance": 43.52440136741161,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003227840762175239
                                }
                            ]
                        },
                        {
                            "importance": 7.356319575963997,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000442975565579139
                                }
                            ]
                        },
                        {
                            "importance": 1.3049274899420713,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.08865778987647184
                                }
                            ]
                        },
                        {
                            "importance": 1.7258885973256402,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.39665038763972105
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
                                    "value": 633.122477467286
                                }
                            ]
                        }
                    ],
                    "dayTime": "05:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        3.558707463374172e-8,
                        0,
                        0,
                        0,
                        0,
                        -3.4785516678845274e-8,
                        1.1792615131978297e-7,
                        0,
                        0,
                        0,
                        1.2936952612955678e-8,
                        -1.4398226254893036e-7,
                        9.510819165023635e-8,
                        0,
                        0,
                        -6.94789179065115e-8,
                        2.9160550732269087e-7,
                        -4.408691088996251e-8,
                        0.00043493588392707694,
                        0,
                        -4.167599867065173e-8,
                        1.417844105306254e-8,
                        1.1252310874642577e-8,
                        0.00007177778383995211,
                        0.0006597908467992113
                    ],
                    "g": [
                        1440.7420670346323,
                        -2527.1291881692123,
                        443.1341497733925,
                        104.6285540718793,
                        601.1759477476206
                    ],
                    "mx": [
                        50670957.0256831,
                        16047513.198931403,
                        21725315.44548952,
                        -1118.287697313637,
                        3248.830038030175
                    ]
                },
                {
                    "index": 7,
                    "terms": [
                        {
                            "importance": 47.710482766996705,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00009002329447387197
                                }
                            ]
                        },
                        {
                            "importance": 34.530082003853394,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00038762731885446446
                                }
                            ]
                        },
                        {
                            "importance": 11.466561302256931,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.000050709570416524296
                                }
                            ]
                        },
                        {
                            "importance": 4.4685544354842754,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.16236800812927998
                                }
                            ]
                        },
                        {
                            "importance": 1.8243194914087035,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006479806687467772
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
                                    "value": 780.897376203357
                                }
                            ]
                        }
                    ],
                    "dayTime": "06:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        3.2333990919232084e-8,
                        0,
                        0,
                        0,
                        0,
                        -3.184575275325218e-8,
                        1.0942277628112486e-7,
                        0,
                        0,
                        0,
                        2.5754164769150623e-8,
                        -1.7964072352263168e-7,
                        9.105172075700719e-8,
                        0,
                        0,
                        4.7925771464663744e-8,
                        -1.4165521482025828e-7,
                        7.986504711295222e-9,
                        0.0007511850448541936,
                        0,
                        -2.626583741527279e-8,
                        -2.4666346942105608e-8,
                        3.267542140787293e-9,
                        -0.000019712333377750522,
                        3.389181953792948e-8
                    ],
                    "g": [
                        1719.7233634167405,
                        -2500.7748280117607,
                        502.87800997516786,
                        -165.97751246189148,
                        1911.9087661304236
                    ],
                    "mx": [
                        53782389.13509831,
                        16721644.882632993,
                        22692839.47996167,
                        -39.815639210868234,
                        51203392.04395743
                    ]
                },
                {
                    "index": 8,
                    "terms": [
                        {
                            "importance": 48.149733164758096,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001178961486038055
                                }
                            ]
                        },
                        {
                            "importance": 26.402797350891927,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0003371359175213619
                                }
                            ]
                        },
                        {
                            "importance": 18.297956442081826,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006167058762544936
                                }
                            ]
                        },
                        {
                            "importance": 5.629809934740392,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.19385139511616153
                                }
                            ]
                        },
                        {
                            "importance": 1.5197031075277676,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.2725812022818791
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
                                    "value": 608.9186418841591
                                }
                            ]
                        }
                    ],
                    "dayTime": "07:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        2.838048422386216e-8,
                        0,
                        0,
                        0,
                        0,
                        -2.806504196389937e-8,
                        9.405436771856617e-8,
                        0,
                        0,
                        0,
                        2.205099468671543e-8,
                        -1.5195100752010283e-7,
                        8.640209436355308e-8,
                        0,
                        0,
                        -2.2048296445947076e-8,
                        1.6244739507881147e-7,
                        -3.423806461909758e-8,
                        0.0006777031438504421,
                        0,
                        -4.113660948828076e-8,
                        2.8623601430340105e-8,
                        9.527207827208212e-9,
                        -0.00009706964458145238,
                        0.0005952803284021744
                    ],
                    "g": [
                        1813.275633563534,
                        -2412.6461703084888,
                        575.9131282988235,
                        -220.45467054438586,
                        457.90393076406497
                    ],
                    "mx": [
                        59067863.344642095,
                        18311222.595447727,
                        24014063.345720667,
                        -907.5592806026793,
                        3384.7909029782472
                    ]
                },
                {
                    "index": 9,
                    "terms": [
                        {
                            "importance": 47.803553334393655,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.23251128591599693
                                }
                            ]
                        },
                        {
                            "importance": 17.10173207663993,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000664310746256282
                                }
                            ]
                        },
                        {
                            "importance": 7.092542377095256,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00037514308922275417
                                }
                            ]
                        },
                        {
                            "importance": 22.932549755980723,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00012913105548857564
                                }
                            ]
                        },
                        {
                            "importance": 5.0696224558904195,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.20350936430508387
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
                                    "value": 638.386714429224
                                }
                            ]
                        }
                    ],
                    "dayTime": "08:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005515850609179626,
                        0,
                        0,
                        0,
                        0,
                        -0.00042187599411518025,
                        8.24069425798308e-8,
                        0,
                        0,
                        0,
                        -0.000402808469112313,
                        -2.339486500452505e-8,
                        8.187749041672593e-8,
                        0,
                        0,
                        -0.00020070979615650637,
                        -1.4343965315065742e-9,
                        -5.16310857104176e-8,
                        2.5528569113120355e-8,
                        0,
                        -0.00004463852915798369,
                        -3.753606923121711e-8,
                        2.1148327365777116e-7,
                        -3.411110330940189e-8,
                        0.00059475238716049
                    ],
                    "g": [
                        1872.0260397114212,
                        504.2254255530409,
                        -796.5540938468872,
                        4601.083990650639,
                        -342.1749432174506
                    ],
                    "mx": [
                        3582.842205361027,
                        25472128.742592406,
                        20669109.26312834,
                        65931775.974283755,
                        -1780.725547253254
                    ]
                },
                {
                    "index": 10,
                    "terms": [
                        {
                            "importance": 48.11076023153719,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.30878547510794113
                                }
                            ]
                        },
                        {
                            "importance": 26.946505004720127,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007121985239917418
                                }
                            ]
                        },
                        {
                            "importance": 9.102312760830939,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00030313961498901117
                                }
                            ]
                        },
                        {
                            "importance": 15.840422002911739,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.00011265092994618846
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
                                    "value": 630.9252102058372
                                }
                            ]
                        }
                    ],
                    "dayTime": "09:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": -1
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005147970519671308,
                        0,
                        0,
                        0,
                        -0.0003931365233422931,
                        7.934481980186622e-8,
                        0,
                        0,
                        -0.00037904906563463863,
                        -2.217752416273249e-8,
                        7.367332232056836e-8,
                        0,
                        -0.00017210943808280732,
                        3.947639545622971e-10,
                        -5.002271308428015e-8,
                        2.3864564309788545e-8
                    ],
                    "g": [
                        1981.6387806039068,
                        619.881466684664,
                        -909.5701851605853,
                        4720.426842235805
                    ],
                    "mx": [
                        3817.207968130972,
                        26792198.6791865,
                        23369965.977113735,
                        70329820.49922702
                    ]
                },
                {
                    "index": 11,
                    "terms": [
                        {
                            "importance": 48.12660318153162,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00008913113289888885
                                }
                            ]
                        },
                        {
                            "importance": 26.99269567989923,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002340705441189896
                                }
                            ]
                        },
                        {
                            "importance": 21.68748162046207,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005832858516361963
                                }
                            ]
                        },
                        {
                            "importance": 3.19321951810708,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.33904613846549525
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
                                    "value": 688.511803789218
                                }
                            ]
                        }
                    ],
                    "dayTime": "10:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        2.193026443744187e-8,
                        0,
                        0,
                        0,
                        -2.1801321878374825e-8,
                        6.740266395695051e-8,
                        0,
                        0,
                        2.4600723478533307e-9,
                        -6.490763107693076e-8,
                        7.702807273686428e-8,
                        0,
                        -4.730922024765348e-8,
                        7.288653742908197e-8,
                        1.0199965702743375e-8,
                        0.0004843980458548491
                    ],
                    "g": [
                        1931.1468681685267,
                        -3589.6448038123476,
                        664.5537343862951,
                        699.9329195623782
                    ],
                    "mx": [
                        79800648.98080601,
                        26103989.100030415,
                        27820722.84351434,
                        4063.5110504839404
                    ]
                },
                {
                    "index": 12,
                    "terms": [
                        {
                            "importance": 48.308403874979454,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.000060282769452206354
                                }
                            ]
                        },
                        {
                            "importance": 25.689718075744977,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000665721234839034
                                }
                            ]
                        },
                        {
                            "importance": 20.315234386844036,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00015646346819314004
                                }
                            ]
                        },
                        {
                            "importance": 5.686643662431539,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.34565915268420355
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
                                    "value": 746.3815697407499
                                }
                            ]
                        }
                    ],
                    "dayTime": "11:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        2.082546103241491e-8,
                        0,
                        0,
                        0,
                        -1.7822086019314935e-8,
                        7.537959239812194e-8,
                        0,
                        0,
                        -2.0195048190505993e-8,
                        -2.282057920184304e-9,
                        6.315375736003611e-8,
                        0,
                        -4.878594455040225e-8,
                        9.854699967534074e-9,
                        8.039739493804596e-8,
                        0.0004683941206216635
                    ],
                    "g": [
                        1894.608828454711,
                        683.2350293565949,
                        -3416.962955567599,
                        737.9664634249395
                    ],
                    "mx": [
                        85430493.12743212,
                        28562843.705831096,
                        28414989.449532904,
                        4272.847451377482
                    ]
                },
                {
                    "index": 13,
                    "terms": [
                        {
                            "importance": 94.97921387271685,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007663079019639366
                                }
                            ]
                        },
                        {
                            "importance": 3.868959869105768,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006235740780276673
                                }
                            ]
                        },
                        {
                            "importance": 1.1518262581773897,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.000158075799943271
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
                                    "value": 970.6834676594581
                                }
                            ]
                        }
                    ],
                    "dayTime": "12:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        1.9895019694930533e-8,
                        0,
                        0,
                        -1.724636803623417e-8,
                        7.414608674882806e-8,
                        0,
                        -1.9466134205917204e-8,
                        -1.5608632406402234e-9,
                        5.965139809132389e-8
                    ],
                    "g": [
                        1939.5754874107413,
                        785.2218959263608,
                        -2649.9932105742655
                    ],
                    "mx": [
                        90241094.60511844,
                        29071774.959843557,
                        30378177.353391346
                    ]
                },
                {
                    "index": 14,
                    "terms": [
                        {
                            "importance": 48.92333315147173,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.000027620653815292156
                                }
                            ]
                        },
                        {
                            "importance": 42.359469747447946,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006423123910039084
                                }
                            ]
                        },
                        {
                            "importance": 3.1094143294088274,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.19601081893177488
                                }
                            ]
                        },
                        {
                            "importance": 5.607782771671504,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.07642558819075013
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
                                    "value": 827.1490738695338
                                }
                            ]
                        }
                    ],
                    "dayTime": "13:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        1.8754678338676666e-8,
                        0,
                        0,
                        0,
                        -1.6337765318236715e-8,
                        7.309330520242774e-8,
                        0,
                        0,
                        4.693594818331045e-9,
                        3.1848465378702383e-9,
                        0.0006102859053287897,
                        0,
                        3.395794633562543e-9,
                        1.4780522669140858e-8,
                        0.0005063463667409415,
                        0.0003066949393150046
                    ],
                    "g": [
                        2116.24941028819,
                        823.3808958321746,
                        114.42819027961477,
                        249.19090077405497
                    ],
                    "mx": [
                        94085844.17317793,
                        29435133.48940068,
                        -1038.048301456128,
                        -1478.057605346088
                    ]
                },
                {
                    "index": 15,
                    "terms": [
                        {
                            "importance": 94.59548210112239,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00017174602389469738
                                }
                            ]
                        },
                        {
                            "importance": 4.6269522505454335,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000696695844049186
                                }
                            ]
                        },
                        {
                            "importance": 0.7775656483321793,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001494456878586186
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
                                    "value": 773.1252910385138
                                }
                            ]
                        }
                    ],
                    "dayTime": "14:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        1.7174077114607806e-8,
                        0,
                        0,
                        -1.4934704210775774e-8,
                        7.186269268430785e-8,
                        0,
                        -1.7191697668800488e-8,
                        1.0662899360657885e-10,
                        1.7271684492868056e-8
                    ],
                    "g": [
                        2193.0204099422044,
                        982.3206476855512,
                        -8652.641143388691
                    ],
                    "mx": [
                        97822241.36495937,
                        29767225.163077015,
                        97405454.2229626
                    ]
                },
                {
                    "index": 16,
                    "terms": [
                        {
                            "importance": 90.7362742621717,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00008580294313263171
                                }
                            ]
                        },
                        {
                            "importance": 5.4607861739964365,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00023372579147029724
                                }
                            ]
                        },
                        {
                            "importance": 3.802939563831865,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00021567692029575072
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
                                    "value": 706.4893367572831
                                }
                            ]
                        }
                    ],
                    "dayTime": "15:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        7.047527516377217e-8,
                        0,
                        0,
                        -6.117288345193127e-8,
                        1.5765629165627245e-8,
                        0,
                        5.279306285241018e-10,
                        -1.585850227171698e-8,
                        1.5854367679574555e-8
                    ],
                    "g": [
                        2310.011014022413,
                        1141.2564339825547,
                        -13603.628013093887
                    ],
                    "mx": [
                        30124896.23083936,
                        101619203.77705626,
                        100878370.82516286
                    ]
                },
                {
                    "index": 17,
                    "terms": [
                        {
                            "importance": 86.82346814718727,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00007830093159007851
                                }
                            ]
                        },
                        {
                            "importance": 4.298577673393427,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0003051846417171655
                                }
                            ]
                        },
                        {
                            "importance": 8.877954179419303,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002852660851997665
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
                                    "value": 690.1543687463463
                                }
                            ]
                        }
                    ],
                    "dayTime": "16:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        6.924749511201253e-8,
                        0,
                        0,
                        -6.034389474076875e-8,
                        1.46581285062551e-8,
                        0,
                        1.1368200747513622e-9,
                        -1.4855974249119298e-8,
                        1.4651986270849093e-8
                    ],
                    "g": [
                        2398.4137829743104,
                        1087.9303704718966,
                        -19469.448027488164
                    ],
                    "mx": [
                        30411431.737585995,
                        105800498.04306208,
                        105145716.49086443
                    ]
                },
                {
                    "index": 18,
                    "terms": [
                        {
                            "importance": 39.65548489262702,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": -0.000020000339798296415
                                }
                            ]
                        },
                        {
                            "importance": 13.272665801999139,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.5817493029413445
                                }
                            ]
                        },
                        {
                            "importance": 4.5588838930603215,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.25709298644909434
                                }
                            ]
                        },
                        {
                            "importance": 3.3870640183965275,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.8442770745487023
                                }
                            ]
                        },
                        {
                            "importance": 4.096522411496494,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0003154562556103873
                                }
                            ]
                        },
                        {
                            "importance": 30.529997870176135,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.000272340207784148
                                }
                            ]
                        },
                        {
                            "importance": 4.49938111224437,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.5858917028206051
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
                                    "value": 625.3746765312881
                                }
                            ]
                        }
                    ],
                    "dayTime": "17:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        6.851529452547209e-8,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -5.99598653683921e-8,
                        0.0003832611034407442,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -1.9587562188217705e-8,
                        0.00004603062489505603,
                        0.0002742173170957416,
                        0,
                        0,
                        0,
                        0,
                        5.446836685628167e-8,
                        0.00005212996489493899,
                        -0.0000475017109744393,
                        0.0005984125796110973,
                        0,
                        0,
                        0,
                        -3.22398860532655e-8,
                        -0.0003437144774151357,
                        0.0000173478490221178,
                        -0.0002491870118812302,
                        1.3996399644472861e-8,
                        0,
                        0,
                        -2.7656512665378313e-9,
                        -0.000005145801336502265,
                        0.000007805546799175897,
                        -0.000030400479377607322,
                        -1.3879942382848442e-8,
                        1.3867430686247652e-8,
                        0,
                        8.137686283545504e-8,
                        0.0005447515227156701,
                        0.00018418088320150915,
                        0.0007128979724950634,
                        3.217080907953877e-10,
                        -2.063999297299281e-8,
                        0.0005025384682337237
                    ],
                    "g": [
                        2360.3420568674055,
                        1120.1452406823755,
                        274.1667220353918,
                        -537.7470817577183,
                        1368.9418360825018,
                        -21374.084877683286,
                        -1165.864386222698
                    ],
                    "mx": [
                        30570323.90066401,
                        5120.538271850889,
                        1636.7705472563423,
                        -3940.9096523208764,
                        108983044.9059781,
                        108682720.77630293,
                        -1165.6968837343768
                    ]
                },
                {
                    "index": 19,
                    "terms": [
                        {
                            "importance": 36.361663528608155,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.33759872604675834
                                }
                            ]
                        },
                        {
                            "importance": 20.19290865767336,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00021330411160375932
                                }
                            ]
                        },
                        {
                            "importance": 36.00677621400172,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0001316254273455765
                                }
                            ]
                        },
                        {
                            "importance": 4.336951518613563,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00018669707707699482
                                }
                            ]
                        },
                        {
                            "importance": 1.9720279346132858,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004193851955472196
                                }
                            ]
                        },
                        {
                            "importance": 1.1296721464898993,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.07806624289283086
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
                                    "value": 595.8857102132888
                                }
                            ]
                        }
                    ],
                    "dayTime": "18:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005976450623823321,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00045297679768217856,
                        1.3832435094799496e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.000014186295512766155,
                        -1.4067015444769395e-8,
                        1.3617746244041816e-8,
                        0,
                        0,
                        0,
                        -0.000028048376745637437,
                        -1.1750171762950462e-9,
                        -1.2889194962380939e-8,
                        4.057676532672808e-8,
                        0,
                        0,
                        0.0004147392550515075,
                        9.882091603538185e-9,
                        7.548065976941186e-9,
                        -6.624852565098582e-8,
                        6.832074226621648e-8,
                        0,
                        0.0002608330289248489,
                        1.836220454422111e-7,
                        -2.3571684830095525e-7,
                        1.6203581733815965e-7,
                        2.667950013353791e-8,
                        0.00048607452723007787
                    ],
                    "g": [
                        -2255.2580621648344,
                        1040.3208614170728,
                        -15523.11900008104,
                        -2855.1272351596276,
                        676.5645761838791,
                        -160.60550084304066
                    ],
                    "mx": [
                        -4106.53665048984,
                        110945234.43130186,
                        111023776.88601054,
                        37267905.17698975,
                        30593148.773932617,
                        50.22142524296002
                    ]
                },
                {
                    "index": 20,
                    "terms": [
                        {
                            "importance": 35.49620761092139,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -1.270457017081888
                                }
                            ]
                        },
                        {
                            "importance": 15.192701931805749,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.4184958520995659
                                }
                            ]
                        },
                        {
                            "importance": 9.156042855067739,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.18341861490500344
                                }
                            ]
                        },
                        {
                            "importance": 3.5278283909338306,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -867.180986062205
                                }
                            ]
                        },
                        {
                            "importance": 2.25346856922994,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": -0.0000705201627034255
                                }
                            ]
                        },
                        {
                            "importance": 5.688364975295867,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001652133129946407
                                }
                            ]
                        },
                        {
                            "importance": 24.305977948180026,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00014912573547986322
                                }
                            ]
                        },
                        {
                            "importance": 2.357587100131201,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00007986055117223535
                                }
                            ]
                        },
                        {
                            "importance": 2.021820618434253,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.3275513982939095
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
                                    "value": 273.5712500187137
                                }
                            ]
                        }
                    ],
                    "dayTime": "19:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005955238248938347,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0004915298619392964,
                        0.0003721734901790913,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0002354325012525049,
                        0.00021948682119002453,
                        0.0002671031910311634,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00028845235940089844,
                        0.00009424438106234647,
                        -0.0001403987890942243,
                        5.07893974526977,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00039493096924949684,
                        -0.00012753797324380463,
                        -0.000013503073258896968,
                        0.7447295433982468,
                        6.864751426203142e-8,
                        0,
                        0,
                        0,
                        0,
                        -0.00028862300023157784,
                        -0.0003324472281078662,
                        -0.000006521659884492107,
                        -0.5829410575305682,
                        -3.766890522070132e-8,
                        1.4187027096856582e-8,
                        0,
                        0,
                        0,
                        -0.00011058617952064827,
                        0.000002021288124988504,
                        0.0000014555992900508462,
                        -0.21143733740610543,
                        -1.2254945900327084e-8,
                        -1.3931537757957144e-8,
                        4.1756687180595204e-8,
                        0,
                        0,
                        -0.000016919713608640046,
                        -0.000006935543737050819,
                        0.000007753075224457043,
                        -0.024859581012474142,
                        -9.413837127509838e-10,
                        -1.1215274836610534e-8,
                        -8.140156494546262e-9,
                        1.3901756083426253e-8,
                        0,
                        -0.0007807930931199987,
                        -0.000575232574680517,
                        0.00016593224890781524,
                        0.02354453448828308,
                        -9.301144905143659e-8,
                        2.6371457460385302e-8,
                        7.381230341714861e-8,
                        -2.833872056039946e-8,
                        0.0004770727249585876
                    ],
                    "g": [
                        -2205.1682895723816,
                        870.3755330418894,
                        320.48864719084327,
                        -211.09580950128117,
                        -391.7858128422044,
                        1403.6732317238893,
                        -5631.995342302176,
                        -4345.032765674848,
                        686.5858833626313
                    ],
                    "mx": [
                        -3990.7026724849106,
                        5261.971186926714,
                        -1833.8047766422553,
                        -0.27320508073250993,
                        30392789.746047623,
                        110792011.27307692,
                        37160941.79102507,
                        111725491.57276651,
                        1278.3604833678762
                    ]
                },
                {
                    "index": 21,
                    "terms": [
                        {
                            "importance": 34.56950860484206,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.6609996414702551
                                }
                            ]
                        },
                        {
                            "importance": 24.79841792936286,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.18684433873040737
                                }
                            ]
                        },
                        {
                            "importance": 9.604597647837695,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.0002044087902119785
                                }
                            ]
                        },
                        {
                            "importance": 16.04683352256692,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0001500195414690217
                                }
                            ]
                        },
                        {
                            "importance": 9.947908457063779,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.14497777741177453
                                }
                            ]
                        },
                        {
                            "importance": 2.1176049587441197,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.17463514936701105
                                }
                            ]
                        },
                        {
                            "importance": 2.9151288795825536,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Total Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00006999492724230564
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
                                    "value": 399.0599689463352
                                }
                            ]
                        }
                    ],
                    "dayTime": "20:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": -1
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0005909561536552168,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0004631109623133689,
                        0.00037913115000545207,
                        0,
                        0,
                        0,
                        0,
                        0,
                        -0.000012289006665752037,
                        -0.00036627692657852876,
                        4.421757444893113e-8,
                        0,
                        0,
                        0,
                        0,
                        0.000028188571246034046,
                        -0.00007028799353287847,
                        -3.464657294242446e-8,
                        1.5003546952937696e-8,
                        0,
                        0,
                        0,
                        -0.00008968624649933499,
                        0.000012672791012686336,
                        -6.909095497135131e-8,
                        2.8409919007395426e-8,
                        0.0003641968681683768,
                        0,
                        0,
                        -0.0005091230576448563,
                        -0.0008486745173971764,
                        -4.985974043670449e-8,
                        3.51797263720529e-8,
                        0.00010397896965589567,
                        0.00048058662655888385,
                        0,
                        -0.000006354377497201184,
                        -0.0000015340153734098481,
                        -7.213459242990416e-9,
                        -1.246482760474135e-8,
                        -0.000001961561895330875,
                        -0.000014691312045294427,
                        1.4592323135639166e-8
                    ],
                    "g": [
                        -2022.8584823711171,
                        1065.377498305686,
                        -822.4859474264356,
                        4917.984821721283,
                        310.35879036922427,
                        216.74636108093134,
                        -4796.695261726724
                    ],
                    "mx": [
                        -3595.7973756658503,
                        5227.202816600939,
                        36254267.55922768,
                        107285910.5585888,
                        -2555.795183089657,
                        2396.771068595649,
                        109830385.07445607
                    ]
                },
                {
                    "index": 22,
                    "terms": [
                        {
                            "importance": 34.25823707206019,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.45006415211466466
                                }
                            ]
                        },
                        {
                            "importance": 25.940716381480506,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.3426645812236523
                                }
                            ]
                        },
                        {
                            "importance": 13.696329184398435,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00021894408842187263
                                }
                            ]
                        },
                        {
                            "importance": 10.457587901798055,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00004639717158954562
                                }
                            ]
                        },
                        {
                            "importance": 12.45899245744851,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.0000675919887886322
                                }
                            ]
                        },
                        {
                            "importance": 3.1881370028143,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 415.20128770222306
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
                                    "value": 563.8862443747148
                                }
                            ]
                        }
                    ],
                    "dayTime": "21:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.000393170664266969,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00027663029492885476,
                        0.0005855803022459307,
                        0,
                        0,
                        0,
                        0,
                        -0.00035791760672247057,
                        0.000032842894907370615,
                        4.815841868138115e-8,
                        0,
                        0,
                        0,
                        0.00001556424698945422,
                        0.0001255808894849781,
                        -3.80222648289862e-8,
                        7.1741379558012e-8,
                        0,
                        0,
                        -0.00006410434089848874,
                        0.000050372846448632124,
                        -4.0129062628190545e-8,
                        4.2525223328750006e-9,
                        1.6288704619966988e-8,
                        0,
                        -0.0003778298932452622,
                        -0.0005737127021091593,
                        -2.2019379722743e-8,
                        -4.6528600915931035e-8,
                        2.3002770718514826e-8,
                        2.2938669204055544
                    ],
                    "g": [
                        1777.8321089028798,
                        -812.4319253550087,
                        -797.746701365874,
                        533.3005339200354,
                        3894.009664947005,
                        181.00495892273284
                    ],
                    "mx": [
                        5083.90297478037,
                        -2945.021004106633,
                        34287374.981228694,
                        28883539.29505869,
                        100292595.45306644,
                        -0.10000000000000402
                    ]
                },
                {
                    "index": 23,
                    "terms": [
                        {
                            "importance": 39.610048642575144,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.8810571635904956
                                }
                            ]
                        },
                        {
                            "importance": 15.258515222288308,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 0.06815318096780512
                                }
                            ]
                        },
                        {
                            "importance": 8.941322573621548,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00025807285863269953
                                }
                            ]
                        },
                        {
                            "importance": 22.012458392291272,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00008966673671058734
                                }
                            ]
                        },
                        {
                            "importance": 12.346171069583162,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006809808700900324
                                }
                            ]
                        },
                        {
                            "importance": 1.8314840996405748,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.24668573015239803
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
                                    "value": 383.70246228854194
                                }
                            ]
                        }
                    ],
                    "dayTime": "22:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.00041815082604297046,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.0002444489972640563,
                        0.0005826184599081541,
                        0,
                        0,
                        0,
                        0,
                        -0.00037106740837431585,
                        0.00005932119290370926,
                        5.353301495065761e-8,
                        0,
                        0,
                        0,
                        0.000026318955252369005,
                        0.000037616283866460374,
                        -4.962178780891715e-8,
                        7.411377650376871e-8,
                        0,
                        0,
                        -0.00007395487346891932,
                        0.00005019206313732612,
                        -4.3731177643316835e-8,
                        3.5789029768416802e-9,
                        1.809601352086122e-8,
                        0,
                        -0.0006138327106421391,
                        -0.00026532534423995074,
                        -1.8736496843762658e-8,
                        -2.1761987391591794e-8,
                        1.733187599326955e-8,
                        0.0005014750130328227
                    ],
                    "g": [
                        1691.043238480984,
                        -452.47835052280544,
                        -735.9455976059037,
                        860.9386848624783,
                        4234.30211621543,
                        -491.9202826487625
                    ],
                    "mx": [
                        4866.749416197982,
                        -2087.236721642937,
                        31681305.417275604,
                        27615810.620671697,
                        91377646.33117679,
                        3867.810150454653
                    ]
                },
                {
                    "index": 24,
                    "terms": [
                        {
                            "importance": 43.00794202906385,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": 0.6512840505500226
                                }
                            ]
                        },
                        {
                            "importance": 9.91069902436944,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Sin",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": -0.1957835481144168
                                }
                            ]
                        },
                        {
                            "importance": 8.85181544959705,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "TimeOffsets",
                                    "predictor": "P_Forecast Zonal Load",
                                    "offset": -1
                                },
                                {
                                    "type": "β",
                                    "value": -0.00020380696115518106
                                }
                            ]
                        },
                        {
                            "importance": 29.25220490496913,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 30,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Zonal Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00006573148691305646
                                }
                            ]
                        },
                        {
                            "importance": 7.087755327576685,
                            "parts": [
                                {
                                    "type": "ExponentialMovingAverage",
                                    "predictor": "Price",
                                    "window": 2,
                                    "offset": -1
                                },
                                {
                                    "type": "Identity",
                                    "predictor": "P_Forecast Total Load"
                                },
                                {
                                    "type": "β",
                                    "value": 0.00005233884417567002
                                }
                            ]
                        },
                        {
                            "importance": 1.8895832644238417,
                            "parts": [
                                {
                                    "type": "Cos",
                                    "period": 24,
                                    "unit": "hours"
                                },
                                {
                                    "type": "Cos",
                                    "period": 8,
                                    "unit": "hours"
                                },
                                {
                                    "type": "β",
                                    "value": 271.2400544246182
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
                                    "value": 277.41211910093034
                                }
                            ]
                        }
                    ],
                    "dayTime": "23:00:00.000",
                    "variableOffsets": [
                        {
                            "name": "P_Forecast Zonal Load",
                            "dataFrom": -1,
                            "dataTo": 0
                        },
                        {
                            "name": "P_Forecast Total Load",
                            "dataFrom": 0,
                            "dataTo": 0
                        },
                        {
                            "name": "Price",
                            "dataFrom": -391,
                            "dataTo": -1
                        }
                    ],
                    "RInv": [
                        0.0004449242993352098,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0.00018835545975250025,
                        0.0005827562672114751,
                        0,
                        0,
                        0,
                        0,
                        -0.00039322312666468915,
                        0.00007982370571291227,
                        5.9433555791250224e-8,
                        0,
                        0,
                        0,
                        0.00006186195128246899,
                        -0.00003370764834175734,
                        -6.375347744666837e-8,
                        7.719056983613644e-8,
                        0,
                        0,
                        -0.00010092772355938156,
                        0.00003578263816006085,
                        -4.5648912665056845e-8,
                        1.6586450719700502e-9,
                        2.0299121231012104e-8,
                        0,
                        -0.0003546731252511569,
                        -0.0003970756939067489,
                        -1.1977146362401447e-7,
                        -8.349378934813196e-9,
                        5.6392029405935596e-8,
                        1.8337927983494353
                    ],
                    "g": [
                        1543.4651052458385,
                        -240.555854675683,
                        -585.673584156601,
                        820.9732552449699,
                        2167.472322064444,
                        147.91205127905215
                    ],
                    "mx": [
                        4610.609075889608,
                        -1085.042295628212,
                        28713880.369573686,
                        26137988.81316954,
                        81711293.61603294,
                        0.373046358333805
                    ]
                }
            ],
            "variableProperties": [
                {
                    "name": "P_Forecast Zonal Load",
                    "dataFrom": -1,
                    "dataTo": 0,
                    "importance": 400.1488142302081
                },
                {
                    "name": "P_Forecast Total Load",
                    "dataFrom": -1,
                    "dataTo": 0,
                    "importance": 423.7804116883964
                },
                {
                    "name": "Price",
                    "dataFrom": -391,
                    "dataTo": -1,
                    "importance": 1423.481432590306
                }
            ]
        },
        "anomalousBehaviorModel": {
            "submodels": [
                {
                    "perspective": "Residual",
                    "probabilityDistribution": {
                        "n": 6,
                        "d": 1,
                        "w": [
                            0.2777006778,
                            0.01600460256,
                            0.02675984385,
                            0.06286381529,
                            0.10327995,
                            0.5133911105
                        ],
                        "μ": [
                            784.1885959,
                            2871.329738,
                            -5314.136273,
                            1980.181524,
                            -3275.526159,
                            178.6910914
                        ],
                        "Σ": [
                            255888.2812,
                            26770466.87,
                            20966950.8,
                            1271162.315,
                            1487632.207,
                            122145.9852
                        ]
                    },
                    "detectedSensitivity": 0.12924767084926492,
                    "threshold": 0.3778122834603448,
                    "translation": 1.273415506180923,
                    "cut": 0
                },
                {
                    "perspective": "Imbalance",
                    "probabilityDistribution": {
                        "n": 11,
                        "d": 1,
                        "w": [
                            0.04799592678,
                            0.2286852373,
                            0.002739427714,
                            0.09003030974,
                            0.2591451069,
                            0.00816413491,
                            0.1624309861,
                            0.0353160013,
                            0.009506780444,
                            0.1426214446,
                            0.01336464426
                        ],
                        "μ": [
                            -457.6962899,
                            416.0658476,
                            3689.741785,
                            975.7272657,
                            177.0459081,
                            -1082.378183,
                            669.00463,
                            1327.33927,
                            2753.091279,
                            -50.03992398,
                            1999.808315
                        ],
                        "Σ": [
                            80314.22522,
                            10422.91894,
                            147174.2508,
                            21964.95833,
                            10318.2349,
                            416187.9719,
                            13373.77941,
                            40472.94299,
                            94029.33816,
                            19045.69529,
                            49483.41918
                        ]
                    },
                    "detectedSensitivity": 0.05931198102016608,
                    "threshold": 0.31048713926104243,
                    "translation": 1.2517087936348301,
                    "cut": 23
                }
            ]
        }
    },
    "signature": "ce802b00925f9b11bcc9cb4d8f409a6aeef97540e551e2e01c4ea4db2ae54aa3da4fd01c3a4da39df3afb2e46eb87880a2d3fa10483f4a517b1b9d4706f533fd44f61112a1e0dcc64a3d2fc5368f04a0af330191ab00f465c9ec35032ac47b86679f893b752e8ac1d254aa4e90673aa1d727a47c1fc499905c95c8431bb6f64c94b156f04eba3ec41a510991c0dc469db0055a558a6763b04dc8a22b23d5ab93ae50e08a297f59b8e5144ce01c6988670111ef7aea20670d18c3f0200e69b5b01e3d02ac533a79f9fef9023a0834013e05fc2eb48eb8d07d6c099cd4c9175c23cc491c254d7f3e679aa48ba6b8b5d0ccf41ff9aeffadb29301af934035bb911d"
}