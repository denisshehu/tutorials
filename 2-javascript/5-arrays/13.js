const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number ** 2);
console.log(squaredNumbers); // [ 1, 4, 9, 16, 25 ]

const letters = ["a", "b", "c", "d", "e"];
const upperCaseLetters = letters.map((letter) => letter.toUpperCase());
console.log(upperCaseLetters); // [ 'A', 'B', 'C', 'D', 'E' ]

const employees = [
  { id: 1, name: "Denis", email: "DenisShehu1409@gmail.com" },
  { id: 2, name: "Dea", email: "DeaShehu@gmail.com" },
  { id: 3, name: "Kiki", email: "KetlinHila@gmail.com" },
];

const updatedEmployees = employees.map((employee) => ({
  ...employee,
  email: employee.email.toLowerCase(),
}));

console.log(updatedEmployees);
/*
[
  { id: 1, name: 'Denis', email: 'denisshehu1409@gmail.com' },
  { id: 2, name: 'Dea', email: 'deashehu@gmail.com' },
  { id: 3, name: 'Kiki', email: 'ketlinhila@gmail.com' }
]
*/
