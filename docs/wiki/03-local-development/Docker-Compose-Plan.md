# Docker Compose Plan

## Version 1 Services

```text
frontend: Vite React app
backend: FastAPI app
db: PostgreSQL/PostGIS
```

## Later Services

```text
redis: for Celery/background jobs
worker: for scheduled ingestion jobs
```

Do not add Redis or Celery in Version 1 unless manual ingestion becomes painful. Manual ingestion should be enough for the early product and portfolio demo.
