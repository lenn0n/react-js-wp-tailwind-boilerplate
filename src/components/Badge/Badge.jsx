import React from 'react'

const Badge = (props) => {
  const { label, type, className } = props;

  const getColor = () => {
    switch (type) {
      case 'success':
        return 'text-[#5FB371] bg-[#DBFFE3]';

      case 'failure':
        return 'text-[#DF5656] bg-[#FFC1C1]';

      case 'warning':
        return 'text-[#E2A65C] bg-[#FFEFD6]';

      case 'cancelled':
        return 'text-[#929292] bg-[#E9E9E9]';

      default:
        return 'text-[#5FB371] bg-[#DBFFE3]';
    }
  }
  return (
    <>
      <div className={`text-sm font-bold ${getColor()} rounded-md break-all px-5 py-1 ${className}`}>{label}</div>
    </>
  )
}

export default Badge