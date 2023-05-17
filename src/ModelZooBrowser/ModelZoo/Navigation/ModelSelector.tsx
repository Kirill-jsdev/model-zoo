import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { useModelOptions, useDetectionModelResult } from '../../Utilities/Hooks'
import ModelSelectButton from './ModelSelectButton'

export const ModelSelector: React.FC = () => {

  const {selectedModelIndex, onSelectedModelIndexChange} = useContext(ModelZooBrowserContext)
  const detectionModelResult = useDetectionModelResult()
  const options = useModelOptions()

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
    </aside>
  )
}