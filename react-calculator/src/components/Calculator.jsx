import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)

  // Defines a first number to null to indicate
  // we don't yet have a value for it.
  const [firstNumber, setFirstNumber] = useState(null)

  function clickClearButton(event) {
    // - User clicks AC
    //   ✅ Clear the first operand
    setFirstNumber(null)
    //   - Clear the second operand
    //   - Clear the operator
    //   ✅ Reset the display to 0

    // This is the code I dream of... So simple
    //
    // But react doesn't let us do that.
    //
    // We have to use the `setXXXXXXX` methods
    // display = 0

    setDisplay(0)
  }

  function clickedDigit(digit) {
    // - User clicks digit
    //   ✅ Store that digit as the first operand
    setFirstNumber(digit)
    //   ✅ Update the display to show that digit
    setDisplay(digit)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={clickClearButton}>
            AC
          </button>
          <button className="button fn">&#177;</button>
          <button className="button fn">&#37;</button>
          <button className="button op">&#247;</button>
          <button className="button" onClick={() => clickedDigit(7)}>
            7
          </button>
          <button className="button" onClick={() => clickedDigit(8)}>
            8
          </button>
          <button className="button" onClick={() => clickedDigit(9)}>
            9
          </button>
          <button className="button op">&#215;</button>
          <button className="button" onClick={() => clickedDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickedDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickedDigit(6)}>
            6
          </button>
          <button className="button op">&#8722;</button>
          <button className="button" onClick={() => clickedDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickedDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickedDigit(3)}>
            3
          </button>
          <button className="button op">&#43;</button>
          <button className="button x2" onClick={() => clickedDigit(0)}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}
