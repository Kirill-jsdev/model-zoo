import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ModelSelector } from './ModelSelector'
import '../ModelZooBrowser.css'
import { DownloadIcon, ArrowUpIcon } from '../assets/DownloadIcon'

const Header = () => {
  const {onSelectedModelIndexChange, model} = useContext(ModelZooBrowserContext)

  const handleClick = () => {
    onSelectedModelIndexChange(undefined)
  }

  const downloadModelAsJson = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const anchorElement = e.target as HTMLAnchorElement
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model))
    anchorElement.setAttribute("href", dataStr)
    anchorElement.setAttribute("download", "data.json")
  }

  return (
    <div className='nav-header'>
      <div className='title' onClick={handleClick}>
        <ArrowUpIcon />
        <h6>overview</h6>
      </div>
      <a href='/' onClick={(e) => downloadModelAsJson(e)}><DownloadIcon /></a>
    </div>
  )
}

export const Navigation: React.FC = () => (
  <div>
    <Header />
    <ModelSelector />
  </div>
)