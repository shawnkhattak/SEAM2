# SEAM Version 1 Architecture

## Architectural Principle

SEAM Version 1 is backend-first. The ingestion layer, relational schema, source health tracking, and explainable facts should work before the frontend becomes visually sophisticated.

## Local Architecture

```text
User Browser
  ↓
React Frontend
  ↓ HTTP
FastAPI Backend
  ↓ SQL
PostgreSQL + PostGIS

FastAPI Backend
  ↓ HTTP
Oceans-X API
OpenSanctions API/Data
News/RSS Source
AI Provider
```

## Monorepo Shape

```text
SEAM/
  README.md
  .env.example
  .gitignore
  docker-compose.yml
  start.sh
  stop.sh

  backend/
    Dockerfile
    pyproject.toml
    alembic.ini
    app/
      main.py
      core/
      db/
      models/
      schemas/
      api/
      services/
      tests/
      alembic/

  frontend/
    Dockerfile
    package.json
    vite.config.ts
    tsconfig.json
    src/
      api/
      components/
      pages/
      types/
```

## Backend Components

### FastAPI API Layer

The API should expose:

- Health endpoints.
- Source health endpoints.
- Dev dashboard endpoints.
- Manual ingestion job endpoints.
- Vessel search/detail endpoints.
- Map vessel endpoint.
- Entity and graph endpoints.
- AI explanation endpoint.

### Database Layer

PostgreSQL/PostGIS stores the core system of record:

- `vessels`
- `vessel_positions`
- `port_events`
- `entities`
- `relationships`
- `sanctions_records`
- `news_articles`
- `risk_flags`
- `source_health`
- `ingestion_jobs`
- `ingestion_logs`
- `reference_data`

The database design should store normalized fields for product use and raw source payloads for auditability and debugging.

### Oceans-X Client

All Oceans-X HTTP calls should go through `backend/app/services/oceans_x/client.py`. The client is responsible for:

- Reading base URL, API key, and timeout settings.
- Sending the `apikey` header.
- Retrying transient failures.
- Raising clear configuration and HTTP errors.
- Returning parsed JSON.
- Avoiding API key leakage in logs.

### Ingestion Framework

Every ingestion run should be tracked as a first-class job:

```text
Manual dashboard/API trigger
  ↓
FastAPI route
  ↓
Ingestion runner creates ingestion_jobs row
  ↓
Source service fetches data
  ↓
Parser validates and normalizes records
  ↓
Upsert services persist records and relationships
  ↓
Source health and ingestion logs are updated
  ↓
Job summary is returned
```

Job statuses:

- `pending`
- `running`
- `success`
- `failed`
- `partial_success`

Source health statuses:

- `healthy`
- `degraded`
- `failed`
- `not_configured`
- `never_run`

## Data Identity Rules

### Vessel Identity

Vessel upserts should match in this order:

1. Valid IMO number, if non-empty and not `0`.
2. MMSI number, if non-empty.
3. Call sign + vessel name.
4. Vessel name only, with lower confidence and careful logging.

### Latest Position

Version 1 stores only the latest known position per vessel. `latitudeDegrees` and `longitudeDegrees` from Oceans-X should be preferred for map display when present. Raw `latitude` and `longitude` should still be stored for source traceability.

### Port Event Deduplication

Port events should use a deterministic key derived from:

```text
vessel_id + event_type + event_timestamp + location_from + location_to
```

## AI Explanation Boundary

AI must explain only facts provided by the backend fact packet. Prompting must require the model to:

- Avoid adding unstored facts.
- Say when information is missing.
- Separate confirmed facts from recommended next checks.
- Avoid legal conclusions.
- Avoid claiming guilt or sanctions status unless the database explicitly contains that fact.

## Implementation Sequence

The planned sequence is:

1. Project shell.
2. Database foundation.
3. Ingestion job framework.
4. Oceans-X client.
5. Vessel positions snapshot.
6. Dev dashboard.
7. Vessel search and detail.
8. Vessel particulars enrichment.
9. Port activity.
10. Reference data.
11. Relationship graph backend.
12. Relationship graph frontend.
13. OpenSanctions integration.
14. News integration.
15. AI explanations.
16. Singapore map dashboard.
17. Portfolio polish.
