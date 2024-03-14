import React from 'react'

function NoMatch() {
  const getUrl = () => {
    return window.location.href
  }

  return (
    <>
      <div className='font-poppins-bold flex flex-col justify-center
    items-center h-[100vh] text-center'>
        <div className='font-[900] text-[200px]'>
          PAGE
          <span className='text-primary mx-10'>NOT</span>
          FOUND
        </div>
        <div className='font-[900] text-[25px] text-[#ccc] mt-[-60px]'>
          The page you requested has been removed or deleted.
        </div>
        <div className='font-[900] text-[20px] text-rose-600'>
          {getUrl()}
        </div>
      </div>
    </>
  )
}

export default NoMatch