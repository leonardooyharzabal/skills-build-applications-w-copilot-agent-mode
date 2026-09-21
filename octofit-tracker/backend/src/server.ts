import express from 'express';
import { Activity } from './models/activity.js';
import { Leaderboard } from './models/leaderboard.js';
import { Team } from './models/team.js';
import { User } from './models/user.js';
import { Workout } from './models/workout.js';
import { connectDatabase } from './config/database.js';

const app = express();
const port = Number(process.env.PORT ?? 8000);
const host = '0.0.0.0';
const codespaceName = process.env.CODESPACE_NAME?.trim();
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

const modelRoutes = {
  users: User,
  teams: Team,
  activities: Activity,
  leaderboard: Leaderboard,
  workouts: Workout,
} as const;

for (const [resource, model] of Object.entries(modelRoutes)) {
  const readAll = async (_request: express.Request, response: express.Response) => {
    try {
      const items = await model.find({}).lean();
      response.json(items);
    } catch (error) {
      response.status(500).json({ error: `Unable to load ${resource}`, details: String(error) });
    }
  };

  app.get(`/api/${resource}`, readAll);
  app.get(`/api/${resource}/`, readAll);
}

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' });
});

async function startServer() {
  try {
    await connectDatabase();
    app.listen(port, host, () => {
      console.log(`OctoFit API listening at ${apiBaseUrl}`);
    });
  } catch (error) {
    console.error('Failed to start API server:', error);
    process.exit(1);
  }
}

startServer();
