import React from 'react';

const Header = ({ title = '', customTitle = '', children }) => {
  return (
    <div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 mb-4">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
        <div>
          {customTitle && customTitle}
          {title && <h4 className='title text-xl font-poppins-bold'>{title}</h4>}
          <span className='text-lg font-normal'>Monday, March 04, 2024, 8:00am</span>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
 
export default Header;