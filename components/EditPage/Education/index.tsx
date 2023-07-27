"use client";
import { Card, Elevation } from "@blueprintjs/core";
import EducationIcon from "../SVGIcons/EducationIcon";
import EducationList from "./EducationList";
import Required from "../Required";
import EducationDrawer from "./EducationDrawer";

const educations = [
  {
    university: "Khulna University of Engineering and Technology",
    degree: "Computer science and Egnineering",
    year: "2016-2020",
  },
  {
    university: "Khulna University of Engineering and Technology",
    degree: "Computer science and Egnineering",
    year: "2016-2020",
  },
  {
    university: "Khulna University of Engineering and Technology",
    degree: "Computer science and Egnineering",
    year: "2016-2020",
  },
];
const Education = () => {
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center w-full">
        <div className="xl:w-[90%]  xl:max-w-7xl xl:py-10 xl:px-12 md:p-4 w-full p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <EducationIcon />
              <h1 className="py-4 text-lg font-= text-left text-gray-800 lg:text-4xl md:text-3xl">
                Education
              </h1>
            </div>
            <EducationDrawer />
          </div>
          <Card elevation={Elevation.ONE} className="rounded-lg">
            <div className="flex flex-col space-y-6">
              {educations.length > 0 ? (
                educations.map((education: any, index: number) => (
                  <EducationList
                    university={education.university}
                    degree={education.degree}
                    key={index}
                    year={education.year}
                  />
                ))
              ) : (
                <Required message={"You haven’t added any education yet"} />
              )}
            </div>
          </Card>
        </div>
        <div className=" flex-col items-start font-light text-black font-sunflower lg:mt-[4rem] lg:px-6 lg:block md:hidden hidden">
          <h1 className="py-8 text-[24px] font-bold text-black ">Tips</h1>
          <p className="text-[18px] ">
            To make your profile look professional please follow the below
            guideline :
          </p>
          <ul className="space-y-3 text-[18px] list-disc lg:ml-4 lg:py-6">
            <li>
              Upload a high quality profile picture where your face is visible
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
