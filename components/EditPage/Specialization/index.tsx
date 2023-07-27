"use client";
import { Card, Elevation } from "@blueprintjs/core";

import Required from "../Required";
import WorkIcon from "../SVGIcons/WorkIcon";
import SpecializationList from "./SpecializationList";
import SpecializationIcon from "../SVGIcons/SpecializationIcon";
import SpecializationDrawer from "./SpecializationDrawer";
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

const specializations = [
  {
    title: "Android App Development",
    department: "App Development",
    numberOfProjects: "5",
    description: `Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.`,
  },
  {
    title: "Android App Development",
    department: "App Development",
    numberOfProjects: "5",
    description: `Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.`,
  },
];

const Specialization = () => {
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center w-full">
        <div className="xl:w-[90%]  xl:max-w-7xl xl:py-10 xl:px-12 md:p-4 w-full p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <SpecializationIcon />
              <h1 className="py-4 text-lg font-= text-left text-gray-800 lg:text-4xl md:text-3xl">
                Specializations
              </h1>
            </div>
            <SpecializationDrawer />
          </div>
          <Card elevation={Elevation.ONE} className="rounded-lg">
            <div className="flex flex-col space-y-6">
              {specializations.length > 0 ? (
                specializations.map((specialization: any, index: number) => (
                  <SpecializationList
                    key={index}
                    title={specialization.title}
                    department={specialization.department}
                    numberOfProjects={specialization.numberOfProjects}
                    description={specialization.description}
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

export default Specialization;
