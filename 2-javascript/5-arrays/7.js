const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers); // [ 1, 2, 3, 4, 5, 6 ]

const slice = combinedNumbers.slice(0, 4);
console.log(slice); // [ 1, 2, 3, 4 ]

const combinedNumbers2 = [...numbers1, ...numbers2];
console.log(combinedNumbers2); // [ 1, 2, 3, 4, 5, 6 ]

const array = [...numbers1, 0, ...numbers2];
console.log(array); // [ 1, 2, 3, 0, 4, 5, 6 ]
