let priceOfChocolate = 2;
let amountInCash;
amountInCash = 5;
// amountInCash = 1;

const canBuyChocolate = amountInCash >= priceOfChocolate;

if (canBuyChocolate) {
  console.log("Enjoy your chocolate!");
} else {
  console.log("Sorry! You do not have enough money.");
}

let hour;
hour = 10;
// hour = 13;
// hour = 17;

if (hour >= 6 && hour <= 12) {
  console.log("Serving breakfast.");
} else if (hour > 12 && hour <= 14) {
  console.log("Serving lunch.");
} else {
  console.log("Serving dinner.");
}

// if (hour >= 6 && hour <= 12)
//   console.log("Serving breakfast.");
// else if (hour > 12 && hour <= 14)
//   console.log("Serving lunch.");
// else
//   console.log("Serving dinner.");

// if (hour >= 6 && hour <= 12) console.log("Serving breakfast.");
// else if (hour > 12 && hour <= 14) console.log("Serving lunch.");
// else console.log("Serving dinner.");
