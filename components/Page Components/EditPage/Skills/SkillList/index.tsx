import React from "react";

interface Props {
  title: string;
  percentage: number;
}
const SkillList = ({ title, percentage }: Props) => {
  return (
    <div className="w-full text-[18px] font-light text-black bg-white font-sunflower ">
      <div className="px-6 py-4 rounded-lg hover:bg-[#eceafe] lg:px-14 group md:px-10">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <p className="mt-2 font-bold">{title}</p>
            <p className="block text-[18px] group-hover:hidden ">
              {percentage}%
            </p>
            <div className="items-center hidden space-x-3 group-hover:block w-[6rem] mt-1">
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

export default SkillList;
