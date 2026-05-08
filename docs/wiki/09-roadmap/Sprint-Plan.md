# Sprint Plan

## Sprint 1 — Implemented Scaffold

Sprint 1 deliverables are implemented in the repository and should be considered complete after `cp .env.example .env`, `./start.sh`, the documented local URLs, and `./stop.sh` complete successfully in a Docker-enabled environment.

Implemented deliverables:

1. Clean repo setup.
2. Docker Compose with actual services `frontend`, `backend`, and `db`.
3. FastAPI health endpoint at `/api/health`.
4. PostgreSQL/PostGIS connection through the `db` Compose service.
5. Alembic migrations scaffold with the first operational tables migration.
6. Core ingestion job table.
7. Source health table.
8. Basic Vite React dev dashboard shell.

Sprint 1 technical win:

> I can start SEAM, see the dev dashboard, connect to the database, and run against the Sprint 1 operational tables.

## Best Second Sprint

The second sprint should focus on Oceans-X:

1. Build Oceans-X client.
2. Add API key config.
3. Add vessel positions snapshot ingestion.
4. Upsert vessels.
5. Upsert latest positions.
6. Show vessel counts in dev dashboard.
7. Add `/api/map/vessels`.

Best second technical win:

> I can click one button and pull real Singapore vessel positions into my database.

## Best Third Sprint

The third sprint should make the data useful:

1. Add vessel search.
2. Add vessel detail page.
3. Add particulars enrichment by IMO.
4. Store owner/manager/classification relationships.
5. Add basic relationship graph backend.
6. Add simple graph frontend.

Best third technical win:

> I can search a vessel and see its connected manager, owner, flag country, vessel type, and source evidence.
