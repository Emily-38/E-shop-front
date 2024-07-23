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
import { deleteProduct, deleteStock } from '@/services/delete';
import { toast } from 'react-toastify';
import { ModalCreateStock } from './ModalCreateStock';
import { ModalUpdateStock } from './ModalUpadateStock';
import { ModalCreateCategory } from './ModalCreateCategory';
import { ModalCreateType } from './ModalCreateType';




export default function TableAdmin({Product}:{Product:ProductType[]}) {
 
    const[categories, setCategories]=useState<CategoryType[]>()
    const[types,setTypes]=useState<TypeType[]>()
    useEffect(() => {
     GetAllCategory().then((res)=>{
        setCategories(res.data)
     })
     GetTypeAll().then((res)=>{
        setTypes(res.data)
     })
    }, [])
    if(!categories){
        return <div>error</div>
    }

    async function handleDeleteProduct(id: string){
        deleteProduct(id).then((res)=>{
            if(res.status === 200){
                toast.success('delete successful')
            }
        }).catch((e)=>(
            toast.error(e.response.data.message)
       )
        )
    
    }
    async function handleDeleteStock(id: string){
        deleteStock(id).then((res)=>{
            if(res.status === 200){
                toast.success('delete successful')
            }
        }).catch((e)=>(
            toast.error(e.response.data.message)
       )
        )
    
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="center">Size/Quantity </TableCell>
            <TableCell align="right">Category <ModalCreateCategory/></TableCell>
            <TableCell align="right">Type <ModalCreateType/></TableCell>
            <TableCell align="center">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Product.map((prod :ProductType) => (
            <TableRow
              key={prod.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {prod.title}
              </TableCell>
              <TableCell align="right">{prod.price}</TableCell>
              <TableCell align="right">{prod.Stock && prod.Stock.map((stock)=>{
                return(
                   <div className='flex gap-2 justify-end'> <p>{stock.size}:{stock.quantity}</p><ModalUpdateStock params={stock}/><FaTrash className='text-red-600 my-auto'onClick={()=>{
                        handleDeleteStock(stock.id) 
                    }}/></div>
                )
              })}</TableCell>
              <TableCell align="right">{categories && categories.map((category)=>{
               
                
                if(category.id === prod.CategoryId){
                    return (<p className='text-center'>{category.name}</p>)
                }
              })}</TableCell>
              <TableCell align="right">{types && types.map((type:TypeType)=>{
                console.log(prod)
                if(type.id === prod.typeId){
                    return(<p className='text-center'>{type.name}</p>)
                }
              })}</TableCell>

              <TableCell align="right" ><div className='flex gap-5 justify-end'>
                <ModalUpdateProduct params={prod}/>
                <FaTrash className='text-red-600 my-auto'onClick={()=>{
                    handleDeleteProduct(prod.id)
                }}/>
                <ModalCreateStock params={prod}/>
                </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
