import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'

const DataInfo = () => {

    const { selectedModelIndex, selectedModelTerms, onVisualizeAsChange } = useContext(ModelZooBrowserContext)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    const modelDetailsText = selectedModelIndex ? `Model Index ${selectedModelIndex} (${selectedModelTerms?.length}) Terms` : 'Overview'

    return (
        <div className="data-info">
            <h6 className='model-details-par'>{modelDetailsText}</h6>
            <select onChange={handleSelectChange} defaultValue='treemap' >
                <option value="treemap">Treemap</option>
                <option value="table">Table</option>
            </select>
        </div>
    )
}

export default DataInfo