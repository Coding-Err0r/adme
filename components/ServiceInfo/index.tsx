import React from "react";
import ServiceInfoCard from "./ServiceInfoCard";
import data from "@/config/data";

const ServiceInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-rows-2 md:grid-cols-3">
      {data.productInfos.map((info: any, index: number) => (
        <ServiceInfoCard title={info.title} image={info.image} key={index} />
      ))}
    </div>
  );
};

export default ServiceInfo;
