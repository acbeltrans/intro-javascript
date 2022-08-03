/**
 * Funciones
 */

const saludar = function (nombre) {
    return `Bienvenid@ ${nombre} al mundo de los michis`;
}

// FUNCIONES DE FLECHA

// Si tiene un único return se puede hacer esta versión simplificada
const nuevoSaludoCorto = (verbo) => `Aquí ${verbo} mundo de los michis`;

const nuevoSaludo = (verbo) => {
    return `Aquí ${verbo} mundo de los michis`;
}

// Para retornar un objeto con una función de flecha usar paréntesis
const getMichi = (nombre, edad) => ({
    michiId: parseInt(Math.random()),
    nombre: nombre,
    edad: edad,
    comidaFavorita: "La michi lata"
})

console.log("Saludar: ", saludar("Karen"));
console.log("Nuevo saludo corto: ", nuevoSaludoCorto("entrando al"));
console.log("Nuevo saludo: ", nuevoSaludo("amando el"));
console.log("Obtener michi: ", getMichi("Aldo", 1));