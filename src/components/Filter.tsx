import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaFilter } from 'react-icons/fa';


import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import { CategoryType } from '@/utils/type';
import { GetAllCategory } from '@/services/get';



export default function Filter({setCategoryFilter, value,setValue }:{setCategoryFilter:React.Dispatch<React.SetStateAction<string>>,value:number[], setValue:React.Dispatch<React.SetStateAction<number[]>>})
   
 {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const[category,setCategory]=useState<CategoryType[]>()

 

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  function valuetext(value: number) {
    return `${value}$`;
  }

  useEffect(() => {
    GetAllCategory().then((res)=>{
    setCategory(res.data)
   
})
console.log(value[0])
  }, [value])
  

  return (
    <div className='text-right  lg:mx-32'>
      <Button
      className='text-orange-950 font-bold '
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Filter <FaFilter className='text-orange-950 m-2' />
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
       
        <h1 className='font-bold text-center text-xl'>Filter</h1>
        
        <MenuItem className='flex flex-col w-44'>
        <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        className=' m-3'
      />
   </MenuItem>
{category && category.map((categories:CategoryType)=>{
  
    return(
      <MenuItem className='flex flex-col w-44'>
        <p className='text-center m-2' onClick={()=>{
            setCategoryFilter(categories.id)
            handleClose
        }}>{categories.name}</p>
        </MenuItem>
    )
})}

      </Menu>
    </div>
  );
}