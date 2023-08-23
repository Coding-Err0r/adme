import React from "react";
import Chatbox from "./Chatbox";
import images from "@/config/images";
import Badge from "../SVGs/Badge";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerService = () => {
  return (
    <section className="px-6 text-black mt-44 md:px-12">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-6 place-items-center">
        <div className="flex flex-col items-center space-y-8 text-lg font-light xl:col-span-6 xl:text-center md:text-left md:col-span-3">
          <h1 className="text-2xl font-semibold md:text-3xl xl:text-4xl">
            Did not match with your taste ?{" "}
          </h1>
          <p className="w-full text-left xl:text-center xl:w-4/5">
            You can contact with us for custom design you like . we will connect
            you with our designer to help you build your dream card{" "}
          </p>
        </div>
        <div className="xl:col-span-2 md:col-span-3">
          <Chatbox />
        </div>
        <div className="relative w-full overflow-hidden text-white h-52 md:h-full xl:col-span-4 rounded-2xl md:col-span-6">
          <div className="absolute flex items-center md:right-12 md:top-12 right-4 top-4">
            <Badge />
            <h1 className="text-base font-semibold md:text-5xl">Your Logo</h1>
          </div>
          <div className="absolute flex flex-col -translate-y-1/2 md:left-14 top-1/2 left-4">
            <h3 className="text-lg font-medium md:text-4xl">Your Name</h3>
            <h4 className="text-sm font-normal md:text-2xl">
              Your Address and contact
            </h4>
          </div>
          <button className="absolute flex items-center justify-center px-6 py-1 text-xs text-white rounded-full md:text-lg bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 md:right-12 md:bottom-12 bottom-4 right-4">
            Design my own
            <FontAwesomeIcon icon={faChevronRight} className="pl-3" />
          </button>
          <img src={images.serviceBG} className="object-cover w-full h-full " />
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
