/**
 * Desestructuración de Arreglos
 */


const misMichis = ["Aldo", "Mili", "Lis"]

const [, miMili] = misMichis;

console.log("Arreglo misMichis: ", miMili);

const darNombresMichis = () => ["Lis", "Mili", "Aldo"];
console.log(darNombresMichis());

const [miLis, , miAldo] = darNombresMichis();
console.log(miLis, miAldo);

const use_State = (nombre) => {
    return [nombre, (nuevoNombre) => {return nombre=nuevoNombre}]
}

// Alternativa 1
console.log(use_State("Flor")[1]("Lis"));
// Alternativa 2
const [, setNombre] = use_State("Flor");
console.log(setNombre("Lis"));