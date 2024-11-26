let numbers = [1, 2, 3, 4, 5];

// console.log(numbers); // [ 1, 2, 3, 4, 5 ]
// numbers.length = 0;
// console.log(numbers); // []

// console.log(numbers); // [ 1, 2, 3, 4, 5 ]
// const deletedNumbers = numbers.splice(0, numbers.length);
// console.log(numbers); // []
// console.log(deletedNumbers); // [ 1, 2, 3, 4, 5 ]

// console.log(numbers); // [ 1, 2, 3, 4, 5 ]
// numbers = [];
// console.log(numbers); // []

let duplicate = numbers;
numbers = [];
console.log(numbers); // []
console.log(duplicate); // [ 1, 2, 3, 4, 5 ]
