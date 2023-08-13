import Image from "next/image";

import React from "react";

interface Props {
  image: string;
  description: string;
  index: number;
  id: number;
}
const Slide = ({ image, description, index, id }: Props) => {
  return (
    <section className="flex flex-col items-center w-full h-full cursor-move group font-poppins">
      <a
        href="/product"
        className="absolute hidden px-4 py-1 text-xl font-medium text-black -translate-y-1/2 rounded-full md:py-2 md:px-8 bg-gray-300 top-1/2 group-hover:group-[.swiper-slide-active]:block lg:text-3xl md:text-2xl hover:no-underline hover:text-black"
      >
        Order Now
      </a>
      <Image
        src={image}
        className="w-[40rem] h-[25rem] md:rounded-[20px] object-cover rounded-2xl "
        alt=""
        width={2000}
        height={2000}
      />

      <p className="py-4 text-xs font-medium text-blue-600 md:text-2xl group-[.swiper-slide-active]:block hidden ">
        {description}
      </p>
    </section>
  );
};

export default Slide;
