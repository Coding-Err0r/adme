"use client";
import { Card, Elevation } from "@blueprintjs/core";
import ProjectIcon from "../SVGIcons/ProjectIcon";
import ProjectList from "./ProjectList";
import Required from "../Required";
import images from "@/config/images";
import ProjectDrawer from "./ProjectDrawer";
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
            <div className="flex flex-col space-y-6">
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

export default Projects;
