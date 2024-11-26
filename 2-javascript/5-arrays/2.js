const numbers = [5, 4, 3, 2, 1, 3];

const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree); // 2

const indexOfTen = numbers.indexOf(10);
console.log(indexOfTen); // -1
console.log(numbers[indexOfTen]); // undefined

const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree); // 5

console.log(numbers.includes(10)); // false
console.log(!numbers.includes(10)); // true
