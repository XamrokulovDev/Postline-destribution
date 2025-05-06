"use client";

import { FC } from "react";
import AboutPage1 from "../aboutPage1";

const Benefits: FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden text-center py-10">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dmgcfv5f4/video/upload/v1745671912/197190-904257543_medium_twxqdk.mp4" type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 -z-10"></div>

      {/* Content */}
      <div className="container flex flex-col gap-6 relative z-10">
        <h1
          className="text-5xl max-xl:text-2xl text-[#C0101E] text-start max-xl:text-center font-extrabold leading-12 max-xl:leading-9"
          title="Postline Distribution"
        >
          О компании <br className="max-xl:hidden"/>
          Postline Distribution
        </h1>
        <p className="xl:w-[45vw] text-[17px] max-xl:text-[14px] text-white font-medium text-start max-xl:text-center">
          Postline Distribution - надежный дистрибьютор, обеспечивающий поставку качественных продуктов для HoReCa, супермаркетов и магазинов. Мы работаем по высоким стандартам сервиса и логистики, чтобы каждый клиент получал лучшее.
        </p>
      </div>

      {/* Cards with animation */}
      <AboutPage1 />
    </div>
  );
};

export default Benefits;