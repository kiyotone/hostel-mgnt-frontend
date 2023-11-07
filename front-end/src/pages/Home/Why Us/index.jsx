import React from 'react'
import { LuClock8 } from 'react-icons/lu'
import { BsGlobe2 } from 'react-icons/bs'

const WhyUs = () => {
  return (
    <div className='flex py-20 px-24 justify-between bg-gray-200 mb-3 '>
        
        <div className='w-[36rem]'>
            <div className='font-semibold text-3xl flex gap-x-6 items-center mb-5 w-[25rem]'>
                <LuClock8 className='text-[6rem]'/>
                <div >Save Your Time And Money With Us</div>
            </div>

            <div className='text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione possimus nisi doloremque culpa unde cum rerum optio molestiae eum praesentium dolorum, non atque quae eveniet nostrum labore odio provident ullam?
            </div>
        </div>
        <div  className='w-[36rem]'>
        <div className='font-semibold text-3xl flex gap-x-6 items-center mb-7 w-[25rem]'>
                <BsGlobe2 className='text-[4rem]'/>
            <div >Where we offer our services</div>

            </div>
            <div className='text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione possimus nisi doloremque culpa unde cum rerum optio molestiae eum praesentium dolorum, non atque quae eveniet nostrum labore odio provident ullam?
            </div>
        </div>

    </div>
  )
}

export default WhyUs