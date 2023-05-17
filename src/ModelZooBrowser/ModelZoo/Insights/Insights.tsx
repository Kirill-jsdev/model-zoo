import React, { useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { Offsets } from './Offsets'
import { UnusedVariables } from './UnusedVariables'
import { DrawerArrows } from '../../Icons'

export const Insights: React.FC = () => {

    const { onIsDrawerOpenChange, model } =  useContext(ModelZooBrowserContext)
    const difficulty = model?.model?.modelZoo?.difficulty

    return (
        <div className='insights'>
          <div className='header' onClick={() => onIsDrawerOpenChange(false)}>
            <DrawerArrows />
            <h6>Insights</h6>
          </div>
          <div className='settings-panel'>
            <Offsets />
            <UnusedVariables />
            {difficulty && <div>Difficulty: {difficulty.toFixed(3)}%</div>}
          </div>
        </div>
      )
}