import data from "@/config/data";
import images from "@/config/images";
import Image from "next/image";
import React, { useState } from "react";
import Slideup from "../Slideup";

const QRCode = () => {
  const [selectedQR, setSelectedQR] = useState<any>({
    selected: true,
    qrImage: data.qrCodes[0].image,
    qrTitle: data.qrCodes[0].title,
  });

  return (
    <section className="w-full">
      <div className="flex flex-col items-center w-full px-4 py-12">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col items-start ">
            <h1 className="py-12 text-3xl font-bold text-left text-gray-800 lg:text-6xl md:text-5xl">
              Next genaration QR codes
            </h1>
            <p className="max-w-sm text-sm text-justify text-gray-500 lg:max-w-3xl lg:text-xl md:text-lg md:max-w-xl">
              We were not impressed with the standard QR Code, so we added some
              color, shape and a logo to the mix. Fully customize your QR Code
              to match your branding and steel the show. Switch to digital
              business cards now.
            </p>
          </div>
          <div className="grid grid-rows-2 py-12 md:justify-between md:flex gap-y-6 ">
            <div className="flex flex-col space-y-6 ">
              {data.qrCodes.map((item: any, index: number) => (
                <div
                  className="relative z-10 flex items-center cursor-pointer"
                  key={index}
                  onClick={() =>
                    setSelectedQR({
                      selected: true,
                      qrImage: item.image,
                      qrTitle: item.title,
                    })
                  }
                >
                  <div
                    className={`w-20 h-20 bg-white  shadow-lg rounded-xl ${
                      selectedQR.selected &&
                      (selectedQR.qrTitle === item.title
                        ? "border-2 border-blue-700"
                        : null)
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      height={2000}
                      width={2000}
                      className="object-cover p-2"
                    />
                  </div>
                  <p
                    className={`relative z-10 px-6 text-lg font-bold  cursor-pointer lg:text-4xl hover:text-black md:text-2xl ${
                      selectedQR.selected &&
                      (selectedQR.qrTitle === item.title
                        ? "text-blue-700 hover:text-blue-700"
                        : "text-gray-500")
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <Slideup
              duration={1}
              component={
                <div className="flex items-center justify-center bg-white shadow-xl md:w-[30rem] rounded-2xl w-full md:h-[17rem]">
                  <Image
                    src={selectedQR.qrImage}
                    alt=""
                    width={2000}
                    height={2000}
                    className="p-4 w-52 h-52"
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCode;
