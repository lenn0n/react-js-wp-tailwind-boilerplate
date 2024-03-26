import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useCookie } from "@hooks"
import FullLoading from '@components/FullBackground/FullLoading';


function PublicRoute() {
  const navigate = useNavigate()
  const { getCookie } = useCookie()
  const [isValidating, setIsValidating] = useState(false)

  const getAccessToken = () => {
    return getCookie('admin_token')
  }

  useEffect(() => {
    if (getAccessToken()) {
      navigate("/dashboard")
    }
  }, [])


  return (
    <>
      {isValidating ?
        <FullLoading loadingText='C H E C K I N G' />
        :
        <div className='fadeIn dark:bg-black'>
          <Outlet />
        </div>

      }
    </>
  )
}

export default PublicRoute