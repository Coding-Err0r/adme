"use client";

import CheckGreen from "@/components/Global Components/SVGs/CheckGreen";
import data from "@/config/data";
import { handlePortfolio } from "@/redux/PortfolioSlice";
import { Card, Elevation } from "@blueprintjs/core";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const SelectProfile = () => {
  const dispatch = useDispatch();
  const portfolioSelect = useSelector((state: any) => state.portfolio);
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center">
        <div className="w-full  xl:max-w-[118.75rem] xl:py-10 xl:px-12 md:p-4  p-2">
          <div className="grid grid-cols-9 gap-6">
            <Card
              elevation={Elevation.ONE}
              className="col-span-9 rounded-lg xl:col-span-6"
            >
              <div className="flex flex-col items-center py-8 space-y-6">
                <h1 className="text-black md:text-[2.25rem] text-[1rem]  font-semibold">
                  Select your portfolio
                </h1>
                <div className="flex items-center space-x-12">
                  {data.portfolios.map((portfolio: any, index: number) => (
                    <div
                      key={index}
                      className="md:w-[11.1875rem] md:h-[22.0625rem] rounded-2xl overflow-hidden shadow-xl relative flex justify-center items-center w-[6.3125rem] h-[12.5rem] shadow-black/20"
                      onClick={() => {
                        dispatch(handlePortfolio<any>({ id: index }));
                      }}
                    >
                      <div className="absolute ">
                        {portfolioSelect.id === index && (
                          <CheckGreen Props={"w-8 h-8"} />
                        )}
                      </div>
                      {portfolioSelect.id === index && (
                        <div className="absolute w-full h-full bg-gray-500/30" />
                      )}
                      <Image
                        className={`w-full h-full `}
                        src={portfolio.image}
                        alt={portfolio.image}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectProfile;
