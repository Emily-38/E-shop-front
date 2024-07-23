import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import { FaPen } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';



import { toast } from 'react-toastify';
import { CategoryType, ProductType, TypeType, UserType } from '@/utils/type';
import { updateProduct, UpdateUser } from '@/services/update';
import { useEffect, useState } from 'react';
import { GetAllCategory, GetProductAll, GetProductById, GetTypeAll, GetUserById } from '@/services/get';
import { ParamsProduct } from '@/utils/params';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
   
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
  };
  

export const ModalUpdateUser = ({params}:ParamsProduct) => {
    const router=useRouter()
    const[user,setUser]=useState<UserType>()
   
   
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {register,handleSubmit ,formState:{errors}}=useForm<UserType>({mode:'onSubmit'})
    const onSubmit: SubmitHandler<UserType> = (data) => 
         UpdateUser( params.id, data).then((res)=>{
         if(res.status=== 200){
             toast.success('update successfull')
             setOpen(false)
        }
     }).catch((e)=>(
         toast.error(e.response.data.message)
    )
     )

     useEffect(() => {
        GetUserById(params.id).then((res)=>{
            setUser(res.data[0])
        })
      
     
       
     }, [])
     

  return (
  <>
    <Button onClick={handleOpen}>
       <FaPen  className='text-orange-950 text-xl p-px  '/>
    </Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
 
>
  <Box sx={style} >
        <h1 className='text-center text-xl font-bold'>Update Product</h1>
        <form className="mt-8 mb-2 mx-auto text-center w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)} >
      <div className="mb-4 flex flex-col gap-6">
        

        <div className="relative mx-auto h-11 w-4/5 min-w-[200px]">
          <input
          {...register('lastName')}
            className="peer h-full  w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            defaultValue={`${user?.lastName}`}
            type="text"
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
           LastName
          </label>
          <p className='text-red-600'>{errors.lastName?.message}</p>
        </div>


        <div className="relative mx-auto h-11 w-4/5 min-w-[200px]">
          <input
          {...register('firstName')}
            type="string"
            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            defaultValue={`${user?.firstName}`}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            FirstName
          </label>
          <p className='text-red-600'>{errors.firstName?.message}</p>
        </div>


        <div className="relative mx-auto h-11 w-4/5 min-w-[200px]">
          <input
          {...register('email')}
            type="email"
            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
           defaultValue={`${user?.email}`}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
           Email
          </label>
          <p className='text-red-600'>{errors.email?.message}</p>
        </div>


        <div className="relative mx-auto h-11 w-4/5 min-w-[200px]">
          <input
          {...register('adress')}
          type='text'
          defaultValue={user?.adress}
            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          
          >
    

          </input>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Adress
          </label>
          <p className='text-red-600'>{errors.adress?.message}</p>
        </div>

        <div className="relative mx-auto h-11 w-4/5 min-w-[200px]">
          <select
          {...register('role')}
            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            
          >
            
                    <option value='user'>User</option>
                    <option value='admin'>Admin</option>
              

          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Role
          </label>
          <p className='text-red-600'>{errors.role?.message}</p>
        </div>


        <div className="relative mx-auto h-11 w-4/5 min-w-[200px]">
          <select
          {...register('isActive')}
            className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            
          >
            
                    <option value={1}>Active</option>
                    <option value={0}>InActive</option>
              

          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-orange-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-orange-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-orange-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Is Active
          </label>
          <p className='text-red-600'>{errors.role?.message}</p>
        </div>



      </div>
   
      <button
        className="mt-6 mx-auto block w-4/5 select-none rounded-lg bg-orange-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit"
        data-ripple-light="true"
      >
        Update product
      </button>
      
    </form>

  </Box>
</Modal>
</>
  )
}
