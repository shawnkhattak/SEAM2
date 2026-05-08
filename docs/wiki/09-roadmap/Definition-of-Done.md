# Definition of Done

Version 1 is done when all of this works.

## Local Setup

- `./start.sh` starts frontend, backend, and database.
- `./stop.sh` stops everything.
- `.env.example` clearly shows required keys.

## Oceans-X

- Oceans-X API key is loaded from environment.
- Vessel positions snapshot ingestion works.
- Vessel particulars enrichment works for selected vessels.
- Arrivals/departures ingestion works.
- Reference data ingestion works.
- Source health is tracked.
- Logs are saved.

## Database

- Vessels, latest positions, port events, entities, relationships, risk flags, ingestion jobs/logs/source health, sanctions records, news articles, and reference data are stored.

## Frontend

- Dev dashboard works.
- Map dashboard works.
- Vessel search works.
- Vessel detail page works.
- Relationship graph works.
- AI explanation panel works.

## AI

- AI uses database fact packet.
- AI does not invent facts.
- AI explains missing data clearly.

## Portfolio

- README explains the project.
- Screenshots exist.
- Architecture diagram exists.
- Demo flow is clear.
