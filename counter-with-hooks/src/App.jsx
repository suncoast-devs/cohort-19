import React, { useState } from 'react'

function App() {
  // prettier-ignore
  const [counter,  setCounter] = useState(7)
  const [personName, setPersonName] = useState('Jason')

  // const [valueVariableName, setValueVariableName] = useState(initialValue)
  //
  // const [score, setScore] = useState(0)
  //
  // const [temperature, setTemperature] = useState(72)
  //
  // const [salary, setSalary] = useState(1000000)
  //

  return (
    <div>
      <p>
        Hello, {personName}, your counter is {counter}
      </p>
      <p>
        <input
          type="text"
          value={personName}
          onChange={(event) => setPersonName(event.target.value)}
        />
      </p>
      <button onClick={() => setCounter(counter + 1)}>Count!</button>
    </div>
  )
}

export default App
