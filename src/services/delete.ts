import axios from "axios"

export async function deleteProduct(id: string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/delete/${id}`
    return axios.delete(
        url, axiosConfig
    )
      
}

export async function deleteStock(id: string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}stock/delete/${id}`
    return axios.delete(
        url, axiosConfig
    )
      
}

export async function deleteCategory(id: string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}category/delete/${id}`
    return axios.delete(
        url, axiosConfig
    )
      
}
export async function deleteType(id: string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}type/delete/${id}`
    return axios.delete(
        url, axiosConfig
    )
      
}