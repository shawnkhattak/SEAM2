# SEAM Version 1 Gap Analysis

## Executive Summary

The repository is currently a documentation/planning baseline. No runnable backend, frontend, database configuration, migrations, or ingestion services are present yet. The Version 1 technical plan is strong and implementation-ready, but the codebase needs the full project shell before feature work can begin.

## Requested Review: Gaps and Risks

### Strengths in the Plan

- Backend-first sequencing reduces risk by proving ingestion and storage before UI polish.
- PostgreSQL/PostGIS is appropriate for structured vessel data and geospatial map queries.
- Ingestion job tracking and source health are first-class, which makes the system debuggable.
- Raw payload storage improves auditability and protects against changing source schemas.
- AI is constrained to database fact packets, which reduces hallucination risk.
- The manual-first ingestion model avoids premature Celery/Redis complexity.

### Key Gaps to Resolve Before Coding Deep Features

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
| README | Project overview and setup | Added planning README | Needs runnable setup once scaffold exists |
| Backend | FastAPI app | Not implemented | Create `backend/` scaffold |
| Frontend | Vite React TypeScript app | Not implemented | Create `frontend/` scaffold |
| Database | PostgreSQL/PostGIS | Not implemented | Add Docker service and migrations |
| Docker Compose | Local stack | Not implemented | Add `docker-compose.yml` |
| Start/stop scripts | One-command dev | Not implemented | Add `start.sh` and `stop.sh` |
| Health endpoint | `/api/health` | Not implemented | Add FastAPI route |
| Ingestion framework | Jobs/logs/source health | Not implemented | Build Sprint 3 services |
| Oceans-X client | Central client with retries/errors | Not implemented | Build Sprint 4 client |
| Vessel ingestion | Positions snapshot | Not implemented | Build Sprint 5 service |
| Dev dashboard | Ingestion controls and logs | Not implemented | Build Sprint 6 UI |
| Search/detail | Vessel workflows | Not implemented | Build Sprint 7 APIs/UI |
| Graph, sanctions, news, AI, map polish | Later Version 1 features | Not implemented | Build after backend foundation |

## Missing Work by Priority

### Priority 0: Repository Foundation

- Add `.gitignore`.
- Add `.env.example`.
- Add Docker Compose.
- Add `start.sh` and `stop.sh`.

### Priority 1: Backend Shell

- Add FastAPI project.
- Add health endpoint.
- Add settings module.
- Add structured logging.
- Add database session module.

### Priority 2: Frontend Shell

- Add Vite React TypeScript project.
- Add API client.
- Add application shell.
- Add health check call to backend.

### Priority 3: Database and Migrations

- Add SQLAlchemy models.
- Add Alembic.
- Add initial migration.
- Enable PostGIS.

### Priority 4: Ingestion Infrastructure

- Add ingestion job runner.
- Add ingestion log and source health services.
- Add job APIs.

### Priority 5: Real Data Integration

- Add Oceans-X client.
- Add vessel positions snapshot ingestion.
- Add vessel/map APIs.

## Recommended Immediate Next Step

Implement Sprint 1 only. Do not start graph, sanctions, AI, or map polish until the app can boot locally and the backend health endpoint is reachable from the frontend.
