import { useState, useEffect } from "react";
import axios from "axios";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";

// import _api 
import { _api } from "../../utils/_api";

const PartnersSlider = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${_api}/partners`)
      .then((response) => {
        setPartners(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Ma'lumot olishda xatolik yuz berdi");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Yuklanmoqda...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="w-full bg-white py-20">
      <div className="container flex flex-col xl:pb-10 gap-6">
        <h1 
          className="text-5xl max-xl:text-2xl text-[#333] text-start max-xl:text-center"
          title="Нам доверяют"
        >
          {"Нам доверяют"}
        </h1>
        <p className="text-[17px] max-xl:text-[16px] text-[#333] text-start max-xl:text-center max-xl:pb-10">
          {"Нашими клиентами являются более тысячи оптовых заказчиков, среди которых такие известные компании, как:"}
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper container"
      >
        <SwiperSlide className="grid-style xl:px-32">
          {
            partners.slice(0, 4).map((item) => (
              <div key={item.id} className="h-[150px] max-xl:h-[80px]">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))
          }
        </SwiperSlide>
        <SwiperSlide className="grid-style xl:px-32">
          {
            partners.slice(4, 8).map((item) => (
              <div key={item.id} className="h-[150px] max-xl:h-[80px]">
                <Image
                  width={200}
                  height={200}
                  src={item.image}
                  alt={item.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))
          }
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnersSlider;