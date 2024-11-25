// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// let j = 0;
// do {
//   if (j % 2 === 0) {
//     j++;
//     continue;
//   }
//   console.log(j);
//   j++;
// } while (j < 10);

// const object = { a: 1, b: 2, c: 3, d: 4 };
// for (const key in object) {
//   if (object[key] % 2 === 0) {
//     continue;
//   }
//   console.log(object[key]);
// }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const element of array) {
  if (element % 2 === 0) {
    continue;
  }
  console.log(element);
}
