import React from 'react'
import Logo from "@assets/images/logo/logo.svg"
import { useForm } from "@hooks"
import FormInput from "@forms/FormInput/FormInput"
import CustomButton from "@forms/CustomButton/CustomButton"
import FormCheckbox from "@forms/FormCheckbox/FormCheckbox"

const Login = () => {
  const getDateYear = () => {
    return new Date().getFullYear()
  }
  const {
    handleSubmit,
    formData,
    formLoading,
    handleInputChange,
    handleCheckBoxChange
  } = useForm({
    onSubmitCallback: () => { console.log(formData) }
  })

  return (
    <>
      <div className='grid grid-cols-6 h-[100vh]'>
        <div className="col-span-6 md:col-span-3 xl:col-span-2 flex p-4">
          <div className="flex justify-center w-[100vw] flex-col items-center ">
            <div className="flex justify-between flex-col h-[100vh]">
              <div className="login-header flex items-center justify-center mt-4 md:mt-20">
                <div className="me-3">
                  <img src={Logo} alt="" height={50} width={50} />
                </div>
                <div className="font-poppins-bold text-[25px] md:text-[39px]">OP Software Dev</div>
              </div>
              <div className="login-content">
                <div className="flex justify-center items-center flex-col">
                  <div className=" font-poppins-bold text-[23px]">Login</div>
                  <div className="text-secondary">Please enter your details to Sign In</div>
                </div>
                <form className="flex max-w-md flex-col gap-4 mt-[28px]" onSubmit={handleSubmit}>
                  <FormInput
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
                  <FormInput
                    handleInputChange={handleInputChange}
                    value={formData?.password ?? ''}
                    label="Password"
                    name='password'
                    type="password"
                    required
                    color="info"
                  />
                  <div className="flex justify-between">
                    <FormCheckbox
                      label="Remember me"
                      name="remember_me"
                      value={formData?.remember_me ?? ""}
                      handleCheckBoxChange={handleCheckBoxChange}
                    />
                    <div className="font-bold text-primary" role="button">Forgot Password?</div>
                  </div>
                  <CustomButton
                    type="submit"
                    isLoading={formLoading}
                  >Submit</CustomButton>
                </form>
              </div>
              <div className="login-footer mb-10 text-center">
                © OP Software Dev {getDateYear()}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className=" md:col-span-3 xl:col-span-4 bg-gradient-to-b from-primary to-sub-primary hidden md:flex">
          <div className="flex justify-between flex-col w-[100vw] text-white">
            <div className=""></div>
            <div className="">
              <div className="flex items-center justify-center flex-col">
                <div className="font-poppins-bold text-[21px] md:text-[30px] lg:text-[65px] text-center">
                  Lorem Ipsum dolor sit.
                </div>
                <div className="mx-10 text-center text-[22px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login