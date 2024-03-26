import React from 'react';

import SaveSVG from '@assets/images/save.svg';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import Sidebar from '@components/Sidebar/Sidebar';
import Button from "@forms/Button/Button";
import Input from "@forms/Input/Input";
import Select from "@forms/Select/Select";
import { ReactSVG } from 'react-svg';
import Switch from '../../../../components/Forms/Switch/Switch';
import LogHistory from '../../../Report/LogHistory/LogHistory';

function Edit() {

	return (
		<>
			<div className='flex flex-row'>

				<Sidebar />

				<div className="main-content w-full p-5">
					<div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 mb-4">
						<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
							<div>
								<div className='flex flex-row items-center justify-start'>
									<h5 className='font-poppins-bold text-xl text-[#CFC7C8] border-r-4 border-[#CFC7C8] pe-2'>Roles</h5>
									<h5 className='font-poppins-bold text-xl ps-2'>OP Software Dev Admin</h5>
								</div>
								<span className='text-lg font-normal'>Monday, March 04, 2024, 8:00am</span>
							</div>

						</div>
					</div>


					<div className="grid grid-cols-12 gap-3 mb-4 lg:mb-5">
						<div className="hidden xl:flex xl:col-span-2"></div>

						<div className="col-span-full lg:col-span-6 xl:col-span-4">
							<div className="bg-white box-shadow-md rounded-xl border-2 border-gray-200 mb-4">
								<div className="flex flex-col md:flex-row items-start lg:items-center justify-between p-4 lg:p-5">
									<h5 className='font-bold text-lg'>Restrictions (3)</h5>
									<Button
										type="button"
										className="p-1"
										isDefault={true}
									>
										<div className="flex items-center gap-3 justify-center">
											<ReactSVG src={SaveSVG} />
											<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Save</span>
										</div>
									</Button>
								</div>
								<ul className='border-t border-primary'>
									<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
										<div className="flex flex-row items-center justify-between">
											Permission 1
											<Switch checked={true} />
										</div>
									</li>
									<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
										<div className="flex flex-row items-center justify-between">
											Permission 2
											<Switch checked={true} />
										</div>
									</li>
									<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
										<div className="flex flex-row items-center justify-between">
											Permission 3
											<Switch />
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-span-full lg:col-span-6 xl:col-span-4">
							<div className="bg-white box-shadow-md rounded-xl border-2 border-gray-200 mb-4">
								<div className="flex flex-col md:flex-row items-start lg:items-center justify-between p-4 lg:p-5">
									<h5 className='font-bold text-lg'>Restrictions (3)</h5>
									<Button
										type="button"
										className="p-1"
										isDefault={true}
									>
										<div className="flex items-center gap-3 justify-center">
											<ReactSVG src={SaveSVG} />
											<span class="flex items-center transition-all duration-200 rounded-md text-base font-bold">Save</span>
										</div>
									</Button>
								</div>
								<ul className='border-t border-primary'>
									<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
										<div className="flex flex-row items-center justify-between">
											Restrictions 1
											<Switch checked={false} />
										</div>
									</li>
									<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
										<div className="flex flex-row items-center justify-between">
											Restrictions 2
											<Switch checked={true} />
										</div>
									</li>
									<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
										<div className="flex flex-row items-center justify-between">
											Restrictions 3
											<Switch />
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="hidden xl:flex xl:col-span-2"></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Edit
