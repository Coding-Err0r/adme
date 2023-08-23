"use client";
import { store } from "@/redux/Store";
import { Provider } from "react-redux";
import BasicInformation from "./BasicInformation";
import Breadcrumb from "./Breadcrumb";
import Education from "./Education";
import Projects from "./Projects";
import SelectProfile from "./SelectProfile";
import Skill from "./Skills";
import Specialization from "./Specialization";
import WorkExperience from "./WorkExperience";

const EditPage = () => {
  return (
    <Provider store={store}>
      <Breadcrumb />
      <BasicInformation />
      <Education />
      <WorkExperience />
      <Specialization />
      <Skill />
      <Projects />
      <SelectProfile />
    </Provider>
  );
};

export default EditPage;
