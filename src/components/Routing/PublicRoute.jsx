import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { useCookie } from "@hooks"
import FullLoading from '@components/FullBackground/FullLoading';


function PublicRoute() {
  const navigate = useNavigate()
  const { getCookie } = useCookie()
  const [isValidating, setIsValidating] = useState(false)

  const getAccessToken = () => {
    return getCookie('user_token')
  }

  const getAuthToken = () => {
    return getAccessToken()
  }
  const hasUserToken = () => {
    return getAuthToken() !== ''
  }

  return (
    <>
      {isValidating ?
        <FullLoading loadingText='C H E C K I N G' />
        :
        <div className='fadeIn'>
          <Outlet />
        </div>

      }
    </>
  )
}

export default PublicRoute