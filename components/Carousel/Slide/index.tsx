import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  description: string;
  index: number;
  id: number;
}
const Slide = ({ image, description, index, id }: Props) => {
  return (
    <section className="flex flex-col items-center w-full h-full cursor-move group">
      <Link
        href="/product"
        className="absolute hidden px-2 py-1 text-xs font-bold text-white -translate-y-1/2 rounded-full md:py-2 md:px-4 bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400 top-1/2 group-hover:block lg:text-base md:text-sm"
      >
        View Product
      </Link>
      <Image
        src={image}
        className="w-[40rem] h-[25rem] md:rounded-[20px] object-cover rounded-2xl "
        alt=""
        width={2000}
        height={2000}
      />

      <p className="py-4 text-xs font-semibold text-blue-600 md:text-xl group-[.swiper-slide-active]:block hidden ">
        {description}
      </p>
    </section>
  );
};

export default Slide;
