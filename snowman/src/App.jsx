import React, { useState } from 'react'
import snowman_0 from './images/snowman/step_0.png'
import snowman_1 from './images/snowman/step_1.png'
import snowman_2 from './images/snowman/step_2.png'
import snowman_3 from './images/snowman/step_3.png'
import snowman_4 from './images/snowman/step_4.png'
import snowman_5 from './images/snowman/step_5.png'
import snowman_6 from './images/snowman/step_6.png'
import snowman_7 from './images/snowman/step_7.png'

function AlphabetLetter(props) {
  function onClickedLetter() {
    // Handle the click
    props.addLetterToUsedLetters(props.letter)
  }

  if (props.used) {
    return <li className="used">{props.letter}</li>
  } else {
    return <li onClick={onClickedLetter}>{props.letter}</li>
  }
}

function App() {
  // STATES GO HERE

  // Create a state to hold the list of used letters
  const [usedLetters, setUsedLetters] = useState([])

  // Create a state to hold the secret word itself
  const [secretWord, setSecretWord] = useState('whiskey')

  // Create ANOTHER state to hold how many correct letters we have guessed
  const [
    numberOfCorrectlyGuessedLetters,
    setNumberOfCorrectlyGuessedLetters,
  ] = useState(0)

  function addLetterToUsedLetters(letter) {
    // Update the state to include this new letter

    // Use the spread operator to make usedLetters a list of the EXISTING letters
    // and then tack on this new letter
    const newUsedLetters = [...usedLetters, letter]

    // use our Hook function setUsedLetters to update the state
    setUsedLetters(newUsedLetters)

    // if this letter appears in our secret word,
    // increment the number of correctly guessed letters!
    if (secretWord.includes(letter.toLowerCase())) {
      setNumberOfCorrectlyGuessedLetters(numberOfCorrectlyGuessedLetters + 1)
    }
  }

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

  const allTheLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  return (
    <section>
      <h1>Snowman</h1>
      <img alt="snowman" src={snowmen[numberOfCorrectlyGuessedLetters]} />
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
        {allTheLetters.map((individualLetter) => (
          <AlphabetLetter
            key={individualLetter}
            used={usedLetters.includes(individualLetter)}
            letter={individualLetter}
            addLetterToUsedLetters={addLetterToUsedLetters}
          />
        ))}
      </ul>
    </section>
  )
}

export default App
