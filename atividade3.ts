const entrada3 = require("readline-sync");
let tabuada: number = parseInt(entrada3.question("qual tabuada vc quer ? :"));

for (let i = 1; i <= 10; i++){
    console.log(i*tabuada)
}