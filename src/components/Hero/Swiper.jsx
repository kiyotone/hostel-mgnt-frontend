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
      url: '/img1.png',
      
    },
    {
      id: 2,
      url: '/img2.png',
      
    
    },
    {
      id: 3,
      url: '/img3.png',
      
  
    }
  ];
  
  return ( 
    <Swiper className='flex w-[95%] shadow-2xl rounded-ful bg-gray-300 h-[35rem] flex-col items-center'
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y , Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      
      autoplay={true}
      pagination={{ clickable: true }}
      
    >
      { images && images.map((e)=>{

        return (

          <SwiperSlide className=''>
            <div className='bg-green-300 flex w-[100%] shadow-2xl h-[35rem] rounded-md items-center'>
            <img  className='w-full h-full' src={e.url}></img>
            </div>
            
        
        </SwiperSlide>
          )
     
    })
    }
      
    </Swiper>
  );
};