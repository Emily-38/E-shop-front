'use client'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar';
import { Slide, ToastContainer } from 'react-toastify';



export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
  return (
  <div>
  <Header/>
        

        {children}
  </div>
  )
}

