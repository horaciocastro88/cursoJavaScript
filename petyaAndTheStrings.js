// A.Petya And Strings Beta Round 85 Div.2 Only
// Aceptado por codeforces

const fs = require('fs');

function resolver(f, s){

    const firstStr = f.toLowerCase();
    const secondStr = s.toLowerCase();
    let contador = 0;

    for(let i = 0; i < firstStr.length; i++){
        
        // En una comparacion lexicografica, el primer caracter diferente
        // determina el resultado completo.
        
        if(firstStr[i] > secondStr[i]) return 1;
        if(firstStr[i] < secondStr[i]) return -1;

    }

    return 0;

}

function main() {

    const input = fs.readFileSync(0,'utf-8').trim().split(/\r?\n/);
    console.log(resolver(input[0], input[1]));
}

main();

