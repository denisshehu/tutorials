let course = {
  name: "JavaScript for beginners",
  durationInHours: 3,

  get details() {
    return `${this.name} is ${this.durationInHours} hours.`;
  },

  set details(value) {
    let words = value.split(" is ");
    this.name = words[0];
    this.durationInHours = Number(words[1].split(" ")[0]);
  },
};

console.log(course.details); // JavaScript for beginners is 3 hours.

course.details = "JavaScript Pro is 10 hours.";
console.log(course.details); // JavaScript Pro is 10 hours.
