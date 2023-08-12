"use client";
import images from "@/config/images";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const AmountBtn = () => {
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
    <div className="flex items-center">
      <button
        className="flex items-center justify-center w-6 h-5 bg-gray-400 rounded-l-full focus:outline-none"
        onClick={handleDecrement}
      >
        <FontAwesomeIcon icon={faMinus} className="w-3 h-3 text-black" />
      </button>
      <p className="flex items-center justify-center h-5 text-sm bg-gray-800 w-7 focus:outline-none">
        {amount}
      </p>
      <button
        className="flex items-center justify-center w-6 h-5 bg-gray-400 rounded-r-full focus:outline-none"
        onClick={handleIncrement}
      >
        <FontAwesomeIcon icon={faPlus} className="w-3 h-3 text-black" />
      </button>
    </div>
  );
};

export default AmountBtn;
