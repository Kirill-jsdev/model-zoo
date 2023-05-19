type OptionType = {
    option: string
    value: number
}

type CustomSelectProps = {
    label?: string
    options: OptionType[]
    handleScaleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    value: number | string
}

const CustomSelect: React.FC<CustomSelectProps> = ({label, value, options, handleScaleChange}) => {

    return (
        <div className="mzb-offset-select-container">
            <label className="mzb-offset-select-label">{label}</label>
            <select className="mzb-offset-select" onChange={(e) => handleScaleChange(e as React.ChangeEvent<HTMLSelectElement>)} value={value}>
                {options.map((opt: OptionType) => {
                    return (
                        <option key={opt.value} value={opt.value}>{opt.option}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CustomSelect