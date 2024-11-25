const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

const employees = [
  { id: 1, name: "Denis", role: "Scientist" },
  { id: 2, name: "Dea", role: "Scientist" },
  { id: 3, name: "Kiki", role: "Artist" },
];

const scientists = employees.filter((e) => e.role === "Scientist");
console.log(scientists);
