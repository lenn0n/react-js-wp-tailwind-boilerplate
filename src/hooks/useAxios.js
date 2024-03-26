import { useState } from 'react';
import { useCookie } from '@hooks';
import { axiosInstance } from '@utils/config';
import { arrayJoin, objectToUrlParams } from "@helpers/array-objects"

const useAxios = () => {
  const {setCookie, removeAllToken} = useCookie()
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState('');
  const [errorFromCatch, setErrorFromCatch] = useState(false);
  const [response, setResponse] = useState(null);

  async function post(config) {
    setIsLoading(true);
    return await axiosInstance({
      service: config.service,
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
      service: config.service,
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
      service: config.service,
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
      service: config.service,
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
      service: config.service,
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
    console.log(err)
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
  }
}

export default useAxios
