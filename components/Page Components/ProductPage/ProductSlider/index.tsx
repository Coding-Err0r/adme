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
        <div className="md:w-[35rem] md:h-[41.75rem]  w-[20.8rem] h-[20.2rem] relative z-0 rounded-xl overflow-hidden bg-white">
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
                className="md:w-[35rem] md:h-[41.75rem]  w-[21rem] h-[21rem] rounded-xl overflow-hidden "
              >
                <img
                  src={item}
                  alt="product images"
                  className="md:w-[35rem] md:h-[41.7rem] w-[21.2rem] h-[20.2rem] rounded-xl object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute z-10 flex items-center justify-center w-full -mt-14 h-14 bg-black/60 rounded-b-xl ">
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
