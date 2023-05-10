import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'

const DataInfo = () => {

    const { selectedModelIndex, selectedModelTerms, onVisualizeAsChange, model } = useContext(ModelZooBrowserContext)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    const modelDetailsText = selectedModelIndex ? `Model Index ${selectedModelIndex} (${selectedModelTerms?.length}) Terms` : 'Overview'
    const timeScale = model?.model?.settings?.data?.timeScale
    const timeScaleText = `Timescale: ${timeScale.value} ${timeScale.baseUnit}`

    return (
        <div className="data-info">
            <h6 className='model-details-header'>{modelDetailsText}</h6>
            <div className='model-details'>
                <span className='timescale-badge'>{timeScaleText}</span>
                <select onChange={handleSelectChange} defaultValue='treemap' >
                    <option value="treemap">Treemap</option>
                    <option value="table">Table</option>
                </select>
            </div>
        </div>
    )
}

export default DataInfo