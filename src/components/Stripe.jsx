import React from 'react'
import {motion} from 'framer-motion'

function Stripe({item}) {
  return (
    <motion.div initial={{x:"0" }} animate={{x:"-100%"}} transition={{ease:"linear", duration:10, repeat:Infinity}} className='w-[16.66%] px-6 py-6 flex items-center justify-between border-red-800 border-t-[1px] border-b-[2px] border-r-[1px] white-space-nowrap flex-shrink-0'>
        <img src={item.URL} alt="" />
        <h1 className='text-white'>{item.number}</h1>
    </motion.div>
  )
}

export default Stripe