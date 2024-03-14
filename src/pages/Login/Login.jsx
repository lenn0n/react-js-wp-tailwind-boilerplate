import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Logo from "@assets/images/logo/logo.svg"
const Login = () => {
  const getDateYear = () => {
    return new Date().getFullYear()
  }
  return (
    <>
      <div className='grid grid-cols-6 h-[100vh]'>
        <div className="col-span-2 flex">
          <div className="flex justify-center w-[100vw] flex-col items-center ">
            <div className="flex justify-between flex-col h-[100vh]">
              <div className="login-header flex items-center mt-20">
                <div className="me-3">
                  <img src={Logo} alt="" height={50} width={50} />
                </div>
                <div className="font-poppins-bold text-[39px]">Site Name</div>
              </div>
              <div className="login-content">
                <div className="flex justify-center items-center flex-col">
                  <div className=" font-poppins-bold text-[23px]">Login</div>
                  <div className="text-secondary">Please enter your details to Sign In</div>
                </div>
                <form className="flex max-w-md flex-col gap-4 mt-[28px]">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email1" value="Email Address" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password1" value="Password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <div className="font-bold text-primary">Forgot Password?</div>
                  </div>
                  <Button type="submit" className='bg-gradient-to-b from-primary to-sub-primary'>Submit</Button>
                </form>
              </div>
              <div className="login-footer mb-10">
                © OP Software Dev {getDateYear()}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gradient-to-b from-primary to-sub-primary flex">
          <div className="flex justify-between flex-col w-[100vw] text-white">
            <div className=""></div>
            <div className="">
              <div className="flex items-center justify-center flex-col">
                <div className="font-poppins-bold text-[65px]">
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