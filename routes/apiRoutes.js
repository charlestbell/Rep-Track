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
  app.put("/api/workouts/:id", async (req, res) => {
    exercise = req.body;
    id = req.params.id;
    try {
      const dbExercise = await db.Workout.addExercise(exercise, id);
      res.json(dbExercise);
    } catch (error) {
      res.status(503).send("There was an issue adding to the database");
    }
  });

  app.post("/api/workouts", async (req, res) => {
    try {
      dbWorkout = await db.Workout.createWorkout();
      res.json(dbWorkout);
    } catch (error) {
      res.status(503).send("There was an issue adding to to the database");
    }
  });
};
