// constructor function

function Dog(name, breed, age, weight) {
  // this = {};

  this.name = name;
  this.breed = breed;
  this.age = age;
  this.weight = weight;

  this.eat = function () {
    console.log(`${this.name}: Chomp!`);
  };

  this.bark = function () {
    console.log(`${this.name}: Woof!`);
  };

  //   return this;
}

const dog = new Dog("Marley", "Chocolate Lab", 3, 30);
console.log(dog);
/*
Dog {
  name: 'Marley',
  breed: 'Chocolate Lab',
  age: 3,
  weight: 30,
  eat: [Function (anonymous)],
  bark: [Function (anonymous)]
}
*/
