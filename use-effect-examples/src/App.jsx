import React, { useState } from 'react'

function App() {
  const [feet, setFeet] = useState(0)

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
      <p>Inches: ____</p>
    </main>
  )
}

export default App
