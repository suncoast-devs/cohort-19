// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }

// document.addEventListener('DOMContentLoaded', main)

function handleClickSquare(event) {
  const thingClickedOn = event.target
  thingClickedOn.textContent = 'X'
}

const allSquares = document.querySelectorAll('li')

allSquares.forEach(element =>
  element.addEventListener('click', handleClickSquare)
)
