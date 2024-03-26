import React from 'react'
import { Label, Select as FBSelect } from 'flowbite-react';

const Select = (props) => {
  const {
    name,
    value,
    required,
    placeholder,
    handleSelectChange,
    label,
    helperText,
    color,
    optionName,
    optionValue,
    options,
    addAllOption,
    defaultLabel
  } = props
  return (
    <div>
      <div className="block">
        <Label
          htmlFor={name + '_unique_id'}
          value={label || 'Select'}
          color={color} // failure, success, warning
        />
      </div>
      <FBSelect
        id={name + '_unique_id'}
        onChange={handleSelectChange}
        value={value}
        name={name || 'text_default_name'}
        placeholder={placeholder || ''}
        required={required || false}
        helperText={helperText}
        color={color} // failure, success, warning
      >
        <option disabled value="">{defaultLabel || "Select"}</option>
        {addAllOption && <option value="">All</option>}
        {options?.length > 0 && options.map((data) =>
          <option value={data?.[optionValue]}>{data?.[optionName]}</option>
        )}
      </FBSelect>
    </div>
  )
}

export default Select