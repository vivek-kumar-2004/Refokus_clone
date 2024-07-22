import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Card({width,button,para,text1,text2,Hover}) {
  return (
    <div className={`text-white min-h-[63vh] ${width} bg-[#29292E] rounded-2xl px-5 py-6 flex flex-col justify-between ${Hover && `hover:bg-[#7443FF]`}`}>
        <div>
            <div className='flex justify-between'>
                <h1 className='text-sm'>{text1}</h1>
                <FaArrowRightLong />
            </div>
            <h2 className='w-[16vw] text-[1.7vw] font-semibold leading-8 mt-7'>{text2}</h2>
        </div>
        <div>
            {button && (
                <>
                    <h1 className='text-[7vw] font-semibold '>Start a Project</h1>
                    <button className='px-6 py-[0.7vw] border-[1px] rounded-full font-semibold '>Contact us</button>
                </>
            )}
            {para && <p className='text-sm text-[#AEAEB3]'>Explore what drives our team.</p>} 
        </div>
    </div>
  )
}

export default Card