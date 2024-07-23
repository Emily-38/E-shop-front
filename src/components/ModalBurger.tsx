import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi';

import { TypeType } from '@/utils/type';
import { useEffect, useState } from 'react';
import { GetTypeAll } from '@/services/get';





const style = {
    position: 'absolute' as 'absolute',
    top: '25%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
   
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };
  

export const ModalBurger = () => {
    const router=useRouter()
    const[type, setType]=useState<TypeType[]>()
  useEffect(() => {
    GetTypeAll().then((res)=>{
      setType(res.data)
    })
  
    
  }, [])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   
  return (
  <div className='lg:hidden'>
    <Button onClick={handleOpen} > 
    <GiHamburgerMenu  className='text-orange-950 text-3xl ' />
       </Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
 
>
  <Box sx={style} className='w-3/4 flex flex-col items-center gap-5' >
    {type && type.map((types)=>{
        return(
            <p className='font-semibold text-orange-950' onClick={()=>{
                router.push(`/${types.id}`)
            }}>{types.name}</p>
        )
    })}
  </Box>
</Modal>
</div>
  )
}
