import React, { useState } from 'react'
import Table from "@components/Table/Table"
import { useNavigate } from 'react-router-dom';
import { useModal, useAlertModal, useTable, useAxios } from "@hooks"
import MoreOptions from '@components/Table/MoreOptions/MoreOptions';
import Modal from "@components/Modals/Modal"
import Button from "@forms/Button/Button"
function List() {
	const navigate = useNavigate()
	const { showSuccessAlert, showErrorAlert } = useAlertModal()
	const { showModal, hideModal } = useModal()
	const { get, remove, isLoading } = useAxios()
	const [selectedUser, setSelectedUser] = useState({})
	const { 
		setTableItems, 
		payload, 
		items,
		handleRefreshReport
	 } = useTable({
		retrieveReportHandler: () => {
			handleRetrieveUsers(payload)
		},
		displayItemPerPage: 10
	})

	const handleRetrieveUsers = async () => {
		const response = await get({
			service: "admin",
			url: "/account",
			requiresAuth: true,
			objectPayloadToURLParams: true,
			payload: payload
		})

		if (!response.result) {
			setTableItems({
				items: [],
				maxPage: 1,
			});
			return false;
		}
		else {
			let tempItems = [];

			if (response.data?.length > 0) {
				response.data.map((data) => {
					tempItems.push({
						type: "data",
						rows: [
							{ key: "user_id", value: data.id },
							{ key: "name", value: data.name },
							{ key: "email", value: data.email },
							{ key: "role", value: data.role },
							{ key: "access", value: "n/a" },
							{ key: "created_at", value: data.created_at },
							{
								key: "actions",
								value: <MoreOptions
									list={[
										{
											label: "Edit",
											onClick: () => { console.log("Edit") }
										},
										{
											label: "Remove",
											onClick: () => { handleRemoveUser(data) }
										},
									]}
								/>
							}
						]
					})
				})
				setTableItems({
					items: tempItems,
					maxPage: response?.per_page,
				});
			}
		}
	}

	const handleNavigate = (link) => {
		navigate(`/${link}`)
	}

	const tableHeaders = [
		{
			key: "user_id",
			label: "User ID"
		},
		{
			key: "name",
			label: "Name"
		},
		{
			key: "email",
			label: "Email"
		},
		{
			key: "role",
			label: "Role"
		},
		{
			key: "access",
			label: "Access"
		},
		{
			key: "created_at",
			label: "Time Created"
		},
		{
			key: "actions",
			label: "Actions"
		},

	]

	const handleRemoveUser = (data) => {
		setSelectedUser(data)
		showModal({
			id: "remove-confirmation-modal"
		})
	}

	const handleOnClose = () => {
		setSelectedUser({})
	}

	const removeUser = async () => {
		const response = await remove({
			service: "admin",
			url: "/account/" + selectedUser?.id,
			requiresAuth: true
		})

		const close = await hideModal()
		if (close) {
			if (response.result) {
				showSuccessAlert({
					message: response.message
				})
				handleRefreshReport()
			}
			else {
				showErrorAlert({
					message: response.message
				})
			}
		}
	}

	return (
		<>
			<div className="relative pb-5">
				<Table
					headers={tableHeaders}
					items={items}
					isTableLoading={isLoading}
				/>
			</div>
			<Modal
				id="remove-confirmation-modal"
				size={'md'}
				onHidden={handleOnClose}
				title="Remove User"
				footer={<div className='flex flex-row w-[100%]'>
					<Button
						type="button"
						isLoading={false}
						className="bg-secondary w-[100%] me-1"
						onClick={hideModal}
					>Cancel</Button>
					<Button
						type="button"
						isLoading={isLoading}
						className="bg-primary w-[100%] ms-1"
						onClick={removeUser}
					>Remove</Button>
				</div>}
			>
				<div className="">Are you sure you want to remove user
					<span className='font-bold ms-2'>{selectedUser.name} ({selectedUser.email})</span>?
				</div>
			</Modal>
		</>
	)
}

export default List
