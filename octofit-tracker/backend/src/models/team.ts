import mongoose, { Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    members: {
      type: Number,
      required: true,
      min: 0,
    },
    points: {
      type: Number,
      required: true,
      default: 0,
    },
    coach: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
