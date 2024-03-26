import React from 'react'

import { Button, Popover, Dropdown } from 'flowbite-react';
import FeatherIcon from '@components/FeatherIcon/FeatherIcon';
import { ReactSVG } from 'react-svg';
import ArrowDownSVG from '@assets/images/arrow-dropdown.svg';

function Table(props) {
	const {
		headers,
		items,
		isTableLoading
	} = props;

	const getHeaderLabel = (key) => {
		return headers.filter((header) => {
			return header.key == key;
		})[0]?.label;
	};

	return (
		<>
			<div className="relative pb-4 overflow-auto">
				<table className="hidden lg:table w-full text-sm text-left rtl:text-right">
					<thead className="text-xs text-gray-700 uppercase border-y border-primary">
						<tr>
							{headers?.length > 0 && headers.map((header) => {
								if (header?.popover) {
									return <Popover
										aria-labelledby="default-popover"
										content={header.popover}
										arrow={true}
									>
										<div role="button" className=' bg-transparent px-6 py-3 hover:!bg-transparent rounded-none flex flex-row items-center justify-start gap-2'>
											<h6 className='text-primary font-NotoSansBold !text-base'>
												{header.label}
											</h6>
											<ReactSVG src={ArrowDownSVG} />
										</div>
									</Popover>
								} else {
									return <th scope="col" className="px-6 py-3 text-primary font-NotoSansBold text-base">
										{header.label}
									</th>
								}
							})}
						</tr>
					</thead>
					<tbody>
						{items?.length > 0 && items.map((bodyData) => {
							if (bodyData.type === 'date') {
								return <tr className="border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 ">
									<td
										colSpan={headers?.length || 1}
										className="badge badge-success border-bottom-0 border-transparent py-3 px-6"
									>
										{bodyData?.date}
									</td>
								</tr>
							} else {
								return <tr className="border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
									{bodyData?.rows && bodyData?.type !== 'date' && bodyData.rows.map((row) =>
										<td className="px-6 py-2 font-NotoSans text-gray-600 whitespace-nowrap dark:text-white">
											{row.value}
										</td>
									)}
								</tr>
							}
						})}
						{isTableLoading && items?.length < 1 &&
							<tr >
								<td colSpan={headers.length}>
									<div className='flex pt-8 items-center justify-center w-[100%]'>
										<div className="text-secondary font-bold">Fetching data...</div>
									</div>
								</td>
							</tr>
						}
						{!isTableLoading && items?.length < 1 &&
							<tr >
								<td colSpan={headers.length}>
									<div className='flex pt-8 items-center justify-center w-[100%]'>
										<div className="text-secondary font-bold">No data to display</div>
									</div>
								</td>
							</tr>
						}
					</tbody>
				</table>

				{/*Mobile View*/}
				<div className="block lg:hidden dark:bg-gray-800 dark:border-gray-700">
					<div className="border-y border-primary py-4 md:py-3">
						<ul>
							{items?.length > 0 && items.map((bodyData) =>
								<div className='[&:not(:last-child)]:border-b border-gray-300 pb-4 pt-2'>
									{bodyData?.rows && bodyData?.type !== 'date' && bodyData.rows.map((row) =>
										<li className='px-4 py-1 '>
											<div className="flex flex-col items-start justify-between">
												<h6 className='text-primary font-NotoSansBold text-base'>{getHeaderLabel(row?.key)}</h6>
												<span className="font-NotoSansBold text-gray-900 whitespace-nowrap dark:text-white">
													{row?.mobileValue || row?.value || "n/a"}
												</span>
											</div>
										</li>
									)}
								</div>)}
						</ul>
					</div>
				</div>

			</div>
		</>
	)
}

export default Table
