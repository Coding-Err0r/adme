"use client";
import { Card, Elevation } from "@blueprintjs/core";
import ProjectIcon from "../SVGIcons/ProjectIcon";
import ProjectList from "./ProjectList";
import Required from "../Required";
import ProjectDrawer from "./ProjectDrawer";
import TipsMobile from "../Tips/TipMobile";
import TipsDesktop from "../Tips/TipsDesktop";


const projects = [
  {
    title: "ZORRO - 2023",
    department: "Branding , Photography",
    toolsUsed: "Photoshop , XD ",
    description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable`,
    images: [
      "https://miro.medium.com/v2/resize:fit:1400/1*SyLNGKR1-32dI5cIMcJWVA.jpeg",
      "https://miro.medium.com/v2/resize:fit:1400/1*SyLNGKR1-32dI5cIMcJWVA.jpeg",
      "https://miro.medium.com/v2/resize:fit:1400/1*SyLNGKR1-32dI5cIMcJWVA.jpeg",
      "https://miro.medium.com/v2/resize:fit:1400/1*SyLNGKR1-32dI5cIMcJWVA.jpeg",
      "https://miro.medium.com/v2/resize:fit:1400/1*SyLNGKR1-32dI5cIMcJWVA.jpeg",
      "https://miro.medium.com/v2/resize:fit:1400/1*SyLNGKR1-32dI5cIMcJWVA.jpeg",
    ],
    link: "",
  },
];
const Projects = () => {
  return (
    <section className="w-full font-light bg-white font-sunflower">
      <div className="flex justify-center w-full">
        <div className="xl:w-[90%]  xl:max-w-7xl xl:py-10 xl:px-12 md:p-4 w-full p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ProjectIcon />
              <h1 className="py-4 text-lg font-= text-left text-gray-800 lg:text-4xl md:text-3xl">
                Projects
              </h1>
            </div>
            <ProjectDrawer />
          </div>
          <Card elevation={Elevation.ONE} className="rounded-lg">
            <div className="flex flex-col py-8 space-y-6">
              {projects.length > 0 ? (
                projects.map((project: any, index: number) => (
                  <ProjectList
                    key={index}
                    title={project.title}
                    department={project.department}
                    toolsUsed={project.toolsUsed}
                    description={project.description}
                    images={project.images}
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
    </section>
  );
};

export default Projects;
