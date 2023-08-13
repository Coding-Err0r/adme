import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardOneFront = () => {
  return (
    <div className="xl:w-full xl:h-[27rem] md:h-[25.3125rem] md:w-[43.125rem] bg-gradient-to-br from-slate-900 via-slate-500 to-slate-900 md:rounded-[40px] overflow-hidden p-6 flex items-center justify-center font-poppins w-[19.5rem] h-[11rem] rounded-3xl">
      <div className="flex items-center justify-between space-x-16">
        <h1 className="col-span-3 text-sm font-semibold text-white md:text-4xl md:font-bold">
          Link all your social sites, contact info, and websites to your Adme
          profile.
        </h1>
        <Image
          src={images.card7}
          width={500}
          height={500}
          alt={images.card7}
          quality={50}
          className="md:w-[10.5rem] md:h-[22rem] col-span-2 w-[3.5rem] h-[7rem]"
        />
      </div>
    </div>
  );
};

export default CardOneFront;
