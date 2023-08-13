import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardOneBack = () => {
  return (
    <div className="xl:w-full xl:h-[27rem] md:h-[25.3125rem] md:w-[43.125rem] bg-gradient-to-br from-slate-900 via-slate-500 to-slate-900 md:rounded-[40px] overflow-hidden p-6 flex items-center justify-center font-poppins w-full h-[10rem] rounded-3xl">
      <div className="flex items-center justify-between space-x-1 md:space-x-16">
        <Image
          src={images.card2}
          width={500}
          height={500}
          alt={images.card2}
          quality={50}
          className="md:w-[13rem] md:h-[22rem] col-span-2 w-[4rem] h-[7rem]"
        />
        <h1 className="col-span-3 text-xs font-light text-white md:text-xl">
          Lorem ipsum is placeholder text commonly used in the graphic, print
          and publishing industries lorem ipsum is placeholder text commonly
          used in the graphic publishing industries.
        </h1>
      </div>
    </div>
  );
};

export default CardOneBack;
