const mongoose = require("mongoose");
const db = require("../models");

module.exports = (app) => {
  // Get all workouts
  app.get("/api/workouts", async (req, res) => {
    try {
      const dbWorkouts = await db.Workout.getAllWorkouts();
      res.send(dbWorkouts);
    } catch (error) {
      res.status(503).send("There was an issue retrieving from the database");
    }
  });
  // Get last 7 days of workouts
  app.get("/api/workouts/range", async (req, res) => {
    try {
      const dbWorkouts = await db.Workout.getLastSevenDays();
      res.send(dbWorkouts);
    } catch (error) {
      res.status(503).send("There was an issue retrieving from the database");
    }
  });
  // Add an exercise to a workout
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
  // Create a new workout
  app.post("/api/workouts", async (req, res) => {
    try {
      dbWorkout = await db.Workout.createWorkout();
      res.json(dbWorkout);
    } catch (error) {
      res.status(503).send("There was an issue adding to to the database");
    }
  });
};
