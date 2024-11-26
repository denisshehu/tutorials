const dog = {
  name: "Max",
  breed: "Dachshund",
  age: 5,
  weight: 6,
  eat: function () {
    console.log("Chomp!");
  },
  bark() {
    console.log("Woof!");
  },
};

dog.eat(); // Chomp!
dog.bark(); // Woof!
