'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CategoryType, ProductType, StockType, TypeType } from '@/utils/type';
import {  FaTrash } from 'react-icons/fa';

import { useEffect, useState } from 'react';
import { GetAllCategory, GetTypeAll } from '@/services/get';
import { ModalUpdateProduct } from './ModalUpdateProduct';
import { deleteCategory, deleteProduct, deleteStock } from '@/services/delete';
import { toast } from 'react-toastify';
import { ModalCreateStock } from './ModalCreateStock';
import { ModalUpdateStock } from './ModalUpadateStock';
import { ModalCreateCategory } from './ModalCreateCategory';
import { ModalCreateType } from './ModalCreateType';
import { ModalUpdateCategory } from './ModalUpdateCategory';




export default function TableCategory() {
 
    const[categories, setCategories]=useState<CategoryType[]>()
    const[types,setTypes]=useState<TypeType[]>()
    useEffect(() => {
     GetAllCategory().then((res)=>{
        setCategories(res.data)
     })
   
    }, [])
    if(!categories){
        return <div>error</div>
    }

    async function handleDeleteCategory(id: string){
        deleteCategory(id).then((res)=>{
            if(res.status === 200){
                toast.success('delete successful')
            }
        }).catch((e)=>(
            toast.error(e.response.data.message)
       )
        )
    
    }
 
    
    
  return (
    <TableContainer component={Paper} className='my-5 '>
        <p className='font-bold text-center'>Category</p>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          
            <TableCell align="center">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category :CategoryType) => (
           
            <TableRow
              key={category.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {category.name}
              </TableCell>
           
              

              <TableCell align="right" ><div className='flex gap-5 justify-end'>
                <ModalUpdateCategory params={category}/>
                <FaTrash className='text-red-600 my-auto'onClick={()=>{
                    handleDeleteCategory(category.id)
                }}/>
               
                </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
