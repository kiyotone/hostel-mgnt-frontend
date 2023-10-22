// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


export default () => {

  const images = [
    {
      id: 1,
      
    },
    {
      id: 2,
    },
    {
      id: 3,
    }
  ];
  
  return ( 
    <Swiper className='flex w-[60rem] mt-3 bg-gray-300 h-[35rem] mb-20 flex-col items-center'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      
    >
      { images && images.map((e)=>{

        return (

          <SwiperSlide className=' flex items-center justify-center'>
            <div className='bg-white flex w-[55rem] shadow-2xl h-[30rem] rounded-md items-center'>

            </div>
            
        
        </SwiperSlide>
          )
     
    })
    }
      
    </Swiper>
  );
};