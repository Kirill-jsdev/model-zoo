
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

    console.log('asdasdasdas', value)

    return (
        <div>
            <label htmlFor="">{label}</label>
            <select name="" id="" onChange={(e) => handleScaleChange(e as React.ChangeEvent<HTMLSelectElement>)}>
                {options.map((opt: OptionType) => {
                    return (
                        <option value={opt.value} selected={opt.value === value} >{opt.option}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CustomSelect