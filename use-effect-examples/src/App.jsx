import React, { useEffect, useState } from 'react'

function App() {
  const [feet, setFeet] = useState(0)
  const [inches, setInches] = useState(0)

  useEffect(
    function () {
      // do work
      console.log(`I'm doing work! feet=${feet}`)
      setInches(feet * 12)
    },

    [
      /* of variables to observe for changes */
      feet,
    ]
  )

  useEffect(
    function () {
      setFeet(inches / 12)
    },

    [inches]
  )

  return (
    <main>
      <h1>Unit Conversions</h1>
      <p>
        Feet:
        <input
          type="text"
          value={feet}
          onChange={function (event) {
            const inputFieldValue = event.target.value

            const newFeet = Number(inputFieldValue)

            setFeet(newFeet)
          }}
        />
      </p>
      <p>
        <input
          type="range"
          min="0"
          max="150"
          value={feet}
          onChange={function (event) {
            const inputFieldValue = event.target.value

            const newFeet = Number(inputFieldValue)

            setFeet(newFeet)
          }}
        />
      </p>
      <p>
        <button
          onClick={function () {
            setFeet(0)
          }}
        >
          RESET
        </button>
      </p>
      <p>
        Inches:{' '}
        <input
          type="text"
          value={inches}
          onChange={function (event) {
            setInches(Number(event.target.value))
          }}
        />
      </p>
      <p>
        <input
          type="range"
          min="0"
          max="10000"
          value={inches}
          onChange={function (event) {
            setInches(Number(event.target.value))
          }}
        />
      </p>
    </main>
  )
}

export default App
