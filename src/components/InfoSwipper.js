import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./InfoSwipper.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const InfoSwipper = (props) => {
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
        {props.data.options.map((el, index) => (
          <SwiperSlide key={index}>
            <img
              src={el.src}
              alt="salom"
              onClick={(e) => {
                props.changed(e, el, index);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InfoSwipper;
