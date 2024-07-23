import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { FaShoppingCart} from 'react-icons/fa';


import {  CartContentType, ProductType, StockType } from '@/utils/type';
import { useEffect, useState } from 'react';
import { GetAllProduct, GetCart} from '@/services/get';
import Image from 'next/image';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };
  

export const ModalCart = () => {
   const[panier,setPanier]=useState<CartContentType[]>()
   const[products,setProducts]=useState<ProductType[]>()
   
  
useEffect(() => {
  GetCart().then((res)=>{
   
    setPanier(res.data)
  })
GetAllProduct().then((res)=>{
  setProducts(res.data)
})


  
}, [])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   if(!panier){
    return  <Button onClick={handleOpen} > 
    <FaShoppingCart  className='text-orange-950 text-3xl' />
      
    </Button>
   }
   console.log(panier)
  return (
  <div >
    <Button onClick={handleOpen} > 
    <FaShoppingCart  className='text-orange-950 text-3xl' />
      
    </Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
 
>
  <Box sx={style} className='w-3/4 flex flex-col items-center gap-5' >
    <h1 className='font-bold text-center text-xl'>Cart</h1>


{panier && panier.map((cartContent:any )=>{

  
  return(
    
<div className='flex flex-rows justify-between gap-3'>
{products && products.map((product)=>{
  
 if(product.id === cartContent.stock[0].productId ){
  return ( 
    <>
    <Image width={1000} height={1000} className='w-20 h-20' src={`http://localhost:3001/image/view/${product.image}`} alt={'Image product'}/>
    <p className='ml-3'>{product.title}</p>
    </>
  )  
    
 }   
  
})}

  <p className='mr-2'> size:{cartContent.stock[0].size}</p>
  <p >quantity: {cartContent.stock[0].quantity}</p>
  
  
   </div>
  )
})}
    

  </Box>
</Modal>
</div>
  )
}
