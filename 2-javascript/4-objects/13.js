let now = new Date();
console.log(now); // 2024-11-26T10:12:39.277Z

let Jan01_1970 = new Date(0);
console.log(Jan01_1970); // 1970-01-01T00:00:00.000Z

let Dec31_1969 = new Date(-24 * 60 * 60 * 1000);
console.log(Dec31_1969); // 1969-12-31T00:00:00.000Z

let date = new Date("December 25 2024 12:05");
console.log(date); // 2024-12-25T11:05:00.000Z

let Jan01_2024 = new Date(2024, 0, 1);
console.log(Jan01_2024); // 2023-12-31T23:00:00.000Z

console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 10
console.log(now.getDate()); // 26
console.log(now.getTimezoneOffset()); // -60
