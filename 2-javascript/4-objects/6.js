// functions are objects!

function add(number1, number2) {
  return number1, number2;
}

const n = add;
// console.log(n(2, 2));

// number of parameters
// console.log(add.length);

function Programmer(name) {
  this.name = name;

  this.writeCode = function () {
    console.log("Coding in JavaScript");
  };
}

// console.log(Programmer.length);
// console.log(Programmer.constructor);

// const Programmer = new Function(
//   "name",
//   `
//     this.name = name;
//     this.writeCode = function () {
//         console.log("Coding in JavaScript");
//     };`
// );

const newProgrammer = new Programmer("Denis");
newProgrammer.writeCode();
