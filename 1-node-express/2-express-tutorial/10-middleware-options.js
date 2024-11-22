const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./middleware-logger");
const authorize = require("./middleware-authorize");

// app.use(logger);
// app.use("/api", logger);
// app.use([logger, authorize]);
// app.use([authorize, logger]);

// express.static is a middleware!
// app.use(express.static('./public'))

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("The server is listening on port 5000.");
});
