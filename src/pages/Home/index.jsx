import React from 'react'
import Swiper from './Swiper'
import Featured from './Featured'

const Home = () => {
  return (
    <div className='bg-white text-black pb-20'>
        <div className='pl-20 pt-[7rem] text-[2rem] font-semibold'>
            Trending Now
        </div>
        <Swiper />
        <div className='pl-20 pt-[7rem] text-[2rem] font-semibold'>
            Trending Now
        </div>
        <Featured />
    </div>
  )
}

export default Home