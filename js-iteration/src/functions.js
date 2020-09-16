/*

   Welcome to JS Interation

   Down below you will find instructions for code to write.

   As you write and save your code, you can look in your terminal where you
   ran `yarn test` to see if your code is working. The tests continuously check
   your work each time you save. If a test is failing either you have not yet
   defined that function or you have not defined it correctly.

   Once you finish a function and have it correct, the test will tell you if/how
   the next function is working.

*/

/**
 * 1) Define a function named `yelling` that takes an array of
 * strings as an argument and returns a new array with all
 * the words forced to uppercase
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function yelling(words) {
  //
  // Data: input array  --- output is an array
  // Your code here
  const newWords = words.map(word => word.toUpperCase())

  return newWords
}

/**
 *
 * 2) Define a function named `doubleTrouble` that takes an array of
 * numbers as an argument and returns a new array with all
 * the numbers multiplied by 2
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function doubleTrouble(numbers) {
  const newNumbers = numbers.map(number => number * 2)

  return newNumbers
}

/*
 * 3) Define a function stringyIndexes() that takes an array of
 * strings as an argument and returns a new array with each string
 * suffixed with " is at index X" where X is the index of the element
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function stringyIndexes(strings) {
  // Code here
  const newStrings = strings.map(
    // (string, index) => string + ' is at index ' + index
    (string, index) => `${string} is at index ${index}`
  )

  return newStrings
}

/*
 * 4) Define a function onlyTheEvenSurvive that accepts an array of
 * numbers and returns only the elements that are even
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function onlyTheEvenSurvive(numbers) {
  const onlyTheElementsThatAreEven = numbers.filter(number => number % 2 === 0)

  return onlyTheElementsThatAreEven
}

/*
 * 5) Define a function onlyTheEvenIndexedSurvive that accepts an array of
 * numbers and returns only the elements at indexes that are even
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function onlyTheEvenIndexedSurvive(numbers) {
  const onlyTheElementsAtIndexesThatAreEven = numbers.filter(
    (number, index) => index % 2 === 0
  )

  return onlyTheElementsAtIndexesThatAreEven
}

/*
 * 6)  Define a function bestMoviesOfTheYear that accepts an array of
 * movie objects AND a year and returns the names of movies that are
 * from that year AND have a score more than 90
 *
 * A movie object looks like this:
 *
 * {
 *   name: "Get Out",
 *   year: "2017",
 *   score: 99
 * }
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function bestMoviesOfTheYear(movies, yearToConsider) {
  // return NAMES of movies that are from that year AND have score more than 90
  const onlyMoviesFromTheYearAndScoreMoreThan90 = movies.filter(
    movie => movie.score > 90 && movie.year === yearToConsider
  )

  const movieNames = onlyMoviesFromTheYearAndScoreMoreThan90.map(
    movie => movie.name
  )

  return movieNames
}

function bestMoviesOfTheYear(movies, yearToConsider) {
  const movieNames = movies
    .filter(movie => movie.score > 90 && movie.year === yearToConsider)
    .map(movie => movie.name)

  return movieNames
}

function bestMoviesOfTheYear(movies, yearToConsider) {
  return movies
    .filter(movie => movie.score > 90 && movie.year === yearToConsider)
    .map(movie => movie.name)
}

/*
 * 7) Define a function everyoneIsOdd that accepts an array of
 * numbers and returns true if every element of the array is
 * odd.
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function everyoneIsOdd(numbers) {
  // [3,5,7,9] => true
  // [3,5,6,7,9] => false
  const isItTrue = numbers.every(number => number % 2 === 1)

  return isItTrue
}

/*
 * 8) Define a function findTheNeedle that accepts an array of
 * strings and returns the one string that contains the word
 * `needle` inside
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

function findTheNeedle(strings) {
  const theStringThatContainsTheWordNeedleInside = strings.find(string =>
    string.includes('needle')
  )

  return theStringThatContainsTheWordNeedleInside
}

/*
 * 9) Define a function findTheNeedleIndex that accepts an array of
 * strings and returns the index of the string that contains
 *  the word `needle` inside
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

// ...

/*
 *` 10)  Define a function someoneToLove that accepts an array of
 * strings and returns true if at least one string is exactly
 * four characters long
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

// ...

/*
 * 11)  Define a function objectKeys that accepts an object of
 *      the form below and returns an array of the object key followed
 *      by a dash and then the title
 *
 *      NOTE: You'll need to use either:
 *            Object.keys: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 *        or  Object.entries: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
 *        along with `map` to solve this
 *
 *      NOTE: The keys will be different every time this code is tested. That is, it won't always be `pandas` and `miniatures`
 *
 *      Example object
 *
 *      {
 *        "pandas": {
 *          "title": "Panda Bears",
 *          "description": "Pandas are bears native to south-central China, and are objectively the cutest animals on earth.",
 *        },
 *        "miniatures": {
 *          "title": "Miniature Painting",
 *          "description": "I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work.",
 *        }
 *      }
 *
 *      Example expected return:
 *
 *      ['pandas - Panda Bears', 'miniatures - Miniature Painting']
 *
 * NOTE: You may *not* use the `forEach` or `for` method.
 *
 */

// function objectKeys(objectOfHobbies) {
//   // Your code here
// }

// ...

/**
 * NOTE: Don't modify anything below this line...
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * NOTE: Don't modify anything below this line...
 */

const deepEqual = require('deep-equal')
const chalk = require('chalk')

