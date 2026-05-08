# Testing Plan

## Backend Tests

Minimum tests:

- Health endpoint.
- Settings load from environment.
- OceansXClient missing API key error.
- Vessel upsert by IMO.
- Vessel upsert fallback by MMSI.
- Position upsert.
- Ingestion job success.
- Ingestion job failure.
- Source health updates.
- Graph response shape.
- AI prompt uses only fact packet.

## Mocking External APIs

Use mocked HTTP responses in automated tests. Do not call the real Oceans-X API during automated tests.

## Frontend Tests

Optional for Version 1. If added:

- Test dashboard renders.
- Test API error state.
- Test vessel search empty state.
