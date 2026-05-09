import { useEffect, useMemo, useState } from 'react';

type HealthState = 'checking' | 'online' | 'offline';

function App() {
  const apiBaseUrl = useMemo(() => {
    return import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000';
  }, []);
  const healthUrl = `${apiBaseUrl.replace(/\/$/, '')}/api/health`;
  const [healthState, setHealthState] = useState<HealthState>('checking');

  useEffect(() => {
    const controller = new AbortController();

    async function checkBackendHealth() {
      try {
        const response = await fetch(healthUrl, {
          signal: controller.signal,
        });
        setHealthState(response.ok ? 'online' : 'offline');
      } catch {
        if (!controller.signal.aborted) {
          setHealthState('offline');
        }
      }
    }

    void checkBackendHealth();

    return () => controller.abort();
  }, [healthUrl]);

  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="project-title">
        <p className="eyebrow">Singapore Maritime Risk Intelligence</p>
        <h1 id="project-title">SEAM</h1>
        <p className="hero-copy">
          A focused workspace for building reliable maritime intelligence from
          configured backend services and verified source records.
        </p>
      </section>

      <section className="status-grid" aria-label="Application status">
        <article className="status-card" aria-live="polite">
          <div>
            <p className="card-label">Backend health</p>
            <h2>{healthState === 'online' ? 'API reachable' : 'API status'}</h2>
          </div>
          <div className={`health-pill health-pill--${healthState}`}>
            <span className="health-dot" aria-hidden="true" />
            {healthState === 'checking' && 'Checking health endpoint'}
            {healthState === 'online' && 'Backend health endpoint is responding'}
            {healthState === 'offline' && 'Backend health endpoint is not reachable'}
          </div>
          <p className="status-message">Health endpoint: {healthUrl}</p>
        </article>

        <article className="status-card status-card--accent">
          <p className="card-label">Next workspace</p>
          <a href="/dev" className="dashboard-link">
            Future /dev dashboard
          </a>
          <p className="status-message">
            This link is reserved for ingestion controls, source health, job
            history, and operational checks.
          </p>
        </article>
      </section>
    </main>
  );
}

export default App;
