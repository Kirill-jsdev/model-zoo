import { useContext } from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import Treemap from './Treemap/Treemap'
import TablePrep from './Table/TablePrep'

const DataDisplay = () => {

    const {visualizeAs} = useContext(ModelZooBrowserContext)

    return (
        <>
            {visualizeAs === 'treemap' && <Treemap />}
            {visualizeAs === 'table' && <TablePrep />}
        </>
    )
}

export default DataDisplay