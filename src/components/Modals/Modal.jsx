import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Modal as FBModal } from 'flowbite-react';
import { modalActions } from "@store/features/modal/modalSlice"
import { isCallbackValid } from "@helpers/validator"

const Modal = (props) => {
  const dispatch = useDispatch()
  const modalId = useSelector((state) => state.modal.modalId)
  const show = useSelector((state) => state.modal.show)
  const {
    id,
    onHidden,
    title,
    children,
    footer,
    hideFooter = false,
    hideHeader = false,
    size = "md",
    initialFocus, // See https://www.flowbite-react.com/docs/components/modal for more info.

  } = props;

  const handleOnClose = () => {
    dispatch(modalActions.hideModal())
  }

  useEffect(() => {
    if (!show && id === modalId) {
      if (isCallbackValid(onHidden)) {
        onHidden()
      }
    }
  }, [show])

  return (
    <div className=''>
      {modalId === id &&
        <FBModal
          show={show}
          onClose={handleOnClose}
          size={size}
          initialFocus={initialFocus}
        >
          {!hideHeader && <FBModal.Header className='py-3 !items-end font-poppins-bold'>{title}</FBModal.Header>}
          <FBModal.Body>{children}</FBModal.Body>
          {!hideFooter && <FBModal.Footer className='p-3 px-5'>{footer}</FBModal.Footer>}
        </FBModal>
      }
    </div>
  )

}

export default Modal 