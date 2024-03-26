import React from 'react';

import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import Button from "@forms/Button/Button";
import Input from "@forms/Input/Input";
import Select from "@forms/Select/Select";
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
							className=" bg-[#E9E9E9] text-sub-secondary hover:!bg-sub-secondary hover:!text-[#E9E9E9]font-bold w-full"
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
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Input
							label="Company Name"
							name="companyname"
							type="text"
							placeholder="OP Software Dev"
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Input
							label="Alternate Name"
							name="opsd"
							type="text"
							placeholder="OPSD"
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-6">
						<Input
							label="Company Address"
							name="address"
							type="text"
							placeholder="123 Los Angeles"
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Select
							label="Company Country"
							name="country"
							optionName="name"
							defaultLabel="United States"
							optionValue="id"
							options={[
								{ name: "United States", id: 1 },
								{ name: "United States 2", id: 2 },
							]}
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Input
							label="Company Zipcode"
							name="zipcode"
							type="text"
							placeholder="123123"
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Input
							label="Company Contact Number"
							name="number"
							type="number"
							placeholder="+1 234 567 890"
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Select
							label="Company State"
							name="state"
							optionName="name"
							defaultLabel="Select Role"
							optionValue="id"
							options={[
								{ name: "Florida", id: 1 },
								{ name: "Florida 2", id: 2 },
							]}
							required
						/>
					</div>
					<div className="col-span-full lg:col-span-6 xl:col-span-3 flex flex-col md:flex-row">
						<div className='w-full'>
							<div class="block">
								<label class="text-sm font-medium text-gray-900 dark:text-white" data-testid="flowbite-label" for="country_unique_id">Callback URL</label>
							</div>
							<div className="flex">
								<div className="relative w-full">
									<input type="search" id="location-search" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Callback URL" required />
									{/* <button type="submit" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
										<span className="">Test URL</span>
									</button> */}
									<Button
										type="button"
										className="absolute top-0 end-0 h-full p-2.5 rounded-s-none"
										isDefault={true}
									>
										<div className="flex items-center gap-3 justify-center">
											<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Test URL</span>
										</div>
									</Button>
								</div>
							</div>
						</div>
						<div>
						</div>

					</div>
					<div className="col-span-full lg:col-span-4 xl:col-span-3">
						<Button
							type="button"
							className="font-bold text-nowrap"
							isDefault={true}>
							Save
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
