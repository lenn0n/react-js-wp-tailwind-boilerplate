import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '@components/Sidebar/Sidebar';

const MainLayout = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className="main-content w-full p-5">
        <Outlet />
      </div>
    </div>
  );
}
 
export default MainLayout;