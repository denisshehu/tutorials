function multiply(...arguments) {
  return arguments.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}

console.log(multiply(1, 2, 3, 4, 5)); // 120

function multiplyElements(multiplier, ...numbers) {
  return numbers.map((number) => number * multiplier);
}

console.log(multiplyElements(2, 1, 2, 3, 4, 5)); // [ 2, 4, 6, 8, 10 ]
