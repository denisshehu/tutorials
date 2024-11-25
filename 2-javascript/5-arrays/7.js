const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers);

const slice = combinedNumbers.slice(0, 4);
console.log(slice);

const combinedNumbers2 = [...numbers1, ...numbers2];
console.log(combinedNumbers2);

const array = [...numbers1, 0, ...numbers2];
console.log(array);
