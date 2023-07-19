"use client";
import React, { useState, useRef, useEffect } from "react";
import Slide from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import data from "@/config/data";
import { useRouter } from "next/navigation";

const Carousel = () => {
  const ref = useRef<any | null>(null);
  const route = useRouter();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [swiperModifier, setSwiperModifier] = useState<number>(4);

  const handleResize = () => {
    if (window.innerWidth < 1000) {
      setSwiperModifier(5);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <section className="w-full">
      <div className="flex flex-col items-center ">
        <div className="flex flex-col items-center px-4 py-8 text-lg text-center text-gray-900 md:text-2xl lg:py-16 md:py-12">
          <p className="font-bold">
            Take A Look At Our Designed Products Or Have
          </p>
          <p className="font-medium">A Customised Design Made Just For You</p>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: swiperModifier,
            slideShadows: false,
          }}
          pagination={{ enabled: true, clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          loop={false}
          ref={ref}
          initialSlide={2}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
          }}
          className="w-auto"
        >
          {Object.values(data.swiper).map((item: any, index: number) => (
            <SwiperSlide key={index} className="group">
              <Slide
                image={item.image}
                description={item.description}
                index={index}
                id={activeSlide - 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative z-0 flex justify-center py-6 space-x-6 text-sm font-bold lg:text-2xl md:text-lg">
          <button className="px-5 py-2 text-gray-500 bg-white border-2 border-gray-400 rounded-lg cursor-pointer lg:py-6 lg:px-12 md:rounded-xl md:px-8 md:py-3">
            FRONT / BACK
          </button>
          <button className="px-5 py-2 text-white rounded-lg lg:py-6 lg:px-12 bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400 md:rounded-xl md:px-8 md:py-3">
            DESIGN MY OWN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
