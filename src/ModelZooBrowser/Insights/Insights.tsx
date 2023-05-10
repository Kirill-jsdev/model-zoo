import React from 'react'
import { Offsets } from './Offsets'
import { UnusedVariables } from './UnusedVariables'
import { DrawerArrows } from '../assets/DownloadIcon'

export const Insights: React.FC = () => {

    return (
        <div className='insights'>
          <div className='header'>
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