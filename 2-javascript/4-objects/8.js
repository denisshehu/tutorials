const dog = {
  name: "Max",
  breed: "Dachshund",
  age: 5,
  weight: 6,
};

const keys = Object.keys(dog);
// console.log(keys); // [ 'name', 'breed', 'age', 'weight' ]

const values = Object.values(dog);
// console.log(values); // [ 'Max', 'Dachshund', 5, 6 ]

const entries = Object.entries(dog);
// console.log(entries);
/*
[
  [ 'name', 'Max' ],
  [ 'breed', 'Dachshund' ],
  [ 'age', 5 ],
  [ 'weight', 6 ]
]
*/

for (const key of Object.keys(dog)) {
  console.log(key); // name, breed, age, weight
}

for (const value of Object.values(dog)) {
  console.log(value); // Max, Dachshund, 5, 6
}

for (const entry of Object.entries(dog)) {
  console.log(entry); // [ 'name', 'Max' ], [ 'breed', 'Dachshund' ], [ 'age', 5 ], [ 'weight', 6 ]
}
