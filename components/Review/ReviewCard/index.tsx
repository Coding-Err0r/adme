import Star from "@/components/SVGs/Star";
import Image from "next/image";
import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

type Props = {
  name: string;
  image: string;
  rating: number;
  review: string;
  index: number;
  designation: string;
};

const ReviewCard = ({
  name,
  image,
  rating,
  review,
  index,
  designation,
}: Props) => {
  return (
    <div className="relative z-10 w-full h-full p-1 bg-white shadow-lg cursor-move ">
      <div className="flex flex-col px-1 py-3 space-y-6 md:p-8">
        <Rating style={{ maxWidth: 130 }} value={rating} readOnly />
        <p className="px-3 text-xs md:text-base ">{review}</p>
        <div className="flex items-center w-full">
          <div className="absolute w-[60px] h-[60px]">
            <Image
              width={1000}
              height={1000}
              src={image}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="flex items-center w-full h-[4rem] ml-16 -mr-20 md:-mr-0">
            <div className="flex flex-col px-4 ">
              <p className="text-lg font-semibold md:text-2xl w-[15rem]">
                {name}
              </p>
              <p className="text-sm text-gray-600 md:text-lg">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
