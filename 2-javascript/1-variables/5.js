let course = {
  name: "JavaScript for beginners", // property of course
  durationInHours: 3,
};

console.log(course);

console.log(course.name);
console.log(course["name"]);

course.name = "JavaScript fundamentals";
console.log(course);

course["name"] = "JavaScript 101";
console.log(course);

let property = "durationInHours";
console.log(course[property]);
