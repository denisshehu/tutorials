let course = {
  name: "JavaScript for beginners", // property of course
  durationInHours: 3,
};

console.log(course); // { name: 'JavaScript for beginners', durationInHours: 3 }

console.log(course.name); // JavaScript for beginners
console.log(course["name"]); // JavaScript for beginners

course.name = "JavaScript fundamentals";
console.log(course); // { name: 'JavaScript fundamentals', durationInHours: 3 }

course["name"] = "JavaScript 101";
console.log(course); // { name: 'JavaScript 101', durationInHours: 3 }

let property = "durationInHours";
console.log(course[property]); // 3
