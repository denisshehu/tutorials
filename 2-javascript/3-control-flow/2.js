let job;
job = "Software developer";
// job = "Designer";
// job = "Cloud engineer";
// job = "Sales engineer";

if (job === "Software developer") {
  console.log("Writes code.");
} else if (job === "Designer") {
  console.log("Makes user interface documents.");
} else if (job === "Cloud engineer") {
  console.log("Manages and deploys cloud resources.");
} else {
  console.log("Works directly with customers.");
}

switch (job) {
  case "Software developer":
    console.log("Writes code.");
    break;
  case "Designer":
    console.log("Makes user interface documents.");
    break;
  case "Cloud engineer":
    console.log("Manages and deploys cloud resources.");
    break;
  default:
    console.log("Works directly with customers.");
}
