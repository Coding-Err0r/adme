"use client";
import images from "@/config/images";
import React, { useState } from "react";
import { Checkbox, Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignInSignUpLayout from "../Signin&SignupLayout";

const SignupPage = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <SignInSignUpLayout
      title={"Create your account."}
      message={"Already have an account?"}
      redirectTitle={"Sign In"}
      redirectUrl={"/signin"}
    >
      <div className="flex flex-col items-start space-y-1">
        <div className="flex">
          <span className="text-base text-black 2xl:text-lg">Full name</span>{" "}
          <p className="text-red-500">*</p>
        </div>
        <Input
          type="text"
          placeholder="Steven Stallion"
          classPrefix="w-full 2xl:p-3 pl-5 text-sm border-2 rounded-full p-2"
          style={{ width: "100%" }}
        />
      </div>

      <div className="flex flex-col items-start space-y-1">
        <div className="flex">
          <span className="text-base text-black 2xl:text-lg">Email address</span>{" "}
          <p className="text-red-500">*</p>
        </div>
        <Input
          type="text"
          placeholder="Example@gmail.com"
          classPrefix="w-full 2xl:p-3 pl-5 text-sm border-2 rounded-full p-2"
          style={{ width: "100%" }}
        />
      </div>

      <div className="flex flex-col items-start space-y-1">
        <div className="flex">
          <span className="text-base text-black 2xl:text-lg">Password</span>{" "}
          <p className="text-red-500">*</p>
        </div>
        <InputGroup inside>
          <Input
            type={visible ? "text" : "password"}
            classPrefix="w-full 2xl:p-3 pl-5 text-sm border-2 rounded-full p-2"
            style={{ width: "100%" }}
          />
          <InputGroup.Button
            onClick={handleChange}
            style={{ right: 10, top: 5 }}
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
    </SignInSignUpLayout>
  );
};

export default SignupPage;
