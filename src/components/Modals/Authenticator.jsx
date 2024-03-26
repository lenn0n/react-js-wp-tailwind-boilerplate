import React, { useEffect, useRef } from 'react'
import Modal from '@components/Modals/Modal';
import { useModal, useForm, useAxios } from "@hooks"
import { useSelector } from 'react-redux';
import { isCallbackValid } from "@helpers/validator"
import Button from "@forms/Button/Button"
import Input from "@forms/Input/Input"
import Alert from '@components/Alert/Alert'
import VerificationCode from '../VerificationCode/VerificationCode';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';

const Authenticator = () => {
  const { componentProps } = useSelector((state) => state.modal)
  const { post, response, isLoading, alterResponseMessage } = useAxios()
  const { hideModal } = useModal()
  const codeRef = useRef()
  const {
    handleSubmit,
    formData,
    formLoading,
    fields,
    dispatchReducerAction,
    handleInputChange,
  } = useForm({
    onSubmitCallback: () => { handleVerifyCode() }
  })
  const handleClose = async () => {
    alterResponseMessage("")
    dispatchReducerAction("CLEAR_FORM_DATA")
    const close = await hideModal();
    if (close) {
      if (isCallbackValid(componentProps?.authenticator?.onHidden)) {
        componentProps?.authenticator?.onHidden()
      }
    }
  }

  const handleVerifyCode = async () => {
    const response = await post({
      service: "admin",
      url: "/authenticate",
      payload: {
        email: componentProps?.authenticator?.email,
        password: componentProps?.authenticator?.password,
        auth: {
          secret_key: componentProps?.authenticator?.auth?.secret_key || undefined,
          code: formData.code,
        }
      }
    })

    if (response?.result) {
      const close = await hideModal();
      if (close) {
        if (isCallbackValid(componentProps?.authenticator?.onSuccess)) {
          componentProps?.authenticator?.onSuccess(response)
        }
      }
    }
  }

  return (
    <Modal
      id="authenticator-modal"
      size={componentProps?.authenticator?.size || 'md'}
      onHidden={handleClose}
      initialFocus={codeRef}
      title="Authenticator"
      hideFooter={true}
    >
      {componentProps?.authenticator?.type !== 'setup' ?
        <>
          <div className="mb-4">
            Scan QR code below and provide the code to finish setting up.
          </div>
          <div className="flex items-center justify-center flex-col mb-3">
            <img src={componentProps?.authenticator?.auth?.qr_code || "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/QR_Code_Example.svg/1200px-QR_Code_Example.svg.png"} alt="qr" className='w-32 h-32 md:w-80 md:h-80 object-contain' />
            <div className='flex flex-col lg:flex-row justify-center items-start gap-2'>
              <div className="font-bold uppercase text-base text-nowrap">Secret key: </div>
              <div className="flex flex-row gap-2 md:gap-3">
                <div className="text-base break-all w-4/5">{componentProps?.authenticator?.auth?.secret_key}</div>
                <FeatherIcon icon="copy" className="text-primary w-10" role="button" />
              </div>
            </div>
            <div className="text-center">
              <p className='text-sm text-secondary'>(Do not share this key with anyone)</p>
            </div>
          </div>
        </> :
        <div className="mb-3">
          Enter the code from your <span className='font-bold'>Google Auth</span> app. The code expires every 30 seconds and a new code will be generated.
        </div>
      }
      <div className="mb-3 mt-3 h-">
        {response?.message && <Alert label={response.message} type="warning" />}
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        <VerificationCode />

        {/* Previous Verification Code*/}
        {/* <Input
          ref={codeRef}
          handleInputChange={handleInputChange}
          value={formData?.code ?? ''}
          label="Code"
          name="code"
          type="text"
          placeholder="000000"
          color={'secondary'}
          required
          helperText={componentProps?.authenticator?.type === 'setup' && <>Note: If you have already scanned the QR in the Google Authenticator App,
            delete first the previous entry on the app before scanning the QR again.</>}
        /> */}

        <div className="flex flex-row justify-end pt-3 w-full">
          <Button
            type="button"
            isLoading={false}
            className="bg-[#E9E9E9] text-sub-secondary hover:!bg-sub-secondary hover:!text-[#E9E9E9] me-1"
            onClick={handleClose}
          >Cancel</Button>
          <Button
            type="submit"
            isLoading={isLoading}
            className="bg-primary ms-1"
          >Verify and Login</Button>
        </div>
      </form>
    </Modal>
  )
}

export default Authenticator