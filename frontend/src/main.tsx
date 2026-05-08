import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';

function App() {
  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">Sprint 1</p>
        <h1>SEAM Dev Dashboard</h1>
        <p>
          The local SEAM stack is running with the Vite frontend, FastAPI backend,
          and PostgreSQL/PostGIS database services.
        </p>
        <div className="links">
          <a href={`${apiBaseUrl}/docs`}>Backend API docs</a>
          <a href={`${apiBaseUrl}/api/health`}>Backend health</a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
