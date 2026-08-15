// Otra version de make them equal pero usando regex.

const fs = require("fs");

/**
 *
 * @param {number} n
 * @param {string} c
 * @param {string} unString
 * @returns
 */

const resolver = (n, c, unString) => {
  /**
   *
   * @param {string} cadena
   * @param {string} letra
   * @returns {boolean}
   */

  const todosIguales = (cadena, letra) =>
    new RegExp(`^${letra}+$`).test(cadena);

  if (todosIguales(unString, c)) return 0;

  return 1;
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
