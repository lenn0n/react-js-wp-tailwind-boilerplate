import React, { useRef } from 'react'
import { useModal, useAlertModal } from "@hooks"
import Button from "@forms/Button/Button"
import Modal from '@components/Modals/Modal';
import Input from "@forms/Input/Input";

function ChangePassword(props) {
	const { modalID } = props;
	const focusRef = useRef();
	const { showModal, hideModal } = useModal()

	return (
		<>
			<Modal
				id={`change-profile-password`}
				size="lg"
				title="Change Password"
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
								isDefault={true}>
								Proceed
							</Button>
						</div>
					</div>
				</>}
			>
				<div className="mb-3">
					<Input
						label="Current Password"
						name='currentpassword'
						type="password"
						className="w-full"
						value={'Current Password'}
						required
					/>
				</div>
				<div className="mb-3">
					<Input
						label="New Password"
						name='newpassword'
						type="password"
						className="w-full"
						value={'New Password'}
						required
					/>
				</div>
				<div className="mb-3">
					<Input
						label="Confirm Password"
						name='confirmpassword'
						type="password"
						className="w-full"
						value={'Confirm Password'}
						required
					/>
				</div>
			</Modal>
		</>
	)
}

export default ChangePassword
