import React from "react";
import CubeIcon from "../../SVGIcons/CubeIcon";
interface Props {
  company: string;
  position: string;
  year: string;
  description: string;
}
const WorkExperienceList = ({
  company,
  position,
  year,
  description,
}: Props) => {
  return (
    <div className="w-full text-[18px] font-light text-black bg-white font-sunflower ">
      <div className="px-6 py-10 rounded-lg hover:bg-cyan-100 md:px-10 lg:px-14 group">
        <div className="flex items-start space-x-3">
          <div>
            <CubeIcon />
          </div>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between ">
              <p className="font-bold">{company}</p>
              <div className="items-center hidden space-x-3 group-hover:block">
                <button className="text-blue-500 hover:text-blue-800">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-800">
                  Delete
                </button>
              </div>
            </div>
            <p>{position}</p>
            <p>{year}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceList;
