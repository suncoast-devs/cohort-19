// Console.ReadLine()
// const personName = window.prompt('What is your name?')
const personName = 'Gavin'

const message = `Hello there ${personName}`

console.log(message)
// window.alert(message)

const scores = [98, 42, 100]

console.log(scores)
console.log(scores.length)

// Totalling up an array
let sum = 0

for (let index = 0; index < scores.length; index++) {
  const currentElement = scores[index]

  sum = sum + currentElement
}

console.log(sum)
