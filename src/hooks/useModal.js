import { useDispatch } from 'react-redux';
import { modalActions } from "@store/features/modal/modalSlice"

const useModal = () => {
  const dispatch = useDispatch()
  const showModal = ({ id, componentProps}) => {
    if (id){
      dispatch(modalActions.showModal({ id, componentProps}))
    }
  }

  const hideModal = async() => {
    return await dispatch(modalActions.hideModal())
  }
 
  return {
    showModal,
    hideModal
  }
}

export default useModal