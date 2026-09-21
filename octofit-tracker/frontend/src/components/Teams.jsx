import ResourceTable from './ResourceTable';

export default function Teams() {
  return (
    <ResourceTable
      endpoint="/api/teams/"
      resource="teams"
      title="Teams"
      description="Explore the groups turning consistent activity into friendly competition."
      columns={[
        { key: 'members', label: 'Members' },
        { key: 'points', label: 'Points' },
        { key: 'coach', label: 'Coach' },
      ]}
    />
  );
}
