let course = {
  name: "JavaScript for beginners",
  durationInHours: 3,
  numberOfSections: 7,
};

for (const key in course) {
  console.log(course[key]); // JavaScript for beginners, 3, 7
}
