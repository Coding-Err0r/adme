import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FaqCard from "./FaqCard";
import data from "@/config/data";
import Image from "next/image";
import images from "@/config/images";
import Slideup from "../Slideup";

const Faq = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center w-full py-12">
        <div className="w-[80%]  max-w-7xl">
          <div className="flex flex-col items-start ">
            <h1 className="py-12 text-3xl font-bold text-left text-gray-800 lg:text-5xl md:text-4xl">
              Frequently Asked Question
            </h1>
            <div className="flex flex-col space-y-6 lg:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0">
              <div className="flex flex-col w-full space-y-6 lg:col-span-2">
                {data.faqs.map((faq: any, index: number) => (
                  <FaqCard
                    question={faq.question}
                    answer={faq.answer}
                    key={index}
                  />
                ))}
              </div>
              <Slideup
                duration={2}
                component={
                  <div className="w-full bg-white shadow-xl lg:h-full rounded-2xl">
                    <div className="flex flex-col items-center justify-center w-full h-full pb-6 space-y-2">
                      <div className="flex justify-center pt-10">
                        <Image
                          src={images.personOne}
                          alt=""
                          width={2000}
                          height={2000}
                          className="relative z-0 object-cover w-20 h-20 rounded-full"
                        />
                        <Image
                          src={images.PersonTwo}
                          alt=""
                          width={2000}
                          height={2000}
                          className="absolute z-10 object-cover w-20 h-20 mx-12 -mt-3 border-2 border-white rounded-full"
                        />
                        <Image
                          src={images.personThree}
                          alt=""
                          width={2000}
                          height={2000}
                          className="relative z-0 object-cover w-20 h-20 ml-5 rounded-full"
                        />
                      </div>
                      <p className="text-lg font-semibold text-gray-800 md:text-xl">
                        Still have questions?
                      </p>
                      <p className="px-8 text-lg text-gray-500 md:text-xl font-base">
                        Can’t find the answer you’re looking for? Please chat to
                        our friendly team.
                      </p>
                      <div className="pt-8">
                        <button className="relative z-10 px-8 py-3 text-sm font-semibold text-white bg-blue-600 md:text-lg rounded-xl hover:bg-blue-800">
                          Get in touch
                        </button>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
