function writeCode(language = "JavaScript") {
  console.log(`Write code in ${language}.`);
}

writeCode("JavaScript"); // Write code in JavaScript.
writeCode("C#"); // Write code in C#.

writeCode(); // Write code in JavaScript.
// if writeCode(language) => "Write code in undefined."

function codeDetails(language = "JavaScript", tool = "VS Code") {
  console.log(`Writing code in ${language} using ${tool}.`);
}

codeDetails(); // Writing code in JavaScript using VS Code.
codeDetails("Python"); // Writing code in Python using VS Code.
codeDetails("C#", "Visual Studio"); // Writing code in C# using Visual Studio.

function createUser(name, role = "Guest", status = "Active") {
  console.log(`User: ${name}, Role: ${role}, Status: ${status}.`);
}

createUser("Denis"); // User: Denis, Role: Guest, Status: Active.
createUser("Dea", "Admin", "Active"); // User: Dea, Role: Admin, Status: Active.
