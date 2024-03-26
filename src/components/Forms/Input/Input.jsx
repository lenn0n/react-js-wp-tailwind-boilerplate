import React, { forwardRef } from 'react'
import { Label, TextInput } from 'flowbite-react';

const Input = forwardRef((props, ref) => {
  const {
    name,
    value,
    type,
    required,
    placeholder,
    handleInputChange,
    label,
    helperText,
    color,
    isDisabled,
  } = props
  return (
    <div>
      <div className="block">
        <Label
          htmlFor={name + '_unique_id'}
          value={label || 'Input'}
          color={color} // failure, success, warning
          disabled={isDisabled}
        />
      </div>
      <TextInput
        ref={ref}
        id={name + '_unique_id'}
        onChange={handleInputChange}
        value={value}
        name={name || 'text_default_name'}
        type={type || 'text'}
        placeholder={placeholder || ''}
        required={required || false}
        helperText={helperText}
        color={color} // failure, success, warning
        disabled={isDisabled}
      />
    </div>
  )
})

export default Input