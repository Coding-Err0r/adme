import { faExclamation, faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Invoice = () => {
  return (
    <div className="grid items-start gap-6 text-black md:grid-cols-2">
      <div className="flex flex-col items-start space-y-1">
        <h3 className="text-lg font-medium">Need Help</h3>
        <a
          className="flex items-center space-x-1 text-gray-500 no-underline"
          href="/term"
        >
          <FontAwesomeIcon
            icon={faExclamation}
            className="w-2 h-2 p-[2px] border-2 border-gray-500 rounded-full"
          />
          <p>Terms and condition</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-500 -rotate-45 "
          />
        </a>
        <a
          className="flex items-center space-x-1 text-gray-500 no-underline"
          href="/policy"
        >
          <FontAwesomeIcon icon={faTruck} className="text-gray-500 " />
          <p>Policy</p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-gray-500 -rotate-45 "
          />
        </a>
      </div>
      <div className="flex flex-col items-start space-y-2 ">
        <h3 className="text-lg font-medium">Order Summary</h3>
        <div className="flex items-center justify-between w-full text-gray-700">
          <span>Discount</span>
          <p>৳5554.00</p>
        </div>
        <div className="flex items-center justify-between w-full text-gray-700">
          <span>Discount</span>
          <p>(20%) - ৳1109.40</p>
        </div>
        <div className="flex items-center justify-between w-full text-gray-700">
          <span>Delivery</span>
          <p>৳0.00</p>
        </div>
        <div className="flex items-center justify-between w-full text-gray-700">
          <span>Tax</span>
          <p>+৳221.88</p>
        </div>
        <div className="flex items-center justify-between w-full text-gray-700">
          <span>Tax</span>
          <p>+৳221.88</p>
        </div>
        <div className="border-b-[2px] border-gray-400 border-dotted w-full" />
        <div className="flex items-center justify-between w-full text-gray-700">
          <span>Total</span>
          <p className="font-bold text-gray-800">৳0.00</p>
        </div>
      </div>
    </div>
  );
}

export default Invoice
