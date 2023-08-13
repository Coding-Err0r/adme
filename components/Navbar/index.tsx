"use client";
import data from "@/config/data";
import images from "@/config/images";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileNavbar from "./Mobile";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { useDispatch } from "react-redux";
import { toggleDropdown } from "@/redux/DropdownSlice";
import CurrencyDropdown from "./CurrencyDropdown";
import UserProfileDropdown from "./UserProfileDropdown";
import LogoDark from "../SVGs/LogoDark";
import LogoLight from "../SVGs/LogoLight";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState(0);
  const dispatch = useDispatch();
  const dropdown = useSelector((state: any) => state.dropdown);
  const [textColor, setTextColor] = useState<string>("");
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrollTop > 4) {
      setTextColor("text-white");
    } else {
      setTextColor("text-zinc-800");
    }
  }, [scrollTop]);

  return (
    <section className="fixed z-30 w-full">
      <div
        className={`flex items-center justify-between px-4 py-2  backdrop-blur-md font-sunflower ${
          scrollTop > 4 ? "bg-zinc-950/90" : "bg-transparent"
        }`}
      >
        <div className="flex items-center md:space-x-6 lg:space-x-14 ">
          <a href="/" className={`${textColor} flex items-center  space-x-2`}>
            {scrollTop > 4 ? <LogoLight /> : <LogoDark />}
            <p className="hidden font-light md:text-[1.5rem] font-syncopate md:block lg:block xl:block">
              Rezoome
            </p>
          </a>

          {data.navbar.map((nav: any, index: number) => (
            <div className="relative hidden md:block lg:block" key={index}>
              <div className="flex items-center">
                <a
                  href={nav.href}
                  className={`text-[1.25rem] font-semibold font-sunflower hover:no-underline hover:${textColor} ${textColor} focus:outline-none`}
                >
                  {nav.title}
                </a>
                {nav.subMenu.length > 0 && (
                  <FontAwesomeIcon
                    icon={
                      dropdown.id == String(nav.title).toLowerCase() &&
                      open === true
                        ? faChevronUp
                        : faChevronDown
                    }
                    className={`w-3 h-3 px-1  cursor-pointer ${textColor}`}
                    onClick={() => {
                      setOpen(!open);
                      dispatch(
                        toggleDropdown<any>({
                          isOpen: !open,
                          id: String(nav.title).toLowerCase(),
                        })
                      );
                    }}
                  />
                )}
              </div>
              <div className="absolute z-10 let-0 w-44 top-12">
                <DropdownMenu
                  items={nav.subMenu}
                  open={open}
                  id={String(nav.title).toLowerCase()}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="block md:hidden lg:hidden">
          <MobileNavbar
            items={data.navbar}
            auth={"isNotAuthorized"}
            textColor={textColor}
          />
        </div>
        <div className="items-center hidden space-x-6 md:flex">
          <CurrencyDropdown textColor={textColor} />
          <div className="flex items-center">
            <Cart textColor={textColor} />
          </div>
          <UserProfileDropdown auth={"isNotAuthorized"} textColor={textColor} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
