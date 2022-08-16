/**
 * Objects
 */

const getName = (name) => {
  const myName = `${name}, the one that treats me like supermichi`
  return myName
}

let michis = {
  name: ['Aldo', 'Mili', 'Lis'],
  race: 'Supermichi',
  age: 'Infinite',
  favoriteFood: {
    food: 'The big ones',
    tin: 'The ones that are very delicious',
  },
  friends: getName('Karen'),
}

console.table(michis)

console.log('Original Michis: ', michis)
// IMPORTANT: Here we are copying the reference to the memory space of this variable
const newMichis = michis
newMichis.age = 1
console.log('New michis: ', newMichis)
console.log('Original Michis changed: ', michis)

// To make a clone
const clonMichis = { ...michis }
clonMichis.age = 'Infinite'
console.log('Actual Michis: ', michis)
console.log('Michis clone: ', clonMichis)
