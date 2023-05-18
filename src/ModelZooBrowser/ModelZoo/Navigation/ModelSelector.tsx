import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { useModelOptions, useDetectionModelResult } from '../../Utilities/Hooks'
import ModelSelectButton from './ModelSelectButton'

export const ModelSelector: React.FC = () => {

  const {selectedModelIndex, onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)

  //Forecasting model has modelZoo property whereas AD - normalBehaviorModel instead. Based on this the decision is made
  const isForecasting = !!model?.model?.modelZoo

  const detectionModelResult = useDetectionModelResult()
  const options = useModelOptions()

  if (typeof options === 'undefined') return <></>

  return (
    <aside className='sidebar' style={{backgroundColor: isForecasting ? 'yellow' : 'blue'}}>
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
    </aside>
  )
}