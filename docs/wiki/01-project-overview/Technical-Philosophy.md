# Technical Philosophy

SEAM should be simple to run, simple to understand, backend-first, real-data-only, debuggable, extensible, and explainable.

## Principles

- **Simple to run:** one command for local development.
- **Simple to understand:** separate files when organization improves clarity, but avoid unnecessary complexity.
- **Backend-first:** database and ingestion should work before the frontend gets fancy.
- **Real-data only:** no fake vessels or fake risk data in the product experience.
- **Debuggable:** every ingestion job should save logs and source health.
- **Extensible:** future sources, scheduled jobs, authentication, and deployment should be easy to add later.
- **Explainable:** AI should explain database facts, not invent information.
