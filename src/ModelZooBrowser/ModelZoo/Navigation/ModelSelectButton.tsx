import { ClockIcon } from "../../assets/DownloadIcon"

const ModelSelectButton: React.FC<any> = ({text, isDailyCycle, isSelected, onClickHandler}) => {

    const buttonText = isDailyCycle ? text.substring(0, text.length - 4) : text

    return <div className={`selector-btn ${isSelected && 'selected'}`} onClick={onClickHandler}><ClockIcon />{buttonText}</div>
}

export default ModelSelectButton