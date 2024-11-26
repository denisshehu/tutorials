const numbers = [1, 7, 13, 26];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum); // 47
