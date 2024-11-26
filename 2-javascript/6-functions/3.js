function multiply(number1, number2) {
  return number1 * number2;
}

console.log(multiply(2, 2)); // 4

console.log(multiply(2)); // NaN (number2 is undefined)

console.log(multiply(2, 2, 2)); // 4

// function multiply() {
//   let product = 1;
//   for (const number of arguments) {
//     product *= number;
//   }
//   return product;
// }
