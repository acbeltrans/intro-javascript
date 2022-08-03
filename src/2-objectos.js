/**
 * Objetos
 */

const darNombre = (nombre) => {
    const miNombre = `${nombre}, la que me trata como supermichi`;
    return miNombre;
}

let michis = {
    nombre: ["Aldo", "Mili", "Lis"],
    raza: "Criolla",
    edad: "Infinita",
    comidaFavorita: {
        pepitas: "De las grandotas",
        lata: "De la moradita"
    },
    amigos: darNombre("Karen")
};

console.table(michis);

console.log("Michis original: ", michis);
// IMORTANTE: Aquí estámos copiando la referencia al espacio de memoria de esta variable
const nuevoMichis = michis;
nuevoMichis.edad = 1;
console.log("Nuevo michis: ", nuevoMichis);
console.log("Michis original cambiado: ", michis);

// Para hacer un clon
const clonMichis = {...michis};
clonMichis.edad = "Infinita";
console.log("Michis actual: ", michis);
console.log("Clon de michis: ", clonMichis);