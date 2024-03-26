import { useDispatch } from 'react-redux';
import { toastActions } from "@store/features/toast/toastSlice"
let toastTimer = ""
const useToast = () => {
  const dispatch = useDispatch()

  const showSuccessToast = (props) => {
    clearTimeout(toastTimer)
    showToast({ ...props, type: "success" })
    autoHideToast(props)
  }
  
  const showErrorToast = (props) => {
    clearTimeout(toastTimer)
    showToast({ ...props, type: "error" })
    autoHideToast(props)
  }
  
  const showInfoToast = (props) => {
    clearTimeout(toastTimer)
    showToast({ ...props, type: "info" })
    autoHideToast(props)
  }

  const showToast = (props) => {
    return dispatch(toastActions.showToast({
      componentProps: props
    }))
  }

  const autoHideToast = (props) => {
    toastTimer = setTimeout(() => {
      hideToast()
      clearTimeout(toastTimer)
    }, props?.interval || 4000);
  }

  const hideToast = async () => {
    return await dispatch(toastActions.hideToast())
  }

  return {
    showSuccessToast,
    showErrorToast,
    showInfoToast,
    hideToast
  }
}

export default useToast