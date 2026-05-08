# Sprint Plan

## Best First Sprint

The first sprint should only include:

1. Clean repo setup.
2. Docker Compose.
3. FastAPI health endpoint.
4. PostgreSQL/PostGIS connection.
5. Alembic migrations.
6. Core ingestion job tables.
7. Source health table.
8. Basic dev dashboard shell.

Best first technical win:

> I can start SEAM, see the dev dashboard, connect to the database, and run a tracked ingestion job.

## Best Second Sprint

The second sprint should focus on Oceans-X:

1. Build Oceans-X client.
2. Add API key config.
3. Add vessel positions snapshot ingestion.
4. Upsert vessels.
5. Upsert latest positions.
6. Show vessel counts in dev dashboard.
7. Add `/api/map/vessels`.

Best second technical win:

> I can click one button and pull real Singapore vessel positions into my database.

## Best Third Sprint

The third sprint should make the data useful:

1. Add vessel search.
2. Add vessel detail page.
3. Add particulars enrichment by IMO.
4. Store owner/manager/classification relationships.
5. Add basic relationship graph backend.
6. Add simple graph frontend.

Best third technical win:

> I can search a vessel and see its connected manager, owner, flag country, vessel type, and source evidence.
