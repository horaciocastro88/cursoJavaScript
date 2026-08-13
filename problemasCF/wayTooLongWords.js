// Problema A.WayTooLongWords.js de Beta Round 65 Div 2

const fs = require('fs');

function resolver(word){

    word = word.trim()          // importante: habia un ' ' escondido al final de cada palabra

    if (word.length > 10) {

        const firstLetter = word[0];
        const lastLetter = word[(word.length - 1)];
        const middle = (word.length - 2).toString();

        return `${firstLetter}${middle}${lastLetter}`;
    }

    return `${word}`
}

function main () {

    const input = fs.readFileSync(0,'utf-8').trim().split('\n');
    const n = parseInt(input[0],10);

    for(let i = 1; i <= n; i++) {
        console.log(resolver(input[i]));
    }
}

main();