import images from "@/config/images";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../SVGs/Logo";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const objectPosition = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    ["0px 0%", "0px 50%", "0px 100%", "0px 150%", "0px 200%"]
  );
  return (
    <section className="relative flex flex-col items-center justify-center">
      <div className="absolute z-10 flex flex-col items-center justify-center space-y-4">
        <Logo />
        <div className="px-6 py-2 text-[0.75rem] font-semibold text-center text-white rounded-full cursor-pointer md:px-8 bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 md:text-[1.5rem]  font-sunflower">
          {"Create your profile >"}
        </div>
      </div>
      <motion.img
        src={images.banner3}
        alt=""
        className="relative z-0 object-cover object-top w-full min-h-screen"
        style={{ objectPosition: objectPosition }}
      />
      <div className="absolute bottom-0 flex items-center justify-center w-full py-4 space-x-1 text-[0.625rem] font-medium text-white  lg:text-[1.5rem] md:text-[1rem] font-poppins bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 md:py-6">
        <span>Bangladesh’s no 1 digital smart business card platform .</span>
        <span className="text-blue-600">{"Order Now >"}</span>
      </div>
    </section>
  );
};

export default Hero;
