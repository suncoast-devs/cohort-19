export const randomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function doubleTheNumber(number) {
  return 2 * number
}

export class Person {
  greet() {
    console.log('Hello!')
  }
}

export const PI = 3.1415
