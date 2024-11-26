for (let i = 0; i < 10; i++) {
  console.log(i); // 0, 1, 2
  if (i === 2) {
    break;
  }
}

// let i = 0;
// while (i < 10) {
//   console.log(i); // 0, 1, 2
//   if (i === 2) {
//     break;
//   }
//   i++;
// }

// let j = 0;
// do {
//   console.log(j); // 0, 1, 2
//   if (j === 2) {
//     break;
//   }
//   j++;
// } while (j < 10);

// const object = { a: 0, b: 1, c: 2, d: 3 };
// for (const key in object) {
//   console.log(object[key]); // 0, 1, 2
//   if (key === "c") {
//     break;
//   }
// }

// const array = [0, 1, 2, 4, 5];
// for (const element of array) {
//   console.log(element); // 0, 1, 2
//   if (element === 2) {
//     break;
//   }
// }
