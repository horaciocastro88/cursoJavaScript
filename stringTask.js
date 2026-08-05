// Practicamos con el ejercicio A. String Task de Round 89 Div. 2

const fs =  require('fs');

/**
 * 
 * @param {string} input 
 * @returns {string}
 */

const resolver = (input) => {

    let minus = input.toLowerCase();

    // Usamos una expresion regex junto a replaceAll

    minus = minus.replaceAll(/[aeiouy]/gi, "");

    const resultado = '.' + minus.split('').join('.');

    return resultado;

    /*
    return input
        .toLowerCase()                
        .replace(/[aeiouy]/g, "")     
        .replace(/(.)/g, ".$1");

    En lugar de dividir la cadena en un array y volver a unirla, 
    usamos otra expresión regular. El patrón (.) captura cualquier carácter
     (que a este punto solo serán consonantes), y .$1 lo reemplaza por un 
     punto seguido del carácter capturado. Es más eficiente en términos de memoria y 
     resuelve el problema de las cadenas vacías.

    */    

};

const main = () => {

    const input = fs.readFileSync(0,'utf-8').trim();

    console.log(resolver(input));

};

main();