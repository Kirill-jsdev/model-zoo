import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
import { DrawerArrows } from '../../../Icons'


const DataInfo = () => {

    const { selectedModelIndex, selectedModelTerms, onVisualizeAsChange, model, onIsDrawerOpenChange, isDrawerOpen, nodeData } = useContext(ModelZooBrowserContext)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    const modelDetailsText = selectedModelIndex ? `Model Index ${selectedModelIndex} (${selectedModelTerms?.length}) Terms` : 'Overview'
    const timeScale = model?.model?.settings?.data?.timeScale
    const timeScaleText = `Timescale: ${timeScale?.value} ${timeScale?.baseUnit}`

    return (
        <div className="data-info">
            <h6 className='model-details-header'>{modelDetailsText}</h6>
            <div className='model-details'>
                <div className='node-details'>
                    <div>
                        <div className='dn-mark' style={{backgroundColor: nodeData?.color}}></div>
                    </div>
                    <div className='dn-txt-info'>
                        <span style={{fontWeight: '700'}}>{nodeData?.term}</span>
                        {nodeData?.importance && <span>Importance: {nodeData?.importance.toFixed(3)}</span>}
                        {nodeData?.coefficient && <span>Coefficient: {nodeData?.coefficient?.toFixed(3)}</span>}
                    </div>
                </div>
                <span className='timescale-badge'>{timeScaleText}</span>
                <select onChange={handleSelectChange} defaultValue='treemap' >
                    <option value="treemap">Treemap</option>
                    <option value="table">Table</option>
                </select>
                {!isDrawerOpen && 
                    <div className='open-drawer' onClick={() => onIsDrawerOpenChange(true)}>
                        <DrawerArrows />
                        <span>Insights</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default DataInfo