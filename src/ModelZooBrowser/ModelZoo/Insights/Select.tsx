import React from 'react'
import styled from 'styled-components'
import {
  InputLabel,
  InputLabelProps,
  FormControl,
  Select as MUISelect,
  MenuItem,
  SelectProps as MUISelectProps,
  FormHelperText,
} from '@material-ui/core'
import { color } from '../../Utilities/color'

type SelectValue = string | number | undefined

export type Option = {
  option: string
  value: SelectValue
}

export interface SelectProps extends Omit<MUISelectProps, 'onChange'> {
  className?: string
  selectId?: string
  options?: Option[]
  value: SelectValue
  label?: string
  disabled?: boolean
  required?: boolean
  focusColor?: string
  onClear?: () => void
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  InputLabelProps?: InputLabelProps
  formHelperText?: string
}

export const Select: React.FC<SelectProps> = ({
  className,
  selectId,
  options = [],
  value,
  onChange,
  label,
  disabled = false,
  required = false,
  focusColor = color.main.primary,
  onClear,
  InputLabelProps,
  error,
  formHelperText,
  ...props
}) => {
  return (
    <StyledFormControl
      className={className}
      variant="outlined"
      fullWidth
      disabled={disabled}
      required={required}
      $focusColor={focusColor}
      error={error}
    >
      {label && (
        <InputLabel id="select-label" {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      <StyledSelect
        id={selectId}
        labelId={label && 'select-label'}
        value={value}
        onChange={(e) => onChange(e as React.ChangeEvent<HTMLSelectElement>)}
        label={label}
        {...props}
      >
        {Boolean(onClear) && (
          <MenuItem key="clear-key" onClick={onClear}>
            None
          </MenuItem>
        )}
        {options.map((option, index) => (
          <MenuItem key={`${option.option}${index}`} value={option.value}>
            {option.option}
          </MenuItem>
        ))}
      </StyledSelect>
      {formHelperText && <FormHelperText>{formHelperText}</FormHelperText>}
    </StyledFormControl>
  )
}

const StyledSelect = styled(MUISelect)`
  background-color: ${color.white};

  .MuiMenu-paper {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    border-radius: 0.625rem;
  }
`

const StyledFormControl = styled(FormControl)<{ $focusColor: string }>`
  margin-bottom: 2rem;

  .MuiSelect-icon,
  .MuiFormLabel-root {
    color: ${color.main.smoke};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${color.shades.athens.d};
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${color.main.smoke};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ $focusColor }) => $focusColor};
  }
`
