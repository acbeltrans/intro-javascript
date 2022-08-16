/**
 * Functions
 */

const greet = function (name) {
  return `Welcome@ ${name} to the world of the michis`
}

// ARROW FUNCTIONS

// If you have a single return you can do this simplified version
const shortNewGreeting = (verb) => `${verb} the world of the michis`

const newGreeting = (verb) => {
  return `${verb} the world of the michis`
}

// To return an object with an arrow function use parentheses
const getMichi = (name, age) => ({
  michiId: 1,
  name: name,
  age: age,
  favoriteFood: 'The michi tin',
})

console.log('Greet: ', greet('Karen'))
console.log('New short greeting: ', shortNewGreeting('Entering'))
console.log('New greeting: ', newGreeting('Loving'))
console.log('Get michi: ', getMichi('Aldo', 1))
