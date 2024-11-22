const { readFile, writeFile } = require("fs");

console.log("Start.");

readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first} || ${second}`,
      (error, result) => {
        if (error) {
          console.log(error);
          return;
        }
        // console.log(result);
        console.log("End.");
      }
    );
  });
});

console.log("Ready to start with the next one.");
