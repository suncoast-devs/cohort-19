// Delcare a function called
//       square
// accepts one input variable called
//       number
// returns that number times itself
function square(tacoTuesday) {
  return tacoTuesday * tacoTuesday
}

const squaredAgain = function (number) {
  return number * number
}

const favoriteNumber = 42
const squaredFavorite = squaredAgain(favoriteNumber)

console.log(squaredFavorite)

const anotherSquare = squaredAgain(100)
console.log(anotherSquare)
