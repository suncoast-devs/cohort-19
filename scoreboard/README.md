# Scoreboard

## How to get started

## Prevent Default / Page refreshing

## Daniel

when you want to update an "inner text" or something similar on the site itself, the syntax should always be: document.querySelector(/tag/).inner text = /value change/

As in, you cannot do the below to update the website const team1Name = document.querySelector(/tag/).innerText team1Name = 0

Or const team1Name = document.querySelector(/tag/) team1Name.innerText = 0

# PEDAC - Pressing the Team One Add Score

P - When the user presses the + button for team one, add one point to the team's score displayed on the page inside the corresponding `<h3>`
E - When starting the points are 0, pressing the + now the points value is 1

- When points are 1, press +, now the points are 2
  D - The Team One Plus Button
- The current Team One Score
- Maybe the click event
- The `<h3>` where we display the score

A

- Make the + button clickable
- Define where the score will be changed
- If the button is pressed increment the Score
- Pass the numeric score to the display
