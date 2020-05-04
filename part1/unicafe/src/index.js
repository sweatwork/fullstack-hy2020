import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Display = ({feedback, count}) => <div> {feedback} {count}</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  //total collected feedback
  let total = good + neutral + bad;  
  
  //average score (good: 1, neutral: 0, bad: -1)
  let average = ((good * 1) + (neutral * 0) + (bad * -1)) / total
  
  // percentage of positive feedback
  let positivePercent = good / total * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={increaseGood} text="good" />
      <Button handleClick={increaseNeutral} text="neutral" />
      <Button handleClick={increaseBad} text="bad" />
      <h1>statistics</h1>
      <Display feedback="good" count={good} />
      <Display feedback="neutral" count={neutral} />
      <Display feedback="bad" count={bad} />
      <Display feedback="all" count={total} />
      <Display feedback="average" count={average} />
      <div>positive {positivePercent} %</div>
    </div>
  )
}









ReactDOM.render(<App />,
  document.getElementById('root')
);
