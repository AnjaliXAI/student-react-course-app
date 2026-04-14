import React from "react";

function Course({ courseName, duration, instructor }) {
  return (
    <div>
      <p><strong>Course:</strong> {courseName}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
    </div>
  );
}

export default Course;