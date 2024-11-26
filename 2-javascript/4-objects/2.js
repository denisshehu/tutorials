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
/*
{
  name: 'Max',
  breed: 'Dachshund',
  age: 5,
  weight: 6,
  eat: [Function: eat],
  bark: [Function: bark]
}
*/

console.log(getDog("Marley", "Chocolate Lab", 3, 30));
/*
{
  name: 'Marley',
  breed: 'Chocolate Lab',
  age: 3,
  weight: 30,
  eat: [Function: eat],
  bark: [Function: bark]
}
*/
