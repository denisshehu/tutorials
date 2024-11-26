let productColors = ["red", "green", "blue"];
console.log(productColors); // [ 'red', 'green', 'blue' ]
console.log(productColors[0]); // red

productColors[0] = 10;
console.log(productColors); // [ 10, 'green', 'blue' ]

// type of array is object
console.log(typeof productColors); // object

console.log(productColors.length); // 3
