export default `import React, { useRef } from 'react'
import { useModal, useAlertModal } from "@hooks"
import Button from "@forms/Button/Button"
import Modal from '@components/Modals/Modal';
import AlertModal from '@components/Modals/AlertModal';
...
const focusRef = useRef();
const { showModal, hideModal } = useModal()
const { showSuccessAlert } = useAlertModal()
return (
  <>
  <AlertModal/>
  <Modal
    id="demo-modal"
    size="xl"
    title="Mobile Number"
    initialFocus={focusRef}
    onHidden={async () => {
      const close = await hideModal();
      if (close) {
        showModal({ id: 'demo-modal-2' })
      }
    }}
    footer={<>
      <Button
        type="button"
        isLoading={false}
        className="bg-green-500 w-[100%]"
        onClick={() => { hideModal() }}
      >Update</Button>
    </>}
    >
    <div className="text-secondary mb-4">Please update your mobile number.</div>
    <input ref={focusRef} placeholder="Input"/>
    </Modal>
    <Modal
      id="demo-modal-2"
      title="Success"
      size="sm"
      footer={<>
        <Button
          type="button"
          isLoading={false}
          className="bg-primary w-[100%]"
          onClick={() => { hideModal() }}
        >Close</Button>
      </>}
      >
      You have successfully updated your mobile!
    </Modal>
    <Button
      type="button"
      className="bg-primary"
      onClick={() => showModal({ id: "demo-modal" })}>
      Show Modal with Input Focus
    </Button>
    <Button
      type="button"
      className="bg-green-500 mt-4"
      onClick={() => showSuccessAlert({
        content: <div className='text-center'>This is an example of a working modal.</div>
      })}
    >
    Show Success Alert Modal
    </Button>
  </>
)


`