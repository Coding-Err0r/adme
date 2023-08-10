"use client";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter } from "@/redux/FilterSlice";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  items: string[];
}

const ProductNavbarLeft = ({ items }: Props) => {
  const dispatch = useDispatch();
  const filter = useSelector((state: any) => state.filter);
  return (
    <div className="flex-col hidden space-y-8 lg:block md:hidden">
      <div className="flex flex-col items-start space-y-5">
        <h3 className="text-3xl font-medium">Search</h3>
        <div className="mt-3 group">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute mt-3 ml-3 group-focus-within:hidden"
          />
          <input
            type="text"
            placeholder="Search here"
            className="py-2 text-xs text-center border-2 border-gray-500 rounded-lg w-60"
          />
        </div>
      </div>
      <div className="flex flex-col items-start space-y-5">
        <h3 className="text-3xl font-medium">Categories</h3>
        {items.map((button: string, index: number) => (
          <button
            className={`px-4 py-2 text-lg font-medium text-white rounded-lg  ${
              filter.id === index
                ? "bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500"
                : "bg-zinc-800"
            }`}
            onClick={() => {
              dispatch(handleFilter<any>({ id: index }));
            }}
            key={index}
          >
            {button.length > 12 ? `${button.slice(0, 12)}...` : button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductNavbarLeft;
