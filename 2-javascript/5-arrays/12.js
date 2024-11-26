const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers); // [ 1, 3, 5, 7, 9 ]

const employees = [
  { id: 1, name: "Denis", role: "Scientist" },
  { id: 2, name: "Dea", role: "Scientist" },
  { id: 3, name: "Kiki", role: "Artist" },
];

const scientists = employees.filter((e) => e.role === "Scientist");
console.log(scientists);
/*
[
  { id: 1, name: 'Denis', role: 'Scientist' },
  { id: 2, name: 'Dea', role: 'Scientist' }
]
*/
