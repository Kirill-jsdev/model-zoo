import React, {useState, useContext} from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { useModelOptions, useDetectionModelResult } from '../../Utilities/Hooks'
import ModelSelectButton from './ModelSelectButton'

import './ModelSelector.css'
import { DatasetIcon } from '../../Icons'

export const ModelSelector: React.FC = () => {

  const {selectedModelIndex, onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)

  //Forecasting model has modelZoo property whereas AD - normalBehaviorModel instead. Based on this the decision is made
  const isForecasting = !!model?.model?.modelZoo

  const detectionModelResult = useDetectionModelResult()
  const options = useModelOptions()

  console.log('OPTIONS', options)

  if (typeof options === 'undefined') return <></>

  return (
    <aside className='sidebar'>
      <div className='content'>
        {options.map(({ option, value }) => (
          <ModelSelectButton
            key={`${option}-${value}`}
            text={option}
            onClickHandler={() => onSelectedModelIndexChange(value)}
            isSelected={value === selectedModelIndex}
            isDailyCycle={detectionModelResult.isDailyCycle}
          />
        ))}
      </div>
      <SelectorGroup options={options} />
    </aside>
  )
}

type SelectorGroupProps = {
  options: {value: number, option: string}[]
}

const SelectorGroup: React.FC<SelectorGroupProps> = ({options}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='mzb-forecast-selector-group'>
      <div className='mzb-forecast-selector-group-header' onClick={handleClick}>
        <DatasetIcon />
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