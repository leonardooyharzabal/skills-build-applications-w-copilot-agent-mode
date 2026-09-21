# OctoFit Tracker frontend

The Vite development server runs on port `5173` and expects the API on port `8000`.

In GitHub Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` with the Codespace name. The frontend then calls `https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[resource]/`. When the variable is unset, it safely falls back to `http://localhost:8000`.

Run the presentation tier with:

```bash
npm install
npm run dev
```
