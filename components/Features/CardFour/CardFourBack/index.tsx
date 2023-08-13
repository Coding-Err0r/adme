import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardFourBack = () => {
  return (
    <div className="xl:w-full xl:h-[27rem] md:h-[25.3125rem] md:w-[43.125rem] bg-white md:rounded-[40px] overflow-hidden p-8 flex items-center justify-center font-poppins w-[19.5rem] h-[11rem] rounded-3xl">
      <div className="absolute flex flex-col space-y-4 md:px-12 md:top-12">
        <h1 className="col-span-3 text-xs font-medium text-black md:text-3xl md:font-semibold">
          Handles your Personal and Corporate needs
        </h1>
        <p className="text-[0.625rem] text-justify text-gray-600 md:text-lg">
          We were not impressed with the standard QR Code, so we added some
          color, shape and a logo to the mix. Fully customize your QR Code to
          match your branding and steel the show. Switch to digital business
          cards now.
        </p>
      </div>
    </div>
  );
};

export default CardFourBack;
