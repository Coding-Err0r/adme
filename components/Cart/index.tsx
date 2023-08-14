"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCart from "../SVGs/ShoppingCart";
import Image from "next/image";
import data from "@/config/data";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDropdown } from "@/redux/DropdownSlice";

interface Props {
  textColor: string;
}

const Cart = ({ textColor }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const dropdown = useSelector((state: any) => state.dropdown);
  const ref = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (event: any) => {
    if (ref.current !== null) {
      if (!ref.current.contains(event.target)) {
        setShowSidebar(false);
      } else {
        console.log("Click outside");
      }
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setShowSidebar(!showSidebar);
          dispatch(
            toggleDropdown<any>({
              isOpen: !open,
              id: "cart",
            })
          );
        }}
        className="relative cursor-pointer focus:outline-none"
      >
        <ShoppingCart value={5} textColor={textColor} />
      </button>

      <AnimatePresence>
        {dropdown.id == "cart" && showSidebar === true ? (
          <motion.div
            ref={ref}
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen mt-12 text-white shadow-lg bg-zinc-900 md:mt-14 md:max-w-lg "
          >
            <div className="flex items-center justify-end h-12 px-6 bg-zinc-900">
              <button
                onClick={() => setShowSidebar(false)}
                className="text-whites"
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            </div>
            <div className="absolute z-20 w-full px-6 py-8 text-sm text-white bottom-10 md:text-lg bg-zinc-900">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <p>৳2399.00 </p>
                </div>
                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <p>-৳23.00 </p>
                </div>
                <div className="w-full border-b-2 border-white" />
                <div className="flex items-center justify-between">
                  <span>Total</span>
                  <p>-৳23.00</p>
                </div>
                <button className="w-full py-1 text-sm font-bold text-black bg-gray-100 md:py-2 rounded-3xl md:text-xl">
                  Checkout
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full max-h-screen p-4 space-y-3 overflow-hidden overflow-y-scroll">
              {data.cart.map((cart: any, index: number) => (
                <CartList
                  title={data.cart[0].title}
                  image={data.cart[0].image}
                  price={data.cart[0].price}
                  amount={data.cart[0].amount}
                  id={0}
                  key={index}
                />
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Cart;
