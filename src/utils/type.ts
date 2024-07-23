

export type TypeType={
    id: string
    name: string
    Product:ProductType[]
}
export type ProductType={
    id:string
    title:string
    description:string 
    price: number
    image: string
    Stock: StockType[]
    CategoryId: string
    typeId:string
  
}

export type InsertProductType={
    
    title:string
    description:string 
    price: number
    image: string
    files?:  File[]
    CategoryId: string
    typeId:string
  
}
export type StockType={
    id:string
    size: string
    quantity:number,
    productId:string
    

}

export type CartContentType={
    id:string
    stock:StockType[]
}
export type CartType={
    id:string
    CartContent:CartContentType[]
}

export type CategoryType={
    id:string
    name: string
    Product:ProductType[]
    

}

export type UserType={
    id:string, 
    firstName:string,
    lastName:string,
    email:string,
    adress:string,
    role:string,
    isActive:boolean
}
