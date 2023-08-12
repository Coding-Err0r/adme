"use client";
import data from "@/config/data";
import images from "@/config/images";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDropdown } from "@/redux/DropdownSlice";

interface Props {
  auth: string;
  textColor: string;
}
const UserProfileDropdown = ({ auth, textColor }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const dropdown = useSelector((state: any) => state.dropdown);
  return (
    <div className={`relative flex items-center ${textColor}`}>
      <a href="https://drake-white.netlify.app/">
        <img
          src={images.person}
          alt=""
          className="w-6 h-6 rounded-full md:h-8 md:w-8"
        />
      </a>
      <FontAwesomeIcon
        icon={
          dropdown.id === String(auth).toLowerCase() && open === true
            ? faChevronUp
            : faChevronDown
        }
        className="w-3 h-3 px-1 cursor-pointer"
        onClick={() => {
          setOpen(!open);
          dispatch(
            toggleDropdown<any>({
              isOpen: !open,
              id: String(auth).toLowerCase(),
            })
          );
        }}
      />
      <div className="absolute right-0 z-10 w-44 top-12">
        {dropdown.id === String(auth).toLowerCase() && open === true ? (
          <ul className="w-full p-4 px-4 text-sm font-medium text-white rounded-2xl bg-zinc-800 font-poppins">
            {data.profile
              .filter((profileValue: any) => String(profileValue.title) == auth)
              .map((profileValue: any) =>
                profileValue.value.map((item: any, index: number) => (
                  <li
                    key={index}
                    className="py-[0.45rem] cursor-pointer"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <a
                      href={item.href}
                      className="text-white hover:no-underline hover:text-white"
                    >
                      {item.title}
                    </a>
                    <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
                  </li>
                ))
              )}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfileDropdown;
