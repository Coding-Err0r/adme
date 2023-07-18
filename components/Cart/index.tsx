"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShoppingCart from "../SVGs/ShoppingCart";
import Image from "next/image";
import data from "@/config/data";
import CartList from "./CartList";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 50%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 50%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Cart = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const ref = useRef<any>(null);
  const dimensions = useRef({ width: 0, height: 0 });
  const [id, setId] = useState<string>("");

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    console.log(isOpen);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={dimensions.current.height}
      ref={ref}
    >
      <motion.div
        className="fixed top-0 bottom-0 right-0 z-30 md:w-[550px] h-screen bg-zinc-900 w-screen"
        variants={sidebar}
      >
        <button
          onClick={() => toggleOpen()}
          className="absolute z-40 cursor-pointer top-3 right-5"
        >
          <FontAwesomeIcon icon={faX} className="text-white " />
        </button>
        <motion.ul
          variants={variants}
          className="relative z-20 w-full h-full px-3 overflow-scroll text-white md:px-7 top-24"
        >
          <div className="flex flex-col space-y-3 ">
            {data.cart.map((item: any, index: number) => (
              <motion.li variants={menuItems} key={index}>
                <CartList
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </motion.li>
            ))}
          </div>
        </motion.ul>
        <div className="absolute bottom-0 z-30 w-full px-3 py-4 text-xl font-semibold text-white md:py-8 md:px-7 bg-zinc-900">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between px-2">
              <p> Subtotal</p>
              <p> ৳2399.00</p>
            </div>
            <div className="flex flex-col justify-center space-y-4 md:space-x-10 md:grid md:grid-cols-2 md:space-y-0">
              <button className="md:px-[70px] py-2 text-black bg-gray-300 rounded-full ">
                {" "}
                View Cart
              </button>
              <button className="md:px-[70px] py-2 text-black bg-gray-300 rounded-full ">
                {" "}
                Checkout
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <button
        onClick={() => toggleOpen()}
        className=" cursor-pointer  w-[50px] h-[50px] bg-transparent rounded-[50%] relative z-0"
      >
        <ShoppingCart value={5} />
      </button>
    </motion.nav>
  );
};

export default Cart;
