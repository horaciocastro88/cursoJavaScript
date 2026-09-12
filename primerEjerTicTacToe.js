// El primer ejercicio es solo de seleccionar elementos
// usando el DOM

const elementosParrafo = document.getElementsByTagName("p");

console.log("Primer ejercicio:");
console.log(elementosParrafo);
console.log(elementosParrafo[0]);

const laX = document.querySelector("#p1-symbol");

console.log("Segundo ejercicio:");
console.log(laX);
console.log(laX?.textContent);

const otraX = document.getElementById("p1-symbol");

console.log("Otra variante del segundo ejercicio: ");
console.log(otraX);
console.log(otraX?.textContent);

const lasCasillas = document.querySelectorAll(".square");

console.log("Tercer ejecicio:");
console.log(lasCasillas);

const elH2 = document.querySelector("h2");

console.log("Cuarto Ejercicio:");
console.log(elH2);
console.log(elH2?.textContent);

console.log("Otra variante:");

const otroH2 = document.getElementsByTagName("h2");

// Devuelve un array con un solo elemento.
console.log(otroH2);
console.log(otroH2[0]?.textContent);
