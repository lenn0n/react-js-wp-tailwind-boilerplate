import React, { useRef } from 'react'
import { useModal, useAlertModal } from "@hooks"
import Button from "@forms/Button/Button"
import Modal from '@components/Modals/Modal';

function Remove(props) {
	const { modalID } = props;
	const focusRef = useRef();
	const { showModal, hideModal } = useModal()

	return (
		<>
			<Modal
				id={`remove-company`}
				size="lg"
				title="Remove Company"
				initialFocus={focusRef}
				onHidden={hideModal()}
				footer={<>
					<div className='grid grid-cols-12 w-full gap-2'>
						<div className="col-span-6">
							<Button
								type="button"
								isLoading={false}
								className=" text-sub-secondary bg-gray-200 font-bold w-full hover:!text-sub-secondary hover:!bg-gray-200"
								handleOnClick={() => { hideModal() }}
							>Cancel</Button>
						</div>
						<div className="col-span-6">
							<Button
								type="button"
								className="font-bold w-full"
								isDefault={true}
								onClick={() => showModal({ id: "demo-modal" })}>
								Remove
							</Button>
						</div>
					</div>
				</>}
			>
				<p className="text-secondary mb-3">Are you sure you want to remove this Company?</p>
				<div className="flex flex-col md:flex-row gap-1 md:gap-2">
					<div className='flex flex-row gap-1 text-sub-secondary font-NotoSansBold'>
						<p>ID:</p>
						<p>123456</p>
					</div>
					<p className='text-sub-secondary font-NotoSansBold'>OP Software Dev Company</p>
				</div>
			</Modal>
		</>
	)
}

export default Remove
