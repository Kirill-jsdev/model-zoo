import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import { ModelSelector } from './ModelSelector'
import '../../ModelZooBrowser.css'
import { DownloadIcon, ArrowUpIcon } from '../../Icons'

const Header = () => {
  const {onSelectedModelIndexChange, model,  selectedModelIndex, selectedModelTerms,} = useContext(ModelZooBrowserContext)

  const modelDetailsText = selectedModelIndex ? `Model Index ${selectedModelIndex} (${selectedModelTerms?.length} Terms)` : 'Overview'

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
      <div className='title'>
        {selectedModelIndex && <div title={'Back to overview'} onClick={handleClick} className='mzb-back'><ArrowUpIcon /></div>}
        <h6>{modelDetailsText}</h6>
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