const { readFile, writeFile } = require("fs").promises;
// const util = require("util");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const start = async () => {
//   try {
//     const first = await readFilePromise("./content/first.txt", "utf8");
//     const second = await readFilePromise("./content/second.txt", "utf8");
//     await writeFilePromise(
//       "./content/result-mind-grenade.txt",
//       `This is awesome: ${first} | ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-grenade.txt",
      `This is awesome: ${first} | ${second}`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
