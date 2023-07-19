import images from "@/config/images";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductDetails = () => {
  return (
    <section className="p-6 text-black bg-white shadow-lg rounded-xl">
      <div className="flex flex-col items-center max-w-sm px-8 space-y-8 md:px-4 md:max-w-lg md:items-start">
        <h1 className="text-lg font-bold text-gray-700 lg:text-3xl md:text-2xl">
          Mandana Gold - Metal Business Card | QR Support | NFC-enabled |
          Premium Quality Metal
        </h1>
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3">
            <p className="text-2xl font-bold text-blue-600 md:text-3xl">
              ৳2399
            </p>
            <p className="text-2xl font-semibold line-through">৳3500</p>
          </div>
          <p className="text-lg text-blue-600 md:text-xl">YOU SAVE UP TO 40%</p>
        </div>
        <div className="grid grid-rows-2 gap-2 md:space-x-4 md:flex">
          <button className="flex items-center px-6 py-3 text-lg font-bold text-white rounded-full md:text-xl bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400">
            Add To Cart
            <img src={images.cart} alt="" className="w-7 h-7" />
          </button>
          <button className="px-10 py-3 text-lg font-bold text-white rounded-full md:text-xl bg-gradient-to-br from-green-700 via-emerald-500 to-emerald-400">
            Buy Now
          </button>
        </div>
        <p className="text-sm font-semibold text-black md:text-lg">
          Order now, your card will be delivered maximum within 5 working days.
        </p>
        <div className="grid w-full grid-rows-2 text-lg font-medium md:text-2xl gap-y-2">
          <div className="flex items-center py-1 space-x-1 border-b-2 border-gray-300">
            <FontAwesomeIcon icon={faTag} />
            <p>Offers Available</p>
          </div>
          <p className="border-b-2 border-gray-300 ">Buy 4 And Get 1 Free</p>
        </div>
        <p className="text-sm font-medium text-gray-800 md:text-lg">
          Beautiful Matte black color with Silver Printing on Black Material.
          Built-in-High-frequency NFC Chip & QR code embedded with waterproof.
          It is made of premium plastic (PVC). Product Dimension:
          85.5 X 54 X 1.00 mm.
        </p>
        <div className="flex flex-col w-64 text-base md:text-lg md:w-96">
          <p className="py-2 text-lg font-bold md:text-2xl">Details</p>
          <table>
            <tr>
              <td className="text-blue-600">Material</td>
              <td className="pl-5 md:pl-20">Metal</td>
            </tr>
            <tr>
              <td className="text-blue-600">Background Color</td>
              <td className="pl-5 md:pl-20">Black Color</td>
            </tr>
            <tr>
              <td className="text-blue-600">Print</td>
              <td className="pl-5 md:pl-20">Black</td>
            </tr>
            <tr>
              <td className="text-blue-600">Dimension</td>
              <td className="pl-5 md:pl-20">85.60 X 53.98 Mm</td>
            </tr>
            <tr>
              <td className="text-blue-600">Weight</td>
              <td className="pl-5 md:pl-20">21 Grams</td>
            </tr>
            <tr>
              <td className="text-blue-600">Card Customized</td>
              <td className="pl-5 md:pl-20">Semi Customized</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
