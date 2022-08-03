/**
 * Promesas
 */

import { getMichiById } from "./7-exportaciones";

 const getSuperMichiById = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=>{
            const superMichi = getMichiById(id);
            superMichi?resolve(superMichi):reject("No se encontró el michi :(");
        }, 500)
    })
 } 

 getSuperMichiById(3)
    .then( console.log )
    .catch( console.warn );