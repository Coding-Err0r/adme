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
    <section className="flex flex-col items-center justify-center">
      <div className="absolute z-10 flex flex-col items-center md:space-y-36 lg:space-y-[20rem] space-y-28 lg:mt-2 md:mt-12 mt-14">
        <Image
          src={images.logoOne}
          alt=""
          className="lg:w-[600px] md:w-[350px] w-[200px] "
          width={2000}
          height={2000}
        />
        {/* <Logo /> */}
        <div className="w-32 py-2 text-lg text-center text-white rounded-full cursor-pointer lg:py-5 bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400 lg:w-60 lg:text-2xl md:text-xl md:py-3 md:w-44 ">
          BUY NOW
        </div>
      </div>
      <motion.img
        src={images.banner3}
        alt=""
        className="relative z-0 w-full lg:h-[90rem] h-[30rem] md:h-[50rem] object-cover object-top"
        style={{ objectPosition: objectPosition }}
      />
    </section>
  );
};

export default Hero;
