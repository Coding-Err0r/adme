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
      <div className="px-12 bg-white shadow-2xl 2xl:w-[55rem] rounded-[40px] md:w-[40rem] md:h-[25rem] lg:h-[33rem] w-[20rem] h-[25rem] lg:w-[50rem]">
        <div className="flex flex-col items-center justify-center md:space-x-10 lg:gap-x-20 md:gap-x-8 md:grid md:grid-cols-2">
          <h1 className="lg:text-5xl font-bold lg:w-[20rem] md:text-3xl text-lg md:w-[15rem] md:py-0 lg:py-0 py-12 h-[11.4rem]">
            {details}
          </h1>
          {imgPosition.toLowerCase() === "bottom" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="lg:w-[20.3rem] lg:h-[27rem]  md:w-[18rem] md:h-[20rem] w-[26rem] h-[13.6rem] rounded-t-xl md:mt-20 rounded-b-md lg:mt-24 pr-2"
            />
          ) : imgPosition.toLowerCase() === "top" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="lg:w-[20.3rem] lg:h-[27rem]  md:w-[18rem] md:h-[20rem] w-[26rem] h-[13.7rem] rounded-b-xl md:mb-20 rounded-t-md lg:mb-24 pr-2"
            />
          ) : null}
        </div>
      </div>
    );
  } else if (size.toLowerCase() === "small") {
    return (
      <div className="px-10 bg-white shadow-2xl 2xl:w-[25rem] rounded-[40px] lg:h-[33rem] md:w-[25rem] md:h-[28rem] w-[20rem] h-[25rem] lg:w-[21rem]">
        <div className="flex flex-col items-center">
          {imgPosition.toLowerCase() === "top" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="md:w-[25rem] lg:h-[15rem] rounded-b-xl w-[14rem]"
            />
          ) : null}
          <h1 className="py-12 lg:text-4xl font-bold  md:text-3xl text-lg w-[22rem] lg:h-[18rem] text-center md:h-[12.7rem] lg:text-left md:text-center px-12 ">
            {details}
          </h1>

          {imgPosition.toLowerCase() === "bottom" ? (
            <Image
              src={image}
              alt=""
              width={2000}
              height={2000}
              className="md:w-[25rem] lg:h-[15rem] md:h-[15.3rem] h-[12rem]  rounded-t-xl w-[14rem] mt-14 md:mt-0"
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
