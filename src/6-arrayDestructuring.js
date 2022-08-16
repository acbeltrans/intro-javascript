/**
 * Array Destructuring
 */

const theMichis = ['Aldo', 'Mili', 'Lis']

const [, myMili] = theMichis

console.log('Array theMichis: ', myMili)

const getMichisNames = () => ['Lis', 'Mili', 'Aldo']
console.log(getMichisNames())

const [myLis, , myAldo] = getMichisNames()
console.log(myLis, myAldo)

const use_State = (name) => {
  return [
    name,
    (newName) => {
      return (name = newName)
    },
  ]
}

// Alternative 1
console.log(use_State('Flor')[1]('Lis'))
// Alternative 2
const [, setName] = use_State('Flor')
console.log(setName('Lis'))
