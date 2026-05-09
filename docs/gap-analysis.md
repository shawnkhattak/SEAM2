# SEAM Version 1 Gap Analysis

## Executive Summary

Sprint 1 is now implemented as a runnable local project shell. The repository includes Docker Compose services for the frontend, backend, and PostgreSQL/PostGIS database; one-command start/stop scripts; a FastAPI health endpoint with a database connectivity check; Alembic and SQLAlchemy scaffolding; and a Vite React dev dashboard that calls the backend health endpoint.

## Requested Review: Gaps and Risks

### Strengths in the Plan

- Backend-first sequencing reduces risk by proving ingestion and storage before UI polish.
- PostgreSQL/PostGIS is appropriate for structured vessel data and geospatial map queries.
- Ingestion job tracking and source health are first-class, which makes the system debuggable.
- Raw payload storage improves auditability and protects against changing source schemas.
- AI is constrained to database fact packets, which reduces hallucination risk.
- The manual-first ingestion model avoids premature Celery/Redis complexity.

### Key Gaps to Resolve After Sprint 1

1. **External API contract details:** Oceans-X response shapes should be captured as fixtures as soon as access is available.
2. **Port event uniqueness:** The plan defines a deterministic key, but the schema should include either a computed/source event key column or a dedicated uniqueness constraint strategy.
3. **Latest position uniqueness:** The schema should enforce one current position per vessel for Version 1.
4. **Relationship uniqueness:** Relationship upserts need a uniqueness strategy to prevent duplicate graph edges.
5. **Entity normalization rules:** Normalized names should be implemented in one shared utility to keep sanctions/news/entity matching consistent.
6. **AI audit trail:** If explanations are persisted later, store provider, prompt/fact packet version, facts used, and output timestamp.
7. **Frontend routing:** Vite React needs an explicit routing decision, likely React Router, even if not listed in the original stack.
8. **Testing database strategy:** Decide between containerized PostgreSQL tests, transactional tests against local Docker, or a reduced SQLite-only subset for unit tests.

### Technical Risks

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Oceans-X access or schema mismatch | Blocks real ingestion | Use clear `not_configured` source health, mocked fixtures, raw payload storage |
| Vessel identity ambiguity | Duplicate or over-merged vessels | Prefer IMO, fallback carefully, log weak matches |
| Graph edge duplication | Noisy relationship graph | Add relationship uniqueness/upsert strategy |
| Frontend complexity too early | Slows backend foundation | Build dev dashboard before map/graph polish |
| AI hallucination | Trust and compliance risk | Use fact packets only and show facts used |
| Database migration drift | Local setup friction | Make Alembic migration path part of Sprint 2 |

## Current Repository vs. Planned Implementation

| Area | Planned | Current Status | Gap |
| --- | --- | --- | --- |
| README | Project overview and setup | Implemented with local setup commands and URLs | Keep updated as features are added |
| Backend | FastAPI app | Implemented with settings, app factory module, and `/api/health` route | Add feature APIs in later sprints |
| Frontend | Vite React TypeScript app | Implemented with a dev dashboard and backend health status card | Expand into the Sprint 6 dashboard later |
| Database | PostgreSQL/PostGIS | Implemented as the `db` Docker Compose service | Add full domain schema in later sprints |
| Docker Compose | Local stack | Implemented with `frontend`, `backend`, and `db` services | Requires Docker in the local environment |
| Start/stop scripts | One-command dev | Implemented with `start.sh` and `stop.sh` | None for Sprint 1 |
| Health endpoint | `/api/health` | Implemented with a database connectivity check | Add richer readiness checks later if needed |
| Ingestion framework | Jobs/logs/source health | Sprint 1 operational tables are scaffolded | Build runner/services in Sprint 3 |
| Oceans-X client | Central client with retries/errors | Not implemented | Build Sprint 4 client |
| Vessel ingestion | Positions snapshot | Not implemented | Build Sprint 5 service |
| Dev dashboard | Ingestion controls and logs | Sprint 1 shell and health card implemented | Build Sprint 6 controls/tables |
| Search/detail | Vessel workflows | Not implemented | Build Sprint 7 APIs/UI |
| Graph, sanctions, news, AI, map polish | Later Version 1 features | Not implemented | Build after backend foundation |

## Missing Work by Priority

### Completed Sprint 1 Foundation

- Added `.gitignore`.
- Added `.env.example`.
- Added Docker Compose.
- Added `start.sh` and `stop.sh`.
- Added FastAPI project, settings, and health endpoint.
- Added database session scaffolding and connectivity check.
- Added Vite React TypeScript project, API client, application shell, and frontend health check call.

### Priority 3: Database Expansion

- Expand SQLAlchemy models beyond Sprint 1 operational tables.
- Add migrations for vessels, positions, port events, entities, relationships, sanctions, news, risk flags, logs, and reference data.
- Keep PostGIS enabled for geospatial vessel position work.

### Priority 4: Ingestion Infrastructure

- Add ingestion job runner.
- Add ingestion log and source health services.
- Add job APIs.

### Priority 5: Real Data Integration

- Add Oceans-X client.
- Add vessel positions snapshot ingestion.
- Add vessel/map APIs.

## Recommended Immediate Next Step

Move to the next backend foundation sprint: expand the schema and migration flow while preserving the Sprint 1 guarantee that the app boots locally and the frontend can reach the backend health endpoint. Do not start graph, sanctions, AI, or map polish until the ingestion and storage foundation is stable.
