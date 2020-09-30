# React Calculator

Problem:

Create a simple calculator that will allow users to add, subtract, multiply, and divide numbers.

Examples:
`1 + 5 = 6`
`8 - 4 = 4`

Data Structures

```
const [result, setResult] = useState(0)
const [firstOperandArray, setFirstOperandArray] = useState([])
const [secondOperandArray, setSecondOperandArray] = useState([])
const [enableSecondOperandArray, setEnableSecondOperandArray] = useState(false)
const [operators, setOperators] = useState([])
const [display, setDisplay] = useState(0)
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const operatorButtons = [‘/’, ‘*’, ‘-’, ‘+’]
```

Algorithm

- Enter first operand
- 1 or more of the digit buttons
- Append each digit to the first operand
- First operand entry ends when an operator is pressed
- Append each digit to display as clicked
- Enter operator
- stores state in both first operand and operator
- Enables entry of second operator
- Clears display
- Enter second operand
- 1 or more of the digit buttons
- Append each digit to the second operand
- second operand entry ends when an equal button is pressed
- Append each digit to display as clicked
- Enter equal button
- stores state second operand
- Calculates result
- Puts result on display
- AC button
- At any point of process clears all states

No idea how to handle decimal point yet.
