// string
let favoriteFruit = "Apple",
  favoriteProgrammingLanguage = `JavaScript`;
console.log(
  `${favoriteFruit} is a ${typeof favoriteFruit}. ${favoriteProgrammingLanguage} is a ${typeof favoriteProgrammingLanguage}.`
); // Apple is a string. JavaScript is a string.

// number
let number = 10;
let pi = 3.14;
console.log(`${number} is a ${typeof number}. ${pi} is a ${typeof pi}.`); // 10 is a number. 3.14 is a number.

// BigInt
let veryLargeNumber = 1000n;
console.log(`${veryLargeNumber} is a ${typeof veryLargeNumber}.`); // 1000 is a bigint.

// boolean
let lovesCoding = true;
console.log(`${lovesCoding} is a ${typeof lovesCoding}.`); // true is a boolean.

// undefined
let favoriteColor;
console.log(`${favoriteColor} is ${typeof favoriteColor}.`); // undefined is undefined.

// null
favoriteFruit = null;
console.log(`${favoriteFruit} is an ${typeof favoriteFruit}.`); // null is an object.

// Symbol
const uniqueKey = Symbol();
console.log(typeof uniqueKey); // symbol

// object
let course = {
  name: "JavaScript for beginners",
  durationInHours: 3,
};
console.log(`course is an ${typeof course}.`); // course is an object.
