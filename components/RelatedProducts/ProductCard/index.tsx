"use client";

import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
interface Props {
  title: string;
  image: string;
  price: string | number;
  discountedPrice: string | number;
}
const ProductCard = ({ title, image, price, discountedPrice }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });
  return (
    <div className="overflow-hidden bg-white shadow-xl rounded-2xl md:w-[300px] md:h-[30rem] w-[160px] h-[15.94rem]">
      <div className="flex flex-col text-black">
        <a href="/product">
          <img
            src={image}
            className="w-full md:h-[300px] rounded-2xl h-[10rem]"
          />
        </a>
        <div className="p-2 md:space-y-2 md:p-4">
          <a href="/product" className="hover:no-underline">
            <h4 className="text-xs font-semibold text-left text-black md:text-sm font-sunflower">
              {isMobile === true ? `${title.slice(0, 45)}...` : title}
            </h4>
          </a>
          <div className="grid justify-center grid-rows-2 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-center space-x-1 space-y-0 text-blue-600 md:grid md:justify-start">
              <p className="text-sm font-semibold md:text-lg">৳{price}.00</p>
              <p className="text-xs line-through md:text-base font-extralight">
                ৳{discountedPrice}.00
              </p>
            </div>
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
