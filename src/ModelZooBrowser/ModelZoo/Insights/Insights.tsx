import React, { useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { Offsets } from './Offsets'
import { UnusedVariables } from './UnusedVariables'
import { DrawerArrows } from '../../Icons'

export const Insights: React.FC = () => {

    const { onIsDrawerOpenChange } =  useContext(ModelZooBrowserContext)

    return (
        <div className='insights'>
          <div className='header' onClick={() => onIsDrawerOpenChange(false)}>
            <DrawerArrows />
            <h6>Insights</h6>
          </div>
          <div className='settings-panel'>
            <Offsets />
            <UnusedVariables />
          </div>
        </div>
      )
}