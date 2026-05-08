# SEAM Version 1 Roadmap

## Sprint 1: Clean Project Shell

**Goal:** Start and stop the app locally.

### Tasks

- Create backend FastAPI scaffold.
- Create frontend Vite React TypeScript scaffold.
- Add PostgreSQL/PostGIS Docker service.
- Add Docker Compose.
- Add `start.sh` and `stop.sh`.
- Add `.env.example`.
- Add backend health endpoint.
- Confirm frontend can call backend health endpoint.

### Done When

- `./start.sh` starts all services.
- `http://localhost:8000/docs` works.
- `http://localhost:5173` works.
- Backend health endpoint returns success.

## Sprint 2: Database Foundation

**Goal:** Create the core schema and migration flow.

### Tasks

- Add SQLAlchemy models.
- Add Alembic configuration.
- Enable PostGIS extension.
- Create vessels, positions, port events, entities, relationships, risk flags, ingestion jobs/logs, source health, sanctions, news, and reference data tables.
- Add basic database connectivity check.

### Done When

- Migrations run cleanly.
- Tables exist in PostgreSQL.
- Backend can query the database.

## Sprint 3: Ingestion Job Framework

**Goal:** Build tracked ingestion infrastructure before connecting real APIs.

### Tasks

- Add ingestion runner service.
- Add job logger service.
- Add source health service.
- Add job create/update helpers.
- Add log create helpers.
- Add source health upsert/update helpers.
- Add `/api/ingestion/jobs` endpoint.
- Add `/api/sources/health` endpoint.
- Add a development-only internal test ingestion job.

### Done When

- Internal test job can run and save logs.
- Source health appears in the API.

## Sprint 4: Oceans-X Client

**Goal:** Build the reusable, tested Oceans-X HTTP client.

### Tasks

- Add Oceans-X settings.
- Implement `OceansXClient`.
- Add `get_json()`.
- Add timeout support.
- Add retry support.
- Add missing configuration errors.
- Add HTTP and invalid JSON handling.
- Add mocked tests.

### Done When

- Missing API key gives a clear error.
- Mocked successful response parses correctly.
- Mocked failed response updates error handling paths.

## Sprint 5: Vessel Positions Snapshot

**Goal:** Pull the first real Oceans-X data into the database.

### Tasks

- Add positions snapshot service.
- Parse `vesselParticulars`.
- Add vessel upsert logic.
- Add latest position upsert logic.
- Add flag country relationship creation.
- Add vessel type relationship creation.
- Add ingestion route.
- Add source health/log updates.
- Add `/api/map/vessels`.

### Done When

- A manual trigger stores real vessels and latest positions.
- Map endpoint returns lightweight vessel coordinates.

## Sprint 6: Dev Dashboard V1

**Goal:** Make backend state visible in the UI.

### Tasks

- Create `/dev` page.
- Add stats cards.
- Add source health table.
- Add ingestion controls.
- Add job history table.
- Add logs viewer.
- Add recent vessels table.
- Add error and empty states.

### Done When

- Shawn can run positions snapshot from UI.
- UI shows job status, logs, source health, and record counts.

## Sprint 7: Vessel Search and Detail

**Goal:** Make vessel records inspectable.

### Tasks

- Add vessel list/search/detail endpoints.
- Add latest position endpoint.
- Add vessel search frontend.
- Add vessel detail page.
- Add raw payload toggle.

### Done When

- Search by IMO, name, MMSI, and call sign works.
- Vessel page shows particulars and latest position.

## Sprint 8: Vessel Particulars Enrichment

**Goal:** Add ownership/manager relationships when available.

### Tasks

- Add particulars by IMO service.
- Add selected vessel enrichment route.
- Parse ISM manager, ship manager, registered owner, and classification society.
- Create related entity rows and relationships.
- Add UI action to refresh particulars.
- Add relationship section to vessel page.

### Done When

- Singapore-flagged vessels can show manager/owner data when source provides it.
- Missing ownership fields show an explicit empty state.

## Sprint 9: Port Activity

**Goal:** Store arrivals, departures, and selected-vessel movements.

### Tasks

- Add due arrivals/departures jobs.
- Add past arrivals/departures jobs.
- Add selected vessel movements job.
- Store port events.
- Link vessels to port events.
- Add port event endpoints and UI table.

### Done When

- SEAM shows recent and upcoming Singapore port activity.

## Sprint 10: Reference Data

**Goal:** Normalize codes into readable labels.

### Tasks

- Add country, port, location, and vessel type sync jobs.
- Save records to `reference_data`.
- Use reference data in vessel and port displays.

### Done When

- Flag, vessel type, port, and location codes display readable labels when known.

## Later Sprints

- Relationship graph backend and frontend.
- OpenSanctions integration.
- News integration.
- AI explanations.
- Singapore map dashboard polish.
- Portfolio release assets.
