const entrada4 = require("readline-sync");

let a: number = 0;
let b: number = 1;

console.log(a);

for(let i = 1; i <= 10; i++) {
  console.log(b);

  let d = a + b;
  a = b;
  b = d;
}