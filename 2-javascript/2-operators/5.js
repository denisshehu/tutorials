// or
console.log("Or");
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);
console.log();

// and
console.log("And");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);
console.log();

// && is evaluated before ||

// not
console.log("Not");
console.log(!true);
console.log(!false);
console.log();

// null coalesing operator
let a = null;

const result = a ?? 1;
console.log(result);

// result is equal to:
const result2 = a !== null && a !== undefined ? a : 1;
console.log(result2);

let b = 10;
const result3 = b ?? 2;
console.log(result3);
