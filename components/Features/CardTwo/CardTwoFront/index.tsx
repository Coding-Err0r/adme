import images from "@/config/images";
import Image from "next/image";
import React from "react";

const CardTwoFront = () => {
  return (
    <div className="xl:w-[23rem] xl:h-[27rem] md:h-[25.3rem] md:w-[20.3rem] bg-white md:rounded-[40px] overflow-hidden p-6 flex items-center justify-center font-poppins w-full h-[10rem] rounded-3xl">
      <div className="flex flex-col items-start space-y-2 md:space-y-8">
        <Image
          src={images.card5}
          width={500}
          height={500}
          alt={images.card5}
          quality={50}
          className="md:w-[9.3rem] md:h-[9.3rem] col-span-2 w-[3.125rem] h-[3.125rem]"
        />
        <p className="text-sm font-semibold text-gray-800 md:text-2xl md:font-bold">
          NFC technology can easily dip your toes into the sea of{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-l from-sky-400 via-violet-400 to-indigo-500">
            Modern Networking
          </strong>
        </p>
      </div>
    </div>
  );
};

export default CardTwoFront;
