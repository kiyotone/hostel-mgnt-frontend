// import Swiper core and required modules
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swapper= () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      url: "https://media.nomadicmatt.com/hostelrules01.jpg",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&q=80&w=2139&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Swiper
      className="flex w-[95%] shadow-2xl rounded-ful bg-gray-300 h-[35rem] flex-col items-center"
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      pagination={{ clickable: true }}
    >
      {images &&
        images.map((e,index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className="bg-green-300 flex w-[100%] shadow-2xl h-[35rem] rounded-md items-center">
                <img className="w-full h-full object-cover" src={e.url}></img>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};


export default Swapper