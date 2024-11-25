// factory function

// function getDog(name, breed, age, weight) {
//   return {
//     name: name,
//     breed: breed,
//     age: age,
//     weight: weight,
//     eat() {
//       console.log("Chomp!");
//     },
//     bark() {
//       console.log("Woof!");
//     },
//   };
// }

function getDog(name, breed, age, weight) {
  return {
    name,
    breed,
    age,
    weight,
    eat() {
      console.log("Chomp!");
    },
    bark() {
      console.log("Woof!");
    },
  };
}

console.log(getDog("Max", "Dachshund", 5, 6));
console.log(getDog("Marley", "Chocolate Lab", 3, 30));
