# Backend API Plan

## Health

```text
GET /api/health
GET /api/sources/health
GET /api/sources/oceans-x/health
```

## Dev Dashboard

```text
GET /api/dev/stats
GET /api/dev/logs
GET /api/dev/jobs
GET /api/dev/recent-records
GET /api/dev/high-risk-entities
```

## Ingestion

```text
POST /api/ingestion/oceans-x/positions/snapshot/run
POST /api/ingestion/oceans-x/vessels/{vessel_id}/particulars/run
POST /api/ingestion/oceans-x/vessels/{vessel_id}/movements/run
POST /api/ingestion/oceans-x/arrivals/next-hours/run
POST /api/ingestion/oceans-x/departures/next-hours/run
POST /api/ingestion/oceans-x/arrivals/past-hours/run
POST /api/ingestion/oceans-x/departures/past-hours/run
POST /api/ingestion/oceans-x/reference/countries/run
POST /api/ingestion/oceans-x/reference/ports/run
POST /api/ingestion/oceans-x/reference/locations/run
POST /api/ingestion/oceans-x/reference/vessel-types/run
POST /api/ingestion/opensanctions/run
POST /api/ingestion/news/run
GET /api/ingestion/jobs
GET /api/ingestion/jobs/{job_id}
POST /api/ingestion/jobs/{job_id}/retry
```

## Vessels

```text
GET /api/vessels
GET /api/vessels/search
GET /api/vessels/{vessel_id}
GET /api/vessels/{vessel_id}/position
GET /api/vessels/{vessel_id}/port-events
GET /api/vessels/{vessel_id}/relationships
GET /api/vessels/{vessel_id}/risk-flags
GET /api/vessels/{vessel_id}/news
POST /api/vessels/{vessel_id}/refresh
```
