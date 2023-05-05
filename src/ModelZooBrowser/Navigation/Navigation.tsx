import React, {useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ModelSelector } from './ModelSelector'

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
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
        <h6 onClick={handleClick}>overview</h6>
        <a href='/' onClick={(e) => downloadModelAsJson(e)} style={{background: 'lightblue', width: 30, height: 30, display: 'block'}}>D</a>
    </div>
  )
}

export const Navigation: React.FC = () => (
  <div>
    <Header />
    <ModelSelector />
  </div>
)