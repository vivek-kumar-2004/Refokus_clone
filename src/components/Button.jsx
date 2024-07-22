import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title}) {
  return (
    <div className='px-[1.2vw] py-[0.4vw] bg-white rounded-full flex items-center gap-2 '>
        <span className='text-m text-zinc-700 font-[satoshi_variable]'>{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}

export default Button