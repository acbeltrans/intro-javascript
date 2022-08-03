/**
 * Desestructuración o Asignación desestructurante
 */


const michi = {
    nombre: "Aldo",
    poder: "Jugar todo el día",
    clave: "La pelota azul",
    rango: "supermichi"
};

// Extrae la propiedad dentro del objeto. No importa el orden
const { nombre, poder, clave } = michi;

console.log(nombre, poder, clave);

// Desestructuración en el argumento
// rango = "supermichi" en caso de que en el objeto rango sea undefined
// Si se quiere retornar dicho objeto se le cambia el nombre a las variables para que no genere conflicto
const use_Context = ({nombre, poder, rango = "hipermichi"}) => ({
    suNombre:nombre,
    suPoder:poder,
    suRango:rango,
    comidaFavorita: {
        lata: "La moradita"
    }
})

const {suNombre, suPoder, comidaFavorita: {lata}} = use_Context(michi);
console.log(suNombre, suPoder, lata);