import React from "react";
import Chatbox from "./Chatbox";
import images from "@/config/images";
import Badge from "../SVGs/Badge";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomerService = () => {
  return (
    <section className="text-black mt-44 ">
      <div className="flex flex-col gap-6 px-4 md:grid-cols-2 md:grid lg:flex lg:items-center">
        <div className="flex flex-col p-4 space-y-8 text-lg font-light lg:w-1/2 lg:text-center md:text-left lg:p-0">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Did not match with your taste ?{" "}
          </h1>
          <p>
            You can contact with us for custom design you like . we will connect
            you with our designer to help you build your dream card{" "}
          </p>
        </div>
        <div className="flex-1 block lg:hidden md:block">
          <Chatbox />
        </div>
      </div>
      <div className="flex justify-center px-4 py-10 lg:space-x-10">
        <div className="hidden lg:block md:hidden">
          <Chatbox />
        </div>
        <div className="lg:w-[798px] md:h-[440px] rounded-2xl overflow-hidden w-full text-white relative h-60">
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
