"use client";
import { Card, Elevation } from "@blueprintjs/core";

import Required from "../Required";
import WorkIcon from "../SVGIcons/WorkIcon";
import WorkExperienceList from "./WorkExperienceList";
import WorkExperienceDrawer from "./WorkExperienceDrawer";

const workExperiences = [
  {
    company: "Cookietech Limited Bangladesh",
    position: "Project Manager",
    year: "2023-Present",
    description: `Managed more than 5 projects in agile method. Lead 5+ team members and work collaboratly.
I have strong understanding of team work and leadership. I have successfully released more than 10 software’s that has increased the revenue of our company.`,
  },
  {
    company: "Cookietech Limited Bangladesh",
    position: "Project Manager",
    year: "2023-Present",
    description: `Managed more than 5 projects in agile method. Lead 5+ team members and work collaboratly.
I have strong understanding of team work and leadership. I have successfully released more than 10 software’s that has increased the revenue of our company.`,
  },
  {
    company: "Cookietech Limited Bangladesh",
    position: "Project Manager",
    year: "2023-Present",
    description: `Managed more than 5 projects in agile method. Lead 5+ team members and work collaboratly.
I have strong understanding of team work and leadership. I have successfully released more than 10 software’s that has increased the revenue of our company.`,
  },
];

const WorkExperience = () => {
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center w-full">
        <div className="xl:w-[90%]  xl:max-w-7xl xl:py-10 xl:px-12 md:p-4 w-full p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <WorkIcon />
              <h1 className="py-4 text-lg font-= text-left text-gray-800 lg:text-4xl md:text-3xl">
                Work Experience
              </h1>
            </div>
            <WorkExperienceDrawer />
          </div>
          <Card elevation={Elevation.ONE} className="rounded-lg">
            <div className="flex flex-col space-y-6">
              {workExperiences.length > 0 ? (
                workExperiences.map((work: any, index: number) => (
                  <WorkExperienceList
                    key={index}
                    company={work.company}
                    position={work.position}
                    year={work.year}
                    description={work.description}
                  />
                ))
              ) : (
                <Required
                  message={"You haven’t added any work experience yet"}
                />
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
          <ul className="space-y-3 text-[18px]list-disc text-[18px] lg:ml-4 lg:py-6">
            <li>
              Upload a high quality profile picture where your face is visible
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
