import React, { useState } from 'react'

import { Button, Popover, Dropdown } from 'flowbite-react';
import { ReactSVG } from 'react-svg';
import ArrowDownSVG from '@assets/images/arrow-dropdown.svg';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import FormSwitch from '@components/Forms/Switch/Switch';
import { Link, useNavigate } from 'react-router-dom';

function LogHistory() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(`/${link}`)
  }

  return (
    <>
      <div className="relative pb-5">
        <div>
          <table className="hidden lg:table w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-gray-700 uppercase border-y border-primary">
              <tr>
                <th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
                  Log
                </th>
                <th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
                  New
                </th>
                <th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
                  Old
                </th>
                <th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  Approve Request ID: 123456
                </th>
                <td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  Approve
                </td>
                <td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  Pending
                </td>
                <td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  03/12/2024 12:45 AM
                </td>
              </tr>
              <tr className="border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  Last Login
                </th>
                <td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  -
                </td>
                <td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  -
                </td>
                <td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
                  03/12/2024 12:45 AM
                </td>
              </tr>
            </tbody>
          </table>

          {/*Mobile View*/}
          <div className="block lg:hidden dark:bg-gray-800 dark:border-gray-700">
            <div className="border-y border-primary py-3 md:py-5">
              <ul>
                <li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
                  <div className="flex flex-row items-center justify-between">
                    <h6 className='text-primary font-NotoSansBold text-base'>Log</h6>
                    <span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
                      Approve Request ID: 123456
                    </span>
                  </div>
                </li>
                <li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
                  <div className="flex flex-row items-center justify-between">
                    <h6 className='text-primary font-NotoSansBold text-base'>New</h6>
                    <span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
                      Approve
                    </span>
                  </div>
                </li>
                <li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
                  <div className="flex flex-row items-center justify-between">
                    <h6 className='text-primary font-NotoSansBold text-base'>Old</h6>
                    <span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
                      Pending
                    </span>
                  </div>
                </li>
                <li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
                  <div className="flex flex-row items-center justify-between">
                    <h6 className='text-primary font-NotoSansBold text-base'>Date & Time</h6>
                    <span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
                      03/12/2024 12:45 AM
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default LogHistory
