# SEAM Version 1 GitHub Issue Stubs

These issue stubs are ready to copy into GitHub. They are grouped by milestone and intentionally keep acceptance criteria concrete.

## Milestone 1: Clean Project Shell

### Issue 1: Add local Docker Compose stack

**Description:** Add a local Docker Compose stack with backend, frontend, and PostgreSQL/PostGIS services.

**Tasks:**

- Add `docker-compose.yml`.
- Add backend service placeholder.
- Add frontend service placeholder.
- Add PostGIS database service.
- Wire ports through environment variables.

**Acceptance Criteria:**

- `docker compose config` succeeds.
- Database service uses a PostGIS-capable image.
- Backend and frontend services have documented ports.

### Issue 2: Add one-command start and stop scripts

**Description:** Add local developer scripts for starting and stopping SEAM.

**Tasks:**

- Add executable `start.sh`.
- Add executable `stop.sh`.
- Document both commands in README.

**Acceptance Criteria:**

- `./start.sh` runs `docker compose up --build`.
- `./stop.sh` runs `docker compose down`.

### Issue 3: Scaffold FastAPI backend with health endpoint

**Description:** Create the initial backend app and health route.

**Tasks:**

- Add `backend/pyproject.toml`.
- Add `backend/app/main.py`.
- Add `GET /api/health`.
- Add basic settings module.
- Add backend Dockerfile.

**Acceptance Criteria:**

- Backend starts in Docker.
- `GET /api/health` returns a success response.
- FastAPI docs are available at `/docs`.

### Issue 4: Scaffold Vite React frontend

**Description:** Create the initial frontend app shell.

**Tasks:**

- Add Vite React TypeScript app.
- Add frontend Dockerfile.
- Add API base URL configuration.
- Add a health status card that calls the backend.

**Acceptance Criteria:**

- Frontend starts in Docker.
- Browser can load the home page.
- Health status card handles loading, success, and error states.

### Issue 5: Add environment example and gitignore

**Description:** Add required local development environment documentation.

**Tasks:**

- Add `.env.example` with app, backend, database, Oceans-X, AI, and frontend variables.
- Add `.gitignore` for Python, Node, Docker/local files, secrets, and build output.

**Acceptance Criteria:**

- No secrets are committed.
- README explains copying `.env.example` to `.env`.

## Milestone 2: Database Foundation

### Issue 6: Add SQLAlchemy database session and Alembic

**Description:** Configure SQLAlchemy 2.0 and Alembic migrations.

**Tasks:**

- Add database session module.
- Add model base module.
- Add Alembic config.
- Add migration environment.

**Acceptance Criteria:**

- Backend can create a database session.
- Alembic can detect model metadata.

### Issue 7: Add core data models

**Description:** Implement initial SQLAlchemy models for SEAM Version 1.

**Tasks:**

- Add vessel model.
- Add vessel position model.
- Add port event model.
- Add entity model.
- Add relationship model.
- Add sanctions, news, risk flag, ingestion job/log, source health, and reference data models.

**Acceptance Criteria:**

- Models import without circular dependency errors.
- Core indexes and uniqueness constraints are represented.

### Issue 8: Add initial database migration

**Description:** Create the first Alembic migration for core tables.

**Tasks:**

- Enable PostGIS extension.
- Create all core tables.
- Add indexes.
- Add uniqueness constraints for source health and reference data.

**Acceptance Criteria:**

- Migration applies cleanly to an empty database.
- Migration rolls back cleanly where practical.

## Milestone 3: Ingestion Job Framework

### Issue 9: Implement ingestion job runner

**Description:** Add a reusable runner for tracked ingestion jobs.

**Tasks:**

- Create job with `running` status.
- Save start log.
- Execute provided async callable.
- Save counts and status.
- Handle failures and partial successes.

**Acceptance Criteria:**

- Success job records counts and finish timestamp.
- Failed job records error summary and finish timestamp.

### Issue 10: Implement source health service

**Description:** Add a service for source endpoint health updates.

**Tasks:**

- Upsert source health by source and endpoint.
- Support healthy, degraded, failed, not_configured, and never_run.
- Store last success/failure timestamps and latest error.

**Acceptance Criteria:**

- Re-running updates the same source health row.
- Failures do not create duplicate health rows.

### Issue 11: Add ingestion and source health APIs

**Description:** Expose ingestion jobs/logs and source health to the API.

**Tasks:**

- Add `GET /api/ingestion/jobs`.
- Add `GET /api/ingestion/jobs/{job_id}`.
- Add `GET /api/sources/health`.
- Add development-only test ingestion route.

**Acceptance Criteria:**

- API returns recent jobs and logs.
- Test ingestion route creates a job and log entry.

## Milestone 4: Oceans-X Client

### Issue 12: Implement Oceans-X client

**Description:** Add the centralized Oceans-X HTTP client.

**Tasks:**

- Read base URL, API key, and timeout from settings.
- Attach `apikey` header.
- Add `get_json()` method.
- Add timeout and retry handling.
- Add clear missing config errors.
- Normalize HTTP and JSON errors.

**Acceptance Criteria:**

- Missing API key fails clearly.
- 401/403, 429, 5xx, invalid JSON, and empty response paths are tested.

### Issue 13: Add mocked Oceans-X client tests

**Description:** Test the client without calling real Oceans-X.

**Tasks:**

- Mock a successful list response.
- Mock missing configuration.
- Mock auth failure.
- Mock rate limiting.
- Mock server retry behavior.
- Mock invalid JSON.

**Acceptance Criteria:**

- Tests do not require a real API key.
- Tests do not call the external network.

## Milestone 5: Vessel Positions Snapshot

### Issue 14: Implement vessel and position upserts

**Description:** Add core upsert helpers for vessel identity and latest position.

**Tasks:**

- Normalize IMO, MMSI, call sign, and vessel name.
- Upsert by IMO, then MMSI, then call sign + name, then name.
- Upsert latest position per vessel.
- Store raw payloads.

**Acceptance Criteria:**

- Upsert by IMO updates existing vessel.
- MMSI fallback works when IMO is missing.
- Latest position remains one row per vessel.

### Issue 15: Implement Oceans-X positions snapshot ingestion

**Description:** Add the first real data ingestion job.

**Tasks:**

- Call `/api/v1/vessel/positions/snapshot`.
- Validate list response.
- Parse vessel particulars and coordinates.
- Upsert vessel and latest position.
- Create country and vessel type relationships when available.
- Track created, updated, and failed counts.

**Acceptance Criteria:**

- Empty list succeeds with zero records.
- Invalid response shape fails cleanly.
- Records with missing identifiers are logged.

### Issue 16: Add map vessels API

**Description:** Add lightweight API data for the Singapore map.

**Tasks:**

- Add `GET /api/map/vessels`.
- Return vessel id, name, IMO, flag, type, coordinates, heading, speed, and risk flag boolean.
- Exclude records without displayable coordinates.

**Acceptance Criteria:**

- Response shape matches frontend map needs.
- Coordinates prefer `latitude_degrees` and `longitude_degrees`.

## Milestone 6: Dev Dashboard V1

### Issue 17: Build developer dashboard shell

**Description:** Add the first operational frontend page for monitoring SEAM.

**Tasks:**

- Add `/dev` route.
- Add stats cards.
- Add source health panel.
- Add ingestion controls.
- Add job table.
- Add logs viewer.

**Acceptance Criteria:**

- Dev dashboard displays backend health.
- Empty states are clear before data exists.
- Failed API calls show user-friendly errors.
