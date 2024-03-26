import React, { useRef } from 'react'

import FeatherIcon from '@components/FeatherIcon/FeatherIcon'
import { useModal, useAlertModal } from "@hooks"
import Button from "@forms/Button/Button"
import Modal from '@components/Modals/Modal';
import AlertModal from '@components/Modals/AlertModal';
import Input from "@forms/Input/Input"
import Select from "@forms/Select/Select"

function CreateKey() {

	const focusRef = useRef()

	const { showModal, hideModal } = useModal()
	const { showSuccessAlert } = useAlertModal()

	return (
		<>
			{/* <button type="submit" class="group flex items-center gap-3 justify-center px-5 py-2.5 text-center font-medium relative focus:z-10 focus:outline-none transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 rounded-lg bg-gradient-to-b from-primary to-sub-primary">
				<div className="bg-white p-1 rounded-full">
					<FeatherIcon icon="plus" className="stroke-red-600 w-4 h-4" />
				</div>
				<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Create User</span>
			</button> */}

			<Button
				type="button"
				className=" bg-gradient-to-b from-primary to-sub-primary"
				onClick={() => showModal({ id: "create-key-modal" })}>
				<div className="flex items-center gap-3 justify-center">
					<div className="bg-white p-1 rounded-full">
						<FeatherIcon icon="plus" className="stroke-red-600 w-4 h-4" />
					</div>
					<span class="text-nowrap rounded-md text-sm font-bold">Create Key</span>
				</div>
			</Button>

			<Modal
				id="create-key-modal"
				title="Create Key"
				size="xl"
				initialFocus={focusRef}
				onHidden={hideModal}
				footer={<>
					<div className='flex items-center justify-end gap-3 w-full'>
						<Button
							type="button"
							className="bg-[#E9E9E9] text-sub-secondary hover:!bg-sub-secondary hover:!text-[#E9E9E9]"
							onClick={() => hideModal()}>
							<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Cancel</span>
						</Button>
						<Button
							type="button"
							className=" bg-gradient-to-b from-primary to-sub-primary"
							onClick={() => hideModal()}>
							<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Create</span>
						</Button>
					</div>
				</>}
			>
				<p className="text-secondary mb-2">Please provide details below</p>
				<div className="mb-3">
					<Input
						label="Key Name"
						name="keyname"
						type="text"
						placeholder="Key Name"
						color=""
						required
					/>
				</div>
			</Modal>

		</>
	)
}

export default CreateKey
