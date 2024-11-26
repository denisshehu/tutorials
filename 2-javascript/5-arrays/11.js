const numbers1 = [2, 4, 6, 8, 10];
const areAllEven = numbers1.every((number) => number % 2 === 0);
console.log(areAllEven); // true

const numbers2 = [1, 3, 5, 7, 8, 9];
const hasAtLeastOneEvenNumber = numbers2.some((number) => number % 2 === 0);
console.log(hasAtLeastOneEvenNumber); // true
