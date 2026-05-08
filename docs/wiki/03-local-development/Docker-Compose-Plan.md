# Docker Compose Plan

## Version 1 Services

The Sprint 1 Docker Compose stack uses these actual service names:

```text
frontend: Vite React dev dashboard served on http://localhost:5173
backend: FastAPI app served on http://localhost:8000
db: PostgreSQL/PostGIS database served on localhost:5432
```

## Service Responsibilities

- `frontend` builds `./frontend` and runs the Vite React dev server.
- `backend` builds `./backend`, exposes the FastAPI application, and serves `/docs` plus `/api/health`.
- `db` runs the `postgis/postgis:16-3.4` image and stores local data in the `seam_db_data` Docker volume.

## Later Services

```text
redis: for Celery/background jobs
worker: for scheduled ingestion jobs
```

Do not add Redis or Celery in Version 1 unless manual ingestion becomes painful. Manual ingestion should be enough for the early product and portfolio demo.
