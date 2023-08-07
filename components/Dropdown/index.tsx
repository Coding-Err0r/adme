"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
interface Props {
  items: string[];
  header: string;
}
const Dropdown = ({ items, header }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        className="flex items-center justify-center px-8 py-2 space-x-2 text-lg text-center text-white rounded-lg cursor-pointer bg-zinc-800"
        onClick={() => setOpen(!open)}
      >
        <p>{header}</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {open && (
        <ul className="absolute z-10 w-full p-4 px-4 mt-2 text-lg font-medium text-white rounded-2xl bg-zinc-800 font-poppins">
          {items.map((item: string, index: number) => (
            <li key={index} className="py-2">
              {item}
              <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
