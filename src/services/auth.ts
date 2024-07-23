import { activateUserType, LoginType, RegisterType } from "@/utils/auth";
import axios from "axios";
export async function registerForm(data:RegisterType ){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}auth/signup`
    return axios.post(
        url,
        {
            firstName:data.firstName,
            lastName:data.lastName,
            adress:data.adress,
            email: data.email,
            password: data.password, 
        },
        axiosConfig
    )
      
}

export async function loginForm(data:LoginType ){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}auth/signin`
    return axios.post(
        url,
        {
            email: data.email,
            password: data.password, 
        },
        axiosConfig
    )
}
    export async function activateAccount(token:string ){
        let axiosConfig = {
            headers: {
                'content-type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            },
        }
        const url = `${process.env.NEXT_PUBLIC_LIEN_API}auth/validate/${token}`
        return axios.patch(
            url,axiosConfig
        )}
      
