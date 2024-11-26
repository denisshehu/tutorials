const person = {
  name: "Denis",
};

console.log(person); // { name: 'Denis' }

person.age = 26;
console.log(person); // { name: 'Denis', age: 26 }

person.favoriteColor = "Blue";
console.log(person); // { name: 'Denis', age: 26, favoriteColor: 'Blue' }

delete person.favoriteColor;
console.log(person); // { name: 'Denis', age: 26 }

person.greet = function () {
  console.log("Hello!");
};

console.log(person); // { name: 'Denis', age: 26, greet: [Function (anonymous)] }
person.greet(); // Hello!

// person = {}; // TypeError: Assignment to constant variable.
