function main() {
  // Define the initial score for Team One to be 0
  let teamOneScore = 0

  // Get the element for the team name
  const teamNameElement = document.querySelector('.team1 h2')

  console.log(teamNameElement)

  // The function to call when the user types in
  // the input field for team one
  function handleChangeTeamOneName(event) {
    // Get the value of the input and put that in a variable
    const elementThatChanged = event.target
    const inputFieldValue = elementThatChanged.value

    // Set that element's textContent to the variable
    teamNameElement.textContent = inputFieldValue
  }

  // This code runs once the page is totally loaded

  // Give me an input that is a child anywhere below something
  // that has a class of `team1`

  const teamOneInput = document.querySelector('.team1 input')
  teamOneInput.addEventListener('input', handleChangeTeamOneName)

  function incrementTheScoreForTeamOne() {
    console.log('I clicked the button')
    //  ✅ increment the Score
    teamOneScore = teamOneScore + 1
    console.log(teamOneScore)

    // - Pass the numeric score to the display
    //   ✅  Find the element where we want to display the score
    const teamOneScoreElement = document.querySelector('.team1 h3')
    console.log(teamOneScoreElement)
    //   - Replace the content of that element with the new score
  }

  // - Make the + button clickable
  //   ✅ Find the + button
  const teamOneAddButton = document.querySelector('.team1 .add')
  console.log(teamOneAddButton)

  //   ✅ - make the button clickable
  teamOneAddButton.addEventListener('click', incrementTheScoreForTeamOne)

  // - ✅ Define where the score will be changed
}

document.addEventListener('DOMContentLoaded', main)
