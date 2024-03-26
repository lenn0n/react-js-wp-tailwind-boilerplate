import React from 'react'
import { Checkbox as FBCheckbox, Label } from 'flowbite-react';

const Checkbox = (props) => {
  const {
    label,
    name,
    value,
    handleCheckBoxChange
  } = props
  return (
    <div className="flex items-center gap-2">
      <FBCheckbox className="text-primary" id={name + '_unique_id'} name={name} checked={value} onChange={handleCheckBoxChange}/>
      <Label htmlFor={name + '_unique_id'}>{label || ""}</Label>
    </div>
  )
}

export default Checkbox