import React, { useState } from 'react';

import PageLayout from '@components/Layout/PageLayout/Layout';
import PageHeader from '@components/Layout/PageLayout/Header';
import PageSubHeader from '@components/Layout/PageLayout/SubHeader';
import LogHistory from '../../Report/LogHistory/LogHistory';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';

function EditCompany() {
	const [activeTab, setActiveTab] = useState(2);

	const handleTabClick = (id) => {
		setActiveTab(id);
	};


	return (
		<>
			<PageHeader customTitle=
				{
					<div className="flex flex-row items-center justify-start">
						<h5 className='font-bold text-xl text-[#CFC7C8] border-r-4 border-[#CFC7C8] pe-2'>Companies</h5>
						<h5 className='font-bold text-xl ps-2'>ID: 213246</h5>
					</div>
				}
			/>
			<div className="main-content w-full p-5">
				<div class="bg-white box-shadow-md p-4 rounded-xl border-2 border-gray-200 w-full mb-4">
					<div className="flex flex-wrap items-center gap-2 md:gap-3">
						<div>
							<button className={`tablinks text-lg py-2 px-5 md:px-6 lg:px-14 rounded-md hover:text-primary hover font-poppins-medium hover:bg-[#F7B8BF] ${activeTab === 1 ? "text-primary font-poppins-medium bg-[#F7B8BF]" : "text-sub-secondary"}`} onClick={() => { handleTabClick(1) }}>Profile</button>
						</div>
						<div>
							<button className={`tablinks text-lg py-2 px-5 md:px-6 lg:px-14 rounded-md hover:text-primary hover font-poppins-medium hover:bg-[#F7B8BF] ${activeTab === 2 ? "text-primary font-poppins-medium bg-[#F7B8BF]" : "text-sub-secondary"}`} onClick={() => { handleTabClick(2) }}>Settings</button>
						</div>
					</div>
				</div >

				<div className="bg-white box-shadow-md rounded-xl border-2 border-gray-200 mb-4">
					{activeTab === 1 && <>
						<Profile />
					</>}
					{activeTab === 2 && <>
						<Settings />
					</>}

				</div>
				{activeTab === 1 && <>
					<div className="bg-white box-shadow-md rounded-xl border-2 border-gray-200 w-full mb-4">
						<div className='p-5 md:p-5 flex flex-row items-center justify-between'>
							<h5 className='font-bold text-2xl'>Log History</h5>
						</div>

						<LogHistory />
					</div>
				</>}
			</div>
		</>
	)
}

export default EditCompany
