import { useContext } from 'react'
import { ModelZooBrowserContext } from '../../Context/ModelZooBrowserContextProvider'
import Treemap from './Treemap/Treemap'
import TablePrep from './Table/TablePrep'

const DataDisplay = () => {

    const {visualizeAs, isDrawerOpen} = useContext(ModelZooBrowserContext)

    return (
        <>
            {visualizeAs === 'treemap' && <Treemap key={`treemap-${isDrawerOpen}`} />}
            {visualizeAs === 'table' && <TablePrep />}
        </>
    )
}

export default DataDisplay