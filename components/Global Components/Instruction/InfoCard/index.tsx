import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  description: string;
  link: string;
  id: number;
  title: string;
};
const InfoCard = ({ image, description, link, id, title }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5 cursor-pointer">
      {/* <div className="w-[12.5rem] bg-[#D9D9D9] h-[18.75rem]" /> */}
      <div className="w-24 h-32 lg:w-44 lg:h-60 md:w-36 md:h-52">
        <Image
          src={image}
          alt=""
          className="object-contain w-full h-full"
          width={2000}
          height={2000}
        />
      </div>
      <div className="flex flex-col items-center max-w-xs px-6 space-y-5 text-center text-gray-800 md:px-1 ">
        <p className="font-bold lg:text-2xl md:text-xl">
          {id}.{title}
        </p>
        <p className="text-sm lg:text-lg md:text-base">{description}</p>
        <Link href={`/${title}`} className="text-xs text-blue-600 md:text-base">
          {link}
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
