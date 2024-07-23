'use client'
import { GetTypeAll } from '@/services/get'
import { TypeType } from '@/utils/type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const router = useRouter()
  const[type, setType]=useState<TypeType[]>()
  useEffect(() => {
    GetTypeAll().then((res)=>{
      setType(res.data)
    })
  }, [])

  if(!type){
    return <p>error</p>
  }
  
  return (
    <div className='hidden text-amber-950 font-semibold flex-row gap-10 m-10 justify-center lg:flex'>
      {type && type.map((Type)=>{
        return(
      <p className='hover:underline cursor-pointer hover:text-orange-300'
      onClick={()=>{
        router.push(`/${Type.id}`)
      }}>{Type.name}</p>
    )
      })}
      
    </div>
  )
}
