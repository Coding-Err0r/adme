import React from "react";


import ProductDetails from "./ProductDetails";
import ProductSlider from "./ProductSlider";
import RelatedProducts from "./RelatedProducts";
import ServiceInfo from "./ServiceInfo";
import CustomerService from "@/components/Global Components/CustomerService";

const ProductPage = () => {
  return (
    <section className="w-full h-full ">
      <div className="fixed inset-0 h-full w-full bg-[#f2f2f2] bg-[radial-gradient(#bbbdbd_1px,transparent_1px)] [background-size:16px_16px] -z-20" />
      <div className="flex flex-col items-center w-full py-24">
        <div className="flex flex-col items-center w-full md:max-w-screen-xl">
          <div className="grid justify-center grid-rows-1 gap-6 xl:space-x-10 xl:flex">
            <div className="flex flex-col items-center space-y-6">
              <ProductSlider />
              <ServiceInfo />
            </div>
            <ProductDetails />
          </div>
          <RelatedProducts />
          <CustomerService />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
