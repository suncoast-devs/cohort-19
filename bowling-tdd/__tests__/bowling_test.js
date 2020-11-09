class BowlingGame {
  allPins = []

  roll(pins) {
    this.allPins.push(pins)
  }

  score() {
    let total = 0
    let pinIndex = 0

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameTotal = this.allPins[pinIndex] + this.allPins[pinIndex + 1]

      total = total + frameTotal
      if (frameTotal == 10) {
        total = total + this.allPins[pinIndex + 2]
      }

      pinIndex += 2
    }

    return total
  }
}

function rollMultiple(bowlingGame, numberOfPins, count) {
  for (let rollIndex = 0; rollIndex < count; rollIndex++) {
    bowlingGame.roll(numberOfPins)
  }
}

it('The score of a game of bowling with all gutter balls is 0', () => {
  // Setup
  // Execute
  // Expectation

  // Setup
  const bowlingGame = new BowlingGame()

  // Setup
  rollMultiple(bowlingGame, 0, 20)

  // Execute
  const totalScore = bowlingGame.score()

  // Expectation
  expect(totalScore).toBe(0)
})

it('The score of a game with all single pin rolls is 20', () => {
  // Setup
  const bowlingGame = new BowlingGame()

  rollMultiple(bowlingGame, 1, 20)

  const totalScore = bowlingGame.score()

  expect(totalScore).toBe(20)
})

it('The score of a non-strike non-spare game is computed', () => {
  const bowlingGame = new BowlingGame()

  // Frame 1
  bowlingGame.roll(2)
  bowlingGame.roll(7)

  // Frame 2
  bowlingGame.roll(3)
  bowlingGame.roll(4)

  // Roll the rest of the game
  rollMultiple(bowlingGame, 0, 16)

  const totalScore = bowlingGame.score()

  expect(totalScore).toBe(16)
})

it('Scoring a spare is counted as ten PLUS the next roll', () => {
  const bowlingGame = new BowlingGame()

  bowlingGame.roll(3)
  bowlingGame.roll(7)
  bowlingGame.roll(2)

  rollMultiple(bowlingGame, 0, 17)

  const totalScore = bowlingGame.score()

  expect(totalScore).toBe(14)
})
