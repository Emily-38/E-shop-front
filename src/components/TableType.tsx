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
import { deleteCategory, deleteProduct, deleteStock, deleteType } from '@/services/delete';
import { toast } from 'react-toastify';
import { ModalCreateStock } from './ModalCreateStock';
import { ModalUpdateStock } from './ModalUpadateStock';
import { ModalCreateCategory } from './ModalCreateCategory';
import { ModalCreateType } from './ModalCreateType';
import { ModalUpdateCategory } from './ModalUpdateCategory';
import { ModalUpdateType } from './ModalUpdateType';




export default function TableType() {
 
    const[types,setTypes]=useState<TypeType[]>()
    useEffect(() => {
     GetTypeAll().then((res)=>{
        setTypes(res.data)
     })
   
    }, [])
    if(!types){
        return <div>error</div>
    }

    async function handleDeleteType(id: string){
        deleteType(id).then((res)=>{
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
        <p className='font-bold text-center'>Type</p>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
          
            <TableCell align="center">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {types.map((type :TypeType) => (
           
            <TableRow
              key={type.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {type.name}
              </TableCell>
           
              

              <TableCell align="right" ><div className='flex gap-5 justify-end'>
                <ModalUpdateType params={type}/>
                <FaTrash className='text-red-600 my-auto'onClick={()=>{
                    handleDeleteType(type.id)
                }}/>
               
                </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
