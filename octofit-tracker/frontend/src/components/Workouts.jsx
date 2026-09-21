import ResourceTable from './ResourceTable';

export default function Workouts() {
  return (
    <ResourceTable
      endpoint="/api/workouts/"
      resource="workouts"
      title="Workout suggestions"
      description="Find the next focused session for every fitness level."
      columns={[
        { key: 'category', label: 'Category' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'duration', label: 'Duration' },
      ]}
    />
  );
}
