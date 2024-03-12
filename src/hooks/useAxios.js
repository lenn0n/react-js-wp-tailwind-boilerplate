import { useState } from 'react';
import Axios from 'axios';
import { useCookie, useEncryption } from '@hooks';
import { arrayJoin, objectToUrlParams } from "@helpers/array-objects"


let devMode = ''
switch (window.location.hostname) {
  case 'localhost':
    devMode = 'dev'
    break;
  case '192.168.1.125':
    devMode = 'local'
    break;
  case '192.168.1.121':
    devMode = 'local'
    break;
  case 'dev.vacaybucks.com':
    devMode = 'dev'
    break;
  case 'staging.vacaybucks.com':
    devMode = 'staging'
    break;
  case 'vacaybucks.com':
    devMode = 'production'
    break;
  default:
    devMode = 'staging'
    break;
}

const APIEndpoints = {
  local: 'http://192.168.1.127:45454/api',
  local2: 'http://192.168.1.122:45454/api',
  dev: 'https://api.dev.vacaybucks.com/api',
  staging: 'https://api.staging.vacaybucks.com/api',
  production: 'https://api.vacaybucks.com/api'
}

const axiosInstance = (data) => {
  const { getCookie } = useCookie()
  const { decode } = useEncryption()
  let headers = {}, baseURL = APIEndpoints[devMode]

  const getAccessToken = () => {
    return decode(getCookie('user_token'))
  }

  const getTempAccessToken = () => {
    return decode(getCookie('temp_user_token'))
  }

  const getToken = () => {
    if (getTempAccessToken()) {
      return getTempAccessToken()
    } else {
      return getAccessToken()
    }
  }

  if (data.headers) {
    headers = data.headers
  }

  if (data.requiresAuth) {
    if (data.authPrefix) {
      headers['Authorization'] = data.authPrefix + " " + getToken()
    } else {
      headers['Authorization'] = getToken()
    }
  }

  if (data?.additionalHeaders) {
    headers = {
      ...headers,
      ...data.additionalHeaders
    };
  }

  return Axios.create({
    baseURL,
    headers
  })
}

const useAxios = () => {
  const { removeCookie, setCookie, removeAllToken } = useCookie()
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState('');
  const [errorFromCatch, setErrorFromCatch] = useState(false);
  const [response, setResponse] = useState(null);

  const getBaseURL = () => {
    return APIEndpoints[devMode]
  }

  const handleSuccessResponse = (response) => {
    const responseData = {
      result: true,
      headers: response?.headers,
      ...response?.data
    }

    setIsLoading(false);
    setResult(true);
    setErrorFromCatch(false);
    setResponse(responseData);

    return responseData;
  }

  const checkIfUnauthorized = (statusCode) => {
    if (statusCode === 401) {
      removeAllToken()
      const hostName = String(window.location.hostname).replace("dev", "").replace("staging", "")
      setCookie({ 
        name: 'login_message', 
        value: 'Your account session has been expired. Please login again to continue.',
        domain: hostName
      });
      window.location.href = "/login"
    }
  }

  const handleCatchResponse = (err) => {
    checkIfUnauthorized(err?.response?.status)
    setIsLoading(false);
    const errMessage = err?.response?.data?.message ??
      'Unknown error occured. Please check your internet connection.'

    const responseData = {
      result: false,
      message: errMessage
    }

    setResult(false);
    setErrorFromCatch(true);
    setError(errMessage);
    setResponse(responseData);

    return responseData
  }

  const alterResponseMessage = (message) => {
    setResponse((response) => { return { ...response, message } })
  }

  const clearResponseMessage = () => {
    setResponse((response) => { return { ...response, message: "" } })
  }

  async function post(config) {
    setIsLoading(true);
    return await axiosInstance({
      requiresAuth: config.requiresAuth,
      authPrefix: config.authPrefix,
      headers: config.headers,
      additionalHeaders: config.additionalHeaders,
    })
      .post(config.url,
        config?.objectPayloadToURLParams ?
          objectToUrlParams(config?.payload) : config?.payload ?? {},
        {
          onUploadProgress: (progressEvent) => {
            const total = parseFloat(progressEvent.total)
            const rate = progressEvent.rate
            const estimate = parseFloat(progressEvent.estimated)
            const current = progressEvent.loaded
            const percentCompleted = Math.floor(current / total * 100)

            if (config?.onUpload) {
              config.onUpload({ total, current, percentCompleted, rate, estimate })
            }
          }
        })
      .then((response) => {
        return handleSuccessResponse(response)
      }).catch((err) => {
        return handleCatchResponse(err)
      });
  }

  async function put(config) {
    setIsLoading(true);
    return await axiosInstance({
      requiresAuth: config.requiresAuth,
      authPrefix: config.authPrefix,
      headers: config.headers,
      additionalHeaders: config.additionalHeaders,
    })
      .put(config.url,
        config?.objectPayloadToURLParams ?
          objectToUrlParams(config?.payload) : config?.payload ?? {},
        {
          onUploadProgress: (progressEvent) => {
            const total = parseFloat(progressEvent.total)
            const rate = progressEvent.rate
            const estimate = parseFloat(progressEvent.estimated)
            const current = progressEvent.loaded
            const percentCompleted = Math.floor(current / total * 100)

            if (config?.onUpload) {
              config.onUpload({ total, current, percentCompleted, rate, estimate })
            }
          }
        })
      .then((response) => {
        return handleSuccessResponse(response)
      }).catch((err) => {
        return handleCatchResponse(err)
      });
  }

  const get = async (config) => {
    setIsLoading(true);
    return await axiosInstance({
      requiresAuth: config.requiresAuth,
      authPrefix: config.authPrefix,
      headers: config.headers,
      additionalHeaders: config.additionalHeaders,
    })
      .get(arrayJoin([
        config.url, "?",
        config?.objectPayloadToURLParams ?
          objectToUrlParams(config?.payload) : config?.payload]) ?? {})
      .then((response) => {
        return handleSuccessResponse(response)
      }).catch((err) => {
        return handleCatchResponse(err)
      });
  }

  
  const remove = async (config) => {
    setIsLoading(true);
    return await axiosInstance({
      requiresAuth: config.requiresAuth,
      authPrefix: config.authPrefix,
      headers: config.headers,
      additionalHeaders: config.additionalHeaders,
    })
      .delete(arrayJoin([
        config.url, "?",
        config?.objectPayloadToURLParams ?
          objectToUrlParams(config?.payload) : config?.payload]) ?? {})
      .then((response) => {
        return handleSuccessResponse(response)
      }).catch((err) => {
        return handleCatchResponse(err)
      });
  }

  async function patch(config) {
    setIsLoading(true);
    return await axiosInstance({
      requiresAuth: config.requiresAuth,
      authPrefix: config.authPrefix,
      headers: config.headers,
      additionalHeaders: config.additionalHeaders,
    })
      .patch(config.url,
        config?.objectPayloadToURLParams ?
          objectToUrlParams(config?.payload) : config?.payload ?? {})
      .then((response) => {
        return handleSuccessResponse(response)
      }).catch((err) => {
        return handleCatchResponse(err)
      });
  }

  return {
    isLoading,
    result,
    error,
    errorFromCatch,
    response,
    alterResponseMessage,
    clearResponseMessage,
    put,
    post,
    get,
    remove,
    patch,
    getBaseURL
  }
}

export default useAxios
