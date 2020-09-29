import React, { useState } from 'react'

// Hint: write a function that takes the number of characters
// as an argument and returns a random password?

// P: Given a number of characters, generate a random password of that length
// E: 8 characters: ihu9sdfb
// E: 16 characters: oiudbns8pdifubh4
// D: Integer number of characters
//    Array of possible characters
//    output: String of a specific length
//
// A: For each number in the range 0 up to but including the length of the needed password do this:
//    - Pick a random character from our possible characters
//    - Append that random character to our password
//    When done, return our password

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

function generateRandomPassword(length) {
  const passwordCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
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
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ]

  let password = ''

  // A: For each number in the range 0 up to but including the length of the needed password do this:
  for (let number = 0; number < length; number++) {
    //    - Pick a random character from our possible characters
    //      - Pick a random number between 0 and the length of our possible character array
    const randomNumber = getRandomInt(0, passwordCharacters.length)
    //      - Choose the character at that index
    const randomCharacter = passwordCharacters[randomNumber]
    //    - Append that random character to our password
    password = password + randomCharacter
  }

  //    When done, return our password
  return password
}

function App() {
  const [passwordLength, setPasswordLength] = useState(32)
  const [randomPassword, setRandomPassword] = useState(
    generateRandomPassword(passwordLength)
  )

  function onChangeSlider(event) {
    const newLength = Number(event.target.value)
    setPasswordLength(newLength)

    const newRandomPassword = generateRandomPassword(newLength)
    setRandomPassword(newRandomPassword)
  }

  return (
    <div>
      <p>{randomPassword}</p>
      <p>
        <input
          type="range"
          min="8"
          max="64"
          value={passwordLength}
          onChange={onChangeSlider}
        />
      </p>
    </div>
  )
}

export default App
