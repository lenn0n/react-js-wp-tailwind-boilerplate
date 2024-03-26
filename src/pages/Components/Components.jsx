import React, { useState, useRef } from 'react'
import { useForm, useModal, useAlertModal, useToast } from "@hooks"
import { Accordion } from 'flowbite-react';
import {
  AccordionCode,
  FormCode,
  ModalCode,
  AlertCode,
  BadgeCode,
  ButtonCode,
  DropdownCode,
  PaginationCode,
  LoaderCode,
  ToastsCode,
  TooltipCode,
  TableCode,
  OffcanvasCode,
} from "@components/Texts"

import Wrapper from "@pages/Components/Wrapper"
import Input from "@forms/Input/Input"
import Button from "@forms/Button/Button"
import Checkbox from "@forms/Checkbox/Checkbox"
import Mobile from "@forms/Mobile/Mobile"
import Select from "@forms/Select/Select"
import DatePicker from "@forms/DatePicker/DatePicker"
import Modal from '@components/Modals/Modal';
import Logo from "@assets/images/logo/logo.svg"
import Sparkol from "@assets/images/logo/sparkol.png"
import Alert from "@components/Alert/Alert"
import Badge from "@components/Badge/Badge"
import Dropdown from "@components/Dropdown/Dropdown"
import Table from "@components/Table/Table"

