import { ClockIcon, WaveIcon } from "../../Icons"

const ModelSelectButton: React.FC<any> = ({text, isDailyCycle, isSelected, onClickHandler}) => {

    const buttonText = isDailyCycle ? text.substring(0, text.length - 4) : text

    const icon = isDailyCycle ? <ClockIcon /> : <WaveIcon />

    return <div className={`selector-btn ${isSelected && 'selected'}`} onClick={onClickHandler}>{icon}{buttonText}</div>
}

export default ModelSelectButton