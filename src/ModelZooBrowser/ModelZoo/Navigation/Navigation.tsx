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

  // const downloadModelAsJson = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   const anchorElement = e.target as HTMLAnchorElement
  //   const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(model))
  //   anchorElement.setAttribute("href", dataStr)
  //   anchorElement.setAttribute("download", "data.json")
  // }

  const handleDownloadJSON = () => {
    const json = JSON.stringify(model);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'model.json';

    // Programmatically click the link to start the download
    link.click();

    // Clean up by removing the link
    URL.revokeObjectURL(url);
    link.remove();
  };

  return (
    <div className='nav-header'>
      <div className='title' onClick={handleClick}>
        <ArrowUpIcon />
        <h6>overview</h6>
      </div>
      <div onClick={handleDownloadJSON} style={{width: 30, height: 30, cursor: 'pointer'}}><DownloadIcon /></div>
    </div>
  )
}

export const Navigation: React.FC = () => (
  <div className='mzb-navigation'>
    <Header />
    <ModelSelector />
  </div>
)