"use client";
import data from "@/config/data";
import { toggleDropdown } from "@/redux/DropdownSlice";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

interface Props {
  textColor: string;
}

const CurrencyDropdown = ({ textColor }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(data.currency[0].title);
  const dispatch = useDispatch();
  const dropdown = useSelector((state: any) => state.dropdown);
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
    <div className={`relative flex items-center ${textColor}`} ref={ref}>
      <p className="font-semibold font-sunflower text-[1.25rem]">{selected}</p>
      <FontAwesomeIcon
        icon={
          dropdown.id === selected && open === true
            ? faChevronUp
            : faChevronDown
        }
        className="w-3 h-3 px-1 cursor-pointer"
        onClick={() => {
          setOpen(!open);
          dispatch(
            toggleDropdown<any>({
              isOpen: !open,
              id: selected,
            })
          );
        }}
      />
      <div className="absolute right-0 z-10 w-44 top-12">
        {dropdown.id === selected && open === true ? (
          <ul className="w-full p-4 px-4 text-[1rem] font-medium text-white rounded-2xl bg-zinc-800 font-poppins">
            {data.currency.map((item: any, index: number) => (
              <li
                key={index}
                className="py-2 cursor-pointer"
                onClick={() => {
                  setSelected(item.title);
                  setOpen(false);
                }}
              >
                {item.value}
                <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default CurrencyDropdown;
