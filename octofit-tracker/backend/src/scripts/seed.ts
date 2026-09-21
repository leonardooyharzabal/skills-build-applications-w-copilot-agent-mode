import mongoose from 'mongoose';
import { User } from '../models/user.js';
import { Team } from '../models/team.js';
import { Activity } from '../models/activity.js';
import { Leaderboard } from '../models/leaderboard.js';
import { Workout } from '../models/workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await User.deleteMany({});
    await Team.deleteMany({});
    await Activity.deleteMany({});
    await Leaderboard.deleteMany({});
    await Workout.deleteMany({});

    const users = await User.insertMany([
      {
        name: 'Avery Chen',
        email: 'avery.chen@mergington.edu',
        team: 'Apex',
        fitness_level: 'Advanced',
      },
      {
        name: 'Jordan Lee',
        email: 'jordan.lee@mergington.edu',
        team: 'Summit',
        fitness_level: 'Intermediate',
      },
      {
        name: 'Priya Patel',
        email: 'priya.patel@mergington.edu',
        team: 'Velocity',
        fitness_level: 'Beginner',
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'Apex',
        members: 12,
        points: 1480,
        coach: 'Coach Rivera',
      },
      {
        name: 'Summit',
        members: 10,
        points: 1325,
        coach: 'Coach Nguyen',
      },
      {
        name: 'Velocity',
        members: 14,
        points: 1410,
        coach: 'Coach Brooks',
      },
    ]);

    await Activity.insertMany([
      {
        user: users[0].name,
        type: 'Running',
        duration: 42,
        date: '2026-09-18',
      },
      {
        user: users[1].name,
        type: 'Strength',
        duration: 35,
        date: '2026-09-17',
      },
      {
        user: users[2].name,
        type: 'Cycling',
        duration: 50,
        date: '2026-09-16',
      },
    ]);

    await Leaderboard.insertMany([
      { team: teams[0].name, points: 1480, rank: 1 },
      { team: teams[2].name, points: 1410, rank: 2 },
      { team: teams[1].name, points: 1325, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        name: 'Cardio Endurance Circuit',
        category: 'Cardio',
        difficulty: 'Intermediate',
        duration: 30,
      },
      {
        name: 'Strength Builder',
        category: 'Strength',
        difficulty: 'Advanced',
        duration: 40,
      },
      {
        name: 'Mobility Reset',
        category: 'Recovery',
        difficulty: 'Beginner',
        duration: 20,
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
