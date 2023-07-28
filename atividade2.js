var entrada2 = require("readline-sync");
var n2 = 0;
for (var i = 1; i <= 5; i++) {
    var n = parseFloat(entrada2.question("digite a " + i + ' nota: '));
    n2 = n2 + n;
}
console.log(n2 / 5);
