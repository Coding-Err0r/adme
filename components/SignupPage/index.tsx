"use client";
import images from "@/config/images";
import React, { useState } from "react";
import { Checkbox, Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

const SignupPage = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <section className="w-full h-screen bg-gray-200">
      <div className="flex flex-col items-center w-full h-full py-12">
        <div className="w-full h-full p-10">
          <div className="flex items-center justify-center h-full">
            <div className="flex bg-white  w-[100rem] h-[60rem] rounded-[30px] shadow-xl">
              <div className="relative flex flex-col w-full h-full overflow-hidden rounded-l-[30px] items-center justify-center">
                <img
                  src={images.frame3}
                  alt=""
                  className="absolute h-52 top-[-10px] left-[-155px] -rotate-[19deg] "
                />
                <div className="flex flex-col w-[68%] p-4 text-lg text-gray-500  space-y-5 relative z-10">
                  <div className="flex flex-col items-center space-y-2">
                    <img src={images.logoTwo} className="h-16 my-5 w-60" />
                    <h1 className="text-4xl text-black">
                      Create your account.
                    </h1>
                    <p>
                      Already have an account?{" "}
                      <a href="/signin" className="text-blue-600">
                        <strong>Sign In</strong>
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex">
                      <span className="text-black">Full name</span>{" "}
                      <p className="text-red-500">*</p>
                    </div>
                    <Input
                      type="text"
                      placeholder="Steven Stallion"
                      classPrefix="w-full p-3 pl-5 text-base border-2 rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex">
                      <span className="text-black">Email address</span>{" "}
                      <p className="text-red-500">*</p>
                    </div>
                    <Input
                      type="text"
                      placeholder="Example@gmail.com"
                      classPrefix="w-full p-3 pl-5 text-base border-2 rounded-full"
                      style={{ width: "100%" }}
                    />
                  </div>

                  <div className="flex flex-col items-start space-y-1">
                    <div className="flex">
                      <span className="text-black">Password</span>{" "}
                      <p className="text-red-500">*</p>
                    </div>
                    <InputGroup inside>
                      <Input
                        type={visible ? "text" : "password"}
                        classPrefix="w-full p-3 pl-5 text-base border-2 rounded-full"
                        style={{ width: "100%" }}
                      />
                      <InputGroup.Button
                        onClick={handleChange}
                        style={{ right: 10, top: 10 }}
                        classPrefix="hover:bg-transparent"
                      >
                        {visible ? <EyeIcon /> : <EyeSlashIcon />}
                      </InputGroup.Button>
                    </InputGroup>
                  </div>
                  <div className="-ml-2">
                    <Checkbox> I agree to the terms and condition</Checkbox>
                  </div>
                  <button className="p-2 text-2xl text-white rounded-full bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
                    Sign Up
                  </button>
                  <section className="relative flex items-center ">
                    <div className="flex-grow border-t border-gray-500" />
                    <strong className="px-4">Or</strong>
                    <div className="flex-grow border-t border-gray-500" />
                  </section>
                  <div className="flex items-center justify-center space-x-8">
                    <a className="w-12 h-12 p-3 bg-white shadow-xl rounded-xl ">
                      <img
                        src={images.social3}
                        className="object-cover w-full h-full"
                      />
                    </a>
                    <a className="w-12 h-12 p-3 bg-white shadow-xl rounded-xl ">
                      <img
                        src={images.social2}
                        className="object-cover w-full h-full"
                      />
                    </a>
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
                  className="absolute h-52 bottom-[-70px] right-[-195px] rotate-[16deg] "
                />
              </div>
              <img
                src={images.frame1}
                alt=""
                className="rounded-r-[30px] w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
