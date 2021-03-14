const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./models/workoutModel.js");
const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
require(`./routes/htmlRoutes.js`)(app);
require(`./routes/apiRoutes.js`)(app);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected!");
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });
  });
