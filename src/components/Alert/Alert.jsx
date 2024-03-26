import React from 'react'
import { Alert as FBAlert } from 'flowbite-react'
const Alert = (props) => {
  const { label, type, className } = props;

  return (
    <>
      <FBAlert color={type} className={className}>
        {label}
      </FBAlert>
    </>
  )
}

export default Alert