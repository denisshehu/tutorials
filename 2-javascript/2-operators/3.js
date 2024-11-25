let a = 1;
let b = "1";

// loose equality (does not check id the data types are the same)
console.log(a == b); // true

// strong equality
console.log(a === b); // false

console.log(2 == "2"); // true
console.log(2 == "3"); // false

console.log(true == "1"); // true
console.log(false == "0"); // true

console.log(null == undefined); // true
console.log(null === undefined); // false
