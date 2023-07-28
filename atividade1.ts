const entrada = require("readline-sync");
let numero: number = parseInt(entrada.question("até que numero vc quer ?:"));

for (let i = 0; i <= numero; i = i + 2){
    console.log(i)
}