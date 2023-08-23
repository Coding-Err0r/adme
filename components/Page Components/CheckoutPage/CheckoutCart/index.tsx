
import CartItem from "@/components/Global Components/CartItem";
import data from "@/config/data";
import React from "react";

const CheckoutCart = () => {
  return (
    <div className="order-first w-full px-4 py-8 h-fit lg:col-span-2 rounded-xl bg-zinc-800 lg:order-none ">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2 bg-zinc-800">
          <div className="flex items-center justify-between text-base text-white">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <hr />
        </div>
        <div className="flex flex-col space-y-4 overflow-auto  max-h-[35rem] py-1">
          <CartItem
            title={data.cart[0].title}
            image={data.cart[0].image}
            price={data.cart[0].price}
            amount={data.cart[0].amount}
            id={data.cart[0].id}
          />
          <CartItem
            title={data.cart[0].title}
            image={data.cart[0].image}
            price={data.cart[0].price}
            amount={data.cart[0].amount}
            id={data.cart[0].id}
          />
        </div>
        <div className="flex flex-col py-4 space-y-1 text-base text-white border-2 rounded-md">
          <div className="flex justify-between px-4 ">
            <p>Subtotal</p>
            <span>৳4498.00</span>
          </div>
          <hr />
          <div className="flex justify-between px-4 ">
            <p>shipping</p>
            <span>inside dhaka: ৳60.00</span>
          </div>
        </div>
        <div className="px-4 py-2 text-base text-black bg-gray-100 rounded-md">
          <div className="flex items-center justify-between">
            <p>Total</p>
            <span>৳4458.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;
