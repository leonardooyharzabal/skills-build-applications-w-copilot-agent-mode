import ResourceTable from './ResourceTable';

export default function Leaderboard() {
  return (
    <ResourceTable
      endpoint="/api/leaderboard/"
      resource="leaderboard"
      title="Leaderboard"
      description="See how teams and athletes are progressing through the current challenge."
      columns={[
        { key: 'team', label: 'Team' },
        { key: 'points', label: 'Points' },
        { key: 'rank', label: 'Rank' },
      ]}
    />
  );
}
