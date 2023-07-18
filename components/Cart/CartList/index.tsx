import { faMinus, faPlus, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
type Props = {
  title: string;
  image: string;
  price: number;
};
const CartList = ({ title, image, price }: Props) => {
  const [amount, setAmount] = useState<number>(0);

  const handleIncrement = () => {
    setAmount(amount + 1);
  };
  const handleDecrement = () => {
    if (amount <= 0) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  };
  return (
    <div className="flex h-32 space-x-4 md:h-40">
      <Image
        src={image}
        alt=""
        width={2000}
        height={2000}
        className="md:h-40 md:w-40 rounded-2xl w-28 h-28"
      />
      <div className="flex flex-col justify-between py-2">
        <p className="text-xs cursor-pointer md:text-base">{title}</p>
        <div className="flex flex-col">
          <div className="flex items-center justify-center px-2 space-x-4 border-2 border-white rounded-full w-28">
            <button className="pl-2 -mt-1" onClick={handleDecrement}>
              <FontAwesomeIcon icon={faMinus} className="w-3 h-3" />
            </button>
            <p className="px-3 py-1 bg-white text-zinc-900">{amount}</p>
            <button className="-mt-1" onClick={handleIncrement}>
              <FontAwesomeIcon icon={faPlus} className="w-3 h-3 pr-2" />
            </button>
          </div>
          <p className="ml-2 font-semibold cursor-pointer">৳{price}</p>
        </div>
      </div>
      <button className="relative mt-16 md:mt-20 right-6">
        <FontAwesomeIcon
          icon={faX}
          className="w-2 h-2 p-[5px] text-white border-2 rounded-full"
        />
      </button>
    </div>
  );
};

export default CartList;
