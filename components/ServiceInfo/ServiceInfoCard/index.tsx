import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const ServiceInfoCard = ({ title, image }: Props) => {
  return (
    <div className="flex flex-col items-center px-8 bg-white shadow-lg rounded-bl-[40px] rounded-xl py-6">
      <Image
        src={image}
        alt=""
        width={2000}
        height={2000}
        className="h-14 w-14"
      />
      <p className="text-lg font-semibold text-black">{title}</p>
    </div>
  );
};

export default ServiceInfoCard;
