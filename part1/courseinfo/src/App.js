import React from "react";
import Course from "./components/Course";

const App = ({ courses }) => {
  return (
    // returns as a fragment to keep the DOM clean
    <>
      <h1>Web development curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
