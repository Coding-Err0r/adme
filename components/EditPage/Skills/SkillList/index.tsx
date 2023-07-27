import React from "react";

interface Props {
  title: string;
  percentage: number;
}
const SkillList = ({ title, percentage }: Props) => {
  return (
    <div className="w-full text-[18px] font-light text-black bg-white font-sunflower ">
      <div className="px-6 py-4 rounded-lg hover:bg-cyan-100 lg:px-14 group md:px-10">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <p className="mt-2 font-bold">{title}</p>
            <p>{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
