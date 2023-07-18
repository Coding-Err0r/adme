import data from "@/config/data";
import images from "@/config/images";
import {
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import ShoppingCart from "../SVGs/ShoppingCart";
import MobileNavbar from "./Mobile";
import Cart from "../Cart";

const Navbar = () => {
  return (
    <section className="fixed z-30 w-full">
      <div className="flex justify-between md:p-4 bg-zinc-950/90 backdrop-blur-md">
        <div className="flex items-center px-2 md:space-x-10 lg:space-x-14 md:px-12">
          <Link href="/">
            <img
              src={images.logoTwo}
              alt=""
              className="hidden h-6 lg:h-10 md:h-8 md:block lg:block"
            />
          </Link>
          <div className="block md:hidden lg:hidden">
            <MobileNavbar links={data.navbar} />
          </div>
          {data.navbar.map((nav: string, index: number) => (
            <Link
              href={`/${nav.toLowerCase()}`}
              key={index}
              className="hidden text-xl font-medium text-white md:block lg:block"
            >
              {nav}
            </Link>
          ))}
        </div>
        <div className="flex items-center px-5 space-x-4 md:px-12 md:space-x-6 lg:space-x-10">
          <div className="flex items-center">
            <img
              src={images.person}
              alt=""
              className="w-8 h-8 rounded-full md:h-10 md:w-10"
            />
            <FontAwesomeIcon
              icon={faChevronDown}
              className="w-3 h-3 px-2 text-white"
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
