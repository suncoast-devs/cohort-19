// The function to call when the user types in
// the input field for team one
function handleChangeTeamOneName(event) {
  // Get the value of the input and put that in a variable
  const elementThatChanged = event.target
  const inputFieldValue = elementThatChanged.value

  // Get the element for the team name
  const teamNameElement = document.querySelector('.team1 h2')

  // Set that element's textContent to the variable
  teamNameElement.textContent = inputFieldValue
}

function main() {
  // This code runs once the page is totally loaded

  // Give me an input that is a child anywhere below something
  // that has a class of `team1`

  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleChangeTeamOneName)
}

document.addEventListener('DOMContentLoaded', main)
