const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Date is Required",
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required",
      },
      duration: {
        type: Number,
        required: "Duration is required",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

WorkoutSchema.statics.getAllWorkouts = function () {
  return this.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" },
      },
    },
  ]);
};

WorkoutSchema.statics.addExercise = function (newExercise, id) {
  return this.updateOne({ _id: id }, { $push: { exercises: newExercise } });
};
WorkoutSchema.statics.createWorkout = function () {
  newWorkout = this.create({}).then((dbWorkout) => {
    return dbWorkout;
  });
  return newWorkout;
};
WorkoutSchema.statics.getTotalWorkoutTime = function (id) {
  return this.aggregate([
    {
      $addFields: {
        totalWorkoutTime: { $sum: "exercises.duration" },
      },
    },
  ]);
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
