class BowlingGame {
  // Nothing here yet
  total = 0

  roll(pins) {
    this.total += pins
  }

  score() {
    return this.total
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

  // ...
  // ...

  const totalScore = bowlingGame.score()

  expect(totalScore).toBe(16)
})
