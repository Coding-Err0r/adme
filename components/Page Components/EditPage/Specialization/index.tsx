"use client";
import { Card, Elevation } from "@blueprintjs/core";
import Required from "../Required";
import SpecializationList from "./SpecializationList";
import SpecializationIcon from "../SVGIcons/SpecializationIcon";
import SpecializationDrawer from "./SpecializationDrawer";
import TipsMobile from "../Tips/TipMobile";
import TipsDesktop from "../Tips/TipsDesktop";

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
      <div className="flex justify-center">
        <div className="w-full  xl:max-w-[118.75rem] xl:py-10 xl:px-12 md:p-4  p-2">
          <div className="grid grid-cols-9 gap-6">
            <div className="flex flex-col col-span-9 xl:col-span-6">
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
                <div className="flex flex-col py-8 space-y-6">
                  {specializations.length > 0 ? (
                    specializations.map(
                      (specialization: any, index: number) => (
                        <SpecializationList
                          key={index}
                          title={specialization.title}
                          department={specialization.department}
                          numberOfProjects={specialization.numberOfProjects}
                          description={specialization.description}
                        />
                      )
                    )
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

export default Specialization;
