import React from 'react'
import Swiper from './Swiper'
import Featured from './Featured'
import Hero from '../../components/Hero/index'


const Home = () => {
  return (
    <div className='bg-white text-black pb-20'>
       <Hero />
        <div className='pl-20 pt-[7rem] text-[2rem] font-semibold'>
            Trending Now
        </div>
        <Swiper />
        <div className='pl-20 pt-[7rem] text-[2rem] font-semibold'>
            Featured
        </div>
        <Featured />
    </div>
  )
}

export default Home