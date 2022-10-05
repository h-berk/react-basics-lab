import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h1>BSc Honours in Applied Computing Cloud and Networks</h1>
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
            <td>DevOps</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Web App Dev</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Wireless Communications</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>NOSQL Databases</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Network Forensics</td>
            <td>1</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Professional Practice</td>
            <td>2</td>
            <td>2</td>
          </tr>
        </tbody >
      </table>
    </div>
  );
};

export default Demo;
