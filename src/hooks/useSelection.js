import { useState } from "react";
import { useAxios } from "@hooks"
import { arrayObjectToURLParams } from "@helpers/array-objects"

const useSelection = () => {
  const { get } = useAxios()
  const [ selection, setSelection ] = useState()
  const [ isLoading, setIsLoading ] = useState(false)

  const retrieveSelection = async (payload) => {
    setIsLoading(true);
    const response = await get({
      service: "",
      url:"/select",
      requiresAuth: false,
      payload: arrayObjectToURLParams(payload)
    })
    setIsLoading(false);
    if (response.result){
      setSelection(response.data)
    }
  } 

  return {
    retrieveSelection,
    selection,
    isLoadingSelection: isLoading 
  }
}

export default useSelection