# SEAM Wiki

Welcome to the SEAM GitHub Wiki source. SEAM is the Singapore Maritime Risk Intelligence Platform: a backend-first system for ingesting real Oceans-X vessel and Singapore port activity data, storing it in PostgreSQL/PostGIS, connecting that data to entities, sanctions, news, risk flags, and AI explanations, and later presenting it through a polished dashboard, map, and relationship graph.

## Wiki Navigation

### 01. Project Overview

- [Product Vision](01-project-overview/Product-Vision)
- [Version 1 Scope](01-project-overview/Version-1-Scope)
- [Technical Philosophy](01-project-overview/Technical-Philosophy)

### 02. Architecture

- [System Architecture](02-architecture/System-Architecture)
- [Backend Architecture](02-architecture/Backend-Architecture)
- [Monorepo Structure](02-architecture/Monorepo-Structure)

### 03. Local Development

- [Local Setup](03-local-development/Local-Setup)
- [Environment Variables](03-local-development/Environment-Variables)
- [Docker Compose Plan](03-local-development/Docker-Compose-Plan)

### 04. Data Model

- [Database Design Rules](04-data-model/Database-Design-Rules)
- [Core Tables](04-data-model/Core-Tables)
- [Identity and Upsert Rules](04-data-model/Identity-and-Upsert-Rules)

### 05. Ingestion

- [Ingestion Job Framework](05-ingestion/Ingestion-Job-Framework)
- [Oceans-X Client](05-ingestion/Oceans-X-Client)
- [Oceans-X Jobs](05-ingestion/Oceans-X-Jobs)
- [Sanctions and News Ingestion](05-ingestion/Sanctions-and-News-Ingestion)

### 06. API

- [Backend API Plan](06-api/Backend-API-Plan)
- [Map and Graph APIs](06-api/Map-and-Graph-APIs)

### 07. Frontend

- [Frontend Pages](07-frontend/Frontend-Pages)
- [UI Layout Direction](07-frontend/UI-Layout-Direction)

### 08. AI and Risk

- [AI Explanation Plan](08-ai-risk/AI-Explanation-Plan)
- [Risk Flags](08-ai-risk/Risk-Flags)

### 09. Roadmap

- [Build Order](09-roadmap/Build-Order)
- [Sprint Plan](09-roadmap/Sprint-Plan)
- [Definition of Done](09-roadmap/Definition-of-Done)

### 10. Operations

- [Known Risks](10-operations/Known-Risks)
- [Testing Plan](10-operations/Testing-Plan)
- [Deployment Later](10-operations/Deployment-Later)

## Publishing This Wiki

The source files for the GitHub Wiki live in `docs/wiki/`. The workflow in `.github/workflows/sync-wiki.yml` syncs those files to the repository wiki after changes are pushed to the default branch.

For manual publishing from a local checkout, run:

```bash
./scripts/publish_wiki.sh git@github.com:OWNER/REPO.wiki.git
```
