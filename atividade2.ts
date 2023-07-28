const entrada2 = require("readline-sync");
let n2 : number = 0


for (let i = 1; i <= 5; i++) {
    let n: number = parseFloat(entrada2.question("digite a "+i+' nota: '))
    n2 = n2 + n;
}

console.log(n2/5);