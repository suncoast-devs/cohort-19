// Delcare a function called
//       square
// accepts one input variable called
//       number
// returns that number times itself
function square(tacoTuesday) {
  return tacoTuesday * tacoTuesday
}

const favoriteNumber = 42

const squaredFavorite = square(favoriteNumber)

console.log(squaredFavorite)

const anotherSquare = square(100)
console.log(anotherSquare)

const oopsies = square('Gavin')
console.log(oopsies)
