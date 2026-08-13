// Version 2 de este problema, cambiamos un poco la logica
// e implementamos un set en vez de un array, 
// para mejorar el rendimiento a O(1) constante.

const fs = require('fs');

/**
 * 
 * @param {number} n 
 * @param {string} s 
 * @returns {number}
 */

const resolver = (n,s) => {

    let contador = 0;
    const vistos = new Set();

    for(let i = 0; i < n; i++){

        if(!vistos.has(s[i])) {

            vistos.add(s[i]);
            const restantes = n - i;
            contador += restantes;

        }
    }

    return contador;

}

const main = () => {

    const input = fs.readFileSync(0,'utf-8').trim().split(/\s+/);
    const t = parseInt(input[0]);
    let ptr = 1;
    const resultados = [];

    for(let i = 0; i < t; i++){

        const n = parseInt(input[ptr++]);
        const s = input[ptr++];
        resultados.push(resolver(n,s));

    }

    console.log(resultados.join('\n'));

};

main();