import { CategoryType, ProductType, StockType, TypeType, UserType } from "@/utils/type"
import axios from "axios"

export async function updateProduct(id: string, data:ProductType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/update/${id}`
    return axios.patch(
        url,{ title: data.title,
                description: data.description,
                price: Number(data.price),
                categoryId:data.CategoryId,
                typeId:data.typeId
        }, axiosConfig
    )
      
}

export async function UpdateStock(id: string, data:StockType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}stock/update/${id}`
    return axios.patch(
        url,{ 
            quantity:Number( data.quantity),
                size:data.size
                
        }, axiosConfig
    )
      
}

export async function UpdateCategory(id: string, data:CategoryType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}category/update/${id}`
    return axios.patch(
        url,{ 
     
                name:data.name
                
        }, axiosConfig
    )
      
}
export async function UpdateType(id: string, data:TypeType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}type/update/${id}`
    return axios.patch(
        url,{ 
     
                name:data.name
                
        }, axiosConfig
    )
      
}


export async function UpdateUser(id:string , data:UserType){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}user/update/${id}`
    return axios.patch(
        url,{ 
                lastName: data.lastName,
                firstName: data.firstName,
                adress: data.adress,
                email:data.email,
                isActive: Boolean(data.isActive)
        }, axiosConfig
    )
      
}