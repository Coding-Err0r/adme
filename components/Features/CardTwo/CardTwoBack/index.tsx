import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardTwoBack = () => {
  return (
    <div className="xl:w-[24rem] xl:h-[27rem] md:h-[25.3rem] md:w-[20.6rem] bg-[#323131] md:rounded-[40px] overflow-hidden p-6 flex items-center justify-center font-poppins w-[19.5rem] h-[11rem] rounded-3xl">
      <div className="flex flex-col items-start space-y-2 md:space-y-8">
        <Image
          src={images.card3}
          width={500}
          height={500}
          alt={images.card3}
          quality={50}
          className="md:w-[14rem] md:h-[20rem] col-span-2  fixed top-0 right-0 w-[8rem]"
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

export default CardTwoBack;
