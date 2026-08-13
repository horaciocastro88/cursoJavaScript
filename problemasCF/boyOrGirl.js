// A. Boy or girl de Round 146 Div2

const fs = require('fs');

/**
 * @param {string} username
 * @returns {string}
 */

const resolver = (username) => {

    const limpia = username.trim();
    const strSet = new Set(limpia);

    // Si el número de caracteres distintos en el nombre de usuario 
    // de una persona es impar, entonces es hombre.

    return strSet.size % 2 !== 0 ? `IGNORE HIM!`: `CHAT WITH HER!`;

}

const main = () => {

    const input = fs.readFileSync(0,'utf-8');

    console.log(resolver(input));

}

main();