import { ClockIcon, WaveIcon } from "../../Icons"

type ModelSelectButtonProps = {
    text: string
    isDailyCycle: boolean
    isSelected: boolean
    onClickHandler: () => void
}

const ModelSelectButton: React.FC<ModelSelectButtonProps> = ({text, isDailyCycle, isSelected, onClickHandler}) => {

    const buttonText = isDailyCycle ? text.substring(0, text.length - 4) : text

    const icon = isDailyCycle ? <ClockIcon /> : <WaveIcon />

    return <div className={`selector-btn ${isSelected && 'selected'}`} onClick={onClickHandler}>{icon}{buttonText}</div>
}

export default ModelSelectButton