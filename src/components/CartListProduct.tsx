import React, { Children, DetailedHTMLProps, HTMLAttributes } from 'react'

export const CartListProduct = ({Children}:{Children:React.ReactNode}) => {
  return (
    <div className="flex flex-rows flex-wrap gap-5 m-4 justify-center items-center">
        {Children}
    </div>
  )
}
