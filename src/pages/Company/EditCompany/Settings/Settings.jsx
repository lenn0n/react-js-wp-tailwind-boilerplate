import React from 'react';

import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import Button from "@forms/Button/Button";
import Input from "@forms/Input/Input";
import Select from "@forms/Select/Select";
import { useModal } from "@hooks";
import CreateKey from './CreateKey/CreateKey';
import APIKey from './GenerateKey/ApiKey/APIKey';
import SecretKey from './GenerateKey/SecretKey/SecretKey';

function Settings() {
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
					<h5 className='font-bold text-lg'>Company Settings</h5>
				</div>

				<div className="grid grid-cols-12 items-end gap-2 md:gap-5 mb-3">
					<div className="col-span-full lg:col-span-5 xl:col-span-3">
						<Select
							label="Select Key"
							name="country"
							optionName="name"
							defaultLabel="Key Sample"
							optionValue="id"
							options={[
								{ name: "Key Sample", id: 1 },
								{ name: "Key Sample 2", id: 2 },
							]}
							required
						/>
					</div>

					<div className="col-span-full lg:col-span-5 xl:col-span-1">
						<CreateKey />
					</div>
				</div>
				<div className="grid grid-cols-12 items-end gap-2 md:gap-5">
					<div className="col-span-full lg:col-span-6 xl:col-span-4">
						<APIKey />
					</div>
					<div className="col-span-full lg:col-span-6 xl:col-span-4">
						<SecretKey />
					</div>
					<div className="col-span-full lg:col-span-6 xl:col-span-4">
						<APIKey />
					</div>
				</div>
			</div>
		</>
	)
}

export default Settings
