"use client";
import BasicInformation from "./BasicInformation";
import Breadcrumb from "./Breadcrumb";
import Education from "./Education";
import Projects from "./Projects";
import Skill from "./Skills";
import Specialization from "./Specialization";
import WorkExperience from "./WorkExperience";

const EditPage = () => {
  return (
    <div>
      <Breadcrumb />
      <BasicInformation />
      <Education />
      <WorkExperience />
      <Specialization />
      <Skill />
      <Projects />
    </div>
  );
};

export default EditPage;
