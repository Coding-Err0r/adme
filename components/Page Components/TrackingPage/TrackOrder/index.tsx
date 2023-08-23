import React from "react";
import EstimatedDate from "../EstimatedDate";
import Invoice from "../Invoice";
import TrackPayment from "../TrackPayment";
import TrackingHeader from "../TrackingHeader";
import TrackingProducts from "../TrackingProducts";

const TrackOrder = () => {
  return (
    <div className="relative flex justify-center w-full h-full mt-[5%]">
      <div className="absolute w-full h-full bg-white -z-20" />
      <div className="w-full h-full md:px-8 lg:max-w-screen-xl">
        <div className="w-full h-full p-4 text-gray-800 md:p-14 ">
          <div className="flex flex-col w-full h-full space-y-8">
            <TrackingHeader />
            <div className="border-b-[1px] border-gray-300 w-full" />
            <EstimatedDate />
            <TrackingProducts />
            <div className="border-b-[1px] border-gray-300 w-full" />
            <TrackPayment />
            <div className="border-b-[1px] border-gray-300 w-full" />
            <Invoice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
