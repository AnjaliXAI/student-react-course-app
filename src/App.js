import React from "react";
import Student from "./components/Student";
import Course from "./components/Course";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Student & Course Information</h1>

      <div className="table">

        {/* Header Row */}
        <div className="row header">
          <div>Student Details</div>
          <div>Course Details</div>
        </div>

        {/* Row 1 */}
        <div className="row">
          <Student name="John" age={20} grade="A" />
          <Course courseName="React" duration="3 Months" instructor="John" />
        </div>

        {/* Row 2 */}
        <div className="row">
          <Student name="Marry" age={22} grade="B" />
          <Course courseName="JavaScript" duration="2 Months" instructor="Jane" />
        </div>

      </div>
    </div>
  );
}

export default App;