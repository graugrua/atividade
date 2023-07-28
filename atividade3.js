var entrada3 = require("readline-sync");
var tabuada = parseInt(entrada3.question("qual tabuada vc quer ? :"));
for (var i = 1; i <= 10; i++) {
    console.log(i * tabuada);
}
