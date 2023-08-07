"use client";
import React, { useState } from "react";
import { Checkbox, Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";

const SigninComponent = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-start py-2 space-y-1">
        <div className="flex">
          <span className="text-black">Email address</span>{" "}
          <p className="text-red-500">*</p>
        </div>
        <Input
          type="text"
          placeholder="Example@gmail.com"
          classPrefix="w-full 2xl:p-3 pl-5 text-sm border-2 rounded-full p-2"
          style={{ width: "100%" }}
        />
      </div>

      <div className="flex flex-col items-start py-2 space-y-1">
        <div className="flex">
          <span className="text-black">Password</span>{" "}
          <p className="text-red-500">*</p>
        </div>
        <InputGroup
          inside
          style={{ width: "100%" }}
          classPrefix="focus:outline-none"
        >
          <Input
            type={visible ? "text" : "password"}
            classPrefix="w-full 2xl:p-3 pl-5 text-sm border-2 rounded-full p-2"
            style={{ width: "100%" }}
          />
          <InputGroup.Button
            onClick={handleChange}
            style={{
              right: "-87%",
              top: "-2.4rem",
              border: "none",
              backgroundColor: "transparent",
            }}
            classPrefix="hover:bg-transparent focus:outline-none"
          >
            {visible ? <EyeIcon /> : <EyeSlashIcon />}
          </InputGroup.Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default SigninComponent;
