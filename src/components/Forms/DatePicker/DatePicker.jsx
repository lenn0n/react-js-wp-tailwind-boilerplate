import React, { useState } from 'react'
import Datepicker from "react-tailwindcss-datepicker";
import { Label } from 'flowbite-react';

const DatePicker = (props) => {
  const {
    name,
    value,
    handleDateRangeChange,
    label,
    color,
    showShortcuts = true,
    showFooter = true,
    inputClassName = "bg-gray-50 rounded-lg border-[1px] w-[100%] border-gray-300 focus:bg-transparent"
  } = props;

  const [dValue, setDValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });

  const onDateChange = (newValue) => {
    setDValue(newValue);
    // TODO: CHANGE RETURN VALUE HERE
    // {endDate : "2024-04-26", startDate : "2024-04-26"}
    handleDateRangeChange({ [name]: newValue.startDate + "," + newValue.endDate })
  }

  return (
    <div className=''>
      {label &&
        <div className="block">
          <Label
            htmlFor={name + '_unique_id'}
            value={label || 'Input'}
            color={color} // failure, success, warning
          />
        </div>
      }
      <Datepicker
        primaryColor={"red"}
        inputClassName={`${inputClassName}`}
        value={dValue}
        onChange={onDateChange}
        showShortcuts={showShortcuts}
        showFooter={showFooter}
      />
    </div>
  )
}

export default DatePicker