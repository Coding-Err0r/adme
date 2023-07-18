import React from "react";
import RelatedProductCard from "./RelatedProductCard";
import data from "@/config/data";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center py-12 space-y-8 lg:items-start">
      <h1 className="text-4xl font-bold ">Related products</h1>
      <div className="grid grid-cols-1 gap-6 lg:space-x-6 lg:flex md:grid-cols-2">
        {data.relatedProducts.map((relatedProduct: any, index: number) => (
          <RelatedProductCard
            title={relatedProduct.title}
            image={relatedProduct.image}
            price={relatedProduct.price}
            discountedPrice={relatedProduct.discountedPrice}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
