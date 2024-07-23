import axios from "axios";
export async function GetTypeAll(){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}type/all`
    return axios.get(
        url, axiosConfig
    )
      
}
export async function GetAllProduct(){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/all`
    return axios.get(
        url, axiosConfig
    )
}

export async function GetAllCart(){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
             Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}cart/all`
    return axios.get(
        url, axiosConfig
    )
}
export async function GetProductAll(search:string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/search?query=${search}`
    return axios.get(
        url, axiosConfig
    )
}

    export async function GetProductType( query:string, minPrice:number  ,maxPrice:number  ,categoryId: string ){
        let axiosConfig = {
            headers: {
                'content-type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }
        const category=categoryId ? `&category=${categoryId}`:''
        const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/filter/${query}?minPrice=${String(minPrice)}&maxPrice=${String(maxPrice)}${category}`
        return axios.get(
            url, axiosConfig
        )
        
}
export async function GetProductById(query:string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}product/by-id/${query}`
    return axios.get(
        url, axiosConfig
    )
}
export async function GetAllCategory(){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}category/all`
    return axios.get(
        url, axiosConfig
    )
}
export async function GetAllUser(query: string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}user/search?query=${query}`
    return axios.get(
        url, axiosConfig
    )
}
export async function GetUserById(id:string){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}user/by-id/${id}`
    return axios.get(
        url, axiosConfig
    )
}

export async function GetCart(){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${localStorage.getItem("sub")}`
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}cart-content/all`
    return axios.get(
        url, axiosConfig
        
    )
}
