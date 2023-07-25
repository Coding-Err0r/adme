"use client";
import React from "react";

import ProductSlider from "@/components/ProductSlider";
import ServiceInfo from "@/components/ServiceInfo";
import ProductDetails from "@/components/ProductDetails";
import RelatedProducts from "@/components/RelatedProducts";
import Layout from "@/components/Layout";

const Product = () => {
  return (
    <Layout>
      <section className="w-full h-full bg-zinc-100">
        <div className="flex flex-col items-center w-full py-24">
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
    </Layout>
  );
};

export default Product;
