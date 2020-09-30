# React Calculator

Problem:

Create a simple calculator that will allow users to add, subtract, multiply, and divide numbers.

Examples:
`1 + 5 = 6`
`8 - 4 = 4`

Data Structures

Two numbers (call these operands)
Operation (+, - , \*, /)
Calculation (to do the adding, subtracting, multiplying, and dividing)
Buttons for numbers
Buttons for operators
Buttons for equals (the calculation)
Button for clear

- Forget the two numbers involved in the calculation
- Forget the operator involved in the calculation
- Reset the display to `0`
  Display area (shows a number)

Possible states:

- First number/operand
- Second number/operand
- Operator
- Current value in the display

Algorithm

- Initial state:
  - Display has `0`
  - First operand has null
  - Second operand has null
  - Operator has null
- User clicks digit
  - Store that digit as the first operand
  - Update the display to show that digit
- User clicks operator (+, x, /, -)
  - Do nothing with the first operand, leave it alone
  - Do nothing with the display, leave it alone
  - Store the operator
- User clicks digit
  - Store that digit as the SECOND operand
  - Update the display to show the second digit
- User clicks =
  - Calculate result
  - Update display to show the result
- User clicks AC
  - Clear the first operand
  - Clear the second operand
  - Clear the operator
  - Reset the display to 0
