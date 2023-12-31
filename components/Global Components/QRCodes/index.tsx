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
    <section className="w-full ">
      <div className="flex flex-col items-center w-full py-12">
        <div className="w-full px-8 lg:max-w-screen-xl md:max-w-screen-md">
          <div className="flex flex-col items-start">
            <h1 className="py-6 text-3xl font-bold text-left text-gray-800 lg:text-5xl md:text-4xl">
              Next genaration QR codes
            </h1>
            <p className="max-w-sm text-sm text-justify text-gray-500 lg:max-w-3xl lg:text-2xl md:text-xl md:max-w-xl">
              We were not impressed with the standard QR Code, so we added some
              color, shape and a logo to the mix. Fully customize your QR Code
              to match your branding and steel the show. Switch to digital
              business cards now.
            </p>
          </div>
          <div className="grid grid-rows-2 py-12 lg:justify-between lg:flex gap-y-6 ">
            <div className="flex flex-col items-center space-y-6 md:items-start">
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
                <div className="relative flex items-center justify-center w-full md:h-[18rem] rounded-xl overflow-hidden">
                  <Image
                    src={images.serviceBG}
                    alt=""
                    width={2000}
                    height={2000}
                    className="relative z-0 w-full h-full"
                  />
                  <Image
                    src={selectedQR.qrImage}
                    alt=""
                    width={2000}
                    height={2000}
                    className="absolute z-10 p-4 w-36 h-36 md:w-52 md:h-52"
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
