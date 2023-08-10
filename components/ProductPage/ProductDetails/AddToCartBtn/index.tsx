"use client";
import images from "@/config/images";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const AddToCardBtn = () => {
  const [amount, setAmount] = useState<number>(0);
  const [addToCart, setAddToCart] = useState<boolean>(false);
  const handleIncrement = () => {
    setAmount(amount + 1);
  };
  const handleDecrement = () => {
    if (amount <= 0) {
      setAddToCart(false);
      setAmount(0);
    } else {
      setAmount(amount - 1);
    }
  };

  useEffect(() => {
    if (addToCart === true) {
      setAmount(amount + 1);
    }
  }, [addToCart]);

  useEffect(() => {
    if (amount <= 0) {
      setAddToCart(false);
    }
  }, [amount]);

  if (addToCart) {
    return (
      <div className="flex items-center justify-center w-48 h-12 space-x-4 rounded-full bg-gradient-to-l from-cyan-300 via-sky-300 to-indigo-300">
        <button
          className="w-full -mt-1 focus:outline-none"
          onClick={handleDecrement}
        >
          <FontAwesomeIcon icon={faMinus} className="w-3 h-3 -mr-2" />
        </button>
        <p className="flex items-center justify-center h-full text-lg text-center text-white w-60 bg-gradient-to-l from-cyan-300 via-sky-500 to-indigo-400">
          {amount}
        </p>
        <button
          className="w-full -mt-1 focus:outline-none"
          onClick={handleIncrement}
        >
          <FontAwesomeIcon icon={faPlus} className="w-3 h-3 -ml-2" />
        </button>
      </div>
    );
  } else {
    return (
      <button className="flex items-center justify-center w-48 h-12 text-lg font-semibold text-white rounded-full md:text-xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400" onClick={() => setAddToCart(true)}>
        Add To Cart
        <img src={images.cart} alt="" className="w-7 h-7" />
      </button>
    );
  }
}

export default AddToCardBtn
