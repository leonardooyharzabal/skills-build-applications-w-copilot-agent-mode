import mongoose, { Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    difficulty: {
      type: String,
      required: true,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
    },
    duration: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
