import { useEffect, useState } from "react";

import { API_BASE_URL } from "./api/client";
import {
  getHealth,
  HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE,
  type HealthPayload,
} from "./api/health";

type BackendStatus = "checking" | "healthy" | "unavailable";

function App() {
  const [backendStatus, setBackendStatus] = useState<BackendStatus>("checking");
  const [healthPayload, setHealthPayload] = useState<HealthPayload | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isCurrent = true;

    async function checkBackendHealth() {
      try {
        const payload = await getHealth();

        if (isCurrent) {
          setBackendStatus("healthy");
          setHealthPayload(payload);
          setErrorMessage("");
        }
      } catch (error) {
        if (isCurrent) {
          setBackendStatus("unavailable");
          setHealthPayload(null);
          setErrorMessage(
            error instanceof Error
              ? error.message
              : HEALTH_ENDPOINT_UNAVAILABLE_MESSAGE,
          );
        }
      }
    }

    void checkBackendHealth();

    return () => {
      isCurrent = false;
    };
  }, []);

  const statusLabel = {
    checking: "Checking backend health...",
    healthy: "Backend and database are healthy",
    unavailable: "Backend health check failed",
  }[backendStatus];

  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">Sprint 1</p>
        <h1>SEAM Dev Dashboard</h1>
        <p>
          The local SEAM stack runs a Vite frontend, FastAPI backend, and
          PostgreSQL/PostGIS database. This dashboard verifies that the frontend
          can reach the backend health endpoint.
        </p>

        <section className={`status-card status-card--${backendStatus}`}>
          <div>
            <p className="status-label">Health status</p>
            <h2>{statusLabel}</h2>
          </div>
          <span className="status-pill">{backendStatus}</span>
        </section>

        {healthPayload ? (
          <dl className="health-grid" aria-label="Backend health response">
            <div>
              <dt>Service</dt>
              <dd>{healthPayload.service ?? "Unknown"}</dd>
            </div>
            <div>
              <dt>Environment</dt>
              <dd>{healthPayload.environment ?? "Unknown"}</dd>
            </div>
            <div>
              <dt>API</dt>
              <dd>{healthPayload.status ?? "Unknown"}</dd>
            </div>
            <div>
              <dt>Database</dt>
              <dd>{healthPayload.database ?? "Unknown"}</dd>
            </div>
          </dl>
        ) : null}

        {backendStatus === "unavailable" ? (
          <p className="error-message">{errorMessage}</p>
        ) : null}

        <div className="links">
          <a href={`${API_BASE_URL}/docs`}>Backend API docs</a>
          <a href={`${API_BASE_URL}/api/health`}>Backend health</a>
        </div>
      </section>
    </main>
  );
}

export default App;
