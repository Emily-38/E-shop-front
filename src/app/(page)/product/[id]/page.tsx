'use client'
import { Header } from '@/components/Header'
import { InputRadio } from '@/components/InputRadio'
import { ModalUpdateProduct } from '@/components/ModalUpdateProduct'
import { deleteProduct } from '@/services/delete'
import { GetProductById } from '@/services/get'
import { CreateCartContent } from '@/services/post'
import { ParamsProduct } from '@/utils/params'
import { ProductType } from '@/utils/type'
import Image from 'next/image'

import React, { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'

const page = ({params}:ParamsProduct) => {
const[product,setProduct]=useState<ProductType>()
const [selectedId,setSelectedId] = useState("")
const[quantity,setQuantity]=useState<string>('')
const[size,setSize]=useState<string>('')

 
async function deleteHandleProduct(id: string){
    deleteProduct(id).then((res)=>{
        if(res.status === 200){
            toast.success('delete successful')
        }
    }).catch((e)=>(
        toast.error(e.response.data.message)
   )
    )

}

useEffect(() => {
    GetProductById(params.id).then((res)=>{
     
        setProduct(res.data[0])
        
    })

  
}, [])

async function handleAddProduct(quantity: string , size: string){
    CreateCartContent(params.id, quantity, size).then((res)=>{
       if(res.status===201){
        toast.success('product add cart')
       }
    })
 }
if(!product){
    return <div>sorry this article not exist </div>
}

  return (
    <div className='m-5'>
    
        
    <div className='lg:grid grid-cols-2 m-5'>
        <Image src={`http://localhost:3001/image/view/${product.image}`}  width={1000} height={1000} alt={'Product image'} className='w-1/2 mx-auto' />
        <div className='m-5 '>
        <h1 className=' font-bold text-4xl '>{product.title}</h1>
            <p className='m-3'>{product.description}</p>
        
            <p className='text-left font-bold text-2xl mt-10'> Size:</p>
            <div>
                <div className='flex flex-wrap justify-left m-3 gap-2 lg:gap-5'>
                    {product.Stock && product.Stock.map((stock)=>{
                        
                         return(
                            <div>
                            <InputRadio stock={stock} selectedId={selectedId} setSelectedId={setSelectedId} setSize={setSize}/>
                            </div>
                        )
                    })
                    }
                </div>
                
                    <p className='text-left font-bold text-2xl mt-10'> Quantity:</p>
                    <div className='flex justify-start flex-col' >
                        <input type="number" min={0} className='my-5 mx-3 p-3 w-44 border border-orange-200 shadow-md text-center text-orange-950 focus:outline-none rounded-md' onChange={(e)=>{
                            setQuantity(e.target.value)
                        }}/>
                        
                        <p className='text-xl text-left m-3'>{product.price}$</p>
                        <button type='submit' className='m-5 bg-orange-200 w-44 rounded-md p-3 text-orange-950 font-bold shadow-md ' onClick={()=>{
                            handleAddProduct(quantity, size)
                        }}> Add cart </button>
                    </div>
                    
            </div>
            {localStorage.getItem('role') === 'admin'? <button onClick={()=>{
                       deleteHandleProduct(product.id)
                    }}><FaTrash className='text-red-600'/></button>:""}
                  
              {localStorage.getItem('role') === 'admin'? <ModalUpdateProduct params={params} />:""}    
        </div>
    
    </div>
    
    </div>
  )
}

export default page