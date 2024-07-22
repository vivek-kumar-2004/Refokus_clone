import React from 'react'
import Button from './Button';

function Navbar() {
  const Nav=["Home","Work","About","News","Careers"];
  return (
    <div className='w-full px-[5.2vw]  py-4 mx-auto flex items-center justify-between bg-[#000000]  top-0 sticky z-50'>
        <div className='flex gap-[5.6vw]'>
            <img className='h-content' src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='flex gap-12 font-[satoshi_variable] text-sm'>
                {Nav.map((elem,index)=>(
                    <div key={index} className='flex items-center gap-1'>
                    {index===1 && <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className='inline-block w-[0.3vw] h-[0.3vw] rounded-full bg-[#00FF19] shadow-2xl'></span>}
                    <a className='text-white' href="#" >{elem}</a>
                    </div>    
            ))}
            </div>
        </div>
        <Button title="Start a Project"/>
    </div>
  )
}

export default Navbar