import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({name}) => (
    <h2>
      {name}
    </h2>
  )

const Part = ({name, exercises}) => (
    <p>
      {name} {exercises}
    </p>
  )

const Content = ({parts}) => parts.map(part => (
  <Part key={part.id} name={part.name} exercises={part.exercises} /> 
  ))

const Course = ({course}) => {
  return (
    <div key={course.id}>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  ) 
}

const Total = ({parts}) => {
    const total = parts.reduce( (s,p) => s + p.exercises, 0 )

    return (
      <b>
        total of {total} exercises
      </b>
    )
  }

const App = () => {
  const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
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
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return (
    // returns as a fragment to keep the DOM clean 
    <>
    <h1>Web development curriculum</h1>
    {courses.map(course => <Course key={course.id} course={course} /> )}
    </ >
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)