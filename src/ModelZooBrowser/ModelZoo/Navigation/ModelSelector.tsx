import React, {useState, useContext} from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { useModelOptions, useDetectionModelResult } from '../../Utilities/Hooks'
import ModelSelectButton from './ModelSelectButton'

import './ModelSelector.css'
import { DatasetIcon } from '../../Icons'

export const ModelSelector: React.FC = () => {

  const {selectedModelIndex, onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)
  const detectionModelResult = useDetectionModelResult()
  const options = useModelOptions()

  //Forecasting model has modelZoo property whereas AD - normalBehaviorModel instead. Based on this the decision is made
  const isForecasting = !!model?.model?.modelZoo
  const showInGroups = isForecasting && detectionModelResult.isDailyCycle

  const chunks = divideArrayIntoChunks(options, 24)
  console.log('chunks', chunks)

  if (typeof options === 'undefined') return <></>

  return (
    <aside className='sidebar'>
      {!showInGroups && <div className='content'>
        {options.map(({ option, value }) => (
          <ModelSelectButton
            key={`${option}-${value}`}
            text={option}
            onClickHandler={() => onSelectedModelIndexChange(value)}
            isSelected={value === selectedModelIndex}
            isDailyCycle={detectionModelResult.isDailyCycle}
          />
        ))}
      </div>}
      {showInGroups && chunks.map((chunk, index) => {
        return <SelectorGroup key={`selector-group-${index}`} options={chunk} dayNumber={index + 1} />
      })}
    </aside>
  )
}

type SelectorGroupProps = {
  options: {value: number, option: string}[]
  dayNumber: number
}

const SelectorGroup: React.FC<SelectorGroupProps> = ({options, dayNumber}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='mzb-forecast-selector-group'>
      <div className='mzb-forecast-selector-group-header' onClick={handleClick}>
        <DatasetIcon />
        <div>Day + {dayNumber}</div>
      </div>
      <div className='mzb-forecast-selector-group-body' style={{height: isOpen ? 'auto' : '0', margin: isOpen ? '0 auto' : '0', padding: isOpen ? '20px 0' : '0' }}>
        {options.map((opt, index) => {
          return (
            <ModelSelectButton
              text={opt.option}
              isDailyCycle={true}
            />
          )
        })}
      </div>
    </div>
  )
}

function divideArrayIntoChunks(array: {value: number, option: string}[], chunkSize: number) {
  const dividedArrays = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    dividedArrays.push(chunk);
  }

  return dividedArrays;
}