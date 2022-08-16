/**
 * Variables and Constants
 */

const name = 'Aldo'
const lastName = 'Peluche'

let givenValue = 5

console.log(`${name} ${lastName} ${givenValue}`)

// Excellent example to understand the scope of variables in JavaScript
if (true) {
  let givenValue = 3
  console.log(`Value given inside the conditional: ${givenValue}`)
}

console.log(`Value given outside the conditional: ${givenValue}`)
