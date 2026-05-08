# Version 1 Scope

Version 1 focuses on building a reliable data and ingestion foundation for Singapore maritime intelligence.

## In Scope

- Local-first development with Docker Compose.
- FastAPI backend.
- PostgreSQL/PostGIS database.
- SQLAlchemy and Alembic migrations.
- Manual ingestion jobs.
- Source health and ingestion logs.
- Oceans-X vessel positions snapshot ingestion.
- Oceans-X vessel particulars enrichment.
- Oceans-X arrivals, departures, movements, and reference data ingestion.
- Vessel search and detail pages.
- Entity, relationship, sanctions, news, and risk flag storage.
- Relationship graph API and frontend.
- Singapore map dashboard.
- AI explanations grounded only in database facts.

## Out of Scope for Early Version 1

- Production deployment optimization.
- Redis/Celery background workers unless manual ingestion becomes painful.
- Polished map-first UI before ingestion and database reliability.
- AI-created sanctions or compliance conclusions.
- Fake vessels or fake product risk data.
