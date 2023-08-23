"use client";
import React from "react";
import TrackOrder from "./TrackOrder";
import EmptyOrder from "./EmptyOrder";

const TrackingPage = () => {
  return (
    <section className="w-full h-full font-poppins">
      <div className="fixed w-full h-full -z-20 bg-[#f2f2f2]" />
      <div className="flex items-center justify-center w-full h-full py-12">
        {/* <EmptyOrder /> */}
        <TrackOrder />
      </div>
    </section>
  );
};

export default TrackingPage;
