/**
 * Variables y Constantes
 */

const nombre = "Aldo";
const apellido = "Peluche";

let valorDado = 5;

console.log(`${nombre} ${apellido} ${valorDado}`);

// Excelente ejemplo para entender el scope de las variables en JavaScript
if (true) {
    let valorDado = 3;
    console.log(`Valor dado dentro del comdicional: ${valorDado}`);
}

console.log(`Valor dado por fuera del comdicional: ${valorDado}`);