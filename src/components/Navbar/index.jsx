import React from 'react'
import {BiBuildingHouse} from 'react-icons/bi'
import {HiMiniGlobeAsiaAustralia} from 'react-icons/hi2'
import {FaUser} from 'react-icons/fa'
import Search from './Search'


const Navbar = () => {
  return (
    <div className='w-full bg-[#d3174d] font-semibold text-[.9rem] text-black h-[18rem]'>
        
        <div className='bg-white flex justify-between w-full h-[4.5rem]'>

            <div>
                {/* //TODO LOGO */}
            </div>

            <div className='flex gap-x-10 mr-[6rem]'>
                <div className='flex items-center gap-x-2'>
                    <BiBuildingHouse className='text-2xl'/>
                    <div>
                    YOUR HOSTEL
                    </div> 
                </div>


                <div className='flex items-center gap-x-10'>
                    <div className=' left-[80rem] -ml-0.5 w-[.05rem] h-full bg-gray-300'></div>
                    <div className=' flex gap-x-2 items-center'>
                    <HiMiniGlobeAsiaAustralia className='text-2xl'/>
                    <div>English</div>
                    </div>

                    <div className=' left-[80rem] -ml-0.5 w-[.05rem] h-full bg-gray-300'></div>
                </div>

                <div className='flex items-center gap-x-2'>
                <FaUser className='text-xl'/>
                 
                 <div>Login / Signup</div>
                </div>

            </div>

        </div>
        <div className='flex flex-col items-center'>

        <div className='text-white text-[2rem] font-bold mt-10'>
            HOSTEL MOTO    
        </div> 
        
        <Search />

        </div>
        

    </div>
  )
}

export default Navbar