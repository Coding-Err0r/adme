"use client";
import React, { useState } from "react";
import { TagPicker } from "rsuite";
import { LANGUAGES } from "@/config/languages";
import "./style.css";
const languages = LANGUAGES.map((item) => ({
  label: item,
  value: item,
}));

const MultiTags = ({ data, setData }: any) => {
  return (
    <TagPicker
      creatable
      data={languages}
      style={{ width: "600px" }}
      menuStyle={{ width: 300 }}
      onCreate={(value) => {
        setData({ ...data, languages: value });
      }}
      onChange={(value) => {
        setData({ ...data, languages: value });
      }}
      placement="top"
    />
  );
};

export default MultiTags;
