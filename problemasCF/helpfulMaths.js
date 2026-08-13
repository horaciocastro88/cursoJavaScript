// A.Helpfull Maths from Round197 Div 2

const fs = require('fs');

/**
 * 
 * @param {string} entrada 
 * @returns {string}
 */

const resolver = (entrada) => {

    const limpio = entrada.trim();
    const arregloOrdenado = limpio.split('+').sort();
    const respuesta = arregloOrdenado.join('+');

    return respuesta;

};

const main = () => {

    const input = fs.readFileSync(0,'utf-8');

    console.log(resolver(input));

};

main();