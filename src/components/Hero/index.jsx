import React from 'react'
import {AiOutlineWifi} from 'react-icons/ai'
import Swiper from './Swiper'

const Hero = () => {
  return (
    <div className='w-full bg-gray-200 text-black'>
        
        <div className='w-full bg-gray-200 h-[7rem] flex items-center gap-x-[7rem] pl-20'>
            <div className='text-[2rem] font-semibold' >
                <div>
                Essentials
                </div>
                <div className='text-gray-500 font-normal text-[1.2rem]'>
                    Features in 'company name'
                </div>
            
            </div>
            

            <div className=' left-[80rem] -ml-0.5 w-[.05rem] h-2/4 bg-gray-600'></div>

            <div className='flex w-[55rem] justify-between '>

            <div className='text-gray-500 flex flex-col items-center font-normal text-[1.2rem]'>
                
                <AiOutlineWifi className='text-3xl'/>
                <div>
                        Feature 
                </div>
                
            </div>

            <div className='text-gray-500 flex flex-col items-center font-normal text-[1.2rem]'>
                
                <AiOutlineWifi className='text-3xl'/>
                <div>
                        Feature 
                </div>
                
            </div>

            <div className='text-gray-500 flex flex-col items-center font-normal text-[1.2rem]'>
                
                <AiOutlineWifi className='text-3xl'/>
                <div>
                        Feature 
                </div>
                
            </div>

            </div>
        </div>

        <Swiper />    
    

    </div>
  )
}

export default Hero