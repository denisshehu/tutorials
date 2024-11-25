let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 60 * 60 * 1000);
console.log(Dec31_1969);

let date = new Date("December 25 2024 12:05");
console.log(date);

let Jan01_2024 = new Date(2024, 0, 1);
console.log(Jan01_2024);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getTimezoneOffset());
