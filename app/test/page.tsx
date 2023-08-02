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
    <section className="flex items-center justify-center w-full h-full bg-gray-200 p-14">
      <div className="w-full h-full  bg-white rounded-[30px] overflow-hidden">
        <div className="flex w-full h-full">
          <div className="flex justify-center w-1/2 h-full">
            <div className="flex flex-col  w-[70%] py-1 space-y-1">
              <div className="flex flex-col items-center">
                <img src={images.logoTwo} alt="" className="h-10 my-3" />
                <h1 className="text-2xl text-black">Create a new account.</h1>
                <p className="text-base">
                  Already have an account?{" "}
                  <a>
                    <strong>Sing in</strong>
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-start w-full py-2 space-y-1">
                <div className="flex">
                  <span className="text-base text-black 2xl:text-lg">
                    Full name
                  </span>{" "}
                  <p className="text-red-500">*</p>
                </div>
                <Input
                  type="text"
                  placeholder="Steven Stallion"
                  classPrefix="w-full p-3 pl-5 text-sm border-2 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col items-start w-full py-2 space-y-1">
                <div className="flex">
                  <span className="text-base text-black 2xl:text-lg">
                    Email Address
                  </span>{" "}
                  <p className="text-red-500">*</p>
                </div>
                <Input
                  type="email"
                  placeholder="example@gmail.com"
                  classPrefix="w-full p-3 pl-5 text-sm border-2 rounded-full p-3"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="flex flex-col items-start w-full py-2 space-y-1">
                <div className="flex">
                  <span className="text-base text-black 2xl:text-lg">
                    Password
                  </span>{" "}
                  <p className="text-red-500">*</p>
                </div>
                <InputGroup inside classPrefix="focus:border-none w-full">
                  <Input
                    type={visible ? "text" : "password"}
                    classPrefix="w-full p-3 pl-5 text-sm border-2 rounded-full"
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

              <div className="flex flex-col items-start w-full">
                <Checkbox> I agree to the terms and condition</Checkbox>
              </div>

              <button className="w-full p-2 text-xl text-white rounded-full bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
                Sign Up
              </button>

              <section className="relative flex items-center py-4">
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
          </div>
          <img
            src={images.frame1}
            alt=""
            className="object-cover w-1/2 h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Test;
