import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const ServiceInfoCard = ({ title, image }: Props) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-bl-[40px] rounded-xl  space-y-4">
      <Image
        src={image}
        alt=""
        width={2000}
        height={2000}
        className="object-contain h-14 w-14"
      />
      <p className="text-base font-semibold text-black">{title}</p>
    </div>
  );
};

export default ServiceInfoCard;
