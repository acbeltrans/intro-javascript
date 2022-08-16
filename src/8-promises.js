/**
 * Promises
 */

import { getMichiById } from './7-exports'

const getSuperMichiById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const superMichi = getMichiById(id)
      superMichi ? resolve(superMichi) : reject('Michi not found :(')
    }, 500)
  })
}

getSuperMichiById(3).then(console.log).catch(console.warn)
