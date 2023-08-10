import Dropdown from "@/components/Dropdown";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  items: string[];
}
const ProductNavbarTop = ({items}:Props) => {
  return (
    <div className="grid items-center grid-rows-2 gap-4 px-8 pb-8 md:justify-between md:flex lg:hidden">
      <div className="order-last md:order-first">
        <Dropdown items={items} header={"All Products"} />
      </div>
      <div className="mt-3 group">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="absolute mt-3 ml-5 group-focus-within:hidden"
        />
        <input
          type="text"
          placeholder="Search here"
          className="w-full py-2 text-center border-2 border-gray-500 rounded-lg md:w-60 "
        />
      </div>
    </div>
  );
};

export default ProductNavbarTop;
