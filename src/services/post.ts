import { CategoryType, InsertProductType, ProductType, StockType } from "@/utils/type"
import axios from "axios"

export async function CreateStock(id: string, data:StockType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}stock/create`
    return axios.post(
        url,{ 
            
                size: data.size,
                quantity: Number(data.quantity),
                productId:id
        }, axiosConfig
    )
      
}

export async function CreateCatgeory( data:CategoryType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}category/create`
    return axios.post(
        url,{ 
            
                name: data.name,
                
        }, axiosConfig
    )
      
}

export async function CreateType( data:CategoryType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}Type/create`
    return axios.post(
        url,{ 
            
                name: data.name,
                
        }, axiosConfig
    )
      
}

export async function InsertImage(image:any){
    let axiosConfig = {
        headers: {
            'content-type': 'multipart/form-data',
           
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
   
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}image/upload`
    return axios.post(
        url, image, axiosConfig
    ).then((res) => {
        return res;
      })
      .catch((e) => {
       console.log(e)
        
        return e;
      });
    }
      


export async function CreateProduct(data:InsertProductType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/create`
    return axios.post(
        url,{ 
                title: data.title,
                description: data.description,
                price: Number(data.price),
                categoryId:data.CategoryId,
                typeId:data.typeId,
                image: data.image
        }, axiosConfig
    )
      
}
export async function CreateCartContent(id: string, quantity:string, size:string){
    let axiosConfig ={
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}cart-content/create`
    return axios.post(
        url,{ 
             size:size,
            quantity:Number(quantity),
                    productId:id 
               
        }, axiosConfig
    )
      
}
export async function CreateCart( token:string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}cart/create/${token}`
    return axios.post(
        url,{ 
                statut: 'in progress',
                
        }, axiosConfig
    )
      
}
