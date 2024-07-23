import { StockType } from '@/utils/type'
import React from 'react'
import { Header } from './Header'



export const InputRadio = ({stock,selectedId,setSelectedId, setSize}:{stock:StockType,selectedId:string,setSelectedId:any ,setSize:React.Dispatch<React.SetStateAction<string>>}) => {
  
  console.log(selectedId)
  return (
   

    <div className="w-24">
      
        <div className="relative mx-auto shadow-md cursor-pointer rounded-md" onClick={()=>{setSelectedId(stock.id), setSize(stock.size)}} >
            <div className="flex items-center" >
                <input  type="radio" className={`${selectedId === stock.id && 'bgInput'} before:content[''] peer border-orange-200  bg-white relative h-10  w-24 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity   hover:before:opacity-10`}/>
                <p className="absolute left-1/3 text-base s text-orange-950 font-bold">{stock.size}</p>
            </div>

        </div>
       
    </div>

  )
}
