'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CategoryType, ProductType, StockType, TypeType, UserType } from '@/utils/type';
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
import { ModalUpdateUser } from './ModalUpdateUser';




export default function TableType({users}:{users:UserType[]}) {
 
   

   
 
    
    
  return (
    <TableContainer component={Paper} className='my-5 '>
        <p className='font-bold text-center'>User</p>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
            <TableCell>LastName</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>Adress</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>isActive</TableCell>
            <TableCell align="center">Option</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user :UserType) => (
           
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.lastName}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              
              <TableCell component="th" scope="row">
                {user.adress}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.email}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.role}
              </TableCell>
              <TableCell component="th" scope="row">
                {Number(user.isActive)}
              </TableCell>
              <TableCell align="right" ><div className='flex gap-5 justify-end'>
                <ModalUpdateUser params={user}/>
              
               
                </div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
