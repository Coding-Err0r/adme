"use client";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
interface Props {
  items: string[];
  header: string;
}
const Dropdown = ({ items, header }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const ref = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (event: any) => {
    if (ref.current !== null) {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
  };
  return (
    <div className="relative font-poppins">
      <div
        className="flex items-center justify-center px-8 py-3 space-x-2 text-sm text-center text-white rounded-lg cursor-pointer md:py-2 md:text-lg bg-zinc-800"
        onClick={() => setOpen(!open)}
      >
        <p>
          {selected === null || selected === undefined || selected == ""
            ? header
            : selected}
        </p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {open && (
        <ul
          className="absolute z-10 w-full p-4 px-4 mt-2 text-sm font-medium text-white md:text-lg rounded-2xl bg-zinc-800 font-poppins"
          ref={ref}
        >
          {items.map((item: string, index: number) => (
            <li
              key={index}
              className="py-2 cursor-pointer"
              onClick={() => {
                setOpen(false);
                setSelected(item);
              }}
            >
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
