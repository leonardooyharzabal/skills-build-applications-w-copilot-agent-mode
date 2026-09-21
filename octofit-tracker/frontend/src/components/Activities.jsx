import ResourceTable from './ResourceTable';

export default function Activities() {
  return (
    <ResourceTable
      endpoint="/api/activities/"
      resource="activities"
      title="Activity log"
      description="Review recent movement and training logged by the OctoFit community."
      columns={[
        { key: 'user', label: 'User' },
        { key: 'type', label: 'Type' },
        { key: 'duration', label: 'Duration' },
        { key: 'date', label: 'Date' },
      ]}
    />
  );
}
