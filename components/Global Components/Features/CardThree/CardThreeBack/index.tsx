import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardThreeBack = () => {
  return (
    <div className="xl:w-[23.5rem] xl:h-[27rem] md:h-[25.3rem] md:w-[20.3rem] bg-gradient-to-t from-sky-400 via-blue-500 to-blue-600 md:rounded-[20px] overflow-hidden p-8 flex items-center justify-center font-poppins w-[19.5rem] h-[11rem] rounded-2xl  relative">
      <div className="flex flex-col items-center space-y-2 md:space-y-8">
        <Image
          src={images.card4}
          width={500}
          height={500}
          alt={images.card4}
          quality={50}
          className="md:w-[20rem] md:h-[9.3rem]  w-[16rem] h-[5rem]  object-cover absolute top-0 md:-top-5"
        />
        <h1 className="absolute bottom-0 w-full col-span-3 p-4 text-xs font-light text-center text-white md:text-lg ">
          Lorem ipsum is placeholder text commonly used in the graphic, print
          and publishing industries lorem ipsum is placeholder text commonly
          used in the graphic publishing industries.
        </h1>
      </div>
    </div>
  );
};

export default CardThreeBack;
