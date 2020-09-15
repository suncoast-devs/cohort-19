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

function printIt(array, func) {
  // Go through the array one index at a time
  for (let index = 0; index < array.length; index++) {
    // Get the value at that index from the array
    const value = array[index]

    // call the function we were given in the
    // argument named "func" and put the output
    // of that in a variable called result
    const result = func(value)

    console.log(`Function turned ${value} into ${result}`)
  }
}

const double = function (number) {
  return number * 2
}

const numbers = [100, 42, 16, 10]

console.log('-----------------')
printIt(numbers, double)
console.log('-----------------')
printIt(numbers, square)
