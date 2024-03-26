import React, { useRef, useEffect, useState } from 'react'

import FeatherIcon from '@components/FeatherIcon/FeatherIcon'
import { useModal, useAlertModal, useForm, useAxios } from "@hooks"
import Button from "@forms/Button/Button"
import Modal from '@components/Modals/Modal';
import Alert from '@components/Alert/Alert'
import Input from "@forms/Input/Input"
import Select from "@forms/Select/Select"

function CreateUser() {
	const focusRef = useRef()
	const { showModal, hideModal } = useModal()
	const { showSuccessAlert } = useAlertModal()
	const { post, get, response, alterResponseMessage } = useAxios()
	const [ selections, setSelections ] = useState([])

	const {
		handleSubmit,
		formData,
		formLoading,
		handleInputChange,
		handleSelectChange,
		setFormData,
		setFormLoading,
		dispatchReducerAction
	} = useForm({
		onSubmitCallback: () => { handleCreateAdmin() }
	})

	const handleCreateAdmin = async() => {
		const response = await post({
			service: "admin",
			requiresAuth: true,
			url: "/account",
			payload: formData,
		})

		if (response.result){
			const close = hideModal();
			if (close){
				showSuccessAlert({
					content: <>
						<span className='font-bold me-2'>{formData.name}</span> was successfully created.
					</>
				})
			}
		}
	}

	const handleOnHiddenModal = () => {
		alterResponseMessage("")
    dispatchReducerAction("CLEAR_FORM_DATA")
	}

	const getRoleSelections = async() => {
		const response = await get({
			service: "admin",
			url: "/roles",
			requiresAuth: true
		});

		if (response.result){
			setSelections(response.data)
		}

	}

	useEffect(() => {
		getRoleSelections()
	}, [])
	

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
				onClick={() => showModal({ id: "create-user-modal" })}>
				<div className="flex items-center gap-3 justify-center">
					<div className="bg-white p-1 rounded-full">
						<FeatherIcon icon="plus" className="stroke-red-600 w-4 h-4" />
					</div>
					<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Create User</span>
				</div>
			</Button>

			<Modal
				id="create-user-modal"
				title="Create User"
				size="xl"
				initialFocus={focusRef}
				onHidden={handleOnHiddenModal}
				hideFooter
			>
				{response?.message && !response.result && <Alert label={response.message} type={response?.result ? 'success' : 'warning'} />}
				<form onSubmit={handleSubmit} className='mt-4'>
					<div className="mb-3">
						<Input
							ref={focusRef}
							handleInputChange={handleInputChange}
							value={formData?.name ?? ''}
							label="Name"
							name="name"
							type="name"
							placeholder="Name"
							required
						/>
					</div>
					<div className="mb-3">
						<Input
							handleInputChange={handleInputChange}
							value={formData?.email ?? ''}
							label="Email Address"
							name="email"
							type="email"
							placeholder="admin@opsoftware.dev"
							required
						/>
					</div>
					<div className="mb-3">
						<Select
							label="Role"
							name="role"
							optionName="value"
							value={formData?.role ?? ""}
							defaultLabel="Select One"
							optionValue="id"
							options={selections?? []}
							handleSelectChange={handleSelectChange}
							required
						/>
					</div>
					<div className="mb-3">
						<Input
							handleInputChange={handleInputChange}
							value={formData?.password ?? ''}
							label="Password"
							name="password"
							type="password"
							placeholder="Password"
							required
						/>
					</div>
					<div className='flex items-center justify-end gap-3 w-full mt-4'>
						<Button
							type="button"
							className="bg-secondary"
							onClick={() => hideModal()}>
							<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Cancel</span>
						</Button>
						<Button
							type="submit"
							isDefault>
							<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Create</span>
						</Button>
					</div>
				</form>
			</Modal>

		</>
	)
}

export default CreateUser
