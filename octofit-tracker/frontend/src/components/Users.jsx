import ResourceTable from './ResourceTable';

export default function Users() {
  return (
    <ResourceTable
      endpoint="/api/users/"
      resource="users"
      title="Athletes"
      description="Keep an eye on the people building healthy routines at Mergington High."
      columns={[
        { key: 'email', label: 'Email' },
        { key: 'team', label: 'Team' },
        { key: 'fitness_level', label: 'Fitness level' },
      ]}
    />
  );
}
