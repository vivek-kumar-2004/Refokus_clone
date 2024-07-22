import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full px-[5.2vw] mx-auto flex justify-between gap-[3px] mt-[12.7vw] pb-3'>
        <Card width={"basis-[33%]"} button={false} para={true} text1="Up Next: News" text2="Insights and behind the scenes" Hover={false}/>
        <Card width={"basis-[67%]"} button={true} para={false} text1="Get in Touch" text2="Let's get to it, together." Hover={true}/>
    </div>
  )
}

export default Cards