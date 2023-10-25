import React from 'react'
import Search from './Search'   

const BottomNav = () => {
  return (
    <div className='flex flex-col items-center h-[14rem]'>

    <div className='text-white text-[2rem] font-bold mt-10'>
        HOSTEL MOTO    
    </div> 
    
    <Search version={"big"} />

    </div>
  )
}

export default BottomNav