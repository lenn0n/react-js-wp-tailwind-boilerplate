import React, { useState } from 'react';

import SaveSVG from '@assets/images/save.svg';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import Sidebar from '@components/Sidebar/Sidebar';
import Button from "@forms/Button/Button";
import Input from "@forms/Input/Input";
import Select from "@forms/Select/Select";
import { ReactSVG } from 'react-svg';
import Switch from '../../../../components/Forms/Switch/Switch';
import LogHistory from '../../../Report/LogHistory/LogHistory';
import Profile from './Profile/Profile';
import CompanyAccess from './CompanyAccess/CompanyAccess';

function Edit() {
	const [activeTab, setActiveTab] = useState(1);

	const handleTabClick = (id) => {
		setActiveTab(id);
	};


	return (
		<>
			<div className='flex flex-row'>

				<Sidebar />

				<div className="main-content w-full p-5">
					<div className="bg-white box-shadow-md p-5 rounded-xl border-2 border-gray-200 mb-4">
						<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
							<div>
								<div className='flex flex-row items-center justify-start'>
									<h5 className='font-bold text-xl text-[#CFC7C8] border-r-4 border-[#CFC7C8] pe-2'>Users</h5>
									<h5 className='font-bold text-xl ps-2'>ID: 245312</h5>
								</div>
								<span className='text-lg font-normal'>Monday, March 04, 2024, 8:00am</span>
							</div>

						</div>
					</div>


					< div class="bg-white box-shadow-md p-4 rounded-xl border-2 border-gray-200 w-full mb-4">
						<div className="flex flex-wrap items-center gap-2 md:gap-3">
							<div>
								<button className={`tablinks text-lg py-2 px-5 md:px-6 lg:px-14 rounded-md hover:text-primary hover font-poppins-medium hover:bg-[#F7B8BF] ${activeTab === 1 ? "text-primary font-poppins-medium bg-[#F7B8BF]" : "text-sub-secondary"}`} onClick={() => { handleTabClick(1) }}>Profile</button>
							</div>
							<div>
								<button className={`tablinks text-lg py-2 px-5 md:px-6 lg:px-14 rounded-md hover:text-primary hover font-poppins-medium hover:bg-[#F7B8BF] ${activeTab === 2 ? "text-primary font-poppins-medium bg-[#F7B8BF]" : "text-sub-secondary"}`} onClick={() => { handleTabClick(2) }}>Company Access</button>
							</div>
							<div>
								<button className={`tablinks text-lg py-2 px-5 md:px-6 lg:px-14 rounded-md hover:text-primary hover font-poppins-medium hover:bg-[#F7B8BF] ${activeTab === 3 ? "text-primary font-poppins-medium bg-[#F7B8BF]" : "text-sub-secondary"}`} onClick={() => { handleTabClick(3) }}>Logs</button>
							</div>
						</div>
					</div >

					<div className="bg-white box-shadow-md rounded-xl border-2 border-gray-200 mb-4">
						{activeTab === 1 && <>
							<Profile />
						</>}
						{activeTab === 2 && <>
							<CompanyAccess />
						</>}
						{activeTab === 3 && <>
							<div className='p-5 md:p-5 flex flex-row items-center justify-between'>
								<h5 className='font-bold text-2xl'>Log History</h5>
							</div>

							<LogHistory />
						</>}

					</div>
				</div>
			</div>
		</>
	)
}

export default Edit
