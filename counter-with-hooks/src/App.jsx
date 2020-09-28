import React, { useState } from 'react'

function App() {
  // prettier-ignore
  const [counter,  setCounter] = useState(7)

  console.log(`Something called App! and our counter is ${counter}`)

  // const [valueVariableName, setValueVaribleName] = useState(initialValue)
  //
  // const [score, setScore] = useState(0)
  //
  // const [temperature, setTemperature] = useState(72)
  //
  // const [salary, setSalary] = useState(1000000)
  //

  function handleClickButton(event) {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>The counter is {counter}</p>
      <button onClick={handleClickButton}>Count!</button>
    </div>
  )
}

export default App
