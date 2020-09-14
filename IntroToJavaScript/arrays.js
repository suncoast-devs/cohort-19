const scores = [98, 'Jason', 42, 100]
scores

const arrayWithDifferentKinds = [42, 'Gavin']
arrayWithDifferentKinds

scores[0] // first
scores[1] // second
scores[2] // third

scores[3] = -5
console.log(scores)

scores.length

for (let index = 0; index < scores.length; index++) {
  const currentElement = scores[index]

  // Console.WriteLine
  console.log(currentElement)
}
