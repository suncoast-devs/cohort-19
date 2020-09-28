import React, { useState } from 'react'

function App() {
  // prettier-ignore
  const counterValueAndSetMethod /* this is an array (tuple) */ = useState( 7 /* initial state */)

  const theCurrentValueOfTheCounter = counterValueAndSetMethod[0]
  const functionThatChangesTheCurrentValueOfTheCounter =
    counterValueAndSetMethod[1]

  function handleClickButton(event) {
    functionThatChangesTheCurrentValueOfTheCounter(
      theCurrentValueOfTheCounter + 1
    )
  }

  return (
    <div>
      <p>The counter is {theCurrentValueOfTheCounter}</p>
      <button onClick={handleClickButton}>Count!</button>
    </div>
  )
}

export default App
