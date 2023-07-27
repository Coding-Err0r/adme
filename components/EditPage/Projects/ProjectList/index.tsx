"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import FolderAtIcon from "../../SVGIcons/FolderAtIcon";
interface Props {
  title: string;
  department: string;
  toolsUsed: string;
  description: string;
  images: string[];
}
const ProjectList = ({
  title,
  department,
  toolsUsed,
  description,
  images,
}: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  return (
    <div className="w-full text-[18px] font-light text-black bg-white font-sunflower ">
      <div className="px-6 py-10 rounded-lg hover:bg-cyan-100 md:px-10 lg:px-14 group">
        <div className="flex items-start space-x-3">
          <div>
            <FolderAtIcon />
          </div>
          <div className="grid md:space-x-2 md:flex">
            <div className="flex flex-col flex-1 space-y-5">
              <div className="flex justify-between ">
                <p className="font-bold">{title}</p>
              </div>
              <p>{department}</p>
              <p>{toolsUsed} projects</p>

              <p className="w-full ">
                {showMore
                  ? description
                  : `${description.substring(0, 250)}... `}
              </p>
              <div
                onClick={() => setShowMore(!showMore)}
                className={`text-blue-600 cursor-pointer w-full `}
              >
                {showMore === true ? "Show Less" : "Show More"}
              </div>
              <div className="flex space-x-6 ">
                {images
                  .filter((item, index) => index < (isMobile === true ? 1 : 4))
                  .map((image: string, index: number) => (
                    <div key={index} className="w-[140px] h-[100px] rounded-lg">
                      <img
                        src={image}
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="items-center hidden space-x-3 group-hover:block ml-[60%] md:ml-0 md:py-0 py-4">
              <button className="text-blue-500 hover:text-blue-800">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-800">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
