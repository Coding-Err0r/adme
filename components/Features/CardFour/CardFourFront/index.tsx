import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardFourFront = () => {
  return (
    <div className="xl:w-full xl:h-[27rem] md:h-[25.3125rem] md:w-[43.125rem] bg-black md:rounded-[20px] overflow-hidden p-6 flex items-center justify-center font-poppins w-[19.5rem] h-[11rem] rounded-2xl">
      <div className="flex items-center justify-between space-x-2 md:space-x-16">
        <h1 className="col-span-3 text-xs font-semibold text-white md:text-4xl md:font-bold">
          Handles your Personal and Corporate needs
        </h1>
        <Image
          src={images.card1}
          width={500}
          height={500}
          alt={images.card1}
          quality={50}
          className="md:w-[22rem] md:h-[20rem] col-span-2 w-[10rem] h-[7rem]"
        />
      </div>
    </div>
  );
};

export default CardFourFront;
