const person = {
  name: "Denis",
};

console.log(person);

person.age = 26;
console.log(person);

person.favoriteColor = "Blue";
console.log(person);

delete person.favoriteColor;
console.log(person);

person.greet = function () {
  console.log("Hello!");
};

console.log(person);
person.greet();

// person = {}; // TypeError: Assignment to constant variable.
