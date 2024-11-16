import React from "react";
import "./StudentList.css";

const StudentList = ({ students }) => {
  return (
    <div id="div_students" className="students-container">
      {students.map((student) => (
        <div key={student.id}>
          ID: {student.id} | Name: {student.name} | Age: {student.age} | Gender:{" "}
          {student.gender} | Student ID: {student.studentID}
        </div>
      ))}
    </div>
  );
};

export default StudentList;
