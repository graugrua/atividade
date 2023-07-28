var entrada4 = require("readline-sync");
var a = 0;
var b = 1;
console.log(a);
for (var i = 1; i <= 10; i++) {
    console.log(b);
    var d = a + b;
    a = b;
    b = d;
}
