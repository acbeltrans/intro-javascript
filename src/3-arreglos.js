/**
 * Arreglos
 */

// En vez de usar método push usar el operador spread.

const laVida = ["Abrazar", "Adoptar", "Jugar con", "Bailar con"];
let masDeLaVida = [...laVida, "Mimir con" ];

console.log(masDeLaVida);

const laVidaConFelicidad = masDeLaVida.map( function(meow) {
    return meow + " michis";
} )

console.log(laVidaConFelicidad);