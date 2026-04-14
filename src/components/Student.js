import React from "react";

function Student({ name, age, grade }) {
  return (
    <div>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Grade:</strong> {grade}</p>
    </div>
  );
}

export default Student;