import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);

  return <b>total of {total} exercises</b>;
};

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) =>
  parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));

const Header = ({ name }) => <h2>{name}</h2>;

const Course = ({ course }) => {
  return (
    <div key={course.id}>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
