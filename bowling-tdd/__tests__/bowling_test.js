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

it('The score of a game of bowling with all gutter balls is 0', () => {
  // Setup
  // Execute
  // Expectation

  // Setup
  const bowlingGame = new BowlingGame()

  // Setup
  for (let rollIndex = 0; rollIndex < 20; rollIndex++) {
    bowlingGame.roll(0)
  }

  // Execute
  const totalScore = bowlingGame.score()

  // Expectation
  expect(totalScore).toBe(0)
})

it('The score of a game with all single pin rolls is 20', () => {
  // Setup
  const bowlingGame = new BowlingGame()

  for (let rollIndex = 0; rollIndex < 20; rollIndex++) {
    bowlingGame.roll(1)
  }

  const totalScore = bowlingGame.score()

  expect(totalScore).toBe(20)
})
