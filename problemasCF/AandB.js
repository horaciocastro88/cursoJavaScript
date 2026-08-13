// Problema llamada D. A and B Round 1054 Div. 3

const fs = require('fs');

/**
 * 
 * @param {number[]} arreglo 
 * @returns {number}
 */

const calcularCosto = (arreglo) => {

    const k = arreglo.length;

    if ( k === 0)
        return 0;

    const mid = Math.floor(k / 2);

    const valorMediana = arreglo[mid] - mid;

    let intercambios = 0;

    for ( let i = 0; i < k;i++){
        intercambios += Math.abs((arreglo[i] - i) - valorMediana);
    }
    
    return intercambios;

};

/**
 * 
 * @param {number} longitud 
 * @param {string} cadena 
 * @returns {number}
 * 
 */

const resolver = (longitud, cadena) => {

    let listaA = [];
    let listaB = [];

    for (let i = 0; i < longitud; i++) {

        if (cadena[i] === 'a')
            listaA.push(i);

        if (cadena[i] === 'b')
            listaB.push(i);

    }

    const CostoA = calcularCosto(listaA);
    const CostoB = calcularCosto(listaB);

    return Math.min(CostoA, CostoB);

};

const main = () => {

    const input = fs.readFileSync(0,'utf-8').trim().split(/\s+/);

    const t = parseInt(input[0]);
    let ptr = 1;                    // puntero auxiliar para recorrer el string de entrada
    const resultados = [];

    for(let  i = 0; i < t; i++) {

        const longitud = parseInt(input[ptr++]);        // ej. primero trae el string de pos 1 y luego suma ptr y queda en 2.
        const cadena = input[ptr++];

        resultados.push(resolver(longitud, cadena));

    }

    // imprimimos todo al final separado por \n
    // valiendonos de un arreglo auxiliar para ir guardando los resultados.

    console.log(resultados.join('\n'));
    
};

main();