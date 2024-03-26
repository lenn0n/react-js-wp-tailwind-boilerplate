import React from 'react';

import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import Button from "@forms/Button/Button";
import Input from "@forms/Input/Input";
import Select from "@forms/Select/Select";
import ChangePassword from './ChangePassword/ChangePassword';
import { useModal } from "@hooks";

function Profile() {
	const { showModal, hideModal } = useModal()

	const handleChangePasswordModal = (id) => {
		showModal({
			id: "change-profile-password",
			componentProps: { data: id }
		})

	}

	return (
		<>
			<div className="p-5">
				<div className="flex flex-col md:flex-row items-start lg:items-center justify-between mb-3 md:mb-4">
					<h5 className='font-bold text-lg'>User Details</h5>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-between gap-2">
					<div className="mb-4">
						<div className="flex flex-col md:flex-row items-center gap-5">
							<div className="bg-[#E9E9E9] border-2 border-[#707070] border-dashed rounded-lg">
								<label for="fusk" className='flex flex-col items-center justify-center gap-2 p-7 pointer-event '>
									<FeatherIcon icon="image" />
									<span className='text-[#707070] text-base'>Upload Photo</span>
								</label>
								<input id="fusk" type="file" name="photo" style={{ display: "none" }} />
							</div>
							<div className="flex flex-col">
								<h5 className='text-xl font-poppins-bold'>OP Software Dev Admin</h5>
								<h6 className='text-base font-NotoSans'>opsoftwaredev@email.com</h6>
							</div>
						</div>
					</div>

					<div className='flex flex-row gap-1 md:gap-2'>
						<Button
							type="button"
							isLoading={false}
							className=" text-sub-secondary bg-gray-200 font-bold w-full hover:!text-sub-secondary hover:!bg-gray-200"
						>Cancel</Button>
						<Button
							type="button"
							className="font-bold w-full text-nowrap"
							isDefault={true}>
							Save Changes
						</Button>
					</div>
				</div>


				<div className="grid grid-cols-12 items-end gap-2 md:gap-3">
					<div className="col-span-full md:col-span-4">
						<Input
							label="Email Address"
							name="email"
							type="email"
							placeholder="johndoe@email.com"
							required
						/>
					</div>
					<div className="col-span-full md:col-span-4">
						<Input
							label="Name"
							name="name"
							type="text"
							placeholder="John Doe"
							required
						/>
					</div>
					<div className="col-span-full md:col-span-4">
						<Select
							label="Role"
							name="role"
							optionName="name"
							defaultLabel="Select Role"
							optionValue="id"
							options={[
								{ name: "Role 1", id: 1 },
								{ name: "Role 2", id: 2 },
							]}
							required
						/>
					</div>
					<div className="col-span-full md:col-span-3">
						<Input
							label="Password"
							name='password'
							type="password"
							className="w-full"
							value={'password'}
							isDisabled={true}
							required
						/>
					</div>
					<div className="col-span-2">
						<Button
							type="button"
							className="w-full"
							isDefault={true}
							onClick={() => handleChangePasswordModal('change-profile-password')}
						>
							<span class="flex items-center transition-all duration-200 rounded-md text-sm font-bold">Change Password</span>
						</Button>
					</div>
				</div>

				<ChangePassword />
			</div>
		</>
	)
}

export default Profile
