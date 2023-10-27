// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../../components/Card";

const  HomeSwapper =() => {
  const trendingData = [
    {
      name: "Kirtan",
      loaction: "Whatevdfdfer",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
    {
      name: "Kirtan",
      loaction: "Whatever",
      price: "10000",
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      className="mx-auto mt-10 w-[85rem]"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {trendingData &&
        trendingData.map((data,index) => {
          return (
            <SwiperSlide key={index} className="">
              <Card
                name={data.name}
                location={data.loaction}
                price={data.price}
              />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

  
export default HomeSwapper