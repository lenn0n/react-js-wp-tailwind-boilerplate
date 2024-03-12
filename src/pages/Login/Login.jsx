import React from 'react'

const Login = () => {
  const getUrl = () => {
    return window.location.href
  }
  return (
    <>
      <div className='tw-flex tw-flex-col tw-justify-center
     tw-items-center tw-h-[100vh] tw-text-center'>
        <div className='tw-font-[900] tw-text-[200px]'>
          <span className='tw-text-lime-600 tw-mx-10'>LOGIN</span>
          PAGE
        </div>
        <div className='tw-font-[900] tw-text-[25px] tw-text-[#ccc] tw-mt-[-60px]'>
         The page you requested is currently under development.
        </div>
        <div className='tw-font-[900] tw-text-[20px] tw-text-rose-600'>
          { getUrl() }
        </div>
      </div>

    </>
  )
}

export default Login