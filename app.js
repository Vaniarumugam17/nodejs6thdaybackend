require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { URL } = require("./utils/config");
const usersRouter = require("./Controller/usersRoutes");
const urlRouter = require("./Controller/urlRoutes");
const loginRouter = require("./Controller/loginRoutes");
const redirectRouter = require("./Controller/redirectRoutes");
const logger = require("./utils/logger");
// Import necessary functions from logger module
// Update the import statement in app.js
const { log, error } = require('./utils/logger'); // Assuming logger.js is located in the 'utils' directory


// Define other functions or code that uses the log and error functions
// ...

// Define the error function for error handling
const errorFunction = (...params) => {
    console.error(...params);
};

// Your code that uses the error function
// ...


app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase")
  .then(() => {
    console.log("Connected to MongoDB");
    // Your code that runs after successful connection
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

mongoose.set("strictQuery", false);

mongoose
  .connect(URL)
  .then(() => {
    log("connected to mongoDB");
  })
  .catch((err) => {
    error(err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to URL Shortener</h1>");
});

app.use(usersRouter);
app.use(urlRouter);
app.use(loginRouter);
app.use(redirectRouter);

module.exports = app;
