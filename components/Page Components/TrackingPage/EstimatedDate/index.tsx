import React from 'react'

const EstimatedDate = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center w-64 text-gray-600">
        <div className="relative flex flex-col items-center space-y-1 text-xs z-5 ">
          <span className="text-green-500">Order Confirmed</span>
          <div className="w-4 h-4 bg-green-500 rounded-full" />
          <span>Wed, 1 lth Jan</span>
        </div>
        <hr className="flex-grow md:border-t-[3px] border-gray-300 -mx-12 border-t-[1px]" />
        <div className="flex flex-col items-center space-y-1 text-xs">
          <span className="text-gray-300">Order Confirmed</span>
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
          <span>Wed, 1 lth Jan</span>
        </div>
      </div>
    </div>
  );
}

export default EstimatedDate
