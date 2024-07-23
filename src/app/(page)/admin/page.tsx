'use client'
import { Header } from '@/components/Header'
import { ModalCreateProduct } from '@/components/ModaleCreateProduct'
import { SearchBar } from '@/components/SearchBar'
import TableAdmin from '@/components/TableAdmin'
import TableCategory from '@/components/TableCategory'
import TableType from '@/components/TableType'
import TableUser from '@/components/TableUser'
import { GetAllUser, GetProductAll } from '@/services/get'
import { ProductType, UserType } from '@/utils/type'
import React, { useEffect, useState } from 'react'

const admin = () => {
 const[product,setProduct]=useState<ProductType[]>()
 const[users,setUsers]=useState<UserType[]>()
 const[searchProduct,setSearchProduct]=useState<string>('')
 const[searchUser,setSearchUser]=useState<string>('')
 useEffect(() => {
   GetProductAll(searchProduct).then((res)=>{
    setProduct(res.data)
    
   })
  GetAllUser(searchUser).then((res)=>{
  setUsers(res.data)
 })
   
 }, [searchProduct,searchUser])
 if(!product){
  return <div>error</div>
 }
 if(!users){
  return <div>error</div>
 }
  return (
    <div>
      
      <div className='flex justify-between'>
      <SearchBar setSearch={setSearchProduct}/><ModalCreateProduct/></div>
        <TableAdmin Product={product}/>
        <div className='grid grid-cols-2 gap-2'>
        <TableCategory/> <TableType/>
        </div>
        
      <SearchBar setSearch={setSearchUser}/>
        <TableUser users={users}/>

    </div>
  )
}

export default admin