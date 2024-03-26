import { useDispatch } from 'react-redux';
import { modalActions } from "@store/features/modal/modalSlice"

const useAlertModal = () => {
  const dispatch = useDispatch()

  const showSuccessAlert = (props) => {
    showModal("success", props)
  }
  const showErrorAlert = (props) => {
    showModal("error", props)
  }
  const showInfoAlert = (props) => {
    showModal("info", props)
  }

  const showModal = (type, props) => {
    dispatch(modalActions.showModal({
      id: 'alert-modal',
      componentProps: {
        alert: {
          ...props,
          type: type,
        }
      }
    }))
  }

  const hideModal = async () => {
    return await dispatch(modalActions.hideModal())
  }

  return {
    showSuccessAlert,
    showErrorAlert,
    showInfoAlert,
    hideModal
  }
}

export default useAlertModal