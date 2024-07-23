export type RegisterType={
    email: string
    lastName: string
    firstName:string
    adress:string
    password:string
    checkbox: boolean

}

export type LoginType={
    email:string
    password:string
}

export type activateUserType={
    token: { params: activateUserType }
    params:{
        token:string 
    }
    
}