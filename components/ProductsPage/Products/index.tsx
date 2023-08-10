"use client";
import ProductCard from "@/components/ProductPage/RelatedProducts/ProductCard";
import images from "@/config/images";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const pages = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const Products = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
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

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [itemOffset]);
  return (
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
  );
};

export default Products;
