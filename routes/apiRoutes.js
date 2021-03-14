const mongoose = require("mongoose");
const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkouts) => {
        console.log("dbWorkouts ", dbWorkouts);
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(503).send("There was an issue retrieving from the database");
      });
  });
  app.put("/api/workouts/:id", (req, res) => {
    console.log("req.body ", req.body);
    db.Workout.updateOne(
      { _id: req.params.id },
      { $push: { excersise: req.body } }
    ).then((dbWorkouts) => {
      res.json(dbWorkouts).catch((err) => {
        res.status(503).send("There was an issue adding to the database");
      });
    });
  });
  app.post("/api/workouts", (req, res) => {
    db.Workout.create()
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.status(503).send("There was an issue adding to to the database");
      });
  });
};
