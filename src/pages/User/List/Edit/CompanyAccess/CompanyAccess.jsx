import React from 'react';

import SaveSVG from '@assets/images/save.svg';
import Button from "@forms/Button/Button";
import { ReactSVG } from 'react-svg';
import Switch from '../../../../../components/Forms/Switch/Switch';

function CompanyAccess() {
	return (
		<>
			<div className="">
				<div className="flex flex-col md:flex-row items-start lg:items-center justify-between p-4 lg:p-5">
					<h5 className='font-bold text-lg'>Company Access</h5>
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
							Company 1
							<Switch checked={true} />
						</div>
					</li>
					<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
						<div className="flex flex-row items-center justify-between">
							Company 2
							<Switch checked={true} />
						</div>
					</li>
					<li className='[&:not(:last-child)]:border-b border-gray-300 p-4'>
						<div className="flex flex-row items-center justify-between">
							Company 3
							<Switch />
						</div>
					</li>
				</ul>
			</div>
		</>
	)
}

export default CompanyAccess
