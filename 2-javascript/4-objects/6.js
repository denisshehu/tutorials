// functions are objects!

function add(number1, number2) {
  return number1 + number2;
}

const n = add;
// console.log(n(2, 2)); // 4

// number of parameters
// console.log(add.length); // 2

function Programmer(name) {
  this.name = name;

  this.writeCode = function () {
    console.log("Coding in JavaScript");
  };
}

// console.log(Programmer.length); // 1
// console.log(Programmer.constructor); // [Function: Function]

// const Programmer = new Function(
//   "name",
//   `
//     this.name = name;
//     this.writeCode = function () {
//         console.log("Coding in JavaScript");
//     };`
// );

const newProgrammer = new Programmer("Denis");
newProgrammer.writeCode(); // Coding in JavaScript
