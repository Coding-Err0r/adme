import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardThreeFront = () => {
  return (
    <div className=" xl:w-[23rem] xl:h-[27rem] md:h-[25.3rem] md:w-[20.3rem] bg-gradient-to-t from-sky-400 via-blue-500 to-blue-600 md:rounded-[40px] overflow-hidden p-8 flex items-center justify-center font-poppins w-[19.5rem] h-[11rem] rounded-3xl relative">
      <div className="flex flex-col items-center space-y-2 md:space-y-8">
        <p className="absolute w-full text-sm font-medium text-center text-white top-10 md:text-3xl md:font-semibold">
          One stop solution With our exclusive modern design
        </p>
        <Image
          src={images.card4}
          width={500}
          height={500}
          alt={images.card4}
          quality={50}
          className="md:w-[18rem] md:h-[9.3rem] col-span-2 w-[16rem] h-[6rem] absolute md:-bottom-10 -bottom-10 object-cover"
        />
      </div>
    </div>
  );
};

export default CardThreeFront;
