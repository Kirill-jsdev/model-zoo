import {useContext} from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
export interface TooltipDataProps {
    term: string
    importance: number
    coefficient?: number
    color: string
}


const NotTooltip: React.FC<TooltipDataProps> = (props) => {

    const { nodeData, onNodeDataChange } = useContext(ModelZooBrowserContext)

    const handleMouseMove = () => {
        onNodeDataChange({
            term: props.term,
            coefficient: props.coefficient,
            color: props.color,
            importance: props.importance
        })
        console.log(nodeData)
    }

    return (
        <div onMouseMove={handleMouseMove} style={{width: '100%', height: '100%'}}>{props.children}</div>
    )
}

export default NotTooltip