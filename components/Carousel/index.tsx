"use client";
import React, { useState, useRef, useEffect, memo } from "react";
import data from "@/config/data";
import {
  StackedCarousel,
  ResponsiveContainer,
  StackedCarouselSlideProps,
} from "react-stacked-center-carousel";
import Image from "next/image";
import "./style.css";

function Pagination(props: any) {
  const { centerSlideDataIndex, updatePosition } = props;
  console.log("🚀 ~ centerSlideDataIndex--000", centerSlideDataIndex);
  return (
    <div className="flex justify-center space-x-2 md:space-x-4 md:mt-4">
      {data.swiper.map((_, index) => {
        const isCenterSlide = props.centerSlideDataIndex === index;
        return (
          <div
            key={index}
            onClick={() => {
              updatePosition(index);
            }}
            className={`md:w-4 md:h-4 rounded-full border-[2px] border-gray-600 cursor-pointer w-3 h-3 ${
              isCenterSlide ? "bg-gray-700" : "bg-gray-200"
            }`}
          />
        );
      })}
    </div>
  );
}

const Slide = (props: any) => {
  console.log(props);
  const { data, dataIndex } = props;
  const { image, description } = data[dataIndex];
  return (
    <div className="md:w-[37.4rem] md:h-[26rem] rounded-2xl overflow-hidden  relative flex flex-col items-center  font-poppins w-[16rem] h-[10rem]">
      <Image
        src={image}
        width={500}
        height={500}
        className="object-cover md:w-full  h-[7rem] md:h-[21.5rem]  relative z-0"
        draggable={false}
        alt={image}
      />
      <div className="w-full  h-[7rem] md:h-[21.5rem] z-5  absolute  bg-gradient-to-l from-cyan-300/50 via-sky-600/50 to-indigo-500/50 md:rounded-[40px] div-hover-gradient rounded-2xl" />
      <a
        href="/product"
        className="absolute px-4 py-1 my-auto -mt-8 text-[0.625rem] font-medium text-black font-poppins -translate-y-1/2 bg-gray-300 rounded-full md:py-2 md:px-6 top-1/2 lg:text-[1.5rem] md:text-[1rem] hover:no-underline hover:text-black div-hover"
      >
        Order Now
      </a>
      <p className="absolute bottom-0 py-4 mt-16 text-[0.75rem] font-medium text-blue-600 md:text-[1.5rem] div-show ">
        {description}
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = React.useRef<any>();
  const [centerSlideDataIndex, setCenterSlideDataIndex] = React.useState(0);
  const onCenterSlideDataIndexChange = (newIndex: number) => {
    setCenterSlideDataIndex(newIndex);
  };

  const updatePosition = (index: number) => {
    ref?.current?.swipeTo(index - centerSlideDataIndex);
  };

  return (
    <section className="w-full ">
      <div className="flex flex-col items-center w-full py-12">
        <div className="w-full px-8 lg:max-w-screen-xl md:max-w-screen-md">
          <div className="flex flex-col items-center ">
            <div className="flex flex-col items-center px-4 py-8 text-[0.75rem] font-poppins text-center text-gray-900 lg:text-[2.25rem] lg:py-14 md:py-8 md:text-[1.5rem ]">
              <p className="font-bold">
                Take A Look At Our Designed Products Or Have
              </p>
              <p className="font-normal ">
                A Customised Design Made Just For You
              </p>
            </div>
            <div className="w-full h-full">
              <div className="flex flex-col items-center ">
                <ResponsiveContainer
                  carouselRef={ref}
                  render={(parentWidth, carouselRef) => {
                    let currentVisibleSlide = 5;
                    let slideWidth = 600;
                    if (parentWidth <= 702) {
                      currentVisibleSlide = 1;
                      slideWidth = 200;
                    }
                    return (
                      <StackedCarousel
                        ref={carouselRef}
                        data={data.swiper}
                        carouselWidth={parentWidth}
                        slideWidth={slideWidth}
                        slideComponent={Slide}
                        maxVisibleSlide={5}
                        currentVisibleSlide={currentVisibleSlide}
                        useGrabCursor={true}
                        onActiveSlideChange={onCenterSlideDataIndexChange}
                      />
                    );
                  }}
                />
                <Pagination
                  updatePosition={updatePosition}
                  centerSlideDataIndex={centerSlideDataIndex}
                />
              </div>
            </div>
            <div className="relative z-0 flex justify-center py-6 space-x-6 text-[0.625rem] font-bold md:text-[1.5rem]">
              <button className="px-5 py-2 text-gray-500 bg-white border-2 border-gray-400 rounded-lg cursor-pointer lg:py-6 lg:px-12 md:rounded-xl md:px-8 md:py-3">
                FRONT / BACK
              </button>
              <button className="px-5 py-2 text-white rounded-lg lg:py-6 lg:px-12 bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400 md:rounded-xl md:px-8 md:py-3">
                DESIGN MY OWN
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
