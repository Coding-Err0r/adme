import React from "react";

const Logo = () => {
  return (
    <svg
      width="223"
      height="201"
      viewBox="0 0 223 201"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-32 h-32 md:w-64 md:h-64"
    >
      <g filter="url(#filter0_d_539_5321)">
        <path
          d="M14.4107 100.42C14.4107 52.9662 53.7952 14.4107 102.486 14.4107C141.127 14.4107 173.906 38.6917 185.792 72.4318C186.111 73.3375 186.961 73.9556 187.921 73.9556C189.424 73.9556 190.494 72.4973 189.997 71.0797C177.529 35.5224 143.029 10 102.486 10C51.456 10 10 50.4345 10 100.42C10 150.405 51.456 190.84 102.486 190.84C143.029 190.84 177.529 165.317 189.997 129.76C190.494 128.343 189.424 126.884 187.921 126.884C186.961 126.884 186.111 127.502 185.792 128.408C173.906 162.148 141.127 186.429 102.486 186.429C53.7952 186.429 14.4107 147.874 14.4107 100.42Z"
          fill="white"
        />
        <path
          d="M100.42 100.42H210"
          stroke="url(#paint0_linear_539_5321)"
          stroke-width="5"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_539_5321"
          x="0"
          y="0"
          width="222.5"
          height="200.84"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_539_5321"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_539_5321"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_539_5321"
          x1="100.42"
          y1="100.931"
          x2="208.535"
          y2="100.931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7C6FF9" />
          <stop offset="1" stop-color="#6FEFFC" stop-opacity="0.99" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
