class BowlingGame {
  // Nothing here yet

  roll() {
    // nothing here yet
  }

  score() {
    return 0
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
