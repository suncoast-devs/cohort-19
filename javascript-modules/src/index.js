// Trying to use the DEFAULT export
// import randomInteger from './lib/randomInteger'

// Using NAMED exports
import { randomInteger, doubleTheNumber, Person, PI } from './lib/randomInteger'

const role = randomInteger(0, 6) + 1
console.log(`You just rolled a ${role}!`)

const doubled = doubleTheNumber(42)
console.log(`Doubling 42 gives us ${doubled}`)

const tau = doubleTheNumber(PI)
console.log(`Doubling PI gives us ${tau}`)

const gavin = new Person()
gavin.greet()
