const mongoose = require("mongoose");
const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", async (req, res) => {
    try {
      const dbWorkouts = await db.Workout.getAllWorkouts();
      res.send(dbWorkouts);
    } catch (error) {
      res.status(503).send("There was an issue retrieving from the database");
    }
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
