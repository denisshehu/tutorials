// global
const name = "Denis";
console.log(name); // Denis

{
  const anotherName = "Dea";
}

// console.log(anotherName); // ReferenceError: anotherName is not defined

function greet() {
  const message = "Hello world!";
  console.log(message);
}

greet(); // Hello world!
// console.log(message); // ReferenceError: message is not defined
