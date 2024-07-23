import { ProductType } from '@/utils/type'
import React, { Dispatch, SetStateAction } from 'react'
import { FaSearch } from 'react-icons/fa'

export const SearchBar = ({setSearch}:{setSearch:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className='hidden bg-white rounded-md w-52 flex-row items-center justify-center gap-4 lg:flex  '>
        
        <input type="text" placeholder='Search'className='text-center text-sm focus:outline-none' onChange={(e)=>{
          setSearch(e.target.value)
          console.log(e.target.value)
        }}/>
        <FaSearch className=' pr-2  text-3xl' />
    </div>
  )
}
