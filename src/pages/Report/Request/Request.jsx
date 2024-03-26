import React from 'react'

import { Button, Popover, Dropdown } from 'flowbite-react';
import FeatherIcon from '../../../components/FeatherIcon/FeatherIcon';
import { ReactSVG } from 'react-svg';
import ArrowDownSVG from '@assets/images/arrow-dropdown.svg';

function Request() {
	return (
		<>
			<div className="relative pb-5 overflow-auto">
				<table className="hidden lg:table w-full text-sm text-left rtl:text-right">
					<thead className="text-xs text-gray-700 uppercase border-y border-primary">
						<tr>
							<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
								Request ID
							</th>
							<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
								Name
							</th>
							<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
								Email
							</th>
							<th scope="col">
								<Popover
									aria-labelledby="default-popover"
									content={
										<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
											<div className="px-3 py-2">
												<p>And here's some amazing content. It's very engaging. Right?</p>
											</div>
										</div>
									}
									arrow={false}
								>
									<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
										<h6 className='text-primary font-NotoSansBold !text-base'>
											Transaction
										</h6>
										<ReactSVG src={ArrowDownSVG} />
									</div>
								</Popover>
							</th>
							<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
								Amount
							</th>
							<th scope="col">
								<Popover
									aria-labelledby="default-popover"
									content={
										<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
											<div className="px-3 py-2">
												<p>And here's some amazing content. It's very engaging. Right?</p>
											</div>
										</div>
									}
									arrow={false}
								>
									<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
										<h6 className='text-primary font-NotoSansBold !text-base'>
											Status
										</h6>
										<ReactSVG src={ArrowDownSVG} />
									</div>
								</Popover>
							</th>

							<th scope="col">
								<Popover
									aria-labelledby="default-popover"
									content={
										<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
											<div className="px-3 py-2">
												<p>And here's some amazing content. It's very engaging. Right?</p>
											</div>
										</div>
									}
									arrow={false}
								>
									<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
										<h6 className='text-primary font-NotoSansBold !text-base'>
											Date
										</h6>
										<ReactSVG src={ArrowDownSVG} />
									</div>
								</Popover>
							</th>
							<th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-2 font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
								#123456
							</th>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								John Doe
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								johndoe@email.com
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								Refund
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								$250.00
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								$250.00
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								March 06, 2024
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								<Popover
									aria-labelledby="default-popover"
									content={
										<div className="text-sm text-gray-500 dark:text-gray-400 shadow">
											<div className="px-3">
												<ul>
													<li className=' py-2 pe-3 border-b border-gray-300' role="button">Approved</li>
													<li className=' py-2 pe-3' role="button">Reject</li>
												</ul>
											</div>
										</div>
									}
									arrow={false}
								>
									<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
										<FeatherIcon icon="more-vertical" />
									</div>
								</Popover>
							</td>
						</tr>
						<tr className="border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-2 font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
								#123456
							</th>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								John Doe
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								johndoe@email.com
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								Refund
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								$250.00
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								$250.00
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								March 06, 2024
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								<Popover
									aria-labelledby="default-popover"
									content={
										<div className="text-sm text-gray-500 dark:text-gray-400 shadow">
											<div className="px-3">
												<ul>
													<li className=' py-2 pe-3 border-b border-gray-300' role="button">Approved</li>
													<li className=' py-2 pe-3' role="button">Reject</li>
												</ul>
											</div>
										</div>
									}
									arrow={false}
								>
									<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
										<FeatherIcon icon="more-vertical" />
									</div>
								</Popover>
							</td>
						</tr>
						<tr className="border-b border-gray-500 dark:bg-gray-800 dark:border-gray-700">
							<th scope="row" className="px-6 py-2 font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
								#123456
							</th>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								John Doe
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								johndoe@email.com
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								Refund
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								$250.00
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								$250.00
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								March 06, 2024
							</td>
							<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
								<Popover
									aria-labelledby="default-popover"
									content={
										<div className="text-sm text-gray-500 dark:text-gray-400 shadow">
											<div className="px-3">
												<ul>
													<li className=' py-2 pe-3 border-b border-gray-300' role="button">Approved</li>
													<li className=' py-2 pe-3' role="button">Reject</li>
												</ul>
											</div>
										</div>
									}
									arrow={false}
								>
									<div className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
										<FeatherIcon icon="more-vertical" />
									</div>
								</Popover>
							</td>
						</tr>
					</tbody>
				</table>

				{/*Mobile View*/}
				<div className="block lg:hidden dark:bg-gray-800 dark:border-gray-700">
					<div className="border-y border-primary py-4 md:py-3">
						<ul>
							<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
								<div className="flex flex-row items-center justify-between">
									<h6 className='text-primary font-NotoSansBold text-base'>Request ID</h6>
									<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
										#123456
									</span>
								</div>
							</li>
							<li className='[&:not(:last-child)]:border-b border-gray-500 px-4 py-3'>
								<div className="flex flex-row items-center justify-between">
									<h6 className='text-primary font-NotoSansBold text-base'>Request ID</h6>
									<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
										#123456
									</span>
								</div>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}

export default Request
