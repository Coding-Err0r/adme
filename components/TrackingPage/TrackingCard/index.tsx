"use client";

import { useState, useEffect } from "react";

interface Props {
  title: string;
  image: string;
  price: number;
  quantity: number;
  id: number;
}
const TrackingCard = ({ title, image, price, quantity, id }: Props) => {
  const [isMobile, setIsMobile] = useState(false);
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
    <div className="flex items-center justify-between w-full space-x-4">
      <div className="flex items-center space-x-2 ">
        <img src={image} alt={image} className="w-20 h-20 rounded-xl" />
        <h4 className="text-xs font-normal md:w-4/5 md:text-lg">
          {isMobile === true
            ? `${title.slice(0, 50)}...`
            : title.length > 85
            ? `${title.slice(0, 85)}...`
            : title}
        </h4>
      </div>
      <div className="flex flex-col items-end space-y-1 text-xs">
        <p className="text-sm font-semibold">৳{price}.00</p>
        <span>Qty:{quantity}</span>
      </div>
    </div>
  );
};

export default TrackingCard;
