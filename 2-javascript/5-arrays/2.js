const numbers = [5, 4, 3, 2, 1, 3];

const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree);

const indexOfTen = numbers.indexOf(10);
console.log(indexOfTen);
console.log(numbers[indexOfTen]);

const lastIndexOfThree = numbers.lastIndexOf(3);
console.log(lastIndexOfThree);

console.log(numbers.includes(10));
console.log(!numbers.includes(10));
