"use client";
import { Card, Elevation } from "@blueprintjs/core";
import AtomIcon from "../SVGIcons/AtomIcon";
import Required from "../Required";
import SkillList from "./SkillList";
import SkillDrawer from "./SkillDrawer";
import { Button, Popover, Whisper } from "rsuite";
import BookIcon from "../SVGIcons/BookIcon";



const speaker = (
  <Popover className="w-[85%]">
    <div className="flex flex-col items-start p-4 space-y-2 md:p-8">
      <h1 className="text-[18px] font-bold text-black ">Tips</h1>
      <p className="text-[15px] ">
        To make your profile look professional please follow the below guideline
        :
      </p>
      <ul className="space-y-3 text-[15px] list-disc  ml-4 lg:py-6">
        <li>
          Upload a high quality profile picture where your face is visible
        </li>
      </ul>
    </div>
  </Popover>
);


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
      <div className="flex justify-center w-full">
        <div className="xl:w-[90%]  xl:max-w-7xl xl:py-10 xl:px-12 md:p-4 w-full p-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2">
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
            <div className="block float-right -mt-8 md:block lg:hidden xl:hidden 2xl:hidden">
              <Whisper
                placement="topEnd"
                trigger="click"
                controlId="control-id-click"
                speaker={speaker}
              >
                <Button>
                  <BookIcon />
                </Button>
              </Whisper>
            </div>
          </Card>
        </div>
        <div className=" flex-col items-start font-light text-black font-sunflower lg:mt-[4rem] lg:px-6 lg:block md:hidden hidden">
          <h1 className="py-8 text-[24px] font-bold text-black ">Tips</h1>
          <p className="text-[18px]">
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

export default Skill;
