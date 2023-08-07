"use client";
import images from "@/config/images";
import React, { useEffect, useState } from "react";
import ProductCard from "../RelatedProducts/ProductCard";
import { InputGroup, Input } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter } from "@/redux/FilterSlice";
import ReactPaginate from "react-paginate";
import CustomerService from "../CustomerService";
import Dropdown from "../Dropdown";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttons = [
  "All products",
  "Corporate",
  "Premium",
  "Elegent",
  "All products",
  "Some big text in this field",
  "All products",
];

const pages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const styles = {
  width: "100%",
  marginBottom: 10,
  left: 0,
  border: "1px solid black",
};
const ProductsPage = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const dispatch = useDispatch();
  const filter = useSelector((state: any) => state.filter);
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = pages.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pages.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % pages.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <section className="w-full font-poppins">
      <div className="flex flex-col items-center justify-center w-full py-12">
        <h1 className="px-2 py-4 mt-2 text-xl font-light text-center text-gray-800 lg:py-10 lg:text-3xl md:text-2xl md:py-8">
          <strong className="text-blue-600">Up to 10 % Discount</strong>. Grab
          your card asap .
        </h1>
        <div className="w-full lg:h-[470px] md:h-[304px] h-[230px]">
          <img
            src={images.productBanner}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full py-8 lg:py-16 lg:max-w-screen-xl">
          <div className="grid items-center grid-rows-2 gap-4 px-8 pb-8 md:justify-between md:flex lg:hidden">
            <div className="order-last md:order-first">
              <Dropdown items={buttons} header={"All Products"} />
            </div>
            <div className="mt-3 group">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute mt-3 ml-5 group-focus-within:hidden"
              />
              <input
                type="text"
                placeholder="Search here"
                className="py-2 text-center border-2 border-gray-500 rounded-lg w-60 "
              />
            </div>
          </div>
          <div className="flex justify-center lg:space-x-10">
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
                {buttons.map((button: string, index: number) => (
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

            <div className="flex flex-col items-center space-y-6 md:space-y-12">
              <div className="grid items-center grid-cols-2 gap-4 p-2 md:gap-14 xl:grid-cols-3">
                {currentItems.map((item: any, index: number) => (
                  <ProductCard
                    title={
                      "Full Custom Card - Digital Business Card | NFC-enabled | QR Support | PVC base"
                    }
                    image={images.productImg}
                    price={500.0}
                    discountedPrice={899.0}
                    key={index}
                  />
                ))}
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="Prev"
                renderOnZeroPageCount={null}
                className="flex items-center px-6 py-2 space-x-3 text-sm rounded-lg md:text-lg"
                pageClassName="bg-white px-3 py-2 rounded-md text-black shadow-md md:px-4"
                pageLinkClassName="text-black"
                activeClassName="bg-zinc-800"
                activeLinkClassName="text-white"
                previousClassName="bg-white px-3 py-2 rounded-md text-black shadow-md md:px-4"
                nextClassName="bg-white px-3 py-2 rounded-md text-black shadow-md md:px-4"
                previousLinkClassName="text-black"
                nextLinkClassName="text-black"
                disabledClassName="bg-gray-200"
                disabledLinkClassName="text-gray-200"
              />
            </div>
          </div>
          <CustomerService />
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
