# SEAM

**SEAM** is the Singapore Maritime Risk Intelligence Platform: a backend-first maritime intelligence system designed to ingest real Oceans-X vessel and Singapore port activity data, store it in PostgreSQL/PostGIS, connect vessels to owners/managers, sanctions, news, and risk flags, and generate AI explanations from database facts only.

## Version 1 Goal

Version 1 prioritizes a reliable, explainable data platform over a polished map-first interface. The core product loop is:

1. Start the local stack with one command.
2. Run tracked ingestion jobs from a developer dashboard.
3. Store real Oceans-X vessel, position, port activity, relationship, sanctions, and news data.
4. Search vessels by IMO, MMSI, call sign, or vessel name.
5. Inspect vessel details, latest position, relationships, risk flags, and source evidence.
6. Generate AI explanations constrained to facts already stored in the database.
7. Visualize Singapore-centered vessel positions and relationship graphs once the backend foundation is stable.

## Planned Tech Stack

| Layer | Choice | Purpose |
| --- | --- | --- |
| Backend | FastAPI + Python | API, ingestion services, AI orchestration |
| Database | PostgreSQL + PostGIS | Structured maritime data and geospatial vessel positions |
| ORM/Migrations | SQLAlchemy 2.0 + Alembic | Relational modeling and schema evolution |
| Frontend | Vite + React + TypeScript | Dashboard, map, vessel detail, graph views |
| UI/Data | Tailwind CSS, shadcn/ui, TanStack Query | Professional dashboard UI and API state management |
| Graph UI | React Flow | Relationship graph visualization |
| Map | MapLibre GL JS | Singapore-centered vessel map |
| DevOps | Docker Compose, `start.sh`, `stop.sh` | Local-first one-command development |
| AI | Provider abstraction for OpenAI, Anthropic, local models | Fact-grounded explanations |

## Planned Local Development

The intended developer experience is:

```bash
./start.sh
```

This should start:

- `frontend`: Vite React app
- `backend`: FastAPI app
- `db`: PostgreSQL/PostGIS

And:

```bash
./stop.sh
```

should stop the local stack.

## Environment Variables

The planned `.env.example` should include:

```bash
# App
APP_ENV=development
APP_NAME=SEAM
LOG_LEVEL=INFO

# Backend
BACKEND_PORT=8000
FRONTEND_PORT=5173

# Database
POSTGRES_USER=seam
POSTGRES_PASSWORD=seam
POSTGRES_DB=seam
POSTGRES_HOST=db
POSTGRES_PORT=5432
DATABASE_URL=postgresql+psycopg://seam:seam@db:5432/seam

# Oceans-X
OCEANS_X_BASE_URL=https://YOUR_OCEANS_X_DOMAIN
OCEANS_X_API_KEY=your_oceans_x_api_key
OCEANS_X_TIMEOUT_SECONDS=30

# AI Providers
AI_PROVIDER=openai
OPENAI_API_KEY=
ANTHROPIC_API_KEY=

# Frontend
VITE_API_BASE_URL=http://localhost:8000
```

## Documentation

This repository currently contains the planning and implementation-tracking documents for SEAM Version 1:

- [Architecture](docs/architecture.md)
- [Roadmap](docs/roadmap.md)
- [Gap Analysis](docs/gap-analysis.md)
- [GitHub Issue Stubs](docs/github-issues.md)

## Current Repository Status

This repository is at the documentation/planning baseline. The implementation has not been scaffolded yet. The immediate next engineering milestone is the clean project shell: Docker Compose, FastAPI health endpoint, Vite frontend shell, PostgreSQL/PostGIS service, and one-command start/stop scripts.

## Version 1 Definition of Done

SEAM Version 1 is complete when:

- `./start.sh` starts the frontend, backend, and database.
- `./stop.sh` stops the local stack.
- Oceans-X configuration is loaded from environment variables.
- Vessel positions snapshot ingestion stores real vessels and latest positions.
- Vessel particulars enrichment stores owner/manager/classification relationships when available.
- Arrivals/departures/reference data ingestion jobs run manually and save logs.
- Source health and ingestion logs are visible through the API and dev dashboard.
- Vessel search, detail pages, Singapore map, relationship graph, and AI explanations work from stored facts.
- README and portfolio materials explain the architecture, setup, limitations, and roadmap.
