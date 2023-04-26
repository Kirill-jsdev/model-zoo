import { ModelZooTable } from './Table'

const TablePrep: React.FC<any> = ({terms, variablesColors}) => {
    return <ModelZooTable terms={terms ?? []} variablesColors={variablesColors} />
}

export default TablePrep