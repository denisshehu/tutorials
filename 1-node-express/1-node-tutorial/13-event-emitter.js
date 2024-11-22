const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Received: user ${name} with ID ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Other logic.`);
});

customEmitter.emit("response", "Denis", 1);
