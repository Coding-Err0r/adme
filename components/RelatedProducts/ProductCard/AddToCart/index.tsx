"use client";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const AddToCart = () => {
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
      <div className="flex items-center justify-center w-32 h-6 space-x-4 rounded-full md:h-9 md:w-40 bg-gradient-to-l from-cyan-300 via-sky-300 to-indigo-300">
        <button
          className="w-full -mt-1 focus:outline-none"
          onClick={handleDecrement}
        >
          <FontAwesomeIcon icon={faMinus} className="w-3 h-3 -mr-2" />
        </button>
        <p className="flex items-center justify-center h-full text-center text-white w-60 bg-gradient-to-l from-cyan-300 via-sky-500 to-indigo-400">
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
      <>
        <button
          className="w-32 h-6 text-xs text-white rounded-full md:w-40 bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 md:text-base md:h-9"
          onClick={() => setAddToCart(true)}
        >
          ADD TO CART
        </button>
      </>
    );
  }
};

export default AddToCart;
