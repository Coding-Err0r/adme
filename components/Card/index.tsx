import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { ReactNode } from "react";
interface Props {
  image: string;
  details: ReactNode | any;
  imgPosition: string;
  size: string;
  plusIcon: boolean;
}

const Card = ({ image, details, imgPosition, size, plusIcon }: Props) => {
  if (size.toLowerCase() === "medium") {
    return (
      <div className="px-12 bg-white shadow-2xl 2xl:w-[55rem] xl:rounded-[40px] rounded-[25px] md:w-[30rem] md:h-[20rem] 2xl:h-[33rem] w-[20rem] h-[25rem] xl:w-[50rem] xl:h-[30rem] lg:w-[45rem] lg:h-[25rem] ">
        <div className="flex flex-col items-center justify-center md:space-x-10 xl:gap-x-20 md:gap-x-8 md:grid md:grid-cols-2 lg:gap-x-28">
          <h1 className="2xl:text-5xl font-bold lg:w-[20rem] md:text-3xl text-lg md:w-[12rem] md:py-0 lg:py-0 py-12 h-[11.4rem] xl:text-4xl lg:text-4xl">
            {details}
          </h1>
          {imgPosition.toLowerCase() === "bottom" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="2xl:w-[20.3rem] 2xl:h-[27rem]  md:w-[10rem] md:h-[15rem] w-[26rem] h-[13.6rem] rounded-t-xl md:mt-20 rounded-b-md lg:mt-24 pr-2 xl:w-[18rem] xl:h-[24rem] lg:w-[14rem] lg:h-[19rem]"
            />
          ) : imgPosition.toLowerCase() === "top" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="2xl:w-[20.3rem] 2xl:h-[27rem]  md:w-[10rem] md:h-[15rem] w-[26rem] h-[13.6rem] rounded-t-xl  rounded-b-md  pr-2 xl:w-[18rem] xl:h-[24rem] lg:w-[14rem] lg:h-[19rem] "
            />
          ) : null}
        </div>
      </div>
    );
  } else if (size.toLowerCase() === "small") {
    return (
      <div className="px-10 bg-white shadow-2xl 2xl:w-[25rem] xl:rounded-[40px] rounded-[25px] 2xl:h-[33rem] md:w-[15rem] md:h-[20rem] w-[20rem] h-[25rem] xl:w-[22rem] xl:h-[30rem] lg:w-[20rem] lg:h-[25rem]">
        <div className="flex flex-col items-center">
          {imgPosition.toLowerCase() === "top" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="xl:w-[25rem] 2xl:h-[15rem] md:h-[7.3rem] h-[12rem]  rounded-t-xl w-[14rem]   xl:h-[12rem] lg:h-[10rem] lg:w-[13.5rem] md:w-[9rem] "
            />
          ) : null}
          <h1 className="py-12 xl:text-4xl font-bold  md:text-2xl text-lg lg:w-[22rem] md:w-[20rem] xl:h-[18rem] text-center md:h-[12.7rem] lg:text-left md:text-center px-12 lg:text-3xl lg:h-[15rem] w-[20rem] h-[9.5rem]">
            {details}
          </h1>

          {imgPosition.toLowerCase() === "bottom" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="xl:w-[25rem] 2xl:h-[15rem] md:h-[7.3rem] h-[12rem]  rounded-t-xl w-[14rem] mt-14 md:mt-0 xl:h-[12rem] lg:h-[10rem] lg:w-[13.5rem] md:w-[9rem]"
            />
          ) : null}
        </div>
        {plusIcon === true ? (
          <button className="absolute px-3 py-2 lg:-mt-[3rem] bg-gray-400 rounded-full md:ml-[19rem] ml-[14rem] text-white hover:bg-gray-700 mt-20 md:mt-7">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        ) : null}
      </div>
    );
  }
};

export default Card;
