let a = { value: 10 };
let b = a;
b.value = 20;

console.log(a); // { value: 20 }
console.log(b); // { value: 20 }

let c = { value: 10 };
let d = {};
Object.assign(d, c);
d.value = 20;

console.log(c); // { value: 10 }
console.log(d); // { value: 20 }

let e = { value: 10 };
let f = { ...e };
f.value = 20;

console.log(e); // { value: 10 }
console.log(f); // { value: 20 }
