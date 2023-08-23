"use client";

import CheckGreen from "@/components/Global Components/SVGs/CheckGreen";
import { handlePaymentMethod } from "@/redux/PaymentMethodSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
interface Props {
  title: string;
  image: string;
  index: number;
}
const PaymentMethodCard = ({ title, image, index }: Props) => {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state: any) => state.paymentMethod);
  return (
    <button
      className="relative flex flex-col items-center justify-center w-32 h-32 bg-zinc-800 rounded-xl"
      onClick={() => {
        dispatch(handlePaymentMethod<any>({ id: index }));
      }}
    >
      <div className="absolute right-2 top-2">
        {paymentMethod.id === index && <CheckGreen />}
      </div>

      <img src={image} className="object-cover w-12 h-12 mt-2" />

      <span className="text-[0.625rem] text-white ">{title}</span>
    </button>
  );
};

export default PaymentMethodCard;
