// Version con otro estilo de codigo. Aceptado por codeforces.

const fs = require('fs');

/** 
* @param {string} primerStr
* @param {string} segundoStr
* @returns {number}
*/

const resolver = (primerStr, segundoStr) => {

    return Math.sign(primerStr.toLowerCase().localeCompare(segundoStr.toLowerCase()));

};

//  Si queremos usar el retorno implicito y una sola linea:
//  const resolver = (str1, str2) => Math.sign(str1.toLowerCase().localeCompare(str2.toLowerCase()));

const main = () => {

    const input = fs.readFileSync(0,'utf-8').trim().split(/\r?\n/);
    const [primerStr, segundoStr] = input;
    console.log(resolver(primerStr, segundoStr));

};

main();