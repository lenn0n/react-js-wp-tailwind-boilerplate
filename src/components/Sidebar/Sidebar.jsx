import React from 'react';
import { useCookie } from "@hooks"
import Logo from "@assets/images/logo/logo.svg";
import CompanySVG from '@assets/images/sidebar/building.svg';
import LogSVG from '@assets/images/sidebar/clock-circle.svg';
import HomeSVG from '@assets/images/sidebar/home.svg';
import LogoutSVG from '@assets/images/sidebar/logout.svg';
import ReportSVG from '@assets/images/sidebar/subtraction.svg';
import UserSVG from '@assets/images/sidebar/user.svg';
import { Accordion } from 'flowbite-react';
import { ReactSVG } from 'react-svg';

function Sidebar() {
	const { removeCookie } = useCookie()
	const handleAdminLogout = () => {
		removeCookie({ name: "admin_token", domain: window.location.hostname})
		window.location.href = "/"
	}
	return (
		<>
			<div className='hidden md:block'>
				<div className=' bg-white border-r-2 border-gray-200 h-full relative'>
					<div className="sidebar sticky top-0 w-72 lg:w-[320px] h-[100vh] p-7">
						<div className='flex flex-col justify-between h-full'>
							<div>
								<div className="sidebar-header flex flex-row items-center border-b border-primary gap-4 md:gap-5 pb-3 mb-4 md:mb-5">
									<img src={Logo} alt="" className='w-10 h-8 md:w-12 md:h-14' />
									<h1 className=' text-2xl font-bold'>OP Software Dev</h1>
								</div>


								<form className="max-w-md mx-auto">
									<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
									<div className="relative">
										<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
											<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
											</svg>
										</div>
										<input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border-0 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Search" required />
									</div>
								</form>

								<ul>
									<li className='py-2 md:py-3'>
										<a href='/dashboard' className="group flex flex-row gap-5">
											<div className="w-8 h-8">
												<ReactSVG src={HomeSVG} className='flex items-center justify-center group-hover:fill-primary group-focus:fill-primary' />
											</div>
											<p className='text-lg md:text-xl text-black group-hover:text-primary group-hover:font-bold'>Home</p>
										</a>
									</li>
									<li className='py-2 md:py-3'>
										<Accordion collapseAll className='sidebar-accordion'>
											<Accordion.Panel className='sidebar-panel'>
												<Accordion.Title className='sidebar-title'>
													<a href='#' className="group flex flex-row gap-5">
														<div className="w-8 h-8">
															<ReactSVG src={UserSVG} className='flex items-center justify-center group-hover:fill-primary group-focus:fill-primary' />
														</div>
														<p className='text-lg md:text-xl text-black group-hover:text-primary group-hover:font-bold'>User</p>
													</a>
												</Accordion.Title>
												<Accordion.Content className='sidebar-content'>
													<ul>
														<li className='pt-4 pb-2 ms-8'>
															<a href='/user/list'>
																<p className='text-lg md:text-xl text-black hover:text-primary hover:font-bold'>List</p>
															</a>
														</li>
														<li className='py-2 ms-8'>
															<a href='/user/role'>
																<p className='text-lg md:text-xl text-black hover:text-primary hover:font-bold'>Role</p>
															</a>
														</li>
													</ul>
												</Accordion.Content>
											</Accordion.Panel>
										</Accordion>
									</li>
									<li className='py-2 md:py-3'>
										<a href='companies' className="group flex flex-row gap-5">
											<div className="w-8 h-8">
												<ReactSVG src={CompanySVG} className='flex items-center justify-center group-hover:fill-primary group-focus:fill-primary' />
											</div>
											<p className='text-lg md:text-xl text-black group-hover:text-primary group-hover:font-bold'>Companies</p>
										</a>
									</li>
									<li className='py-2 md:py-3'>
										<Accordion collapseAll className='sidebar-accordion'>
											<Accordion.Panel className='sidebar-panel'>
												<Accordion.Title className='sidebar-title'>
													<a href='#' className="group flex flex-row gap-5">
														<div className="w-8 h-8">
															<ReactSVG src={ReportSVG} className='flex items-center justify-center group-hover:fill-primary group-focus:fill-primary' />
														</div>
														<p className='text-lg md:text-xl text-black group-hover:text-primary group-hover:font-bold'>Report</p>
													</a>
												</Accordion.Title>
												<Accordion.Content className='sidebar-content'>
													<ul>
														<li className='pt-4 pb-2 ms-8'>
															<a href='/report/transactions'>
																<p className='text-lg md:text-xl text-black hover:text-primary hover:font-bold'>Transaction</p>
															</a>
														</li>
														<li className='py-2 ms-8'>
															<a href='/report/refund'>
																<p className='text-lg md:text-xl text-black hover:text-primary hover:font-bold'>Refund</p>
															</a>
														</li>
														<li className='py-2 ms-8'>
															<a href='/report/reset-2fa'>
																<p className='text-lg md:text-xl text-black hover:text-primary hover:font-bold'>Reset 2FA</p>
															</a>
														</li>
													</ul>
												</Accordion.Content>
											</Accordion.Panel>
										</Accordion>
									</li>
									<li className='py-2 md:py-3'>
										<a href='#' className="group flex flex-row gap-5">
											<div className="w-8 h-8">
												<ReactSVG src={LogSVG} className='flex items-center justify-center group-hover:fill-primary group-focus:fill-primary' />
											</div>
											<p className='text-lg md:text-xl text-black group-hover:text-primary group-hover:font-bold'>Logs</p>
										</a>
									</li>
								</ul>
							</div>

							<div className='border-t border-primary pt-4 md:pt-6'>
								<Accordion collapseAll className='sidebar-accordion'>
									<Accordion.Panel className='sidebar-panel'>
										<Accordion.Title className='sidebar-title'>
											<a href='#' className="flex flex-row items-center gap-5">
												<div className="w-8 h-8 md:w-9 md:h-9 border-2 overflow-hidden rounded-full">
													<img src={Logo} alt="" className=' object-cover' />
												</div>
												<div className="flex flex-col">
													<p className='text-base text-black font-bold'>OP Software Dev Admin</p>
													<p className='text-sm md:text-base text-primary'>Administrator</p>
												</div>
											</a>
										</Accordion.Title>
										<Accordion.Content className='sidebar-content !p-0'>
											<ul>
												<li className='group pt-4 pb-2' role="button" onClick={()=>{ handleAdminLogout()}}>
													<a href='#' className="flex flex-row gap-5">
														<div className="w-8 h-8">
															<ReactSVG src={LogoutSVG} className='flex items-center justify-center group-hover:fill-primary group-focus:fill-primary' />
														</div>
														<p className='text-lg md:text-xl text-black group-hover:text-primary hover:font-bold'>Log Out</p>
													</a>
												</li>
											</ul>
										</Accordion.Content>
									</Accordion.Panel>
								</Accordion>

							</div>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}

export default Sidebar
