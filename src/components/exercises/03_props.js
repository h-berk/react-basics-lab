import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  return (
    <div > 
      <h2>{`${props.name} Modules`}</h2>
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
            <td>{props.modules[0]}</td>
        </tr>
        <tr>
            <td>{props.modules[1]}</td>
        </tr>
        <tr>
            <td>{props.modules[2]}</td>
        </tr>
        <tr>
            <td>{props.modules[3]}</td>
        </tr>
        <tr>
            <td>{props.modules[4]}</td>
        </tr>
        <tr>
            <td>{props.modules[5]}</td>
        </tr>
        </tbody >
      </table>
    </div>
  );
}
export default Demo;
