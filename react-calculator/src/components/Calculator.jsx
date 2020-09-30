import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(0)

  // Defines a first number to null to indicate
  // we don't yet have a value for it.
  const [firstNumber, setFirstNumber] = useState(null)

  // Defines a second number to null to indicate
  // we don't yet have a value for it.
  const [secondNumber, setSecondNumber] = useState(null)

  const [operator, setOperator] = useState(null)

  function clickClearButton(event) {
    // - User clicks AC
    //   ✅ Clear the first operand
    setFirstNumber(null)
    //   ✅  Clear the second operand
    setSecondNumber(null)
    //   ✅  Clear the operator
    setOperator(null)
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
    if (operator === null) {
      // - User clicks digit
      //   ✅ Store that digit as the first operand
      setFirstNumber(digit)
    } else {
      // ✅ Store that digit as the SECOND operand
      setSecondNumber(digit)
    }

    // ✅- Update the display to show the second digit
    setDisplay(digit)
  }

  function clickedOperator(selectedOperator) {
    // - User clicks operator (+, x, /, -)
    // - Do nothing with the first operand, leave it alone
    // - Do nothing with the display, leave it alone
    // ✅ Store the operator
    setOperator(selectedOperator)
  }

  function clickedEquals() {
    // - Calculate result

    let result

    // ✅ if the operator is a + then the result is firstNumber + secondNumber
    if (operator === '+') {
      result = firstNumber + secondNumber
    }
    // ✅ if the operator is a - then the result is firstNumber - secondNumber
    if (operator === '-') {
      result = firstNumber - secondNumber
    }
    // ✅if the operator is a * then the result is firstNumber * secondNumber
    if (operator === '*') {
      result = firstNumber * secondNumber
    }
    // ✅ if the operator is a / then the result is firstNumber / secondNumber
    if (operator === '/') {
      result = firstNumber / secondNumber
    }

    // - Update display to show the result
    setDisplay(result)
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
          <button
            className="button op"
            onClick={function () {
              clickedOperator('/')
            }}
          >
            &#247;
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(7)
            }}
          >
            7
          </button>
          <button
            className="button"
            onClick={function () {
              clickedDigit(8)
            }}
          >
            8
          </button>
          <button className="button" onClick={() => clickedDigit(9)}>
            9
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('*')
            }}
          >
            &#215;
          </button>
          <button className="button" onClick={() => clickedDigit(4)}>
            4
          </button>
          <button className="button" onClick={() => clickedDigit(5)}>
            5
          </button>
          <button className="button" onClick={() => clickedDigit(6)}>
            6
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('-')
            }}
          >
            &#8722;
          </button>
          <button className="button" onClick={() => clickedDigit(1)}>
            1
          </button>
          <button className="button" onClick={() => clickedDigit(2)}>
            2
          </button>
          <button className="button" onClick={() => clickedDigit(3)}>
            3
          </button>
          <button
            className="button op"
            onClick={function () {
              clickedOperator('+')
            }}
          >
            &#43;
          </button>
          <button className="button x2" onClick={() => clickedDigit(0)}>
            0
          </button>
          <button className="button">.</button>
          <button
            className="button op"
            onClick={function () {
              clickedEquals()
            }}
            // Equalvalent to
            // onClick={clickedEquals}
          >
            &#61;
          </button>
        </div>
      </div>
    </main>
  )
}
