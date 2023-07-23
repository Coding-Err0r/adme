import React from "react";
import Card from "../Card";
import images from "@/config/images";
import SlideupImage from "../SlideupImage";
import data from "@/config/data";

const Features = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center w-full">
        <div className="w-full ">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="py-12 text-3xl font-bold text-center text-gray-800 lg:text-5xl md:text-4xl">
              Features
            </h1>
            <div className="flex flex-col items-center space-y-6">
              <div className="grid items-center grid-rows-2 space-y-4 md:space-x-6 md:flex md:space-y-0 ">
                <SlideupImage
                  duration={1}
                  frontSide={
                    <Card
                      image={data.features[0].imagefront}
                      imgPosition={data.features[0].position}
                      size={data.features[0].size}
                      details={
                        <p className="tracking-wide ">
                          Curated by experts.{" "}
                          <span className="text-blue-800">
                            Handpic ked for you.
                          </span>
                        </p>
                      }
                      plusIcon={data.features[0].plusicon}
                    />
                  }
                  backSide={
                    <Card
                      image={data.features[0].imageback}
                      imgPosition={data.features[0].position}
                      size={data.features[0].size}
                      details={
                        <p className="tracking-wide ">
                          Curated by experts.{" "}
                          <span className="text-blue-800">
                            Handpic ked for you.
                          </span>
                        </p>
                      }
                      plusIcon={data.features[0].plusicon}
                    />
                  }
                  leftToRight={data.features[0].leftToRight}
                  bottomToTop={data.features[0].bottomToTop}
                />
                <SlideupImage
                  duration={1}
                  frontSide={
                    <Card
                      image={data.features[1].imagefront}
                      imgPosition={data.features[1].position}
                      size={data.features[1].size}
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
                  backSide={
                    <Card
                      image={data.features[1].imageback}
                      imgPosition={data.features[1].position}
                      size={data.features[1].size}
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
              </div>
              <div className="grid items-center grid-rows-2 space-y-4 md:space-x-6 md:flex md:space-y-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
