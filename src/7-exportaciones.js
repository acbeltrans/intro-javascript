/**
 * Exportaciones
 */

import superMichis, {owners} from "./data/supermichis";

console.log(superMichis);
console.log(owners);

export const getMichiById = (id) => superMichis.find(michi => michi.id === id);

console.log(getMichiById(4))

const getMichibyOwner = (owner) => superMichis.filter(michis => michis.owner === owner)

console.log(getMichibyOwner("Michivel"));
