function getMaximumNumber(number1, number2) {
  return number1 >= number2 ? number1 : number2;
}

function fizzBuzz(number) {
  if (number % (3 * 5) === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
}

function getEvenNumbers(array) {
  for (const element of array) {
    if (element % 2 === 0) {
      console.log(element);
    }
  }
}

function getOddNumbers(array) {
  for (const element of array) {
    if (element % 2 !== 0) {
      console.log(element);
    }
  }
}

// console.log(getMaximumNumber(2, 2));

// console.log(fizzBuzz(6));
// console.log(fizzBuzz(10));
// console.log(fizzBuzz(13));
// console.log(fizzBuzz(15));

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
getEvenNumbers(array);
console.log();
getOddNumbers(array);
