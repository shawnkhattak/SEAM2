# Product Vision

SEAM is the Singapore Maritime Risk Intelligence Platform. Version 1 is a backend-first maritime intelligence system that uses Oceans-X as the primary source for real Singapore vessel and port activity data, then connects that data to companies, owners/managers, sanctions, news, risk flags, and AI explanations.

The first goal is not to build the prettiest map. The first goal is to build a real, reliable, explainable data system that can support a polished map and dashboard later.

## Core Product Outcome

By the end of Version 1, SEAM should let Shawn:

1. Start the whole project locally with one command.
2. Store real Oceans-X vessel data in PostgreSQL/PostGIS.
3. Manually run ingestion jobs from a dev dashboard.
4. View API source health and saved logs.
5. Search vessels by IMO number, MMSI, vessel name, or call sign.
6. View vessel details including latest position, particulars, port activity, relationships, risk flags, and AI explanation.
7. View a relationship graph connecting vessels to managers, owners, flag countries, port events, sanctions, news, and risk flags.
8. View a Singapore-centered map with real vessel dots from Oceans-X.
9. Generate AI explanations based only on facts stored in the database.
10. Explain the architecture clearly in interviews.
