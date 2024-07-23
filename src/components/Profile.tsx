import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import {  FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Profile()
 {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter()

  return (
    <div className='text-right  '>
      <Button
      className='text-orange-950 font-bold '
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FaUserAlt className='text-orange-950 text-3xl '/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        {localStorage.getItem('role')==='admin'?
        <MenuItem className='flex flex-col w-44'> <p className='text-center p-3' onClick={()=>{
            router.push('/admin')
            handleClose
        }}>Admin</p></MenuItem>:'' }
        <MenuItem className='flex flex-col w-44'>
        <p className='text-center p-3'> Orders </p></MenuItem>
        <MenuItem className='flex flex-col w-44'> <p className='text-center p-3'>Setting </p></MenuItem>
        <MenuItem className='flex flex-col w-44'> <p className="text-center p-3" onClick={()=>{
        localStorage.removeItem('sub')
        localStorage.removeItem('role')
        toast.success('Log out successfull')
       }}>Log out</p> </MenuItem>

      </Menu>
    </div>
  );
}