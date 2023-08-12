import images from "@/config/images";
import React from "react";

const EmptyOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-3">
      <img
        src={images.emptyTracking}
        alt={images.emptyTracking}
        className="w-32 h-32"
      />
      <h1 className="text-sm md:text-2xl">You have no active orders.</h1>
      <a
        className="px-6 py-2 text-sm text-white no-underline rounded-lg md:text-lg bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 hover:no-underline hover:text-white"
        href="/products"
      >
        Order now
      </a>
    </div>
  );
};

export default EmptyOrder;
