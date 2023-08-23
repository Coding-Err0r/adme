"use client";

import React, { useEffect, useState } from "react";


import Banner from "./Banner";
import Offer from "./Offer";
import ProductNavbarTop from "./ProductNavbarTop";
import ProductNavbarLeft from "./ProductNavbarLeft";
import Products from "./Products";
import CustomerService from "@/components/Global Components/CustomerService";

const buttons = [
  "All products",
  "Corporate",
  "Premium",
  "Elegent",
  "All products",
  "Some big text in this field",
  "All products",
];

const ProductsPage = () => {
  return (
    <section className="w-full font-poppins">
      <div className="flex flex-col items-center justify-center w-full py-12">
        <Offer />
        <Banner />
        <div className="w-full py-8 lg:py-16 lg:max-w-screen-xl">
          <ProductNavbarTop items={buttons} />
          <div className="flex justify-center lg:space-x-10">
            <ProductNavbarLeft items={buttons} />
            <Products />
          </div>
          <CustomerService />
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
