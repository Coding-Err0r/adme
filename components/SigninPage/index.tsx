"use client";
import images from "@/config/images";
import React, { useState } from "react";
import { Checkbox, Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignInSignUpLayout from "../Signin&SignupLayout";

const SigninPage = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <SignInSignUpLayout
      title={"Login to Your Account"}
      message={"Don’t have an account?"}
      redirectTitle={"Sign Up"}
      redirectUrl={"/signup"}
    >
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
        Sign In
      </button>
    </SignInSignUpLayout>
  );
};

export default SigninPage;
