import {useContext} from 'react'
import { ModelZooBrowserContext } from '../../../Context/ModelZooBrowserContextProvider'
export interface TooltipDataProps {
    term: string
    importance: number
    coefficient?: number
    color: string
}


const NotTooltip: React.FC<TooltipDataProps> = (props) => {



    return (
        <div onMouseMove={() => console.log('TERM', props.color)} style={{width: '100%', height: '100%'}}>{props.children}</div>
    )
}

export default NotTooltip