import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  title: string;
  image: string;
  price: number;
  amount: number;
  id: number;
}
const CartItem = ({ title, image, price, amount }: Props) => {
  return (
    <div className="relative w-full p-3 text-xs font-normal text-white rounded-lg bg-zinc-700 md:text-sm font-poppins">
      <button className="absolute right-0 -top-1">
        <FontAwesomeIcon
          icon={faX}
          className="w-2 h-2 p-1 text-black bg-white rounded-full"
        />
      </button>
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={image}
          className="object-cover w-20 h-20 rounded-lg"
        />
        <div className="md:flex md:items-center md:space-x-4">
          <p>{title.length > 12 ? `${title.slice(0, 60)}...` : title}</p>
          <span>৳{price}.00 </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
