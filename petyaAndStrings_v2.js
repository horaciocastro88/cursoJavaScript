// Version con otro estilo de codigo. Aceptado por codeforces.

const fs = require('fs');

/** 
* @param {string};
* @param {string};
* @returns {number};
*/

const resolver = (primerStr, segundoStr) => {

    return Math.sign(primerStr.toLowerCase().localeCompare(segundoStr.toLowerCase()));

};

const main = () => {

    const input = fs.readFileSync(0,'utf-8').trim().split(/\r?\n/);
    const [primerStr, segundoStr] = input;
    console.log(resolver(primerStr, segundoStr));

};

main();