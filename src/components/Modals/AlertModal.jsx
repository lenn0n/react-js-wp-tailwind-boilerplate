import React from 'react'
import Modal from '@components/Modals/Modal';
import { useModal } from "@hooks"
import { useSelector } from 'react-redux';
import { isCallbackValid } from "@helpers/validator"
import Button from "@forms/Button/Button"
import Logo from "@assets/images/logo/logo.svg"
const AlertModal = () => {
  const { componentProps } = useSelector((state) => state.modal);
  const { hideModal } = useModal()
  const handleClose = async () => {
    const close = await hideModal();
    if (close) {
      if (isCallbackValid(componentProps?.alert?.onHidden)) {
        componentProps?.alert?.onHidden()
      }
    }
  }

  const getTitleValue = (type) => {
    switch (type) {
      case 'success':
        return 'Success';
      case 'error':
        return 'Error';
      case 'info':
        return 'Info';
      default:
        return 'All Good';
    }
  }

  return (
    <Modal
      id="alert-modal"
      size={componentProps?.alert?.size || 'md'}
      onHidden={handleClose}
      hideHeader
      footer={<>
        <Button
          type="button"
          isLoading={false}
          className="bg-primary w-[100%]"
          onClick={handleClose}
        >Close</Button>
      </>}
    >
      <div className="flex items-center justify-center flex-col mt-3">
        <img src={Logo} alt="" height={60} width={60} />
        <div className="font-bold mt-4 text-[22px]">
          {componentProps?.alert?.title || getTitleValue(componentProps?.alert?.type)}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {componentProps?.alert?.message}
        {componentProps?.alert?.content}
      </div>

    </Modal>
  )
}

export default AlertModal