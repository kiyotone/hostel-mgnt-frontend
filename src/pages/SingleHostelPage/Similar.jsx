import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Card from "../../components/Card";

const SimilarHostels = () => {
  const hostelData = [
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
    {
      name: "Hotel Name",
      loaction: "Dhangadhi",
      price: "10000",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold my-4">Similar Hostels</h1>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {hostelData &&
          hostelData.map((data) => {
            return (
              <SwiperSlide className="flex flex-row items-center justify-center">
                <Card
                  name={data.name}
                  location={data.loaction}
                  price={data.price}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default SimilarHostels;
