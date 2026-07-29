// Una version con un estilo un poco mas actual y profesional

const fs = require('fs');

function resolver(word){

    if(word.length > 10){
        const middle = word.length - 2;
        return `${word.at(0)}${middle}${word.at(-1)}`;
    }

    return `${word}`;

}

function main(){

    // No necesitamos limpiar cada palabra individualmente para quitar el \r
    const input = fs.readFileSync(0,'utf-8').trim().split(/\r?\n/);
    const words = input.slice(1);

    words.forEach( word => console.log(resolver(word) ) );
}

main();