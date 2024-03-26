import React, { useState } from 'react';

import ArrowDownSVG from '@assets/images/arrow-dropdown.svg';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import FormSwitch from '@components/Forms/Switch/Switch';
import { useModal } from "@hooks";
import { Popover } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import Remove from './Remove/Remove';

function Table() {
	const { showModal, hideModal } = useModal()
	const [isChecked, setIsChecked] = useState(false);
	const navigate = useNavigate()

	const handleNavigate = (link) => {
		navigate(`/${link}`)
	}

	const handleRemoveModal = (id) => {
		showModal({
			id: "remove-company",
			componentProps: { data: id }
		})

	}

	return (
		<>
			<div className="relative pb-5">
				<div>
					<table className="hidden lg:table w-full text-sm text-left rtl:text-right">
						<thead className="text-xs text-gray-700 uppercase border-y border-primary">
							<tr>
								<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
									Company ID
								</th>
								<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
									Company Name
								</th>
								<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
									Alternate Name
								</th>
								<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
									Date & Time Created
								</th>
								<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" className="px-6 py-2 font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
									423145
								</th>
								<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
									Company 1
								</td>
								<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
									Company 1
								</td>
								<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
									03/06/2024 12:45 AM
								</td>
								<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
									<Popover
										aria-labelledby="default-popover"
										content={
											<div className="text-sm text-gray-500 dark:text-gray-400 shadow">
												<div className="px-3">
													<ul>
														<li className=' py-2 pe-3 border-b border-gray-300' role="button" onClick={() => handleNavigate("companies/edit")}>
															Edit
														</li>
														<li className=' py-2 pe-3' role="button" onClick={() => handleRemoveModal("remove-roles")}>
															Remove
														</li>
													</ul>
												</div>
											</div>
										}
										arrow={false}
									>
										<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2' role="button">
											<FeatherIcon icon="more-vertical" className="shadow border border-gray-300 rounded-md" />
										</div>
									</Popover>
								</td>
							</tr>
						</tbody>
					</table>

					{/*Mobile View*/}
					<div className="block lg:hidden dark:bg-gray-800 dark:border-gray-700">
						<div className="border-y border-primary py-3 md:py-5">
							<ul>
								<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
									<div className="flex flex-row items-center justify-between">
										<h6 className='text-primary font-NotoSansBold text-base'>Company ID</h6>
										<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
											423145
										</span>
									</div>
								</li>
								<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
									<div className="flex flex-row items-center justify-between">
										<h6 className='text-primary font-NotoSansBold text-base'>Company Name</h6>
										<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
											Company 1
										</span>
									</div>
								</li>
								<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
									<div className="flex flex-row items-center justify-between">
										<h6 className='text-primary font-NotoSansBold text-base'>Alternate Name</h6>
										<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
											Company 1
										</span>
									</div>
								</li>
								<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
									<div className="flex flex-row items-center justify-between">
										<h6 className='text-primary font-NotoSansBold text-base'>Date & Time Created</h6>
										<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
											03/06/2024 12:45 AM
										</span>
									</div>
								</li>
								<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
									<div className="flex flex-row items-center justify-between">
										<h6 className='text-primary font-NotoSansBold text-base'>Action</h6>
										<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
											<Popover
												aria-labelledby="default-popover"
												content={
													<div className="text-sm text-gray-500 dark:text-gray-400 shadow">
														<div className="px-3">
															<ul>
																<li className=' py-2 pe-3 border-b border-gray-300' role="button" onClick={() => handleNavigate("companies/edit")}>
																	Edit
																</li>
																<li className=' py-2 pe-3' role="button" onClick={() => handleRemoveModal("remove-company")}>
																	Remove
																</li>
															</ul>
														</div>
													</div>
												}
												arrow={false}
											>
												<div className=' bg-transparent px-0 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
													<FeatherIcon icon="more-vertical" />
												</div>
											</Popover>
										</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
			<Remove />
		</>
	)
}

export default Table;
