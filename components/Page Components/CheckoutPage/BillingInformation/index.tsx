import React from 'react'
import PaymentMethodCard from '../PaymentMethodCard';
import data from '@/config/data';

const BillingInformation = () => {
  return (
    <div className="flex flex-col w-full space-y-8 text-gray-800 lg:col-span-3 ">
      <h1 className="text-lg font-bold md:text-3xl">Complete your order</h1>
      <div className="flex flex-col space-y-4">
        <p className="text-[#525FE1] font-bold md:text-2xl text-base">
          Personal Details
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">First Name</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Enter your first name "
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">Last Name</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">Email</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">Phone Number</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-[#525FE1] font-bold md:text-2xl text-base">
          Payment Method
        </p>
        <div className="flex justify-center w-full md:justify-start">
          <div className="grid grid-cols-2 gap-4 w-fit md:grid-cols-4">
            {data.payments.map((payment: any, index: number) => (
              <PaymentMethodCard
                title={payment.title}
                image={payment.image}
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="text-[#525FE1] font-bold md:text-2xl text-base">
          Shipping Address
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col col-span-2 space-y-2">
            <span className="text-xs md:text-base">Address line 1</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Your Complete address..."
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">City</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Your city "
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">State</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Your State"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">Landmark</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="Any landmark (famous place or mall)"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs md:text-base">Postal code</span>
            <input
              type="text"
              className="w-full h-10 pl-2 text-xs"
              placeholder="ZIP Code (231216)"
            />
          </div>
          <button className="w-full h-10 mt-4 text-xs border-2 border-gray-500 rounded-lg md:text-sm">
            Cancel
          </button>
          <button className="w-full h-10 mt-4 text-xs text-white rounded-lg md:text-sm bg-gradient-to-l from-cyan-300 via-sky-600 to-indigo-500">
            Complete Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillingInformation
