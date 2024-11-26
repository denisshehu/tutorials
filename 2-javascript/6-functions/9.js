// var is not (for-)block-scoped, but function-scoped
function display() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // 5
}

display(); // 0, 1, 2, 3, 4, 5

// let is block-scoped
