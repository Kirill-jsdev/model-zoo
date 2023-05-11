export interface TooltipDataProps {
    term: string
    importance: number
    coefficient?: number
    color: string
}


const NotTooltip: React.FC<TooltipDataProps> = (props) => {

    return (
        <div onMouseEnter={() => console.log('TERM', props.term)} style={{width: '100%', height: '100%'}}>{props.children}</div>
    )
}

export default NotTooltip