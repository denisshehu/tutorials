const employees = [
  {
    id: 1,
    name: "Denis",
  },
  {
    id: 2,
    name: "Dea",
  },
  {
    id: 3,
    name: "Kiki",
  },
];

const employee = employees.find(function (e) {
  return e.name === "Denis";
});

console.log(employee); // { id: 1, name: 'Denis' }

// also .findIndex()
