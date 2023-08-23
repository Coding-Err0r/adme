import FloadingButton from "@/components/Global Components/FloadingButton";
import images from "@/config/images";
import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col items-center w-full pt-12">
        <FloadingButton />
        <div className="w-full px-0 md:max-w-screen-xl md:px-10 ">
          <div className="flex flex-col items-start ">
            <div className="absolute z-10 w-full mt-20 -translate-x-1/2 left-1/2 max-w-7xl">
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center space-y-2">
                  <Image
                    width={2000}
                    height={2000}
                    alt=""
                    src={images.logoTwo}
                    className=" w-36 h-11"
                  />
                  <p className="text-xl font-bold text-white">
                    now@adme.cardz.com
                  </p>
                  <p className="text-xl font-bold text-white">
                    +880 1324-242432
                  </p>
                </div>
              </div>
            </div>
            <Image
              width={2000}
              height={2000}
              alt=""
              src={images.footer}
              className="w-full  h-[14rem] md:rounded-t-[70px] rounded-t-[50px] relative z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
