"use client";
import { Card, Elevation } from "@blueprintjs/core";
import AtomIcon from "../SVGIcons/AtomIcon";
import Required from "../Required";
import SkillList from "./SkillList";
import SkillDrawer from "./SkillDrawer";
import TipsMobile from "../Tips/TipMobile";
import TipsDesktop from "../Tips/TipsDesktop";

const skills = [
  {
    title: "PHP",
    percentage: "85",
  },
  {
    title: "Javascript",
    percentage: "90",
  },
  {
    title: "React",
    percentage: "78",
  },
  ,
  {
    title: "Wordpress",
    percentage: "23",
  },
  {
    title: "Figma",
    percentage: "50",
  },
  {
    title: "Java",
    percentage: "98",
  },
  {
    title: "Pyhton",
    percentage: "70",
  },
  {
    title: "Laravel",
    percentage: "40",
  },
  {
    title: "Html",
    percentage: "76",
  },
  {
    title: "Css",
    percentage: "23",
  },
];
const Skill = () => {
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center">
        <div className="w-full  xl:max-w-[118.75rem] xl:py-10 xl:px-12 md:p-4  p-2">
          <div className="grid grid-cols-9 gap-6">
            <div className="flex flex-col col-span-9 xl:col-span-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <AtomIcon />
                  <h1 className="py-4 text-lg font-= text-left text-gray-800 lg:text-4xl md:text-3xl">
                    Skills
                  </h1>
                </div>
                <SkillDrawer />
              </div>
              <Card elevation={Elevation.ONE} className="rounded-lg">
                <div className="grid grid-cols-1 py-8 md:grid-cols-2">
                  {skills.length > 0 ? (
                    skills.map((skill: any, index: number) => (
                      <SkillList
                        key={index}
                        title={skill.title}
                        percentage={skill.percentage}
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

export default Skill;
