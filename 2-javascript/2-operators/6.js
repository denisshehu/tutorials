// falsy values: undefined, null, 0, false, "", NaN

console.log(false || "Denis"); // "Denis"
console.log(false || 1 || 2); // 1

console.log("red" || "green"); // red
console.log("green" || "red"); // green
console.log("" || "red"); // red

console.log(0 || 5); // 5
