# System Architecture

## Version 1 Local Architecture

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

## Main Backend Flow

```text
Manual button click in Dev Dashboard
  ↓
POST /api/ingestion/oceans-x/positions/snapshot/run
  ↓
FastAPI route
  ↓
Ingestion runner creates ingestion_job
  ↓
OceansXClient calls external API
  ↓
Service parses response
  ↓
Upsert vessels
  ↓
Upsert latest vessel positions
  ↓
Create/update relationships
  ↓
Update source_health
  ↓
Save ingestion_logs
  ↓
Return job summary to frontend
```
