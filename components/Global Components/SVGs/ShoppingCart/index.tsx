import React from "react";
type Props = {
  value: number;
  textColor: string;
};
const ShoppingCart = ({ value, textColor }: Props) => {
  return (
    <div className="flex">
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={`relative w-6 h-6 md:h-8 md:w-8 `}
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
            xlinkHref={`${
              textColor == "text-white"
                ? "data:image/png;base64,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"
                : "data:image/png;base64,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"
            }`}
          />
        </defs>
      </svg>

      {value && (
        <div className="absolute w-[0.8rem] h-[0.8rem] -right-1 text-[0.5rem]  text-white bg-red-500 border-[1px] border-white rounded-full text-bold flex justify-center items-center md:w-4 md:h-4 md:text-[0.625rem]">
          <p className="-ml-[1px] md:-ml-0">{value}</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
