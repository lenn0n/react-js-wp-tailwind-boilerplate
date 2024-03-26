import React from 'react';

import PageHeader from '@components/Layout/PageLayout/Header';
import Request from '../Report/Request/Request';
import DoughNut from './ChartJS/Doughnut/Doughnut';
import LineChart from './ChartJS/LineChart/LineChart';
// import DatePicker from '../../components/Forms/DatePicker/DatePicker';

function Dashboard() {

	return (
		<>
			<PageHeader title="Dashboard" />
			<div className='grid grid-cols-6 gap-5 mb-5'>
				<div className='col-span-full md:col-span-3 lg:col-span-2'>
					<div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 ">
						<h1 className=' text-5xl font-bold'>45</h1>
						<span className='text-md text-gray-500 font-bold'>Pending Request</span>
					</div>
				</div>
				<div className='col-span-full md:col-span-3 lg:col-span-2'>
					<div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 ">
						<h1 className=' text-5xl font-bold'>1542</h1>
						<span className='text-md text-gray-500 font-bold'>Refunds</span>
					</div>
				</div>
				<div className='col-span-full md:col-span-3 lg:col-span-2'>
					<div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 ">
						<h1 className=' text-5xl font-bold'>3254</h1>
						<span className='text-md text-gray-500 font-bold'>Companies</span>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-12 gap-5 mb-5">
				<div className='col-span-full md:col-span-7 lg:col-span-5 xl:col-span-3'>
					<div className="bg-white px-5 py-6 box-shadow-lg rounded-xl border-2 border-gray-200 w-full">
						<div className="flex flex-row items-center justify-between mb-6 md:mb-7">
							<h6 className='text-base md:text-lg font-bold'>Transaction Status</h6>
						</div>
						<DoughNut />
					</div>
				</div>
				<div className="col-span-full xl:col-span-9">
					<div className="bg-white p-4 box-shadow-lg rounded-xl border-2 border-gray-200 w-full h-full">
						<div className="flex flex-row items-center justify-between mb-6 md:mb-7">
							<h6 className='text-base md:text-lg font-bold'>Transaction Status</h6>
						</div>
						<LineChart />
					</div>
				</div>
			</div>
			<div className="bg-white shadow rounded-xl">
				<div className='p-5 md:p-5 flex flex-row items-center justify-between'>
					<h5 className='font-bold text-2xl'>Requests</h5>


					<div className='flex flex-row gap-2'>
						<form className="max-w-md mx-auto">
							<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
							<div className="relative">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
									</svg>
								</div>
								<input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
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

				<Request />

			</div>
		</>
	)
}

export default Dashboard
