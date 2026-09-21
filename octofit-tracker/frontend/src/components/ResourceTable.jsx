import { useEffect, useState } from 'react';
import { fetchEndpoint } from '../api';

function getValue(item, key) {
  const value = item?.[key];
  return value === undefined || value === null || value === '' ? '—' : String(value);
}

function getTitle(item) {
  return item?.name || item?.username || item?.title || item?.type || item?._id || 'Untitled';
}

export default function ResourceTable({ endpoint, resource, title, description, columns }) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    fetchEndpoint(endpoint, controller.signal)
      .then((nextItems) => {
        setItems(nextItems);
        setStatus('ready');
      })
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message);
          setStatus('error');
        }
      });

    return () => controller.abort();
  }, [endpoint, resource]);

  return (
    <section>
      <div className="mb-4">
        <p className="text-uppercase text-primary small fw-semibold mb-1">OctoFit Tracker</p>
        <h1 className="display-6 fw-bold mb-2">{title}</h1>
        <p className="text-secondary mb-0">{description}</p>
      </div>
      {status === 'loading' && <div className="alert alert-info">Loading {resource}...</div>}
      {status === 'error' && <div className="alert alert-danger">{error}</div>}
      {status === 'ready' && items.length === 0 && (
        <div className="alert alert-secondary">No {resource} have been recorded yet.</div>
      )}
      {status === 'ready' && items.length > 0 && (
        <div className="table-responsive bg-white border rounded shadow-sm">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Name</th>
                {columns.map((column) => <th key={column.key} scope="col">{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item?._id || item?.id || `${resource}-${index}`}>
                  <th scope="row">{getTitle(item)}</th>
                  {columns.map((column) => <td key={column.key}>{getValue(item, column.key)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
