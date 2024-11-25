let a = { value: 10 };
let b = a;
b.value = 20;

console.log(a); // 20
console.log(b); // 20

let c = { value: 10 };
let d = {};
Object.assign(d, c);
d.value = 20;

console.log(c); // 10
console.log(d); // 20

let e = { value: 10 };
let f = { ...e };
f.value = 20;

console.log(e); // 10
console.log(f); // 20
