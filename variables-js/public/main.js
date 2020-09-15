// Declare a new variable
// name it `numbers`
// We will say it is constant
// since we wont *reassign it*
// and we use array litteral []
// syntax to set the array
const numbers = [74, 55, 35, 15, 72, 75, 21, 47, 99, 44, 71, 63, 64, 94, 31]

// PEDAC
// P - compute the average of a list of numbers
// E - [1,2,3] => 2
//   - [4,5] => 4.5
//   - [1,2,3, 10, 20] => 7.2
// D - Input: array, output: number (maybe with decimals)
// A - Average is the sum of the numbers divided by the count of numbers
//
//   - Turn one problem into two (or more) SMALLER problems
//     - the sum of the numbers
//     - divide
//     - count of numbers
//
//     A sum of the numbers
//     - Take each number and add it to a total
//
//            take each number
//            add it to a total

let sumOfTheNumbers = 0
for (let index = 0; index < numbers.length; index++) {
  // Get the number "it" at the current index of our loop
  const it = numbers[index]
  sumOfTheNumbers = sumOfTheNumbers + it
}
console.log(sumOfTheNumbers)

const average = sumOfTheNumbers / numbers.length
console.log(average)
