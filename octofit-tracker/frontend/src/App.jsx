import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const navigation = [
  ['Users', '/users'],
  ['Activities', '/activities'],
  ['Teams', '/teams'],
  ['Leaderboard', '/leaderboard'],
  ['Workouts', '/workouts'],
];

function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/users">OctoFit Tracker</NavLink>
          <div className="navbar-nav ms-auto flex-row flex-wrap gap-2">
            {navigation.map(([label, path]) => (
              <NavLink
                className={({ isActive }) => `nav-link px-2 ${isActive ? 'active fw-semibold' : ''}`}
                key={path}
                to={path}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="container py-4">
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate replace to="/users" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
