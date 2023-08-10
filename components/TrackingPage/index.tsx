"use client";
import React from "react";
import TrackingHeader from "./TrackingHeader";
import EstimatedDate from "./EstimatedDate";
import TrackingProducts from "./TrackingProducts";
import TrackPayment from "./TrackPayment";
import Invoice from "./Invoice";
import images from "@/config/images";
import TrackOrder from "./TrackOrder";

const TrackingPage = () => {
  return (
    <section className="w-full h-full font-poppins">
      <div className="fixed w-full h-full -z-20 bg-[#f2f2f2]" />
      <div className="flex items-center justify-center w-full h-full py-12">
        {/* <div className="flex flex-col items-center justify-center mt-[20%] space-y-3">
          <img
            src={images.emptyTracking}
            alt={images.emptyTracking}
            className="w-32 h-32"
          />
          <h1 className="text-sm md:text-2xl">You have no active orders.</h1>
          <button className="px-6 py-2 text-sm text-white rounded-lg md:text-lg bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
            Order now
          </button>
        </div> */}
        <TrackOrder />
      </div>
    </section>
  );
};

export default TrackingPage;
