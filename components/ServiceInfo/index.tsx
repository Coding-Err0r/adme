import React from "react";
import ServiceInfoCard from "./ServiceInfoCard";
import data from "@/config/data";

const ServiceInfo = () => {
  return (
    <section className="p-4 bg-white shadow-xl rounded-2xl">
      <div className="md:w-[35rem] w-[320px] h-full relative z-0">
        <div className="grid grid-cols-2 gap-10 md:gap-6 md:grid-rows-2 md:grid-cols-3 ">
          {data.productInfos.map((info: any, index: number) => (
            <ServiceInfoCard
              title={info.title}
              image={info.image}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo;
