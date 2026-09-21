import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    team: {
      type: String,
      required: true,
      trim: true,
    },
    fitness_level: {
      type: String,
      required: true,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.models.User || mongoose.model('User', userSchema);
