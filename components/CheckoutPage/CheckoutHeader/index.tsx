import React from 'react'

const CheckoutHeader = () => {
  return (
    <div className="flex items-center justify-center w-full px-6 py-4 md:px-2 md:w-1/2">
      <div className="flex items-center">
        <input
          id="cart"
          type="radio"
          name="countries"
          value="USA"
          className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
          aria-labelledby="cart"
          aria-describedby="cart"
          disabled
        />
        <label
          htmlFor="cart"
          className="block ml-1 text-xs font-normal text-gray-900 md:text-lg"
        >
          Cart
        </label>
      </div>
      <hr className="flex-grow mx-2 border-t border-gray-400" />
      <div className="flex items-center">
        <input
          id="information"
          type="radio"
          name="countries"
          value="USA"
          className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
          aria-labelledby="information"
          aria-describedby="information"
          checked
        />
        <label
          htmlFor="information"
          className="block ml-1 text-xs font-normal text-gray-900 md:text-lg"
        >
          Information
        </label>
      </div>
      <hr className="flex-grow mx-2 border-t border-gray-400" />
      <div className="flex items-center">
        <input
          id="information"
          type="radio"
          name="countries"
          value="USA"
          className="w-3 h-3 border-gray-300 md:h-4 md:w-4 focus:ring-2 focus:ring-gray-300 accent-gray-700"
          aria-labelledby="information"
          aria-describedby="information"
          disabled
        />
        <label
          htmlFor="information"
          className="block ml-1 text-xs font-normal text-gray-900 md:text-lg"
        >
          Finish
        </label>
      </div>
    </div>
  );
}

export default CheckoutHeader
