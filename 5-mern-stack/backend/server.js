require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");

// express app
const app = express();

// middleware
app.use(express.json()); // for req
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to the database, and listening on port ${process.env.PORT}.`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