const Components = () => {
  const focusRef = useRef()
  const [view, setView] = useState("#forms")
  const { showModal, hideModal } = useModal()
  const { showSuccessAlert } = useAlertModal()
  const { showSuccessToast } = useToast()
  const {
    handleSubmit,
    formData,
    formLoading,
    handleInputChange,
    handleCheckBoxChange,
    handleSelectChange,
    handleDateRangeChange
  } = useForm({
    onSubmitCallback: () => { console.log(formData) }
  })

  const countrySelection = [
    {
      "id": 1,
      "iso2": "AF",
      "iso3": "AFG",
      "name": "Afghanistan",
      "countrycode": 93
    },
    {
      "id": 2,
      "iso2": "AX",
      "iso3": "ALA",
      "name": "Aland Islands",
      "countrycode": 358
    },
    {
      "id": 3,
      "iso2": "AL",
      "iso3": "ALB",
      "name": "Albania",
      "countrycode": 355
    },

  ]

  const dropdownExampleList = [
    { label: "Dashboard", type: 'item', onClick: () => { console.log("This is the default dropdown.") } },
    { label: "Settings", type: 'item', onClick: () => { console.log("This is the default dropdown.") } },
    { label: "Earnings", type: 'item', onClick: () => { console.log("This is the default dropdown.") } },
    { type: 'divider' },
    { label: "Separated Link", type: 'item', onClick: () => { } },
  ]

  const features = [
    { name: "Forms", href: "#forms" },
    { name: "Modals", href: "#modals" },
    { name: "Alert", href: "#alert" },
    { name: "Badge", href: "#badge" },
    { name: "Accordion", href: "#accordion" },
    { name: "Buttons", href: "#buttons" },
    { name: "Dropdown", href: "#dropdown" },
    { name: "Loader", href: "#loader" },
    { name: "Toasts", href: "#toasts" },
    { name: "Tooltips", href: "#tooltips" },
    { name: "Pagination", href: "#pagination" },
    { name: "Table", href: "#table" },
    { name: "Offcanvas", href: "#offcanvas" },
  ]

  return (
    <div className='grid grid-cols-10 w-[100%] h-[100vh]'>
      <div className="hidden xl:flex col-span-2 p-4 relative px-5 border-r-slate-200 border-r-[2px] justify-center ">
        <div className="flex items- flex-col fixed p-4">
          <div className="login-header flex items-center justify-center pb-5">
            <div className="me-3">
              <img src={Logo} alt="" height={35} width={35} />
            </div>
            <div className="font-poppins-bold text-[23px] dark:text-white">TW<span className='text-primary'>CSS</span></div>
          </div>
          <div className="text-[21px] font-bold mb-4 text-primary pt-3">Components</div>
          {features.map((data) =>
            <a href={data.href} className='mb-3' onClick={() => { setView(data.href) }}>
              <span className={`${view == data.href ? 'font-bold' : ''}`}>{data.name}</span>
            </a>
          )}

          <div className="text-[21px] font-bold mb-2 text-primary pt-5">Hooks</div>
          <div className="text-secondary text-[14px]">Coming Soon</div>
        </div>
      </div>
      <div className="col-span-10 xl:col-span-8 ">

        {/* START OF FORM COMPONENTS */}
        <Wrapper id="forms" name="Forms" code={FormCode}>
          <div className="">For better implementation, use <span className='font-bold'>`useForm`</span> hooks.</div>
          <form className="flex max-w flex-col gap-4 mt-[28px]" onSubmit={handleSubmit}>
            <Input
              handleInputChange={handleInputChange}
              value={formData?.email ?? ''}
              label="Email Address"
              name="email"
              type="email"
              placeholder="admin@opsoftware.dev"
              color="warning"
              required
              helperText={<>This is not a valid email address.</>}
            />
            <Input
              handleInputChange={handleInputChange}
              value={formData?.password ?? ''}
              label="Password"
              name='password'
              type="password"
              required
              color="success"
            />
            <Mobile
              inputName="mobile"
              selectName="country_id"
              inputValue={formData?.mobile ?? ""}
              selectValue={formData?.country_id ?? ""}
              countryNameKey="name"
              countryFlagKey="iso2"
              countryCodeKey="countrycode"
              countryValue="id"
              options={countrySelection}
              handleInputChange={handleInputChange}
              handleSelectChange={handleSelectChange}
              required
            />
            <Select
              label="Gender"
              name="gender"
              color="info"
              optionName="name"
              value={formData?.gender ?? ""}
              defaultLabel="Select One"
              optionValue="id"
              options={[
                { name: "Male", id: 1 },
                { name: "Female", id: 2 },
              ]}
              handleSelectChange={handleSelectChange}
              required
            />
            <DatePicker
              label="Date Range"
              name="daterange"
              value={formData?.daterange}
              handleDateRangeChange={handleDateRangeChange}
            />
            <div className="flex justify-between">
              <Checkbox
                label="Remember me"
                name="remember_me"
                value={formData?.remember_me ?? ""}
                handleCheckBoxChange={handleCheckBoxChange}
              />
              <div className="font-bold text-primary" role="button">Forgot Password?</div>
            </div>
            <Button
              type="submit"
              isLoading={formLoading}
              className="bg-gradient-to-b from-primary to-sub-primary"
            >Submit</Button>
          </form>
          <div className="text-secondary mt-4 text-[13px]">
            Output: {JSON.stringify(formData)}
          </div>
        </Wrapper>
        {/* END OF FORM COMPONENTS */}


        {/* START OF MODAL COMPONENTS */}
        <Wrapper id="modals" name="Modals" code={ModalCode} copyBlockClassName="!max-h-[200px]">
          <div className="mt-3">
            <div className="mb-3 "> For better user experience, pass <span className='font-bold'>'initialFocus'</span> prop on the modal.
              The React useRef hook is required to accomplish this.</div>
            <Button
              type="button"
              className="bg-primary"
              onClick={() => showModal({ id: "demo-modal" })}
            >Show Modal with Input Focus</Button>
            <Button
              type="button"
              className="bg-green-500 mt-4"
              onClick={() => showSuccessAlert({
                content: <div className='text-center'>This is an example of a working modal.</div>
              })}
            >Show Success Alert Modal</Button>
          </div>
        </Wrapper>
        {/* END OF MODAL COMPONENTS */}

        {/* START OF ALERT COMPONENT */}
        <Wrapper id="alert" name="Alert" code={AlertCode}>
          <Alert type="success" label="Success alert example." />
          <Alert type="failure" label="Failure alert example." className="mt-2" />
          <Alert type="warning" label="Warning alert example." className="mt-2" />
          <Alert type="info" label="Info alert example." className="mt-2" />
        </Wrapper>
        {/* END OF ALERT COMPONENT */}

        {/* START OF BADGE COMPONENT */}
        <Wrapper id="badge" name="Badge" code={BadgeCode}>
          <div className="flex flex-wrap gap-2">
            <Badge type="success" label="DONE" />
            <Badge type="failure" label="FAILED" />
            <Badge type="warning" label="WARNING" />
            <Badge type="cancelled" label="CANCELLED" />
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge type="success" label="DONE" className="border-[2px] border-[#5FB371]" />
            <Badge type="failure" label="FAILED" className="border-[2px] border-[#DF5656]" />
            <Badge type="warning" label="WARNING" className="border-[2px] border-[#E2A65C]" />
            <Badge type="cancelled" label="CANCELLED" className="border-[2px] border-[#929292]" />
          </div>
          <Badge type="success" label="ACTIVATED" className="border-[2px] border-[#5FB371] rounded-3xl mt-4 text-center" />
          <Badge type="failure" label="NOT FOUND" className="border-[2px] border-[#DF5656] mt-3 text-center" />
        </Wrapper>
        {/* END OF BADGE COMPONENT */}

        {/* START OF ACCORDION COMPONENT */}
        <Wrapper id="accordion" name="Accordion" code={AccordionCode}>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>What is Flowbite?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                  dropdowns, modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on top of Tailwind CSS.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Is there a Figma file available?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                  has a design equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components from Flowbite.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                  Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                  components, whereas Tailwind UI offers sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                  technical reason stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </Wrapper>
        {/* END OF ACCORDION COMPONENT */}

        {/* START OF BUTTON COMPONENT */}
        <Wrapper id="buttons" name="Buttons" code={ButtonCode}>
          <div className="mt-10" id="button">
            <div className="text-[16px] font-bold mb-4 text-black">Default buttons</div>
            <div className="flex flex-wrap gap-2">
              <Button isDefault>Default</Button>
              <Button type="button" color="blue">Blue</Button>
              <Button type="button" color="dark">Dark</Button>
              <Button type="button" color="light">White</Button>
              <Button color="success">Success</Button>
              <Button color="failure">Failure</Button>
              <Button color="warning">Warning</Button>
              <Button color="purple">Purple</Button>
            </div>
            <div className="text-[16px] font-bold mb-4 text-black mt-5">Button pills</div>
            <div className="flex flex-wrap gap-2">
              <Button pill isDefault>Default</Button>
              <Button color="blue" pill>Blue</Button>
              <Button color="gray" pill>Gray</Button>
              <Button color="dark" pill>Dark</Button>
              <Button color="light" pill>Light</Button>
              <Button color="success" pill>Success</Button>
              <Button color="failure" pill>Failure</Button>
              <Button color="warning" pill>Warning</Button>
              <Button color="purple" pill>Purple</Button>
            </div>
            <div className="text-[16px] font-bold mb-4 text-black mt-5">Button sizes</div>
            <div className="flex flex-wrap items-start gap-2">
              <Button isDefault size="xs">Extra small</Button>
              <Button isDefault size="sm">Small</Button>
              <Button isDefault size="md">Base</Button>
              <Button isDefault size="lg">Large</Button>
              <Button isDefault size="xl">Extra large</Button>
            </div>
            <div className="text-[16px] font-bold mb-4 text-black mt-5">Button with loading state</div>
            <div className="flex flex-wrap items-start gap-2">
              <Button isDefault size="xs" isLoading loadingText="Loading"></Button>
              <Button size="sm" isLoading loadingText="Loading" gradientDuoTone="purpleToBlue"></Button>
              <Button size="md" isLoading loadingText="Loading" color="red"></Button>
              <Button size="lg" isLoading loadingText="Loading" pill isDefault></Button>
              <Button size="xl" isLoading loadingText="Loading" outline></Button>
            </div>
          </div>
        </Wrapper>
        {/* END OF BUTTON COMPONENT */}


        {/* START OF DROPDOWN COMPONENT */}
        <Wrapper id="dropdown" name="Dropdown" code={DropdownCode}>
          <div className="mb-3">
            <Dropdown
              label="Dropdown with ClassName"
              size="sm"
              className="bg-primary"
              list={dropdownExampleList}
            />
          </div>
          <Dropdown
            label="Dropdown with ClassName and LG Size"
            size="lg"
            placement="right"
            className="bg-green-500"
            list={dropdownExampleList}
          />
          <div className="flex flex-wrap gap-4 mt-4">
            <Dropdown
              label="Dropdown Top"
              size="sm"
              placement="top"
              list={dropdownExampleList}
            />
            <Dropdown
              label="Dropdown Bottom"
              size="sm"
              placement="bottom"
              list={dropdownExampleList}
            />
            <Dropdown
              label="Dropdown Right"
              size="sm"
              placement="right"
              list={dropdownExampleList}
            />
            <Dropdown
              label="Dropdown Left"
              size="sm"
              placement="left"
              list={dropdownExampleList}
            />
            <Dropdown
              label="Dropdown Left Start"
              size="sm"
              placement="left-start"
              list={dropdownExampleList}
            />
            <Dropdown
              label="Dropdown Right Start"
              size="sm"
              placement="right-start"
              list={dropdownExampleList}
            />
          </div>
        </Wrapper>
        {/* END OF DROPDOWN COMPONENT */}


        {/* START OF LOADER COMPONENT */}
        <Wrapper id="loader" name="Loader" code={LoaderCode} copyBlockClassName="!max-h-[1000px]">
          <div className="text-[16px] font-bold mb-4 text-black mt-10">Default Skeleton</div>
          <div role="status" class="max-w-sm animate-pulse">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span class="sr-only">Loading...</span>
          </div>

          <div className="text-[16px] font-bold mb-4 text-black mt-10">Image Skeleton</div>
          <div role="status" class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div class="w-full">
              <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>

          <div className="text-[16px] font-bold mb-4 text-black mt-10">Card Skeleton</div>
          <div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-center mt-4">
              <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>

          <div className="text-[16px] font-bold mb-4 text-black mt-10">Widget/Chart Skeleton</div>
          <div role="status" class="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
            <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="flex items-baseline mt-4">
              <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
              <div class="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
              <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
              <div class="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
              <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
              <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
              <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>

          <div className="text-[16px] font-bold mb-4 text-black mt-10">Table/List Skeleton</div>
          <div role="status" class="max-w-md p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
            <div class="flex items-center justify-between">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div class="flex items-center justify-between pt-4">
              <div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span class="sr-only">Loading...</span>
          </div>


        </Wrapper>
        {/* END OF LOADER COMPONENT */}


        {/* START OF TOASTS COMPONENT */}
        <Wrapper id="toasts" name="Toasts" code={ToastsCode}>
          <div className="">
            <Button type="button" color="purple" onClick={() => {
              showSuccessToast({
                position: "top-left"
              });
            }}>Show Toast Button on the Top Left</Button>

            <Button type="button" color="blue" className="mt-3" onClick={() => {
              showSuccessToast({
                position: "top-center"
              });
            }}>Show Toast Button on the Top Center</Button>

            <Button type="button" color="success" className="mt-3" onClick={() => {
              showSuccessToast({
                position: "top-right"
              });
            }}>Show Toast Button on the Top Right</Button>

            <Button type="button" color="warning" className="mt-3" onClick={() => {
              showSuccessToast({
                position: "bottom-right"
              });
            }}>Show Toast Button on the Bottom Right</Button>

            <Button type="button" color="failure" className="mt-3" onClick={() => {
              showSuccessToast({
                position: "bottom-center"
              });
            }}>Show Toast Button on the Bottom Center</Button>

            <Button type="button" color="dark" className="mt-3" onClick={() => {
              showSuccessToast({
                position: "bottom-left"
              });
            }}>Show Toast Button on the Bottom Left</Button>
          </div>
        </Wrapper>
        {/* END OF TOASTS COMPONENT */}


        {/* START OF TOOLTIPS COMPONENT */}
        <Wrapper id="tooltips" name="Tooltips" code={TooltipCode}>

        </Wrapper>
        {/* END OF TOOLTIPS COMPONENT */}

        {/* START OF PAGINATION COMPONENT */}
        <Wrapper id="pagination" name="Pagination" code={PaginationCode}>

        </Wrapper>
        {/* END OF PAGINATION COMPONENT */}

        {/* START OF TABLE COMPONENT */}
        <Wrapper id="table" name="Table" code={TableCode}>
            <Table
              headers={[
                { key: "name", label: "Name"},
                { key: "status", label: "Status"},
              ]}
              items={[
                {
                  type: "date",
                  date: "October 13, 1994"
                },
                {
                  type: "data",
                  rows: [
                    {
                      key: "name",
                      value: "Lennon",
                    },
                    {
                      key: "status",
                      value: "Happy",
                    }
                  ]
                },
                {
                  type: "data",
                  rows: [
                    {
                      key: "name",
                      value: "Benedict",
                    },
                    {
                      key: "status",
                      value: "Angry",
                    }
                  ]
                },
              ]}
            />
        </Wrapper>
        {/* END OF TABLE COMPONENT */}

        {/* START OF OFFCANVAS COMPONENT */}
        <Wrapper id="offcanvas" name="Offcanvas" code={OffcanvasCode}>

        </Wrapper>
        {/* END OF OFFCANVAS COMPONENT */}

      </div>
      <Modal
        id="demo-modal-2"
        title="Success"
        size="md"
        hideHeader
        footer={<>
          <Button
            type="button"
            isLoading={false}
            className="bg-primary w-[100%]"
            onClick={() => { hideModal() }}
          >Close</Button>
        </>}
      >
        <div className="flex items-center justify-center">
          <img src={Sparkol} alt="" height={300} width={300} />
        </div>

        <div className="text-center font-bold text-[21px] mt-3">Sparkol Approved</div>
        <div className="text-center mt-2">You just updated your profile information. Grrrr...</div>
      </Modal>
      <Modal
        id="demo-modal"
        title="Mobile Number"
        size="xl"
        initialFocus={focusRef}
        onHidden={async () => {
          const close = await hideModal();
          if (close) {
            showModal({ id: 'demo-modal-2' })
            // showSuccessAlert()
          }
        }}
        footer={<>
          <Button
            type="button"
            isLoading={false}
            className="bg-green-500 w-[100%]"
            onClick={() => { hideModal() }}
          >Update</Button>
        </>}
      >
        <div className="text-secondary mb-4">Please update your mobile number.</div>
        <Mobile
          ref={focusRef}
          inputName="mobile"
          selectName="country_id"
          inputValue={formData?.mobile ?? ""}
          selectValue={formData?.country_id ?? ""}
          countryNameKey="name"
          countryFlagKey="iso2"
          countryCodeKey="countrycode"
          countryValue="id"
          options={countrySelection}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          required
        />
      </Modal>

    </div>
  )
}

export default Components