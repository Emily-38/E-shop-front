'use client'
import { CartListProduct } from '@/components/CartListProduct'
import { CartProduct } from '@/components/CartProduct'
import Filter from '@/components/Filter'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { GetProductType } from '@/services/get'
import { ParamsType } from '@/utils/params'
import { ProductType } from '@/utils/type'
import React, { useEffect, useState } from 'react'

const page = ({params}:ParamsType) => {
  const[products,setProducts]=useState<ProductType[]>()
  const [categoryFilter,setCategoryFilter]=useState<string>('')
  const [value, setValue] = React.useState<number[]>([0, 100]);

  useEffect(() => {
    GetProductType(params.id,value[0],value[1] ,categoryFilter).then((res)=>{
      console.log(res.data)
      setProducts(res.data)
    })
  
   
  }, [categoryFilter,value])
  if(!products){
    return <div>error</div>
  }
  
  return (
    <>
    <Navbar/>
    <div >
       
      <Filter setCategoryFilter={setCategoryFilter} value={value} setValue={setValue}/>
      <CartListProduct Children={products && products.map((product: ProductType)=>{
       
       return(
         <CartProduct product={product}/>
       )
     })}/>
    </div>
    </>
  )
}

export default page