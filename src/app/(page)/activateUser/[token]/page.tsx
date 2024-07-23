'use client'
import { activateAccount } from '@/services/auth'
import { CreateCart } from '@/services/post'
import { activateUserType } from '@/utils/auth'
import Image from 'next/image'
import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'

const activateUser = ({params}:activateUserType) => {
 
    useEffect(() => {
      CreateCart(params.token)
      activateAccount(params.token)

   
    }, [])

    
    
  return (
    <div className='flex flex-col justify-center items-center text-center'>
        <Image src={'/Logo_H&N.png'} alt={'Logo'} width={1000} height={1000} className='w-40 h-40'/>
        <p className='font-bold text-lg '>Congratulations, your account has been activated and you can now log in.</p>
        </div>
  )

}

export default activateUser