import React from "react";

import data from "@/config/data";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div className="flex-col items-center hidden py-4 space-y-8 lg:items-start md:block">
      <h1 className="hidden text-4xl font-bold lg:block md:hidden">
        Related products
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.relatedProducts.map((relatedProduct: any, index: number) => (
          <ProductCard
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
