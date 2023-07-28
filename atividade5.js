var entrada5 = require("readline-sync");
var ns = [];
var nt = 0;
var nma = -99999999999999999999999999999999999999999999;
var nme = 99999999999999999999999999999999999999999999;
for (var i = 0; i < 10; i++) {
    var n = parseInt(entrada5.question("digite um numero :"));
    ns[i] = n;
    nt += n;
}
for (var i = 0; i < ns.length; i++) {
    if (ns[i] > nma) {
        nma = ns[i];
    }
}
for (var i = 0; i < ns.length; i++) {
    if (ns[i] < nme) {
        nme = ns[i];
    }
}
console.log("o maior e: " + nma + " o menor e: " + nme + " e a media e: " + nt / 10);
