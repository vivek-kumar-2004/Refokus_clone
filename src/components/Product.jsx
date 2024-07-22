import React from 'react'
import Button from './Button'

function Product({val,mover, count}) {
  return (
    <div className='w-full h-[18rem] transition-all duration-300 ease-in-out delay-150 hover:bg-[#5355EE] '>
        <div onMouseEnter={()=>{mover(count)}} className='w-[82%] h-full ml-20 flex justify-between items-center '>
            <h1 className='text-white text-5xl font-medium'>{val.title}</h1>
            <div >
                <p className='text-white w-[21vw] mb-[1.7vw]'>{val.description}</p>
                <div className='flex gap-2'>
                    {val.live && <Button title="Live Website"/>}
                    {val.case && <Button title="Case Study"/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product