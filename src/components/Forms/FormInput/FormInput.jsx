import React from 'react'
import { Label, TextInput } from 'flowbite-react';

const FormInput = (props) => {
  const {
    name,
    value,
    type,
    required,
    placeholder,
    handleInputChange,
    label,
    helperText,
    color
  } = props
  return (
    <div>
      <div className="block">
        <Label
          htmlFor={name + '_unique_id'}
          value={label || 'Input'}
          color={color} // failure, success, warning
        />
      </div>
      <TextInput
        id={name + '_unique_id'}
        onChange={handleInputChange}
        value={value}
        name={name || 'text_default_name'}
        type={type || 'text'}
        placeholder={placeholder || ''}
        required={required || false}
        helperText={helperText}
        color={color} // failure, success, warning
      />
    </div>
  )
}

export default FormInput