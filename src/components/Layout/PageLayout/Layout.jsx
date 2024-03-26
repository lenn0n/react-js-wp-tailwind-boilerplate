import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-white shadow rounded-xl">
      {children}
    </div>
  );
}
 
export default Layout;