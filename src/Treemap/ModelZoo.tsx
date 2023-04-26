import React from 'react'
import Treemap from './Treemap'
import { getTreemapFromModels } from './helpers'

const ModelZoo: React.FC<any> = ({models, variables}) => {

    const selectedModelTreemapNodes = getTreemapFromModels(models, 0, true)

    const predictorPalette = variables.map((v: any, i: number) => {
        v.variable = v.name
        v.color = colorMap[i].color
        v.textColor = colorMap[i].textColor

        return v
    })

    console.log('predictorPalette', predictorPalette)

    return <Treemap treemap={selectedModelTreemapNodes} predictorPalette={predictorPalette}/>
}

export default ModelZoo

const colorMap = [
    { color: '#5573F7', textColor: '#EBECF0'},
    { color: '#2941AB', textColor: '#EBECF0'},
    { color: '#5CC8D0', textColor: '#2c2835'},
    { color: '#499988', textColor: '#EBECF0'},
    { color: '#BBF0CA', textColor: '#2c2835'},
    { color: '#57CE5C', textColor: '#EBECF0'},
    { color: '#662860', textColor: '#EBECF0'},
    { color: '#6B6185', textColor: '#EBECF0'},
    { color: '#FFF640', textColor: '#2c2835'},
    { color: '#7A434F', textColor: '#EBECF0'},
]