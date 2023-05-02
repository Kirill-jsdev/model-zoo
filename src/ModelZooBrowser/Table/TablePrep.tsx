import {useContext} from 'react'
import { ModelZooBrowserContext } from '../Context/ModelZooBrowserContextProvider'
import { ModelZooTable } from './Table'

const TablePrep: React.FC<any> = ({terms, variablesColors}) => {

    const {selectedModelTerms} = useContext(ModelZooBrowserContext)

    return <ModelZooTable terms={selectedModelTerms ?? []} variablesColors={variablesColors} />
}

export default TablePrep