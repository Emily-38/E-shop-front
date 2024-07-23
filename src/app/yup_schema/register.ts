import { title } from "process"
import * as yup from "yup"

export const schemaRegister = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    adress: yup.string().required(),
    email: yup.string().email("please write a email").required(),
    password: yup.string().matches(/[a-z]/,"need a charactere").matches(/[A-Z]/,"need a capital letter").matches(/[1-9]/,"need a number").matches(/[/#?!@$%^&*-]/,"need a specials characters").required(),
    checkbox: yup.bool() .oneOf([true], "You must accept the terms and conditions").required()
  })
  .required()

  export const schemaLogin = yup
  .object({

    email: yup.string().email("please write a email").required(),
    password: yup.string().matches(/[a-z]/,"need a charactere").matches(/[A-Z]/,"need a capital letter").matches(/[1-9]/,"need a number").matches(/[/#?!@$%^&*-]/,"need a specials characters").required(),
    
  })
  .required()

  export const schemaUpdateProduct = yup
  .object({

    title: yup.string().email("please write a email"),
    description: yup.string().matches(/[a-z]/,"need a charactere").matches(/[A-Z]/,"need a capital letter").matches(/[1-9]/,"need a number").matches(/[/#?!@$%^&*-]/,"need a specials characters"),
    price:yup.number().min(0).max(100),
    categoryId:yup.string(),
    typeId:yup.string()
  })
  