const isDefined = method => {
  return eval(`typeof ${method}`) === 'function'
}

const compare = (received, expected) => {
  if (deepEqual(received, expected)) {
    return ''
  } else {
    return `Received: ${JSON.stringify(received)} but expected ${JSON.stringify(
      expected
    )}`
  }
}

const tests = [
  {
    methodName: 'yelling',
    test: () => {
      const received = yelling(['now', 'is', 'the', 'time'])
      const expected = ['NOW', 'IS', 'THE', 'TIME']

      return compare(received, expected)
    }
  },
  {
    methodName: 'doubleTrouble',
    test: () => {
      return compare(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
    }
  },
  {
    methodName: 'stringyIndexes',
    test: () => {
      return compare(stringyIndexes(['how', 'now', 'brown', 'cow']), [
        'how is at index 0',
        'now is at index 1',
        'brown is at index 2',
        'cow is at index 3'
      ])
    }
  },
  {
    methodName: 'onlyTheEvenSurvive',
    test: () => {
      return compare(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
        42,
        50,
        100,
        44
      ])
    }
  },
  {
    methodName: 'onlyTheEvenIndexedSurvive',
    test: () => {
      return compare(
        onlyTheEvenIndexedSurvive([
          31,
          67,
          64,
          96,
          14,
          24,
          43,
          51,
          48,
          80,
          58,
          43,
          64,
          84,
          98,
          99,
          69,
          93,
          5,
          32,
          29,
          4,
          28,
          18,
          86,
          22,
          20,
          74,
          35,
          27,
          85,
          79,
          65,
          32,
          56,
          94,
          93,
          20,
          29,
          22,
          72
        ]),
        [
          31,
          64,
          14,
          43,
          48,
          58,
          64,
          98,
          69,
          5,
          29,
          28,
          86,
          20,
          35,
          85,
          65,
          56,
          93,
          29,
          72
        ]
      )
    }
  },
  {
    methodName: 'bestMoviesOfTheYear',
    test: () => {
      const movies = [
        { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
        { name: 'Birdman', year: 2014, score: 91 },
        { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
        { name: 'Rage', year: 2014, score: 14 },
        { name: 'Get Out', year: 2017, score: 99 },
        { name: 'Justice League', year: 2017, score: 40 },
        { name: 'Ghost in the Shell', year: 2017, score: 46 },
        { name: 'The Big Sick', year: 2017, score: 98 }
      ]
      return (
        compare(bestMoviesOfTheYear(movies, 2014), [
          'The Grand Budapest Hotel',
          'Birdman'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2017), [
          'Get Out',
          'The Big Sick'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2001), [])
      )
    }
  },
  {
    methodName: 'everyoneIsOdd',
    test: () => {
      return (
        compare(everyoneIsOdd([9, 15, 27, 101, 33]), true) ||
        compare(everyoneIsOdd([9, 23, 3, 4, 77]), false)
      )
    }
  },
  {
    methodName: 'findTheNeedle',
    test: () => {
      return compare(
        findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
        'there was a needle at'
      )
    }
  },
  {
    methodName: 'findTheNeedleIndex',
    test: () => {
      return compare(
        findTheNeedleIndex([
          'one',
          'time',
          'there was a needle at',
          'the market'
        ]),
        2
      )
    }
  },
  {
    methodName: 'someoneToLove',
    test: () => {
      return (
        compare(someoneToLove(['how', 'now', 'brown', 'cow']), false) ||
        compare(someoneToLove(['how', 'now', 'blue', 'cow']), true)
      )
    }
  },
  {
    methodName: 'objectKeys',
    test: () => {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max))
      }

      const objectOfHobbies = {
        [`hobby-${getRandomInt(500)}`]: {
          title: `Panda ${getRandomInt(500)} Bears`,
          description: `Pandas are bears native to south-central China, and are objectively the cutest animals on earth. ${getRandomInt(
            500
          )}`
        },
        miniatures: {
          title: `Miniature ${getRandomInt(500)} Painting`,
          description: `I enjoy painting miniatures from board games. I've been painting since early 2018, here's some of my work. ${getRandomInt(
            500
          )}`
        }
      }

      const answer = Object.keys(objectOfHobbies).map(
        key => `${key} - ${objectOfHobbies[key].title}`
      )
      return compare(objectKeys(objectOfHobbies), answer)
    }
  }
]

const longestTestName = Math.max(...tests.map(test => test.methodName.length))

const runOneTest = testCase => {
  try {
    if (!isDefined(testCase.methodName)) {
      return 'undefined'
    }

    return testCase.test()
  } catch {
    return 'Some kind of syntax or other code error'
  }
}

let totalPassing = 0

console.clear()
tests.forEach(test => {
  const paddedTestName =
    test.methodName + ' '.repeat(longestTestName - test.methodName.length)

  const testResult = runOneTest(test)

  switch (testResult) {
    case 'undefined':
      console.log(chalk.yellow(`${paddedTestName} ⚡️⚡️ not defined️ ⚡️️⚡️`))
      break
    case '':
      totalPassing++
      console.log(chalk.green(`${paddedTestName} pass`))
      break
    default:
      console.log(chalk.red(`${paddedTestName} ${testResult}`))
      break
  }
  console.log()
})

console.log('\n\n')
if (totalPassing === tests.length) {
  console.log(chalk.green('CONGRATULATIONS! All methods work!'))
} else {
  console.log(
    chalk.yellow(
      'At least one method is not working ... keep going. You got this!'
    )
  )
}
