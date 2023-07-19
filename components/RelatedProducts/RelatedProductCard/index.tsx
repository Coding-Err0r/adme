import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  title: string;
  image: string;
  price: string | number;
  discountedPrice: string | number;
}
const RelatedProductCard = ({
  title,
  image,
  price,
  discountedPrice,
}: Props) => {
  return (
    <div className="flex flex-col items-center ">
      <Image
        src={image}
        alt=""
        width={2000}
        height={2000}
        className="w-72 h-72 rounded-xl"
      />
      <div className="px-6 py-2">
        <Link href="#">
          <h1 className="text-lg font-bold text-black ">{title}</h1>
        </Link>
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2 text-lg md:text-xl">
            <p className="text-2xl font-bold text-blue-600">
              ৳{discountedPrice}
            </p>
            <p className="font-semibold line-through">৳{price}</p>
          </div>
          <button className="w-20 text-xs font-bold text-white rounded-lg bg-gradient-to-b from-blue-800 via-indigo-500 to-cyan-300">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProductCard;
