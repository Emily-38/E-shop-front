'use client'
import { CartListProduct } from "@/components/CartListProduct";
import { CartProduct } from "@/components/CartProduct";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { GetProductAll } from "@/services/get";
import { ProductType } from "@/utils/type";
import { useEffect, useState } from "react";



export default function Home() {
  const[search, setSearch]=useState<string>('')
  const[product, setProduct]=useState<ProductType[]>()
  useEffect(() => {
    GetProductAll(search).then((res)=>{
      setProduct(res.data)
    })
  
    
  }, [search])
  if(!product){
    return <p>error</p>
  }
  
  return (
    <main>
   <Header />
   <div className="flex justify-center">
   <SearchBar setSearch={setSearch}/>
   </div>
   <Navbar />
   <CartListProduct Children={product && product.map((product)=>{
    return(
   
    <CartProduct product={product}/>
    )
   })}/>
   
    </main>
  );
}
