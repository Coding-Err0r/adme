import React from "react";

interface Props {
  university: string;
  degree: string;
  year: string;
}
const EducationList = ({ university, degree, year }: Props) => {
  return (
    <div className="w-full text-[18px] font-light text-black bg-white font-sunflower ">
      <div className="grid grid-rows-2 p-6 rounded-lg md:py-10 md:justify-between md:items-center md:flex hover:bg-cyan-100 md:px-10 lg:px-14 group">
        <div className="flex flex-col space-y-3">
          <p className="font-bold">{university}</p>
          <p>{degree}</p>
        </div>
        <div className="py-6 md:py-0">
          <p className="block text-[18px] group-hover:hidden ">{year}</p>
          <div className="items-center hidden space-x-3 group-hover:block">
            <button className="text-blue-500 hover:text-blue-800">Edit</button>
            <button className="text-red-500 hover:text-red-800">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationList;
