import React from "react";
import CourseModulesWithProps from "../../components/exercises/03_props";

export default {
  title: "Exercises/03 - component with props",
  component: CourseModulesWithProps,
};

export const Basic = () => {
  const name = "BSc Honours in Applied Computing Cloud and Networks";
  const allModules = ["Dev Ops", "Web App Dev", "NOSQL Databases", "Wireless Communications", "Network Forensics", "Professional Practice"];
  return <CourseModulesWithProps modules={allModules} course={name} />;
};
