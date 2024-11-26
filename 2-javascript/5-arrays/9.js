const numbers = [1, 2, 3, 4, 5];
const joinedNumbers = numbers.join(", ");
console.log(joinedNumbers); // "1, 2, 3, 4, 5"

const courseName = "JavaScript for beginners";
const words = courseName.split(" ");
console.log(words); // [ 'JavaScript', 'for', 'beginners' ]

const url = words.join("-").toLowerCase();
console.log(url); // "javascript-for-beginners"
