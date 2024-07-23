import { ProductType } from '@/utils/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const CartProduct = ({product}:{product:ProductType}) => {
  const router= useRouter()
  return (
    
<div className="relative flex  max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
   <Image width={1000} src={`http://localhost:3001/image/view/${product.image}`} height={1000} alt='Product Image'  />
 
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {product.title}
    </h4>
   <p className='text-right mt-10 font-semibold text-xl'>{product.price}$</p>
  </div>
  <div className="flex items-center justify-between p-6">
  
    <button className="block font-sans text-base border shadow-md p-3 mx-auto font-normal leading-relaxed text-inherit antialiased hover:font-semibold" onClick={()=>{
      router.push(`/product/${product.id}`)
    }}>
      See more
    </button>
  </div>
</div>


  )
}
