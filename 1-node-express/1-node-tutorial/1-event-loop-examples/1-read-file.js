const { readFile } = require("fs");

console.log("Ready to start first task.");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
  console.log("First task completed.");
});

console.log("Ready to start second task");
