// function main() {
//   if (document.querySelector('h1.hello-world')) {
//     document.querySelector('h1.hello-world').textContent = 'Hello, World!'
//   }
// }

// document.addEventListener('DOMContentLoaded', main)

let theTextWeWillPutInTheSquareWhenClicked = 'X'

function handleClickSquare(event) {
  // Figure out what was clicked on
  const thingClickedOn = event.target

  // Before we do anything...
  //
  // Lets check if the square is already taken!
  //
  // if it is, then console.log a message, otherwise, handle the change to the cell
  if (thingClickedOn.classList.contains('taken')) {
    console.log('NOPES!')
    thingClickedOn.classList.add('not-allowed-click')
  } else {
    // Change the text content!
    thingClickedOn.textContent = theTextWeWillPutInTheSquareWhenClicked
    thingClickedOn.classList.add('taken')

    // Let's change the player to the opposite to give them a turn

    // If the current player is exactly the text X
    if (theTextWeWillPutInTheSquareWhenClicked === 'X') {
      // Then *ASSIGN* the text 'O' to current player
      theTextWeWillPutInTheSquareWhenClicked = 'O'
    } else {
      // Otherwise we were already an 'O', so become 'X'
      theTextWeWillPutInTheSquareWhenClicked = 'X'
    }
  }
}

const allSquares = document.querySelectorAll('li')

allSquares.forEach(element =>
  element.addEventListener('click', handleClickSquare)
)
