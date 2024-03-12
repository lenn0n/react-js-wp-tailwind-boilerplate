import React from 'react'

function NoMatch() {
  const getUrl = () => {
    return window.location.href
  }
  return (
    <div className='tw-flex tw-flex-col tw-justify-center
    tw-items-center tw-h-[100vh] tw-text-center'>
       <div className='tw-font-[900] tw-text-[200px]'>
        PAGE
         <span className='tw-text-rose-600 tw-mx-10'>NOT</span>
         FOUND
       </div>
       <div className='tw-font-[900] tw-text-[25px] tw-text-[#ccc] tw-mt-[-60px]'>
        The page you requested has been removed or deleted.
       </div>
       <div className='tw-font-[900] tw-text-[20px] tw-text-rose-600'>
         { getUrl() }
       </div>
     </div>
  )
}

export default NoMatch