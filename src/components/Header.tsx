import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'


import { SearchBar } from './SearchBar'
import { ModalAuth } from './ModalAuth'
import { ModalSearch } from './ModalSearch'
import { ModalBurger } from './ModalBurger'
import { ModalCart } from './ModalCart'
import { useRouter } from 'next/navigation'
import Profile from './Profile'
import { ProductType } from '@/utils/type'


export const Header = () => {

  const router= useRouter()
  return (
    <div >
        <div className='flex flex-rows items-center justify-between text-orange-950 text-3xl'>
        <ModalBurger/>
         <Image src={'/Logo_H&N.png'} alt={'Logo H&N'} width={1000} height={1000} className='w-20' onClick={()=>{
          router.push('/')
         }}/>
        



         <div className='flex flex-row '>
{localStorage.getItem('sub')? <Profile/>:<ModalAuth/> }
        
          <ModalSearch/>
         
         <ModalCart/>
         </div>

    </div>



    </div>
  )
}
