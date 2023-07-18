"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/config/data";
import { Navigation, Thumbs } from "swiper/modules";
import "./slider.scss";
import "swiper/css";

const ProductSlider = () => {
  const [activeThumb, setActiveThumb] = useState<any>();
  return (
    <section className="bg-white shadow-lg p-7 rounded-2xl">
      <div className="flex items-center justify-center gap-2 ">
        <Swiper
          onSwiper={setActiveThumb}
          slidesPerView={3}
          direction={"vertical"}
          modules={[Navigation, Thumbs]}
          className="md:h-[18rem] md:w-24 verticalPagination h-44 w-14"
          initialSlide={0}
        >
          {data.productPreview.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt=""
                className="w-12 h-12 rounded-lg md:h-20 md:w-20"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:w-[30rem] md:h-[30rem]  w-64 h-64">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
          >
            {data.productPreview.map((item, index) => (
              <SwiperSlide
                key={index}
                className="md:w-[30rem] md:h-[29.7rem]  w-64 h-64rounded-xl "
              >
                <img
                  src={item}
                  alt="product images"
                  className="md:w-[30rem] md:h-[29.7rem] w-64 h-64 rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
