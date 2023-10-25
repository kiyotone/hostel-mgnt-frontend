import React from 'react'
import {BiBuildingHouse} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Search from './Search'   

const NavTop = ({newNav}) => {
  return (


    <div className={`bg-white flex justify-between ${newNav && " z-10 fixed top-[-3rem] translate-y-[3rem] transition-all ease-in-out duration-200 " } w-full h-[4.8rem] t`}>

        <div className='w-[25rem]'>
            {/* //TODO LOGO */ }
        </div>
        {

         newNav &&   <Search version={"small"} />

        }
        <div className='flex gap-x-10 mr-[6rem]'>
                <div className='flex items-center gap-x-2'>
                    <BiBuildingHouse className='text-2xl'/>
                    <div>
                    YOUR HOSTEL
                    </div> 
                </div>


                <div className='flex items-center gap-x-10'>

                    <div className=' left-[80rem] -ml-0.5 w-[.05rem] h-full bg-gray-300'></div>
                </div>

                <div className='flex items-center  gap-x-2'>
                <FaUser className='text-xl'/>
                 
                 <Link className='text-black cursor-pointer' to={'/register'} >Login / Signup</Link>
                </div>

        

            </div>
    
            </div>
              
)
}

export default NavTop