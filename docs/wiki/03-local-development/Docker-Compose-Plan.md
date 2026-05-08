# Docker Compose Plan

## Version 1 Services

The final Docker Compose service names are:

```text
frontend: Vite React app exposed at ${FRONTEND_PORT:-5173}:5173
backend: FastAPI app exposed at ${BACKEND_PORT:-8000}:8000
db: PostgreSQL/PostGIS exposed at ${POSTGRES_PORT:-5432}:5432
```

The stack uses the `seam_network` default bridge network and the `postgres_data` named volume for PostgreSQL/PostGIS data.

## Later Services

```text
redis: for Celery/background jobs
worker: for scheduled ingestion jobs
```

Do not add Redis or Celery in Version 1 unless manual ingestion becomes painful. Manual ingestion should be enough for the early product and portfolio demo.
