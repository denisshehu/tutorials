// or
console.log("Or");
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log();

// and
console.log("And");
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log();

// && is evaluated before ||

// not
console.log("Not");
console.log(!true); // false
console.log(!false); // true
console.log();

// null coalesing operator
let a = null;

const result = a ?? 1;
console.log(result); // 1

// result is equal to:
const result2 = a !== null && a !== undefined ? a : 1;
console.log(result2); // 1

let b = 10;
const result3 = b ?? 2;
console.log(result3); // 10
