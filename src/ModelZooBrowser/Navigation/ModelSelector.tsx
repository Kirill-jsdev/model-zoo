import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ModelSelectButton } from './Button'
import { useModelOptions, useDetectionModelResult } from '../Hooksnew'

export const ModelSelector: React.FC = () => {

  const {selectedModelIndex, onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)
  const detectionModelResult = useDetectionModelResult(model, selectedModelIndex)
  const options = useModelOptions()

  if (typeof options === 'undefined') return <></>

  return (
    <aside className='sidebar'>
      <div className='content'>
        {options.map(({ option, value }) => (
          <ModelSelectButton
            key={`${option}-${value}`}
            text={option}
            onClick={() => onSelectedModelIndexChange(value)}
            isSelected={value === 0}
            isDailyCycle={detectionModelResult.isDailyCycle}
          />
        ))}
      </div>
    </aside>
  )
}