const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();
console.log(lastElement); // 5
console.log(numbers); // [ 1, 2, 3, 4 ]

const firstElement = numbers.shift();
console.log(firstElement); // 1
console.log(numbers); // [ 2, 3, 4 ]

const middleElement = numbers.splice(1, 1);
console.log(middleElement); // [ 3 ]
console.log(numbers); // [ 2, 4 ]
