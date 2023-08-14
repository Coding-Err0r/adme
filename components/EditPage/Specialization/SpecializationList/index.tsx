import React from "react";

import AppIcon from "../../SVGIcons/AppIcon";
interface Props {
  title: string;
  department: string;
  numberOfProjects: string;
  description: string;
}
const SpecializationList = ({
  title,
  department,
  numberOfProjects,
  description,
}: Props) => {
  return (
    <div className="w-full text-[18px] font-light text-black bg-white font-sunflower ">
      <div className="px-6 py-10 rounded-lg hover:bg-[#eceafe] md:px-10 lg:px-14 group">
        <div className="flex items-start space-x-3">
          <div>
            <AppIcon />
          </div>
          <div className="grid md:space-x-2 md:flex">
            <div className="flex flex-col flex-1 space-y-3">
              <div className="flex justify-between ">
                <p className="font-bold">{title}</p>
              </div>
              <p>{department}</p>
              <p>{numberOfProjects} projects</p>
              <p>{description}</p>
            </div>
            <div className="items-center hidden space-x-3 group-hover:block ml-[60%] md:ml-0 md:py-0 py-4 w-[6rem] h-[2rem]">
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

export default SpecializationList;
