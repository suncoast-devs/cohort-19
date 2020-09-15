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
const lengthOfColors = []

otherColors.forEach(function (color) {
  const lengthOfColor = color.length

  lengthOfColors.push(lengthOfColor)
})
console.log(lengthOfColors)

const upperCaseColors = []
otherColors.forEach(function (color) {
  const upperCase = color.toUpperCase()

  upperCaseColors.push(upperCase)
})
console.log(upperCaseColors)
