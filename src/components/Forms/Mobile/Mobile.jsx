import React, { useEffect, useCallback, forwardRef } from 'react'
import { TextInput, Dropdown, Label } from 'flowbite-react';
import { useForm } from "@hooks"

const Mobile = forwardRef((props, ref) => {
  const {
    inputName,
    inputValue,
    selectName,
    selectValue,
    label,
    color,
    required,
    placeholder,
    countryCodeKey,
    countryNameKey,
    countryFlagKey,
    countryValue,
    options,
    handleInputChange,
    handleSelectChange
  } = props;

  const {
    formData,
    setFormDataValue,
    handleInputChange: handleQueryChange
  } = useForm({
    onSubmitCallback: () => { }
  })

  const onSelectChange = (data) => {
    setFormDataValue("selectedCountry", data)
    handleSelectChange({
      target: {
        name: selectName,
        value: data[countryValue]
      }
    })
  }

  useEffect(() => {
    checkPropsData()
  }, [])

  const checkPropsData = useCallback(() => {
    if (selectValue && options?.length > 0) {
      options.map((data) => {
        if (data[countryValue] == selectValue) {
          setFormDataValue("selectedCountry", data)
        }
      })
    }
  }, [selectValue, options])

  const handleSearchChange = (e) => {
    handleQueryChange(e)
  }

  return (
    <div>
      <div className="block">
        <Label
          htmlFor={inputName + '_unique_id'}
          value={label || 'Mobile Number'}
          color={color} // failure, success, warning
        />
      </div>
      <div className={`flex custom-input-wrapper ${color == 'failure' ? 'border-primary border-[2px] rounded-lg' : ''}`}>
        <Dropdown dismissOnClick={true} renderTrigger={() =>
          <div className="custom-dropdown relative  dark:bg-[#374151] dark:text-white dark:border-[#4b5563]" role='button'>
            {formData?.selectedCountry?.[countryCodeKey] ?
              <div className="text-nowrap overflow-hidden me-6 text-[14px] flex items-center">
                <div className={`d-inline-block flag ${String(formData?.selectedCountry?.[countryFlagKey || 'iso2']).toLowerCase()}`}></div>
                <div className="ms-1">+{formData?.selectedCountry?.[countryCodeKey]}</div>
              </div> :
              <div className="text-nowrap overflow-hidden me-6 text-[14px] flex items-center ">
                <div className={`d-inline-block flag af`}></div>
                <div className="ms-1">+1</div>
              </div>
            }
          </div>
        }>
          <div className="overflow-x-hidden max-h-[300px] max-w-[200px]">
            {useCallback(() => <>
              <Dropdown.Header>
                <TextInput
                  sizing={"sm"}
                  placeholder='Search country'
                  onChange={handleSearchChange}
                  value={formData?.query}
                  id={'search_unique_id'}
                  name="query"
                />
              </Dropdown.Header></>, [formData])()}
            {!formData?.query && options?.length > 0 && options?.map((data) =>
              <Dropdown.Item onClick={() => { onSelectChange(data) }}>
                <div className={`block flag ${String(data[countryFlagKey || 'iso2']).toLowerCase()}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="text-nowrap"> {data[countryNameKey || 'value']} </div>
              </Dropdown.Item>
            )}
            {formData?.query && formData?.filteredCountries?.length > 0 && formData?.filteredCountries?.map((data) =>
              <Dropdown.Item onClick={() => { onSelectChange(data) }}>
                <div className={`block flag ${String(data[countryFlagKey || 'iso2']).toLowerCase()}`}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div className="text-nowrap"> {data[countryNameKey || 'value']} </div>
              </Dropdown.Item>
            )}
          </div>
        </Dropdown>
        <TextInput
          ref={ref}
          id={inputName + '_unique_id'}
          name={inputName}
          className='custom-input w-[100%]'
          placeholder={placeholder || "XXXX XXXX XXXX XXXX"}
          required={required}
          onChange={handleInputChange}
          value={inputValue}
        />
      </div>

    </div>
  )
})

export default Mobile