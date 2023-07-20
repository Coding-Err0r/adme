import data from "@/config/data";
import images from "@/config/images";
import {
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ShoppingCart from "../SVGs/ShoppingCart";
import MobileNavbar from "./Mobile";
import Cart from "../Cart";

const Navbar = () => {
  return (
    <section className="fixed z-30 w-full">
      <div className="flex justify-between md:p-1 bg-zinc-950/90 backdrop-blur-md">
        <div className="flex items-center px-2 md:space-x-10 lg:space-x-14 md:px-12">
          <a href="/">
            <img
              src={images.logoTwo}
              alt=""
              className="hidden h-6 mt-2 lg:h-10 md:h-8 md:block lg:block"
            />
          </a>
          <div className="block md:hidden lg:hidden">
            <MobileNavbar links={data.navbar} />
          </div>
          {data.navbar.map((nav: string, index: number) => (
            <a
              href={`/${nav.toLowerCase()}`}
              key={index}
              className="hidden text-xl font-medium text-white md:block lg:block"
            >
              {nav}
            </a>
          ))}
        </div>
        <div className="flex items-center px-5 space-x-2 md:px-12 md:space-x-2 lg:space-x-4">
          <div className="flex items-center">
            <a href="https://drake-five.vercel.app/">
              <img
                src={images.person}
                alt=""
                className="w-8 h-8 rounded-full md:h-8 md:w-8"
              />
            </a>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-2 h-2 px-1 text-white"
            />
          </div>
          <div className="flex items-center">
            <Cart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
