"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "@/config/data";
import { Navigation, Thumbs, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductSlider = () => {
  const [activeThumb, setActiveThumb] = useState<any>();
  const swiperRef: any = useRef();
  return (
    <section className="p-2 md:shadow-xl bg-white/40 md:bg-white rounded-2xl md:p-4">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <div className="md:w-[35rem] md:h-[668px]  w-[337px] h-[337px] relative z-0">
          <Swiper
            spaceBetween={10}
            modules={[Navigation, Pagination]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
            }}
            onBeforeInit={(swiper: any) => {
              swiperRef.current = swiper;
            }}
          >
            {data.productPreview.map((item, index) => (
              <SwiperSlide
                key={index}
                className="md:w-[35rem] md:h-[668px]  w-[337px] h-[337px] rounded-xl "
              >
                <img
                  src={item}
                  alt="product images"
                  className="md:w-[35rem] md:h-[658px] w-[337px] h-[328px] rounded-xl object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute z-10 flex items-center justify-center w-full -mt-12 md:-mt-12 h-14 bg-zinc-800 rounded-b-xl">
            <div className="flex items-center justify-between w-full">
              <FontAwesomeIcon
                icon={faAnglesLeft}
                className="pl-4 text-white cursor-pointer"
                onClick={() => swiperRef.current?.slidePrev()}
              />
              <div className="flex justify-center swiper-custom-pagination" />
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="pr-4 text-white cursor-pointer"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
