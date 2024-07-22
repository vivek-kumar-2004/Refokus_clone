import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

function Work() {
  const [Data,setData]=useState([
    {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"48%", left:"40%", isActive:false},
    {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top:"52%", left:"37%", isActive:false},
    {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top:"41.7%", left:"43%", isActive:false},
    {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top:"54%", left:"40%", isActive:false},
    {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:"48.4%", left:"44%", isActive:false},
    {URL:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top:"45.7%", left:"38.7%", isActive:false},
  ])
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
  function showImages(arr){
      setData((prev)=>(
        prev.map((val,index)=>(
          arr.indexOf(index)=== -1 ? ({...val,isActive:false}) : ({...val,isActive:true})
        ))
      ))
    }

  switch (Math.floor(latest)) {
    case 0:
      showImages([]); 
      break;
    case 50:
      showImages([0]);
      break;
    case 100:
      showImages([0,1]);
      break;
    case 150:
      showImages([0,1,2]);
      break;
    case 200:
      showImages([0,1,2,3]);
      break;
    case 250:
      showImages([0,1,2,3,4]);
      break;
    case 300:
      showImages([0,1,2,3,4,5]);
      break;
  }
})
  return (
    <div className='w-full h-[110vh] '>
        <div className='relative mt-[-9.5%]'>
          <h1 className='text-[38vw] text-white font-medium select-none text-center relative'>work</h1>
          <div className=' w-full h-full '>
              {Data.map((items,index)=> items.isActive && <img key={index} style={{top:items.top, left:items.left}} className='w-[20vw] absolute rounded-2xl' src={items.URL} alt="" />)}
          </div>
          <h2 className='text-center mt-[-9%] text-lg text-[#8B8B8B]'>Web design, Webflow Development, Creative Development</h2>
        </div>
    </div>
  )
}

export default Work