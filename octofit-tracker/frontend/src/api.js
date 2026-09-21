const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function getApiUrl(resource) {
  return `${apiBaseUrl}/api/${resource}/`;
}

export function getEndpointUrl(endpoint) {
  return `${apiBaseUrl}${endpoint}`;
}

export function getItems(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (Array.isArray(payload?.results)) {
    return payload.results;
  }

  if (Array.isArray(payload?.data)) {
    return payload.data;
  }

  return [];
}

export async function fetchItems(resource, signal) {
  const response = await fetch(getApiUrl(resource), { signal });

  if (!response.ok) {
    throw new Error(`Unable to load ${resource} (${response.status})`);
  }

  return getItems(await response.json());
}

export async function fetchEndpoint(endpoint, signal) {
  const response = await fetch(getEndpointUrl(endpoint), { signal });

  if (!response.ok) {
    throw new Error(`Unable to load ${endpoint} (${response.status})`);
  }

  return getItems(await response.json());
}
