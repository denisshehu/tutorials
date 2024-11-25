// string
let favoriteFruit = "Apple",
  favoriteProgrammingLanguage = `JavaScript`;
console.log(
  `${favoriteFruit} is a ${typeof favoriteFruit}. ${favoriteProgrammingLanguage} is a ${typeof favoriteProgrammingLanguage}.`
);

// number
let number = 10;
let pi = 3.14;
console.log(`${number} is a ${typeof number}. ${pi} is a ${typeof pi}.`);

// BigInt
let veryLargeNumber = 1000n;
console.log(`${veryLargeNumber} is a ${typeof veryLargeNumber}.`);

// boolean
let lovesCoding = true;
console.log(`${lovesCoding} is a ${typeof lovesCoding}.`);

// undefined
let favoriteColor;
console.log(`${favoriteColor} is ${typeof favoriteColor}.`);

// null
favoriteFruit = null;
console.log(`${favoriteFruit} is an ${typeof favoriteFruit}.`);

// Symbol
const uniqueKey = Symbol();
console.log(typeof uniqueKey);

// object
let course = {
  name: "JavaScript for beginners",
  durationInHours: 3,
};
console.log(`course is an ${typeof course}.`);
