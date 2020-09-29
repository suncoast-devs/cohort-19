import React, { useState } from 'react'
import snowman_0 from './images/snowman/step_0.png'
import snowman_1 from './images/snowman/step_1.png'
import snowman_2 from './images/snowman/step_2.png'
import snowman_3 from './images/snowman/step_3.png'
import snowman_4 from './images/snowman/step_4.png'
import snowman_5 from './images/snowman/step_5.png'
import snowman_6 from './images/snowman/step_6.png'
import snowman_7 from './images/snowman/step_7.png'
import words from './data/words.json'

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

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function randomWord() {
  // returns a random word from our list of words!
  // PEDAC
  // - Problem have a list of 1024 words we want ONE at random
  // - Example: 0 is "abdomen", 511 is "marking"
  // - Data: an array of words, and a random index between 0 and 1023
  // - Algorithm: Get a random number between 0 and 1023, look up that word at that index and then return it

  return words[getRandomArbitrary(0, 1024)]
}

function App() {
  // STATES GO HERE

  // Create a state to hold the list of used letters
  const [usedLetters, setUsedLetters] = useState([])

  // Create a state to hold the secret word itself
  const [secretWord, setSecretWord] = useState(randomWord())

  console.log(secretWord)

  // Create ANOTHER state to hold how many correct letters we have guessed
  const [
    numberOfCorrectlyGuessedLetters,
    setNumberOfCorrectlyGuessedLetters,
  ] = useState(0)

  // Create another state to track the revealed letters
  const [revealedLetters, setRevealedLetters] = useState([
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
    '_',
  ])

  function addLetterToUsedLetters(letter) {
    // Update the state to include this new letter

    // Use the spread operator to make usedLetters a list of the EXISTING letters
    // and then tack on this new letter
    // use our Hook function setUsedLetters to update the state
    setUsedLetters([...usedLetters, letter])

    // if this letter appears in our secret word,
    // increment the number of correctly guessed letters!
    const positionOfLetterInSecretWord = secretWord.indexOf(
      letter.toLowerCase()
    )
    if (positionOfLetterInSecretWord >= 0) {
      setNumberOfCorrectlyGuessedLetters(numberOfCorrectlyGuessedLetters + 1)

      // Makes a fresh copy of the revealed letters array
      const newRevealedLetters = [...revealedLetters]

      // Change the copy by setting the letter at the correct index
      newRevealedLetters[positionOfLetterInSecretWord] = letter

      // Update the state of revealed letters
      setRevealedLetters(newRevealedLetters)
    }
  }

  function pickNewRandomWord() {
    setSecretWord(randomWord())
    setRevealedLetters(['_', '_', '_', '_', '_', '_', '_'])
    setNumberOfCorrectlyGuessedLetters(0)
    setUsedLetters([])
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

  // Fancy code for generating "A" through "Z" (65 through 90)
  const allTheLetters = [...Array(26).keys()].map((number) =>
    String.fromCharCode(65 + number)
  )

  return (
    <section>
      <h1>Snowman</h1>
      <img
        onClick={pickNewRandomWord}
        alt="snowman"
        src={snowmen[numberOfCorrectlyGuessedLetters]}
      />
      <ul>
        {revealedLetters.map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
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
