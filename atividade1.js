var entrada = require("readline-sync");
var numero = parseInt(entrada.question("até que numero vc quer ?:"));
for (var i = 0; i <= numero; i = i + 2) {
    console.log(i);
}
