const numbers = [6, 4, 8, 2, 5, 3, 1];
numbers.sort();
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 8 ]

const letters = ["a", "b", "c", "d"];
letters.reverse();
console.log(letters); // [ 'd', 'c', 'b', 'a' ]

const employees = [
  { id: 1, name: "Denis" },
  { id: 2, name: "Dea" },
  { id: 3, name: "Kiki" },
];

employees.sort((e1, e2) => {
  const name1 = e1.name.toLowerCase();
  const name2 = e2.name.toLowerCase();

  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  } else {
    return 0;
  }
});

console.log(employees);
/*
[
  { id: 2, name: 'Dea' },
  { id: 1, name: 'Denis' },
  { id: 3, name: 'Kiki' }
]
*/
