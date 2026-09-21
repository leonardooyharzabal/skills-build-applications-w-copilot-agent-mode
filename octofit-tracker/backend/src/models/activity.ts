import mongoose, { Schema } from 'mongoose';

const activitySchema = new Schema(
  {
    user: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 0,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
