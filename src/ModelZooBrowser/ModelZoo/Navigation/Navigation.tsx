import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { ModelSelector } from './ModelSelector'
import '../../ModelZooBrowser.css'
import { DownloadIcon, ArrowUpIcon } from '../../Icons'

const Header = () => {
  const {onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)

  const handleClick = () => {
    onSelectedModelIndexChange(undefined)
  }

  const handleDownloadJSON = () => {
    const json = JSON.stringify(model)
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.download = 'model.json'
    link.click()
    URL.revokeObjectURL(url)
    link.remove()
  };

  return (
    <div className='nav-header'>
      <div className='title' onClick={handleClick}>
        <ArrowUpIcon />
        <h6>overview</h6>
      </div>
      <div className='mzb-download' onClick={handleDownloadJSON}><DownloadIcon /></div>
    </div>
  )
}

export const Navigation: React.FC = () => (
  <div className='mzb-navigation'>
    <Header />
    <ModelSelector />
  </div>
)