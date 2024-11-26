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

try {
  course.details = 5;
} catch (e) {
  console.log(`Caught an error: ${e.message}`); // Caught an error: value.split is not a function
}
