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
          <h1 className="text-2xl font-bold md:text-4xl">
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
        <div className="lg:w-[798px] md:h-[440px] rounded-2xl overflow-hidden w-full text-white">
          {/* <div className="absolute flex items-center right-[20%] mt-12">
            <Badge />
            <h1 className="md:text-5xl">Your Logo</h1>
          </div>
          <div className="absolute flex flex-col ml-16 mt-44">
            <h3 className="text-4xl">Your Name</h3>
            <h4 className="text-2xl">Your Address and contact</h4>
          </div>
          <button className="absolute flex items-center px-8 py-1 text-lg text-white rounded-full bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 right-[19%] mt-[22%]">
            Design my own
            <FontAwesomeIcon icon={faChevronRight} className="px-3" />
          </button> */}
          <img src={images.serviceBG} className="object-cover w-full h-full " />
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
