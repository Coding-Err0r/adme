import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const TrackingHeader = () => {
  return (
    <div className="flex flex-col items-start w-full space-y-4">
      <div className="flex items-center justify-between w-full">
        <h4 className="text-xs font-semibold md:text-2xl">
          Order ID: 3354654654526
        </h4>
        <button className="px-3 py-2 text-white rounded-lg bg-zinc-800 hover:bg-zinc-600">
          Contact us
        </button>
      </div>
      <div className="flex items-center w-full space-x-2">
        <p className="md:text-xs text-[0.6rem]">Order date:</p>
        <p className="-mt-[0.02rem] font-semibold md:text-sm text-[0.6rem]">
          Feb 16, 2022
        </p>
        <div className="h-4 border-r-[1px] border-gray-400" />
        <FontAwesomeIcon icon={faTruck} className="text-green-500" />
        <span className="text-[0.6rem] font-semibold text-green-500 md:text-sm">
          Estimated delivery: May 16, 2022
        </span>
      </div>
    </div>
  );
}

export default TrackingHeader
