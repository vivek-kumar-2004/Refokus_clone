import React from 'react'

function Footer() {
  const Nav=["Privacy Policy","Cookie Policy","Impressum","Terms","Webflow Agency"];
  return (
    <div className='w-full px-[5.2vw]  py-4 mx-auto flex items-center justify-between bg-[#000000] pb-6'>
        <div className='flex gap-8 font-[satoshi_variable] text-sm '>
                {Nav.map((elem,index)=>(
                    <div key={index} className='flex items-center'>
                    <a className='text-zinc-500 text-white' href="#" >{elem}</a>
                    </div>    
            ))}
        </div>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />
    </div>
  )
}

export default Footer