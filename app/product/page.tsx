"use client";
import React from "react";

import data from "@/config/data";
import ProductSlider from "@/components/ProductSlider";
import ServiceInfo from "@/components/ServiceInfo";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";

const Product = () => {
  return (
    <section className="w-full h-full bg-zinc-100">
      <div className="flex flex-col items-center w-full py-36">
        <div className=" w-[80%] max-w-7xl flex flex-col items-center">
          <div className="grid justify-center grid-rows-2 lg:space-x-6 lg:flex">
            <div className="flex flex-col items-center space-y-6">
              <ProductSlider />
              <ServiceInfo />
            </div>
            <ProductDetails />
          </div>
          <RelatedProducts />
        </div>
      </div>
    </section>
  );
};

export default Product;
