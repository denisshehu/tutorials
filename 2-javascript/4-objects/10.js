console.log(Math.round(3.14)); // 3
console.log(Math.floor(4.6)); // 4
console.log(Math.ceil(4.2)); // 5

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(25)); // 5

console.log(Math.random());

let min = 1,
  max = 10;
const randomInteger = Math.round(Math.random() * (max - min) + min);
console.log(randomInteger);
