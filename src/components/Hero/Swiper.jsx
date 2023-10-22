// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    <Swiper className='flex w-[60rem] mt-3 bg-gray-300 h-[35rem] flex-col items-center'
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y , Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      
      autoplay={true}
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