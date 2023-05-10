import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'

const DataInfo = () => {

    const { onVisualizeAsChange } = useContext(ModelZooBrowserContext)

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onVisualizeAsChange(e.target.value as 'treemap' | 'table')
    }

    return (
        <div className="data-info">
            <select onChange={handleSelectChange} defaultValue='treemap' >
                <option value="treemap">Treemap</option>
                <option value="table">Table</option>
            </select>
        </div>
    )
}

export default DataInfo