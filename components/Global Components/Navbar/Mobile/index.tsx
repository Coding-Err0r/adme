"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleDropdown } from "@/redux/DropdownSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import data from "@/config/data";

interface Props {
  items: any[];
  auth: string;
  textColor: string;
}
const MobileNavbar = ({ items, auth, textColor }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const dispatch = useDispatch();
  const dropdown = useSelector((state: any) => state.dropdown);
  const [selected, setSelected] = useState(data.currency[0].title);
  const ref = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    if (open) {
      setShowSidebar(true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  const handleClickOutside = (event: any) => {
    if (ref.current !== null) {
      if (!ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="relative cursor-pointer focus:outline-none"
        ref={ref}
      >
        <FontAwesomeIcon
          icon={showSidebar === true ? faX : faBars}
          className={`${textColor}`}
        />
      </button>

      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen p-2 mt-12 "
          >
            <ul className="w-full p-4 px-4 text-sm font-medium text-white rounded-2xl bg-zinc-800 font-poppins">
              {items.map((item: any, index: number) => (
                <li key={index} className="py-2 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="text-white hover:no-underline hover:text-white focus:outline-none focus:text-white focus:no-underline"
                    >
                      {item.title}
                    </a>
                    {item.subMenu.length > 0 && (
                      <FontAwesomeIcon
                        icon={
                          dropdown.id === String(item.title).toLowerCase() &&
                          open === true
                            ? faChevronUp
                            : faChevronDown
                        }
                        className="w-3 h-3 px-1 text-white cursor-pointer"
                        onClick={() => {
                          setOpen(!open);
                          dispatch(
                            toggleDropdown<any>({
                              isOpen: !open,
                              id: String(item.title).toLowerCase(),
                            })
                          );
                        }}
                      />
                    )}
                  </div>
                  {String(item.title).toLowerCase() == "profile" ? null : (
                    <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
                  )}
                  <ul className="flex flex-col w-full pl-6 space-y-1">
                    {dropdown.id === String(item.title).toLowerCase() &&
                    open === true
                      ? item.subMenu.map((sub: any, i: number) => (
                          <li key={i} className="py-2 cursor-pointer">
                            <a
                              href={sub.href}
                              className="text-white hover:no-underline hover:text-white focus:outline-none"
                            ></a>
                            {sub.title}
                            <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
                          </li>
                        ))
                      : null}
                  </ul>
                </li>
              ))}
              <div>
                <li className="py-1 cursor-pointer">
                  <div className="flex items-center justify-between">
                    <p>{selected}</p>
                    <FontAwesomeIcon
                      icon={
                        dropdown.id === String(selected).toLowerCase() &&
                        open === true
                          ? faChevronUp
                          : faChevronDown
                      }
                      className="w-3 h-3 px-1 text-white cursor-pointer"
                      onClick={() => {
                        setOpen(!open);
                        dispatch(
                          toggleDropdown<any>({
                            isOpen: !open,
                            id: String(selected).toLowerCase(),
                          })
                        );
                      }}
                    />
                  </div>
                  <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
                </li>
                {dropdown.id === String(selected).toLowerCase() && open === true
                  ? data.currency.map((item: any, index: number) => (
                      <li
                        key={index}
                        className="py-2 pl-6 cursor-pointer"
                        onClick={() => {
                          setSelected(item.title);
                          setOpen(false);
                        }}
                      >
                        <p>{item.value}</p>

                        <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
                      </li>
                    ))
                  : null}
              </div>

              {data.profile
                .filter((profileValue: any) => profileValue.title == auth)
                .map((profileValue: any) =>
                  profileValue.value.map((item: any, index: number) => (
                    <li key={index} className="py-2 cursor-pointer">
                      <a
                        href={item.href}
                        className="text-white hover:no-underline hover:text-white focus:outline-none focus:text-white focus:no-underline"
                      >
                        {item.title}
                      </a>

                      <div className="h-[1px] bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500 mt-1" />
                    </li>
                  ))
                )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
