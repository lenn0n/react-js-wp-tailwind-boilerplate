import React from 'react';

import Sidebar from '@components/Sidebar/Sidebar';
import Roles from '../../Report/User/Roles/Roles';
import AddRole from './AddRole/AddRole';
// import DatePicker from '../../components/Forms/DatePicker/DatePicker';

function Role() {

	return (
		<>
			<div className='flex flex-row'>

				<Sidebar />

				<div className="main-content w-full p-5">
					<div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 mb-4">
						<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
							<div>
								<h4 className='title text-xl font-bold'>Roles</h4>
								<span className='text-lg font-normal'>Monday, March 04, 2024, 8:00am</span>
							</div>

							<div>
								<AddRole />
							</div>

						</div>
					</div>

					{/*Table*/}

					<div className="bg-white shadow rounded-xl">
						<div className='p-5 md:p-5 flex flex-row items-center justify-between'>
							<h5 className='font-bold text-2xl'>Roles List</h5>


							<div className='flex flex-row gap-2'>
								<form className="max-w-md mx-auto">
									<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
									<div className="relative">
										<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
											<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
											</svg>
										</div>
										<input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`"Request ID""Name, "Email"`} required />
									</div>
								</form>
								{/* <DatePicker
									name="daterange"
									value={false}
									handleDateRangeChange={false}
									inputClassName="bg-transparent text-primary border-2 border-primary rounded-lg"
								/> */}
							</div>

						</div>

						<Roles />

					</div>


				</div>
			</div>
		</>
	)
}

export default Role
