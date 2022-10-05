import React from "react";
import CourseModulesCollections from "../../components/exercises/04_iteration";

export default {
  title: "Exercises/04 - iteration",
  component: CourseModulesCollections,
};

export const Basic = () => {
  const name = "BSc Honours in Applied Computing Cloud and Networks";
  const modules = [
    {name: "Dev Ops",
     noLectures: 1,
     noPracticals: 3
    }, 
    {name: "Web App Dev",
    noLectures: 2,
    noPracticals: 2
    }, 
    {name: "Wireless Communications",
    noLectures: 2,
    noPracticals: 2
    }, 
    {name: "NOSQL Databases",
    noLectures: 2,
    noPracticals: 2
    }, 
    {name: "Network Forensics",
    noLectures: 1,
    noPracticals: 3
    }, 
    {name: "Professional Practice",
    noLectures: 2,
    noPracticals: 2
    },
  ];
  return <CourseModulesCollections modules={modules} course={name} />;
};
