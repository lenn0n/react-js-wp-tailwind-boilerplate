import React, { useRef } from 'react'

import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import Modal from '@components/Modals/Modal';
import Button from "@forms/Button/Button";
import Input from "@forms/Input/Input";
import { useModal } from "@hooks";

function SecretKey() {
	const focusRef = useRef()
	const { showModal, hideModal } = useModal()

	return (
		<>

			<div className='w-full'>
				<label className="">Secret Key</label>
				<div className="relative flex rounded-lg">
					<div className="relative w-3/5">
						<input type="text" id="hs-trailing-button-add-on-with-icon-and-button" name="hs-trailing-button-add-on-with-icon-and-button" className="py-3 px-4 pe-11 block w-full border border-gray-300 rounded-s-lg text-sm bg-gray-50 focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" value={"a9e32ff474c35d7ea0c432e6..."} />
						<div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-4">
							<FeatherIcon icon="copy" className="text-primary" />
						</div>
					</div>
					<button type="button" className="py-3 px-4 text-sm inline-flex justify-center items-center gap-x-2 font-semibold rounded-e-md border border-transparent text-white bg-gradient-to-b from-primary to-sub-primary disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-nowrap w-2/5" onClick={() => showModal({ id: "generate-secretkey-modal" })}>Generate Key</button>
				</div>
			</div>

			<Modal
				id="generate-secretkey-modal"
				title="Generate Key"
				size="xl"
				initialFocus={focusRef}
				onHidden={hideModal}
				footer={<>
					<div className='flex items-center justify-end gap-3 w-full'>
						<Button
							type="button"
							className="text-[#929292] bg-[#E9E9E9] hover:!text-[#929292] hover:!bg-[#E9E9E9]"
							onClick={() => hideModal()}>
							<span className="flex items-center transition-all duration-200 rounded-md text-base font-bold">Cancel</span>
						</Button>
						<Button
							type="button"
							className=" bg-gradient-to-b from-primary to-sub-primary"
							onClick={() => hideModal()}>
							<span className="flex items-center transition-all duration-200 rounded-md text-base font-bold">Generate</span>
						</Button>
					</div>
				</>}
			>
				<p className="text-secondary mb-2">Are you sure you want to generate new key?</p>
			</Modal>

		</>
	)
}

export default SecretKey
