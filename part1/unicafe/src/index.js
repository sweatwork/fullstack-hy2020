import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistic = ({text, value}) => {
  return (
  <tr>
    <td>
      {text}
    </td>
     <td>
       {value}
      </td>
  </tr>
  )
}

// displaying statistics into it's own component
const Statistics = ({good, neutral, bad}) => {

    //total collected feedback
    let total = good + neutral + bad;  
  
    //average score (good: 1, neutral: 0, bad: -1)
    let average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  
    // percentage of positive feedback
    let positivePercent = good / total * 100
  
  if (total === 0) {
    return (
    <div>No feedback given</div>
    )
  }
  
  return (
    <div>
      <table>
        <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} /> 
        <Statistic text="all" value={total} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positivePercent + " %"} />
        </tbody>
      </table>    
    </div>
  ) 
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={increaseGood} text="good" />
        <Button handleClick={increaseNeutral} text="neutral" />
        <Button handleClick={increaseBad} text="bad" />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
}



ReactDOM.render(<App />,
  document.getElementById('root')
);
