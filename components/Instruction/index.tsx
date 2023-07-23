import React from "react";
import InfoCard from "./InfoCard";
import data from "@/config/data";
import Slideup from "../Slideup";

const Instruction = () => {
  return (
    <section className="w-full py-8">
      <div className="flex flex-col items-center w-full ">
        <div className=" w-[80%] max-w-7xl">
          <div className="flex flex-col">
            <h1 className="py-2 text-3xl font-bold text-center text-gray-800 lg:text-6xl md:text-5xl">
              How it works
            </h1>
            <p className="text-lg text-center text-gray-600">
              Get started in just 4 simple steps
            </p>
          </div>
          <div className="relative z-0 grid items-center justify-center w-full grid-cols-1 py-10 space-y-10 md:px-6 lg:space-x-16 lg:flex md:grid-cols-2">
            {data.infoCards.map((item: any, index: number) => (
              <Slideup
                duration={index}
                component={
                  <InfoCard
                    image={item.image}
                    description={item.description}
                    link={item.link}
                    id={index + 1}
                    title={item.title}
                    key={index}
                  />
                }
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
