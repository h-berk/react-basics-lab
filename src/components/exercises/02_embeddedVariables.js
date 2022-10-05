import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";


const Demo = () => {
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
    }
  ];
  const header = "BSc Honours in Applied Computing Cloud and Networks";
  return (
    <div>
      <h1>$header</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody >
        <tr>
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[2].name}</td>
            <td>{modules[2].noLectures}</td>
            <td>{modules[2].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[3].name}</td>
            <td>{modules[3].noLectures}</td>
            <td>{modules[3].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[4].name}</td>
            <td>{modules[4].noLectures}</td>
            <td>{modules[4].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[5].name}</td>
            <td>{modules[5].noLectures}</td>
            <td>{modules[5].noPracticals}</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};

export default Demo;
