const colors = ['red', 'green', 'blue']

function logSomeColor(
  tacoTuesdayElementVariable,
  tacoTuesdayIndexVariable,
  tacoTuesdayTheArrayItself
) {
  console.log(
    `The color at position ${tacoTuesdayIndexVariable} is ${tacoTuesdayElementVariable}`
  )
}

function logJustTheColor(color) {
  console.log(color)
}

//
// The function supply here takes one, two or three arguments
// -- The first argument will *ALWAYS* be the current element
// -- The second argument will *ALWAYS* be the index
// -- The third argument will *ALWAYS* be the array itself
colors.forEach(logJustTheColor)
/*
C#

foreach (var color in colors)
{
  logSomeColor(color, ....)
}
*/

const numbers = [10, 20, 30, 1, 2, 3, 4, 5]

let total = 0
function addItUp(number) {
  total = total + number
}
numbers.forEach(addItUp)
console.log(total)
console.log(total / numbers.length)

/*









*/

const otherColors = ['red', 'green', 'blue']
const lengthOfColors = otherColors.map(color => color.length)
console.log(lengthOfColors)

const upperCaseColors = otherColors.map(color => color.toUpperCase())

/*
C# Example

var upperCaseColors = otherColors.Select(color => color.ToUpper() )
*/

console.log(upperCaseColors)

const double = function (number) {
  return number * 2
}

// one liner version of double
const doubleOneLiner = number => {
  return number * 2
}

// One liner without the braces and the return
const doubleOneLinerLessSyntax = number => number * 2

const longColors = colors.filter(color => color.length > 2)
console.log(longColors)
