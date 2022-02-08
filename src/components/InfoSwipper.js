import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../img/kutubhona/1.jpg'
import img2 from '../img/kutubhona/2.jpg'
import img3 from '../img/kutubhona/3.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./InfoSwipper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const InfoSwipper = () => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img1} alt="salom" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default InfoSwipper;
