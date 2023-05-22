import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
import { DrawerArrows } from '../../../Icons'
import { useConvertTimePeriodFromISO8601 } from '../../../Utilities/Hooks'


const DataInfo = () => {

    const { onVisualizeAsChange, model, onIsDrawerOpenChange, isDrawerOpen, nodeData } = useContext(ModelZooBrowserContext)
    const labelValue = useConvertTimePeriodFromISO8601(model)?.labelValue

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    const timeScaleText = `Timescale: ${labelValue}`

    return (
        <div className="data-info">

            <div className='mzb-node-details'>
                <div>
                    <div className='dn-mark' style={{backgroundColor: nodeData?.color}}></div>
                </div>
                <div className='dn-txt-info'>
                    <span style={{fontWeight: '700'}}>{nodeData?.term}</span>
                    {nodeData?.importance && <span>Importance: {nodeData?.importance.toFixed(3)}</span>}
                    {nodeData?.coefficient && <span>Coefficient: {nodeData?.coefficient?.toFixed(3)}</span>}
                </div>
            </div>

            <div className='model-details'>
                <span className='mzb-timescale-badge'>{timeScaleText}</span>
                <select onChange={handleSelectChange} defaultValue='treemap' className='mzb-select' >
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