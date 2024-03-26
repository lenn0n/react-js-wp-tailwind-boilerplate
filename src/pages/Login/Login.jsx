import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { useForm, useAxios, useCookie, useModal, useEncryption } from "@hooks"
import Input from "@forms/Input/Input"
import Button from "@forms/Button/Button"
import Checkbox from "@forms/Checkbox/Checkbox"
import Logo from "@assets/images/logo/logo.svg"
import Alert from '@components/Alert/Alert'
import Authenticator from '@components/Modals/Authenticator'
import LoginImage from "@assets/images/op-login-img.png"
const Login = () => {
  const navigate = useNavigate()
  const { post, response, alterResponseMessage } = useAxios()
  const { showModal } = useModal()
  const { setCookie } = useCookie()
  const { encode } = useEncryption()

  const {
    handleSubmit,
    formData,
    formLoading,
    handleInputChange,
    handleCheckBoxChange,
    setFormData,
    setFormLoading
  } = useForm({
    onSubmitCallback: () => { handleLogin() }
  })

  const handleLogin = async (token) => {
    setFormLoading(true)
    const response = await post({
      service: "admin",
      url: "/authenticate",
      payload: { ...formData, token }
    })
    setFormLoading(false)

    if (response.result) {
      if (response?.token?.access && Object?.keys(response?.token?.access)?.length != 0) {
        handleSaveLoginToken(response)
      } else {
        showModal({
          id: "authenticator-modal",
          componentProps: {
            authenticator: {
              size: 'xl',
              type: !response.verified_auth ? 'setup' : "verify",
              auth: response.auth,
              email: formData.email,
              password: formData.password,
              onSuccess: handleOnSuccessVerification,
            }
          }
        })
      }
    }
  }

  const handleSaveLoginToken = (response) => {
    const token = { ...response?.token, admin_id: response?.admin_id };
    const encrypedToken = encode(JSON.stringify(token));
    setCookie({
      name: 'admin_token',
      value: encrypedToken,
      days: 7,
      domain: window.location.hostname
    });

    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  }

  const handleOnSuccessVerification = (response) => {
    setFormLoading(true)
    alterResponseMessage("Logging you in...")
    handleSaveLoginToken(response)
  }

  const getDateYear = () => {
    return new Date().getFullYear()
  }

  useEffect(() => {
    if (String(window.location.hostname).includes("192.168.1.125")) {
      setFormData({ email: "phteam@oesph.io" }, false)
      setFormData({ password: "password1W!" }, false)
    }
    if (String(window.location.hostname).includes("192.168.1.121")) {
      setFormData({ email: "phteam@oesph.io" }, false)
      setFormData({ password: "password1W!" }, false)
    }
  }, [])

  return (
    <>
      <Authenticator />
      <div className='grid grid-cols-6 h-[100vh]'>
        <div className="col-span-6 md:col-span-3 xl:col-span-2 flex">
          <div className="flex justify-center w-[100vw] flex-col items-center p-4 md:p-0">
            <div className="flex justify-center md:justify-between flex-col h-[100vh]  px-4">
              <div className="login-header flex  items-center md:justify-center   mt-4 md:mt-20 pb-5">
                <div className="me-3">
                  <img src={Logo} alt="" height={50} width={50} />
                </div>
                <div className="font-poppins-bold text-[25px] lg:text-[39px] dark:text-white">OP Software Dev</div>
              </div>

              <div className="login-content pb-5">
                <div className="flex justify-center items-start md:items-center flex-col">
                  <div className=" font-poppins-bold text-[23px] dark:text-white">Login</div>
                  <div className="text-secondary">Please enter your details to Sign In</div>
                </div>
                <form className="flex max-w-md flex-col gap-4 mt-[28px] " onSubmit={handleSubmit}>
                  {response?.message && <Alert label={response.message} type={response?.result ? 'success' : 'warning'} />}
                  <Input
                    handleInputChange={handleInputChange}
                    value={formData?.email ?? ''}
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="admin@opsoftware.dev"
                    // color="warning"
                    required
                  // helperText={<>This is not a valid email address.</>}
                  />
                  <Input
                    handleInputChange={handleInputChange}
                    value={formData?.password ?? ''}
                    label="Password"
                    name='password'
                    type="password"
                    required
                  // color="success"
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
                    isDefault={true}
                  >Submit</Button>
                </form>

                <div className="text-center mt-10">
                  <div className='text-base text-sub-secondary' role="button" onClick={() => alert("??")}>Resend Verification Code</div>
                </div>
              </div>
              <div className="login-footer mb-10 text-center dark:text-white">
                © OP Software Dev {getDateYear()}. All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-lg m-4 md:col-span-3 xl:col-span-4 bg-primary dark:from-secondary dark:to-black hidden md:flex">
          <div className="flex justify-between flex-col w-[100vw] text-white">
            <div className=""></div>
            <div className="">
              <div className="flex items-center justify-center flex-col">
                <div className="font-poppins-bold text-[19px] md:text-[25px] lg:text-[65px] text-center mt-5">
                  Lorem Ipsum dolor sit.
                </div>
                <div className="mx-10 text-center text-[19px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</div>
                <img src={LoginImage} alt="" className='p-4 mt-4 w-[200px] md:w-[600px] xl:w-[860px]' />
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