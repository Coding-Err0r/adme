"use client";
import { Card, Elevation } from "@blueprintjs/core";

import Required from "../Required";
import WorkIcon from "../SVGIcons/WorkIcon";
import WorkExperienceList from "./WorkExperienceList";
import WorkExperienceDrawer from "./WorkExperienceDrawer";
import TipsMobile from "../Tips/TipMobile";
import TipsDesktop from "../Tips/TipsDesktop";

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
      <div className="flex justify-center">
        <div className="w-full  xl:max-w-[118.75rem] xl:py-10 xl:px-12 md:p-4  p-2">
          <div className="grid grid-cols-9 gap-6">
            <div className="flex flex-col col-span-9 xl:col-span-6">
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
                <div className="flex flex-col py-8 space-y-6">
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

export default WorkExperience;
