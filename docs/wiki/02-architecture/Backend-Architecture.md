# Backend Architecture

## Stack

- FastAPI for APIs.
- Python service modules for ingestion, matching, graph building, risk generation, and AI explanation.
- SQLAlchemy 2.0 for ORM models.
- Alembic for migrations.
- Pydantic for request and response schemas.

## Backend Responsibilities

- Expose health, source health, ingestion, vessel, entity, graph, sanctions, news, map, and AI endpoints.
- Centralize Oceans-X calls in one client.
- Track ingestion jobs and logs.
- Store clean normalized fields and raw source payloads.
- Build graph responses from relationship rows.
- Build AI fact packets from database facts only.

## Planned Service Areas

```text
services/
  oceans_x/
  ingestion/
  matching/
  graph/
  risk/
  ai/
```

The rest of the backend should not call `httpx.get()` directly for Oceans-X. External source behavior belongs in source-specific client modules.
