function App() {
  return (
    <main className="app-shell">
      <section className="hero-card" aria-labelledby="project-title">
        <p className="eyebrow">Sanctions & Entity Analysis for Maritime</p>
        <h1 id="project-title">SEAM</h1>
        <p className="hero-copy">
          A focused maritime intelligence workspace for connecting vessel,
          entity, sanctions, and news signals as the platform comes online.
        </p>
      </section>

      <section className="status-grid" aria-label="Application status">
        <article className="status-card">
          <div>
            <p className="card-label">Backend health</p>
            <h2>Waiting for API connection</h2>
          </div>
          <p className="status-message">
            Health status will appear here once the backend health endpoint is
            wired into the frontend.
          </p>
        </article>

        <article className="status-card status-card--accent">
          <p className="card-label">Next workspace</p>
          <a href="/dev" className="dashboard-link">
            Open future /dev dashboard
          </a>
          <p className="status-message">
            The developer dashboard will track ingestion jobs, source health,
            and operational checks.
          </p>
        </article>
      </section>
    </main>
  );
}

export default App;
