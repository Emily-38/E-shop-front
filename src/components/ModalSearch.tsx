import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';





const style = {
    position: 'absolute' as 'absolute',
    top: '10%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };
  

export const ModalSearch = () => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

   
  return (
  <div className='lg:hidden'>
    <Button onClick={handleOpen} > 
    <FaSearch className=' text-orange-950 text-3xl ' />
       </Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
 
>
  <Box sx={style} className='w-full flex items-center gap-2' >
    <input type="text" className=' w-full p-3 border border-orange-200 outline-none text-center text-xl text-orange-950' />
    <button>
        <FaSearch className='lg:hidden text-orange-950 text-3xl' />
    </button>
        
  </Box>
</Modal>
</div>
  )
}
