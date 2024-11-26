const name = "Denis";
console.log(typeof name); // string

const anotherName = new String("Dea");
console.log(typeof anotherName); // object

let sentence = "A new sentence.";

const doesIncludeNew = sentence.includes("new");
console.log(doesIncludeNew); // true

console.log(sentence[3]); // e

const startsWithA = sentence.startsWith("A");
console.log(startsWithA); // true

const endsWithA = sentence.endsWith("A");
console.log(endsWithA); // false

let updatedSentence = sentence.replace("new", "short");
console.log(updatedSentence); // A short sentence.

aTrimmedSentence = " A sentence. ".trim();
console.log(aTrimmedSentence); // "A sentence."

const wordsInSentence = sentence.split(" ");
console.log(wordsInSentence); // [ 'A', 'new', 'sentence.' ]

let email = "DenisShehu1409@gmail.com";
let lowerCaseEmail = email.toLowerCase();
let upperCaseEmail = email.toUpperCase();

console.log(lowerCaseEmail); // denisshehu1409@gmail.com
console.log(upperCaseEmail); // DENISSHEHU1409@GMAIL.COM
