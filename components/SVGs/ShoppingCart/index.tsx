import React from "react";
type Props = {
  value: number;
};
const ShoppingCart = ({ value }: Props) => {
  return (
    <div className="flex">
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-8 h-8 text-white"
      >
        <rect width="36" height="36" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_345_398" transform="scale(0.015625)" />
          </pattern>
          <image
            id="image0_345_398"
            width="64"
            height="64"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
      {value && (
        <div className="absolute w-5 h-5 ml-5 text-xs text-center text-white bg-red-500 border-2 border-white rounded-full text-bold ">
          {value}
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
