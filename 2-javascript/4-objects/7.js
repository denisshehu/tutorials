let a = 10;
let b = a;
a = 20;

console.log(a); // 20
console.log(b); // 10

let c = { value: 10 };
let d = c;
c.value = 20;

console.log(c); // 20
console.log(d); // 20
