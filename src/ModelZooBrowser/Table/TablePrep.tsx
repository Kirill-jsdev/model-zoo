import {useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ModelZooTable } from './Table'

const TablePrep: React.FC<any> = () => {

    const {selectedModelTerms, variablesWithColors} = useContext(ModelZooBrowserContext)

    return <ModelZooTable terms={selectedModelTerms ?? []} variablesColors={variablesWithColors} />
}

export default TablePrep