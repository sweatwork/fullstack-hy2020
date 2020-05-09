import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => {
  return (
    <h1>
      {name}
    </h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    parts.map(part => <Part key={part.id} part={part} />)
  )
}

const Total = ({parts}) => {
  return (
    <b>
      total of {parts[0].exercises + parts[1].exercises + parts[2].exercises + parts[3].exercises} exercises
    </b>
  )

}

const Course = ({course}) => {
  return (
    <>
    <Header name={course.name} />
    <Content parts={course.parts} />
    </ >
  )
  
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    // returns as a fragment to keep the DOM clean 
    <>
      {/* <Header course={course} />
      <Content course={course} /> */}
      <Course course={course} />
      <Total parts={course.parts} />
    </ >
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)


