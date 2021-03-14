const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Date is Required",
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
  return this.find({});
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
