import React from 'react'
import { Popover } from 'flowbite-react';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
const MoreOptions = (props) => {
  const {
    list
  } = props;

  return (
    <Popover
      trigger="hover"
      aria-labelledby="default-popover"
      content={
        <div className="text-sm text-gray-500 dark:text-gray-400 shadow">
          <div className="px-3">
            <ul>
              {list?.length > 0 && list.map((data) =>
                <li
                  key={data?.label}
                  className='py-2 pe-3 [&:not(:last-child)]:border-b border-gray-300'
                  role="button"
                  onClick={data?.onClick}
                >
                  {data?.label}
                </li>)}
            </ul>
          </div>
        </div>
      }
      arrow={false}
    >
      <div className='bg-transparent px-6 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2' role="button">
        <FeatherIcon icon="more-vertical" className="shadow border border-gray-300 rounded-md" />
      </div>
    </Popover>
  )
}

export default MoreOptions