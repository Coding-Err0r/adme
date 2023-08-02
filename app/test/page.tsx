"use client";
import images from "@/config/images";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Checkbox, Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

const Test = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <section className="w-full h-screen bg-gray-200">
      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full h-full">
          <div className="relative flex items-center justify-center h-full p-14">
            <div className="flex bg-white md:rounded-[30px] shadow-xl  relative z-10 w-full h-full ">
              <div className="relative flex flex-col w-full h-full overflow-hidden lg:rounded-l-[30px] items-center justify-center md:rounded-[30px] lg:rounded-none ">
                <img
                  src={images.frame3}
                  alt=""
                  className="absolute top-[-25px] left-[-105px] -rotate-[19deg]  md:block lg:block hidden h-36"
                />
                <div className="absolute z-20 flex items-center text-sm text-black md:text-base top-5 right-5">
                  <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-3" />
                  <a
                    href="/"
                    className="text-black hover:no-underline hover:text-blue-500"
                  >
                    Go back to home
                  </a>
                </div>

                <div className="relative z-10 flex flex-col w-[70%] space-y-3 text-sm text-gray-500 md:text-base">
                  <div className="flex flex-col items-center py-4 space-y-2 lg:py-0">
                    <img src={images.logoTwo} className="h-12 my-3 md:h-10" />
                    <h1 className="text-xl text-black md:text-2xl ">
                      Create a new account.
                    </h1>
                    <p>
                      Already have an account?
                      <a href={"/signin"} className="text-blue-600">
                        <strong>{"Sign In"}</strong>
                      </a>
                    </p>
                  </div>

                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex">
                      <span className="text-base text-black 2xl:text-lg">
                        Full name
                      </span>{" "}
                      <p className="text-red-500">*</p>
                    </div>
                    <Input
                      type="text"
                      placeholder="Steven Stallion"
                      classPrefix="w-full 3 pl-5 text-sm border-2 rounded-full p-3"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex">
                      <span className="text-base text-black 2xl:text-lg">
                        Email address
                      </span>{" "}
                      <p className="text-red-500">*</p>
                    </div>
                    <Input
                      type="text"
                      placeholder="Example@gmail.com"
                      classPrefix="w-full  pl-5 text-sm border-2 rounded-full p-3"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex">
                      <span className="text-base text-black 2xl:text-lg">
                        Password
                      </span>{" "}
                      <p className="text-red-500">*</p>
                    </div>
                    <InputGroup inside classPrefix="focus:border-none w-full">
                      <Input
                        type={visible ? "text" : "password"}
                        classPrefix="w-full  pl-5 text-sm border-2 rounded-full p-3"
                        style={{ width: "100%" }}
                      />
                      <InputGroup.Button
                        onClick={handleChange}
                        style={{
                          right: "-85%",
                          top: "-2.5rem",
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                        classPrefix="hover:bg-transparent"
                      >
                        {visible ? <EyeIcon /> : <EyeSlashIcon />}
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <Checkbox> I agree to the terms and condition</Checkbox>

                  <button className="p-2 text-xl text-white rounded-full 2xl:text-2xl bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
                    Sign Up
                  </button>
                  <section className="relative flex items-center ">
                    <div className="flex-grow border-t border-gray-500" />
                    <strong className="px-4">Or</strong>
                    <div className="flex-grow border-t border-gray-500" />
                  </section>
                  <div className="flex items-center justify-center space-x-8">
                    <div className="w-12 h-12 p-3 bg-white shadow-xl cursor-pointer rounded-xl">
                      <img
                        src={images.social3}
                        className="object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                    <div className="w-12 h-12 p-3 bg-white shadow-xl cursor-pointer rounded-xl">
                      <img
                        src={images.social2}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <a className="w-12 h-12 p-3 bg-white shadow-xl rounded-xl ">
                      <img
                        src={images.social1}
                        className="object-cover w-full h-full"
                      />
                    </a>
                  </div>
                </div>
                <img
                  src={images.frame2}
                  alt=""
                  className="absolute  bottom-[-60px] right-[-135px] rotate-[16deg] h-36"
                />
              </div>
              <img
                src={images.frame1}
                alt=""
                className="rounded-r-[30px] w-full h-full object-cover lg:block xl:block md:hidden hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
