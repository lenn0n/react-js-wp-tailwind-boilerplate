import React from 'react'
import { Checkbox, Label } from 'flowbite-react';

const FormCheckbox = (props) => {
  const {
    label,
    name,
    value,
    handleCheckBoxChange
  } = props
  return (
    <div className="flex items-center gap-2">
      <Checkbox className="text-primary" id={name + '_unique_id'} name={name} checked={value} onChange={handleCheckBoxChange}/>
      <Label htmlFor={name + '_unique_id'}>{label || ""}</Label>
    </div>
  )
}

export default FormCheckbox