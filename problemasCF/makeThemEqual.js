// Problema de Round 747 Div. 2 C.Make Them Equal /// ACEPTADO
// Cuidado porque Codeforces da la consigna en 1-based para recorrer la cadena
// pero en los lenguajes de programacion se usan los indices la 0-based

const fs = require("fs");

/**
 *
 * @param {number} n
 * @param {string} c
 * @param {string} unString
 * @returns
 */

const resolver = (n, c, unString) => {
  let todosIguales = true;

  for (let i = 0; i < n; i++) {
    if (unString[i] !== c) {
      todosIguales = false;
      break;
    }
  }
  if (todosIguales) return 0;

  // Caso con una operacion, caso simple

  let ptrCandidatos = Math.trunc(n / 2);

  for (ptrCandidatos; ptrCandidatos < n; ptrCandidatos++) {
    // imprimimos ptrCandidatos + 1 para adaptar el indice a 1-based
    if (unString[ptrCandidatos] === c) return `1\n${ptrCandidatos + 1}`;
  }

  // Caso con dos operaciones, el caso mas complejo.

  return `2\n${n} ${n - 1}`;
};

const main = () => {
  const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/);
  const t = parseInt(input[0]);
  let ptr = 1;
  const resultados = [];

  for (let i = 0; i < t; i++) {
    const n = parseInt(input[ptr++]);
    const c = input[ptr++];
    const unString = input[ptr++];
    resultados.push(resolver(n, c, unString));
  }

  console.log(resultados.join("\n"));
};

main();
