'use client'

import { schemaRegister } from '@/app/yup_schema/register'
import { registerForm } from '@/services/auth'
import { RegisterType } from '@/utils/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

const page = () => {
    const router=useRouter()
    const {register,handleSubmit ,formState:{errors}}=useForm<RegisterType>({mode:'onSubmit', resolver:yupResolver(schemaRegister)})
    const onSubmit: SubmitHandler<RegisterType> = (data) => 
         registerForm(data).then((res)=>{
         if(res.status=== 201){
             toast.success('Activate your account in your mailbox before logging in')
             router.push('/')
        }
     }).catch((e)=>(
         toast.error(e.response.data.message)
    )
     )
 
    return (
    <div>
        <h1 className='font-bold text-center text-orange-950 text-2xl'>Register</h1>

        <form className="mt-8 mb-2 mx-auto text-center w-80 max-w-screen-lg sm:w-96"  onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4  flex flex-col gap-6">
        
<div className='flex flex-rows gap-2 '>
      <div className="relative h-11 w-full ">
        
          <input
          {...register('firstName')}
            className="peer h-full w-full  bg-white  rounded-md border border-blue-gray-200  p-3  font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            First Name
          </label>
          <p className='text-red-600'>{errors.firstName?.message}</p>
        </div>

        <div className="relative h-11 w-full ">
          <input
          {...register('lastName')}
            className="peer h-full  bg-white w-full rounded-md border border-blue-gray-200  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Last Name
          </label>
          <p className='text-red-600'>{errors.lastName?.message}</p>
        </div>
</div>
        <div className="relative h-11 w-full min-w-[200px]">
          <input
          {...register('email')}
            className="peer h-full mx-auto bg-white w-full rounded-md border border-blue-gray-200  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Email
          </label>
          <p className='text-red-600'>{errors.email?.message}</p>
        </div>

        <div className="relative h-11 w-full min-w-[200px]">
          <input
          {...register('adress')}
            className="peer h-full  bg-white w-full rounded-md border border-blue-gray-200  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Adress
          </label>
          <p className='text-red-600'>{errors.adress?.message}</p>
        </div>



        <div className="relative h-11 w-full min-w-[200px]">
          <input
          {...register('password')}
            type="password"
            className="peer  bg-white h-full w-full rounded-md border border-blue-gray-200  px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Password
          </label>
          <p className='text-red-600'>{errors.password?.message}</p>
        </div>
      </div>
      <div className="inline-flex items-center">
        <label
          className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
          
          data-ripple-dark="true"
        >
          <input
          {...register('checkbox')}
            type="checkbox"
            className="before:content[''] peer relative bg-white h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-orange-300 checked:bg-orange-300 checked:before:bg-orange-300 hover:before:opacity-10"
            id="checkbox"
          />
          <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-700"
          
        >
          <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
            I agree the
            <a
              className="font-semibold transition-colors hover:text-orange-500"
              href="#"
            >
              &nbsp;Terms and Conditions
            </a>
          </p>
        </label>
      </div> 
      <p className='text-red-600'>{errors.checkbox?.message}</p>
      <button
        className="mt-6 block w-full select-none rounded-lg bg-orange-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit"
        data-ripple-light="true"
      >
        Register
      </button>
    
    </form>



    </div>
  )
}

export default page