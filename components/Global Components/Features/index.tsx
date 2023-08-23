import React from "react";
import Card from "../Card";
import SlideupImage from "../SlideupImage";
import data from "@/config/data";
import CardOneFront from "./CardOne/CardOneFront";
import CardOneBack from "./CardOne/CardOneBack";
import CardTwoFront from "./CardTwo/CardTwoFront";
import CardTwoBack from "./CardTwo/CardTwoBack";
import CardThreeFront from "./CardThree/CardThreeFront";
import CardThreeBack from "./CardThree/CardThreeBack";
import CardFourFront from "./CardFour/CardFourFront";
import CardFourBack from "./CardFour/CardFourBack";

const Features = () => {
  return (
    <section className="relative w-full h-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-full px-8 lg:max-w-screen-xl md:max-w-screen-md">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="py-12 text-3xl font-bold text-center text-gray-800 lg:text-5xl md:text-4xl">
              Features
            </h1>
            <div className="flex items-center justify-center w-full ">
              <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
                <div className="md:col-span-2">
                  <SlideupImage
                    duration={1}
                    frontSide={<CardFourFront />}
                    backSide={<CardFourBack />}
                    leftToRight={false}
                    bottomToTop={true}
                  />
                </div>

                <div>
                  <SlideupImage
                    duration={1}
                    frontSide={<CardThreeFront />}
                    backSide={<CardThreeBack />}
                    leftToRight={true}
                    bottomToTop={false}
                  />
                </div>
                <div>
                  <SlideupImage
                    duration={1}
                    frontSide={<CardTwoFront />}
                    backSide={<CardTwoBack />}
                    leftToRight={true}
                    bottomToTop={false}
                  />
                </div>
                <div className="md:col-span-2">
                  <SlideupImage
                    duration={1}
                    frontSide={<CardOneFront />}
                    backSide={<CardOneBack />}
                    leftToRight={false}
                    bottomToTop={true}
                  />
                </div>
              </div>
              {/* <div className="grid items-center grid-rows-2 space-y-4 md:space-x-6 md:flex md:space-y-0">
                <SlideupImage
                  duration={1}
                  frontSide={
                    <Card
                      image={data.features[2].imagefront}
                      imgPosition={data.features[2].position}
                      size={data.features[2].size}
                      details={
                        <p className="tracking-wide ">
                          Curated by experts.{" "}
                          <span className="text-blue-800">
                            Handpic ked for you.
                          </span>
                        </p>
                      }
                      plusIcon={data.features[2].plusicon}
                    />
                  }
                  backSide={
                    <Card
                      image={data.features[2].imageback}
                      imgPosition={data.features[2].position}
                      size={data.features[2].size}
                      details={
                        <p className="tracking-wide ">
                          Curated by experts.{" "}
                          <span className="text-blue-800">
                            Handpic ked for you.
                          </span>
                        </p>
                      }
                      plusIcon={data.features[2].plusicon}
                    />
                  }
                  leftToRight={data.features[2].leftToRight}
                  bottomToTop={data.features[2].bottomToTop}
                />
                <SlideupImage
                  duration={1}
                  frontSide={
                    <Card
                      image={data.features[3].imagefront}
                      imgPosition={data.features[3].position}
                      size={data.features[3].size}
                      details={
                        <p className="tracking-wide ">
                          Curated by experts.{" "}
                          <span className="text-blue-800">
                            Handpic ked for you.
                          </span>
                        </p>
                      }
                      plusIcon={data.features[3].plusicon}
                    />
                  }
                  backSide={
                    <Card
                      image={data.features[3].imageback}
                      imgPosition={data.features[3].position}
                      size={data.features[3].size}
                      details={
                        <p className="tracking-wide ">
                          Curated by experts.{" "}
                          <span className="text-blue-800">
                            Handpic ked for you.
                          </span>
                        </p>
                      }
                      plusIcon={data.features[1].plusicon}
                    />
                  }
                  leftToRight={data.features[1].leftToRight}
                  bottomToTop={data.features[1].bottomToTop}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
