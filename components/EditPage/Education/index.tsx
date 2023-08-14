"use client";
import { Card, Elevation } from "@blueprintjs/core";
import EducationIcon from "../SVGIcons/EducationIcon";
import EducationList from "./EducationList";
import Required from "../Required";
import EducationDrawer from "./EducationDrawer";

import TipsMobile from "../Tips/TipMobile";
import TipsDesktop from "../Tips/TipsDesktop";

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
      <div className="flex justify-center">
        <div className="w-full  xl:max-w-[118.75rem] xl:py-10 xl:px-12 md:p-4  p-2">
          <div className="grid grid-cols-9 gap-6">
            <div className="flex flex-col col-span-9 xl:col-span-6">
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
                <div className="flex flex-col py-8 space-y-6">
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
                <TipsMobile
                  text={`To make your profile look professional please follow the below
            guideline`}
                  list={[
                    `Upload a high quality profile picture where your face is visible`,
                  ]}
                />
              </Card>
            </div>
            <TipsDesktop
              text={`To make your profile look professional please follow the below
            guideline`}
              list={[
                `Upload a high quality profile picture where your face is visible`,
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
