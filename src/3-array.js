/**
 * Array
 */

// Instead of using the push method, use the spread operator.

const life = ['Huggin', 'Adopt', 'Play with', 'Dance with']
let moreLife = [...life, 'Mimir with']

console.log(moreLife)

const lifeHappily = moreLife.map(function (meow) {
  return meow + ' michis'
})

console.log(lifeHappily)
