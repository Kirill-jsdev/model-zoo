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
        <div>
            <label htmlFor="">{label}</label>
            <select name="" id="" onChange={(e) => handleScaleChange(e as React.ChangeEvent<HTMLSelectElement>)} value={value}>
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