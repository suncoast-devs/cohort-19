import React from 'react'
import snowman_0 from './images/snowman/step_0.png'
import snowman_1 from './images/snowman/step_1.png'
import snowman_2 from './images/snowman/step_2.png'
import snowman_3 from './images/snowman/step_3.png'
import snowman_4 from './images/snowman/step_4.png'
import snowman_5 from './images/snowman/step_5.png'
import snowman_6 from './images/snowman/step_6.png'
import snowman_7 from './images/snowman/step_7.png'

function App() {
  const snowmen = [
    snowman_0,
    snowman_1,
    snowman_2,
    snowman_3,
    snowman_4,
    snowman_5,
    snowman_6,
    snowman_7,
  ]

  return (
    <section>
      <h1>Snowman</h1>
      <img alt="snowman" src={snowman_7} />
      <ul>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
        <li>_</li>
      </ul>
      <ul className="alphabet">
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>I</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>O</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>U</li>
        <li>V</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
      </ul>
    </section>
  )
}

export default App
