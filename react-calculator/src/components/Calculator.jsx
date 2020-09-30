import React, { useState } from 'react'

export function Calculator() {
  const [display, setDisplay] = useState(42)

  function clickClearButton(event) {
    console.log('Hooray, we clicked the clear!')
    // - User clicks AC
    //   - Clear the first operand
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
          <button className="button">7</button>
          <button className="button">8</button>
          <button className="button">9</button>
          <button className="button op">&#215;</button>
          <button className="button">4</button>
          <button className="button">5</button>
          <button className="button">6</button>
          <button className="button op">&#8722;</button>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button op">&#43;</button>
          <button className="button x2">0</button>
          <button className="button">.</button>
          <button className="button op">&#61;</button>
        </div>
      </div>
    </main>
  )
}
