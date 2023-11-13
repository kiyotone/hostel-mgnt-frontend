// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { getDataWithoutHeader } from "../../services/axios.service";

const HomeSwapper = () => {
  const [trendingData,setTrending] = useState();

  const NUMBER_OF_FEATURED = 6;

  

  const getTrending = async ()=> {
  

    const response = await getDataWithoutHeader(`hostels/featured`);
    console.log(response)
    setTrending(response.hostels)
    
    setTrending(trendingData => trendingData = trendingData.slice(0, NUMBER_OF_FEATURED))

  }

  useEffect(()=>{

    getTrending()

  },[])

  return (
    <Swiper
      // install Swiper modules
      className="mt-10 pb-4"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={1}
      breakpoints={{
        1480: {
          slidesPerView: 4,
        },
        1100: {
          slidesPerView: 3,
        },
        750: {
          slidesPerView: 2,
        },
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {trendingData &&
        trendingData.map((data) => {
          return (
            <SwiperSlide
              key={data._id}
              className="flex items-center justify-around"
            >
              <Card
                  key={data._id}
                  name={data.name}
                  location={"wowowo"}
                  price={40000}
                  rating={data.averageRating}
                  noOfReviews={data.noOfReviews}
                  id={data._id}
                />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default HomeSwapper;
