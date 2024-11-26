const numbers = [5, 4, 3, 2, 1];

numbers.push(7, 8, 9);
console.log(numbers); // [ 5, 4, 3, 2, 1, 7, 8, 9 ]

numbers.unshift(25, 24);
console.log(numbers); // [ 25, 24, 5, 4, 3, 2, 1, 7, 8, 9 ]

numbers.splice(2, 0, 100, 101);
console.log(numbers); // [ 25, 24, 100, 101, 5, 4, 3, 2, 1, 7, 8, 9 ]
