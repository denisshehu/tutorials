const numbers = [1, 2, 3, 4, 5];

const lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);

const firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);

const middleElement = numbers.splice(1, 1);
console.log(middleElement);
console.log(numbers);
