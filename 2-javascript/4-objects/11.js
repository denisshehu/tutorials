const name = "Denis";
// console.log(typeof name); // string

const anotherName = new String("Dea");
// console.log(typeof anotherName); // object

let sentence = "A new sentence.";

const doesIncludeNew = sentence.includes("new");
console.log(doesIncludeNew);

console.log(sentence[3]); // e

const startsWithA = sentence.startsWith("A");
console.log(startsWithA);

const endsWithA = sentence.endsWith("A");
console.log(endsWithA);

let updatedSentence = sentence.replace("new", "short");
console.log(updatedSentence);

aTrimmedSentence = " A sentence. ".trim();
console.log(aTrimmedSentence);

const wordsInSentence = sentence.split(" ");
console.log(wordsInSentence);

let email = "DenisShehu1409@gmail.com";
let lowerCaseEmail = email.toLowerCase();
let upperCaseEmail = email.toUpperCase();

console.log(lowerCaseEmail);
console.log(upperCaseEmail);
