/**
 * Destructuring or Destructuring Assignment
 */

const michi = {
  name: 'Aldo',
  power: 'Play all day',
  key: 'The blue ball',
  rank: 'supermichi',
}

// Extract the property inside the object. No matter the order
const { name, power, key } = michi

console.log(name, power, key)

// Destructuring in the argument
// rank = "supermichi" in case the range object is undefined
// If you want to return said object, change the name of the variables so that it does not generate a conflict
const use_Context = ({ name, power, rank = 'supermichi' }) => ({
  theName: name,
  thePower: power,
  theRange: rank,
  favoriteFood: {
    can: 'The purple one',
  },
})

const {
  theName,
  thePower,
  favoriteFood: { can },
} = use_Context(michi)
console.log(theName, thePower, can)
