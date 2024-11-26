let course = {
  name: "JavaScript for beginners",

  start() {
    console.log(this.name);
  },
};

course.start(); // JavaScript for beginners

function startVideo() {
  console.log(this);
}

startVideo();
/* Global object:
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
*/

const anotherCourse = {
  name: "ES6 syntax",

  start: () => {
    console.log(this.name);
  },
};

// "this" inherits from the parent's scope, in this case from the global object
anotherCourse.start(); // undefined

function introduce(language) {
  console.log(`${this.name} teaches ${language}.`);
}

const instructor = { name: "Denis" };
const introduction = introduce.bind(instructor);
introduction("JavaScript"); // Denis teaches JavaScript.
